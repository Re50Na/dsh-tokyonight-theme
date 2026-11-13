/** Host entry: settings persistence and pre-paint palette injection.
 * There is no update-check route or registry lookup.
 */
import type { Context } from '@deepseek-ai/cordis'
// Type-only: pulls the settings service's Context merge (ctx.settings).
import type {} from '@deepseek-ai/dsh-settings'
import { bootPaletteRows, type BootPaletteConfig, type BootPaletteRow } from './boot-palette.ts'
import { migrateLegacyStateOnce, scheduleLegacyMigration, type SettingsLike } from './migrate-legacy.ts'
import { TOKYONIGHT_SETTINGS_BASE, TokyoNightSettingsSchema } from './settings-tokyonight.ts'
import { TOKYONIGHT_ENTRY_ID, TOKYONIGHT_SETTINGS_NS, hasUserLayerSection } from './state.ts'

/** Stable cordis plugin name (matches cordis.patch.yml insert id). */
export const name = 'dsh-tokyonight'

/**
 * The host webserver's index-injection table (issue #30 补充).
 *
 * Declared structurally, like `WebServerLike`: `@deepseek-ai/dsh-host-webserver`
 * is NOT a dependency of this plugin (the event is emitted by the host), and
 * this is the only event consumed here. The shape matches the installed host
 * package's `IndexInjection`; a host that does not emit the event simply never
 * calls the listener (boot rows absent, i.e. the pre-0.6.6 behaviour).
 */
declare module '@deepseek-ai/cordis' {
  interface Events {
    'webserver/index-inject'(table: BootPaletteRow[]): void
  }
}

/**
 * Hard dependencies: the update check is a webServer route, so this Host
 * half is not activated until the webServer service is live. Declaring
 * inject (not a one-shot `ctx.get` probe) makes route registration
 * deterministic: Cordis reactivates the plugin once the service appears, no
 * matter the mount order.
 */
export const inject = ['webServer']

/**
 * The plugin's volatile configuration form (DSH >= 0.1.7-alpha.1) — the
 * namespace the Client addresses by `TOKYONIGHT_ENTRY_ID`.
 *
 * Re-exported here because the Loader reads `Config` off the plugin module;
 * on a legacy host the guarded `.volatile()` calls inside it are no-ops, so
 * the entry exposes no form there and the `installSection` wiring below keeps
 * doing the persisting.
 */
export { Config } from './settings-tokyonight.ts'

/**
 * The LEGACY settings service (DSH <= 0.1.6-alpha.2): it registers plugin
 * namespaces. Declared as a local structural type on purpose — 0.1.7 removed
 * the method from the published types, and this shape is all this branch
 * touches, so the cross-version code stays honest instead of reaching for
 * `any`.
 */
interface LegacySettings extends SettingsLike {
  installSection?: (
    owner: Context,
    ns: string,
    schema: unknown,
    base: unknown,
    hooks: { setSource: () => void, onChange: () => void },
  ) => void
}

/** The NEW settings service's extra surface (DSH >= 0.1.7-alpha.1). */
interface ModernSettings extends SettingsLike {
  /** Own this plugin instance's automatic-page policy (`auto` defaults true).
   *  Absent on the legacy seam, hence the feature detection. */
  configure?: (presentation: { auto?: boolean }, owner?: unknown) => unknown
}

/** The legacy document describes "no user layer" as an ABSENT field (it maps
 *  over the namespaces it has a section for), so presence is the whole test —
 *  the same predicate 0.5.x used. */
function legacyUserLayer(user: unknown): boolean {
  return user !== undefined
}

/** Host plugin body: wire whichever
 *  settings seam the running host offers (webServer is inject; settings is
 *  optional wiring). */
export function apply(ctx: Context, config?: BootPaletteConfig): void {
  // Pre-paint palette (issue #30 补充, 2026-10-27): the index HTML ships the
  // persisted flavour's own token table, so the first frame is TokyoNight
  // instead of the official dark the theme bootstrap paints. The listener reads
  // the durable value on every render, so a page load always reflects the
  // document as it stands then.
  //
  // `config` is the Loader-validated plugin config; on DSH >= 0.1.7 its fields
  // are volatile refs, which is the only shape `bootPaletteRows` accepts (see
  // its module header for why a plain value must NOT be painted).
  ctx.on('webserver/index-inject', (table) => {
    table.push(...bootPaletteRows(config))
  })

  ctx.inject(['settings'], (sctx) => {
    const settings = sctx.settings as unknown as LegacySettings & ModernSettings
    if (typeof settings.installSection === 'function') {
      // Legacy seam. Registering and migrating inline reproduces 0.5.x
      // behaviour exactly: the namespace is ours, so it is addressable the
      // moment `installSection` returns, and the write stays unfenced.
      settings.installSection(
        sctx,
        TOKYONIGHT_SETTINGS_NS,
        TokyoNightSettingsSchema,
        TOKYONIGHT_SETTINGS_BASE,
        {
          // Host half never consumes the resolved value itself — the Client
          // renders and edits it through its own bound scope — so the source
          // sink and change hook are intentionally empty (the wiring still
          // needs them to keep the registration fiber-scoped).
          setSource() {},
          onChange() {},
        },
      )
      void migrateLegacyStateOnce(settings, TOKYONIGHT_SETTINGS_NS, legacyUserLayer)
        .catch((error: unknown) => {
          console.warn(`[dsh-tokyonight] legacy state migration failed: ${String(error)}`)
        })
      return
    }

    // New seam. Nothing to register: the exported `Config` IS the namespace,
    // and its volatile fields are what the settings service projects into the
    // form the Client reads. Suppress the schema-generated page — this plugin
    // ships its own settings rows.
    //
    // The disposer is OWNED here (issue #23 audit): upstream documents
    // "register it with the calling plugin's effects" and throws `Settings
    // presentation is already configured for this plugin instance` when the
    // same owner configures twice. Dropping the disposer pinned the policy to
    // the top-level fiber forever, so the next activation of this child
    // (host fiber restart / HMR / service reload) would re-run `configure`,
    // fail the child, and skip the migration wiring below it.
    const releasePresentation = settings.configure?.({ auto: false }, ctx.fiber)
    // The entry is not addressable until its own fiber is ACTIVE, so the
    // migration is deferred and retried rather than run inline (a synchronous
    // `describe()` here cannot see us yet — see `src/migrate-legacy.ts`).
    scheduleLegacyMigration(ctx, settings, TOKYONIGHT_ENTRY_ID, hasUserLayerSection)
    // Child-fiber cleanup: release the presentation policy with this child.
    return () => {
      if (typeof releasePresentation === 'function') (releasePresentation as () => void)()
    }
  })
}
