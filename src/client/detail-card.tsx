/**
 * Plugins-page card — the settings section in the middle of this plugin's own
 * detail page in the Plugin manager (the block ABOVE "包含的组件").
 *
 * Why this file exists (evidence, 2026-10-03, official shell 0.2.0-rc.2): the
 * bundle detail page renders
 * `renderSlot('plugins.bundle.config', { view: 'page' }, { entryKey: pkg.name })`
 * (`dsh-client-ui-plugin-manager`), and that `[data-plugin-config]` section
 * exists ONLY when a plugin registers into it. The page's config ledger reads
 * `ctx.slots.entries('plugins.bundle.config')`, so an unregistered slot leaves
 * the page with no settings area at all — which is what this plugin showed
 * before this card. Two upstream references do the same thing:
 *  - official `ui-settings-agent-loop` / `ui-settings-shell` register
 *    `plugins.item` (the official-plugin card) with `id` / `order` / `label`;
 *  - community `dsh-context` (0.60.0) registers THIS slot with
 *    `key = its package name` — the shape the screenshot showed.
 * Both wrap the registration in `configForms.whileServed([ns], …)`, which is
 * also why this card appears/disappears with the namespace instead of leaving
 * an empty section behind.
 *
 * `autoGenerate` is NOT the switch here: it is only reported to clients (the
 * host's `describe()` does not filter on it and the page's `formFor()` only
 * looks the namespace up), and registering the slot above is what makes the
 * section render. The Host half keeps `configure({ auto: false })` because
 * this plugin genuinely ships its own UI.
 *
 * Not a second implementation: the card renders the SAME four rows the
 * General section shows and is handed the same injected faces, so both homes
 * read and write the one durable section (`TOKYONIGHT_ENTRY_ID`). The only
 * cost of the second home is that the rows exist twice in the DOM when
 * both are open — each instance subscribes for itself, so no state is shared
 * behind the framework's back (the feedback row has no state at all).
 */
import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import { TokyoNightRow, type TokyoNightRowInjected } from './TokyoNightRow.tsx'
import { GlassRow, type GlassRowInjected } from './glass/glass-row.tsx'
import { LinksRow } from './LinksRow.tsx'
import rowCss from './settings-row.module.css'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface SlotMap {
    /**
     * One settings page on a BUNDLE's detail page in the Plugin manager,
     * keyed by the bundle's PACKAGE NAME (`{ entryKey: pkg.name }`) — for this
     * plugin `dsh-tokyonight-theme`, NOT the profile entry id the
     * namespace is keyed by (`TOKYONIGHT_ENTRY_ID`). The section renders only
     * while an entry is registered; `slots.inject` waits for this declaration,
     * so a host without the Plugin manager simply never fires.
     *
     * Declared here because this repo's devDependency (`dsh-client-ui-settings`
     * at the 0.1.7 line) predates the Plugin manager while the RUNNING host
     * (0.2.0-rc.2) has it. A future devDependency bump that carries this member
     * merges with this one and must then be reconciled (identical duplicates
     * merge silently; a different shape is a compile error — that error is the
     * signal to delete this declaration).
     */
    'plugins.bundle.config': {
      kind: 'keyed'
      scope: 'root'
    }
  }
}

/** Injected business face of the card: the three rows' own faces, unchanged. */
export interface TokyoNightDetailCardInjected {
  /** TokyoNight flavour row (registered themes + pick). */
  flavor: TokyoNightRowInjected
  /** Glass-layer row (enable flag + knobs). */
  glass: GlassRowInjected
}

/** Full component props: runtime share + locale seat + injected face. */
export type TokyoNightDetailCardProps =
  PropsRuntime<'plugins.bundle.config'> & PropsLocale<'tokyonight'> & TokyoNightDetailCardInjected

/**
 * Render the four preference rows on the plugin's own detail page.
 *
 * The rows carry their own title, help affordance and spacing (a bottom
 * border each), so the card is a plain column — the page owns the section
 * chrome (`[data-plugin-config]`).
 * @param props - the injected faces plus the framework seats.
 * @returns the stacked rows.
 */
export function TokyoNightDetailCard(props: TokyoNightDetailCardProps): React.JSX.Element {
  return (
    <div className={rowCss.stack} data-tokyonight-detail-card>
      <TokyoNightRow {...props.flavor} t={props.t} />
      <GlassRow {...props.glass} t={props.t} />
      <LinksRow t={props.t} />
    </div>
  )
}
