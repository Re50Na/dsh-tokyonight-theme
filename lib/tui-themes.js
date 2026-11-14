import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";
import { fileURLToPath } from "node:url";
//#region src/tui-themes.ts
/**
* TUI theme-sync half of the TokyoNight theme plugin.
*
* dsh-TUI has no theme registration API — custom themes are only ever read
* from `~/.dsh-tui/themes/<name>.json` (dsh-TUI src/customTheme.ts, DATA_DIR
* is fixed to `~/.dsh-tui` with no env override). So the "install-command"
* experience for the TUI surface is this tiny Cordis plugin: it ships as a
* second bundle row (`dsh-tokyonight-theme/tui-themes`, no inject,
* activates in every profile) and idempotently copies the three TokyoNight
* theme JSONs from this package into the TUI data dir on activation:
*
*   - installed into a dsh-tui profile: themes land on first TUI start —
*     `dsh plugin --profile dsh-tui add dsh-tokyonight-theme` is the
*     whole install;
*   - installed into a web/desktop profile of a user who also runs dsh-TUI:
*     themes stay in sync on every web start, no second install needed;
*   - no `~/.dsh-tui` on disk (web-only user, headless): strict no-op — the
*     directory is never created by this plugin.
*
* The `tokyonight-*.json` namespace is plugin-owned but user-visible:
* syncing a DRIFTED owned file backs it up to `<name>.json.bak` before
* writing the shipped copy (item R — the user's customization is never
* silently swallowed), `preserve` leaves it alone, `overwrite` restores the
* historical force-sync behavior; other files in the themes directory are
* never touched. Community/third-party themes (item T) live in the
* `tokyonight-community/` subdirectory and are synced write-if-missing —
* existing themes are never overwritten.
*
* Best-effort by contract: any failure is swallowed silently — theme sync
* must never drag down profile startup (stdout stays quiet during TUI
* sessions, so no logging here either).
*/
/** Stable cordis plugin name (matches the cordis.patch.yml row id). */
const name = "dsh-tokyonight-tui-themes";
/** File name shape this plugin owns and syncs. */
function isOwnedTheme(file) {
	return file.startsWith("tokyonight-") && file.endsWith(".json");
}
/**
* Idempotently copy every `tokyonight-*.json` from `bundledDir` into
* `<tuiHome>/themes/`, then (with a `communityDir`) any missing community
* JSON. Owned files are compared against the shipped copy and synced on
* drift according to `onConflict`; nothing outside the owned namespace is
* touched; community themes are write-if-missing only. Returns the files
* written (or, under `dryRun`, the files that WOULD be written) — empty =
* already in sync, or `tuiHome` absent (the sync no-ops unless the user
* actually has a dsh-TUI data dir). Pure fs, no logging, never throws out
* of the caller's try-wrap.
*/
function syncTuiThemes(bundledDir, tuiHome, options = {}) {
	if (!existsSync(tuiHome) || !statSync(tuiHome).isDirectory()) return [];
	const { onConflict = "backup", dryRun = false, communityDir } = options;
	const written = [];
	let targetReady = false;
	const ensureTarget = () => {
		if (!targetReady) {
			mkdirSync(join(tuiHome, "themes"), { recursive: true });
			targetReady = true;
		}
	};
	for (const file of readdirSync(bundledDir).sort()) {
		if (!isOwnedTheme(file)) continue;
		const source = readFileSync(join(bundledDir, file));
		const dest = join(tuiHome, "themes", file);
		let identical = false;
		try {
			identical = readFileSync(dest).equals(source);
		} catch {
			identical = false;
		}
		if (identical) continue;
		if (onConflict === "preserve" && existsSync(dest)) continue;
		if (!dryRun) {
			ensureTarget();
			if (onConflict === "backup" && existsSync(dest) && statSync(dest).isFile()) copyFileSync(dest, `${dest}.bak`);
			writeFileSync(dest, source);
		}
		written.push(file);
	}
	if (communityDir !== void 0 && existsSync(communityDir) && statSync(communityDir).isDirectory()) for (const file of readdirSync(communityDir).sort()) {
		if (!file.endsWith(".json")) continue;
		const dest = join(tuiHome, "themes", file);
		if (existsSync(dest)) continue;
		if (!dryRun) {
			ensureTarget();
			writeFileSync(dest, readFileSync(join(communityDir, file)));
		}
		written.push(file);
	}
	return written;
}
/** Cordis entry: sync once at activation. No inject — must activate in any
*  profile (dsh-tui has no webServer; the main half waits there instead). */
function apply() {
	try {
		const bundledDir = fileURLToPath(new URL("../themes", import.meta.url));
		const tuiHome = join(homedir(), ".dsh-tui");
		syncTuiThemes(bundledDir, tuiHome, { communityDir: join(tuiHome, "themes", "tokyonight-community") });
	} catch {}
}
//#endregion
export { apply, name, syncTuiThemes };

//# sourceMappingURL=tui-themes.js.map