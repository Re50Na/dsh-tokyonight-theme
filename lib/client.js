window.__ModuleLoader__.load({
	id: "dsh-tokyonight-theme",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region \0dsh-css:/home/Resona/Repos/dsh-tokyonight-theme/src/client/TokyoNightRow.module.css.mjs
		const css$3 = ".j3hF-G_cubes{flex-wrap:wrap;gap:8px;display:flex}.j3hF-G_cube{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l4);border-radius:var(--dsw-radius-xl);color:var(--dsw-alias-label-primary);font:inherit;text-align:left;cursor:pointer;background:0 0;flex-direction:column;flex:118px;justify-content:center;align-items:flex-start;gap:2px;padding:12px 14px;font-size:13px;line-height:20px;display:flex}.j3hF-G_cube:hover:not(.j3hF-G_selected){background:var(--dsw-alias-interactive-bg-hover)}.j3hF-G_cube:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}.j3hF-G_selected{background:var(--dsw-alias-bg-module-platform);border-color:var(--dsw-static-neutral-bluish-400)}.j3hF-G_cubeHead{align-items:center;gap:6px;display:inline-flex}.j3hF-G_swatch{border-radius:3px;flex:none;width:12px;height:12px}.j3hF-G_subtitle{color:var(--dsw-alias-label-tertiary);font-size:10px;line-height:14px}.j3hF-G_followRow{flex-direction:column;gap:6px;display:flex}.j3hF-G_followHead{align-items:center;gap:10px;display:flex}.j3hF-G_followLabel{color:var(--dsw-alias-label-primary);font-size:13px;line-height:20px}.j3hF-G_previewLabel{color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}.j3hF-G_codePreview{flex-direction:column;gap:6px;margin-top:2px;display:flex}.j3hF-G_codeSample{border:.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-markdown-code-block,var(--dsw-alias-bg-layer-2));color:var(--shiki-foreground,var(--dsw-alias-label-primary));white-space:pre;margin:0;padding:8px 10px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px;line-height:18px;overflow:auto}.j3hF-G_tokKeyword{color:var(--shiki-token-keyword,var(--dsw-static-blue-500))}.j3hF-G_tokFunction{color:var(--shiki-token-function,var(--dsw-static-amber-500))}.j3hF-G_tokParameter{color:var(--shiki-token-parameter,var(--dsw-alias-label-primary))}.j3hF-G_tokString{color:var(--shiki-token-string,var(--dsw-static-green-500))}.j3hF-G_tokPunct{color:var(--shiki-token-punctuation,var(--dsw-alias-label-secondary))}.j3hF-G_tokComment{color:var(--shiki-token-comment,var(--dsw-alias-label-tertiary))}.j3hF-G_overrides{flex-direction:column;gap:6px;display:flex}.j3hF-G_overrideRow{flex-wrap:wrap;align-items:center;gap:6px;display:flex}.j3hF-G_overrideInput{border:.5px solid var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-sm);height:28px;color:var(--dsw-alias-label-primary);font:inherit;background:0 0;flex:200px;padding:0 8px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px}.j3hF-G_overrideInput:focus-visible{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-business-primary) 35%, transparent);outline:none}.j3hF-G_overrideValue{flex:140px}.j3hF-G_hint{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.j3hF-G_selfStart{align-self:flex-start}";
		const tagId$3 = "dsh-tokyonight-theme/TokyoNightRow.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$3) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-tokyonight-theme";
			tag.dataset.pluginCss = tagId$3;
			tag.textContent = css$3;
			document.head.appendChild(tag);
		}
		var TokyoNightRow_module_css_default = {
			"codePreview": "j3hF-G_codePreview",
			"codeSample": "j3hF-G_codeSample",
			"cube": "j3hF-G_cube",
			"cubeHead": "j3hF-G_cubeHead",
			"cubes": "j3hF-G_cubes",
			"followHead": "j3hF-G_followHead",
			"followLabel": "j3hF-G_followLabel",
			"followRow": "j3hF-G_followRow",
			"hint": "j3hF-G_hint",
			"overrideInput": "j3hF-G_overrideInput",
			"overrideRow": "j3hF-G_overrideRow",
			"overrideValue": "j3hF-G_overrideValue",
			"overrides": "j3hF-G_overrides",
			"previewLabel": "j3hF-G_previewLabel",
			"selected": "j3hF-G_selected",
			"selfStart": "j3hF-G_selfStart",
			"subtitle": "j3hF-G_subtitle",
			"swatch": "j3hF-G_swatch",
			"tokComment": "j3hF-G_tokComment",
			"tokFunction": "j3hF-G_tokFunction",
			"tokKeyword": "j3hF-G_tokKeyword",
			"tokParameter": "j3hF-G_tokParameter",
			"tokPunct": "j3hF-G_tokPunct",
			"tokString": "j3hF-G_tokString"
		};
		//#endregion
		//#region \0dsh-css:/home/Resona/Repos/dsh-tokyonight-theme/src/client/settings-row.module.css.mjs
		const css$2 = ".yreWoa_row{border-bottom:.5px solid var(--dsw-alias-border-l2);flex-direction:column;gap:10px;padding:16px 0;display:flex}.yreWoa_stack{flex-direction:column;width:100%;display:flex}.yreWoa_stack>:last-child{border-bottom:none}.yreWoa_title{color:var(--dsw-alias-label-primary);align-items:center;font-size:14px;line-height:22px;display:flex}.yreWoa_desc{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.yreWoa_help{border:.5px solid var(--dsw-alias-border-l2);width:16px;height:16px;color:var(--dsw-alias-label-tertiary);cursor:help;user-select:none;border-radius:50%;flex:none;justify-content:center;align-items:center;margin-left:6px;font-size:11px;line-height:1;display:inline-flex}";
		const tagId$2 = "dsh-tokyonight-theme/settings-row.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$2) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-tokyonight-theme";
			tag.dataset.pluginCss = tagId$2;
			tag.textContent = css$2;
			document.head.appendChild(tag);
		}
		var settings_row_module_css_default = {
			"desc": "yreWoa_desc",
			"help": "yreWoa_help",
			"row": "yreWoa_row",
			"stack": "yreWoa_stack",
			"title": "yreWoa_title"
		};
		//#endregion
		//#region src/client/TokyoNightRow.tsx
		/**
		* TokyoNight flavour row — the first row of the plugin's own settings page
		* (issue #27) and of the plugin detail card. It lists the three theme variants,
		* a "follow the OS light/dark scheme" switch (issue #36 — NOT the same thing as
		* the "off" cube, which hands the UI back to the official theme) and the
		* "off" cube itself. Selecting a flavour calls the injected `select`, which
		* switches the official ThemeRuntime and persists the choice.
		* The row subscribes to `theme/change` so the highlighted flavour tracks the
		* live preference.
		*
		* Beyond the flavour pick the row carries:
		*  - per-flavour localized subtitles (item DD) under the button labels;
		*  - the shiki style pick (item M, `default` / `italic-comments`);
		*  - a collapsible power-user token-override editor (item K);
		*  - a "?" help affordance (item J) — no framework tooltip API exists in
		*    dsh-client-ui-slots yet, so the help text rides the native `title`
		*    attribute plus an accessible name.
		*
		* Issue #27 (visual language): the controls here are no longer hand-drawn
		* shapes. The flavour picker follows the official Appearance row's cube
		* geometry (see TokyoNightRow.module.css for the two deliberate deviations),
		* and the shiki pick is the official `SegmentedControl` atom — the same one
		* the official Models page uses as a plain mode picker.
		*/
		/** Per-flavour one-line subtitle (item DD). */
		function subtitleText(id, t) {
			switch (id) {
				case "tokyonight-light": return t("flavor.light.subtitle");
				case "tokyonight-storm": return t("flavor.storm.subtitle");
				case "tokyonight-night": return t("flavor.night.subtitle");
				default: return null;
			}
		}
		/**
		* Render the TokyoNight row: title, one cube per flavour, and a follow-system
		* cube. The active flavour is highlighted; clicking a flavour applies it
		* immediately (live, no restart) and persists the choice.
		* @param props - composed slot props.
		* @returns the row element tree.
		*/
		function TokyoNightRow({ t, themes, current, subscribe, select, followAvailable, followSystem, setFollowSystem, followDark, setFollowDark, overrides, setOverrides, subscribePrefs }) {
			const choice = (0, react.useSyncExternalStore)(subscribe, current);
			const following = (0, react.useSyncExternalStore)(subscribePrefs, followSystem);
			const darkEnd = (0, react.useSyncExternalStore)(subscribePrefs, followDark);
			const overrideMap = (0, react.useSyncExternalStore)(subscribePrefs, overrides);
			const [overridesOpen, setOverridesOpen] = (0, react.useState)(false);
			const [draftRows, setDraftRows] = (0, react.useState)([]);
			const nextDraftId = (0, react.useRef)(0);
			const isTokenKey = (key) => key.trim().startsWith("--");
			/** Commit a draft row on blur. If both fields are valid, promote to persisted;
			*  otherwise keep in draft state. Item XX: changed from onChange to onBlur so
			*  the row stays stable while typing—typing the first character of the value
			*  previously made the draft immediately promote and unmount the input mid-edit. */
			const commitDraftKey = (index, key) => {
				const row = draftRows[index];
				if (isTokenKey(key) && row.value.trim() !== "") {
					setOverrides({
						...overrideMap,
						[key.trim()]: row.value
					});
					setDraftRows(draftRows.filter((_, i) => i !== index));
				} else setDraftRows(draftRows.map((r, i) => i === index ? {
					...r,
					key
				} : r));
			};
			const commitDraftValue = (index, value) => {
				const row = draftRows[index];
				if (isTokenKey(row.key) && value.trim() !== "") {
					setOverrides({
						...overrideMap,
						[row.key.trim()]: value
					});
					setDraftRows(draftRows.filter((_, i) => i !== index));
				} else setDraftRows(draftRows.map((r, i) => i === index ? {
					...r,
					value
				} : r));
			};
			/** Rename (or, with an empty/invalid key, delete) a persisted override. The
			*  key input is uncontrolled and commits on blur: writing on every keystroke
			*  repersisted the entry under each intermediate key, and an intermediate
			*  key that is not a `--` token made the row delete itself mid-typing. */
			const commitPersistedKey = (oldKey, newKey) => {
				if (newKey === oldKey) return;
				const next = { ...overrideMap };
				delete next[oldKey];
				if (isTokenKey(newKey)) next[newKey.trim()] = overrideMap[oldKey];
				setOverrides(next);
			};
			/** Set (or, with an empty value, delete) a persisted override's value.
			*
			*  Item TT: the value input is uncontrolled and commits on blur, symmetric
			*  with the key input. Per-keystroke commits meant `value.trim() === ''`
			*  deleted the entry while the caret was still in the field, so the row
			*  (input included) unmounted mid-typing — and every keystroke additionally
			*  re-registered the whole theme. Trade-off, accepted deliberately: no more
			*  "recolour as I type" preview (intermediate values like `#89b4` are invalid
			*  CSS anyway, so that preview was only ever complete on paste), and an edit
			*  that never loses focus (dialog closed with Esc) is not committed.
			*
			*  Known trade-off: an uncontrolled input keeps its text when the persisted
			*  value changes from another tab/settings write; the row re-syncs on reopen. */
			const commitPersistedValue = (key, value) => {
				if (value === overrideMap[key]) return;
				const next = { ...overrideMap };
				if (value.trim() === "") delete next[key];
				else next[key] = value;
				setOverrides(next);
			};
			const removePersisted = (key) => {
				const next = { ...overrideMap };
				delete next[key];
				setOverrides(next);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: settings_row_module_css_default.row,
				"data-tokyonight-row": "flavor",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: settings_row_module_css_default.desc,
						children: t("row.description")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: TokyoNightRow_module_css_default.cubes,
						role: "group",
						"aria-label": t("row.title"),
						children: [themes.map((flavor) => {
							const selected = choice === flavor.id;
							const subtitle = subtitleText(flavor.id, t);
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": selected,
								onClick: () => void select(flavor.id),
								className: selected ? `${TokyoNightRow_module_css_default.cube} ${TokyoNightRow_module_css_default.selected}` : TokyoNightRow_module_css_default.cube,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: TokyoNightRow_module_css_default.cubeHead,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: TokyoNightRow_module_css_default.swatch,
										style: { background: flavor.accent }
									}), flavor.label]
								}), subtitle !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.subtitle,
									children: subtitle
								})]
							}, flavor.id);
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": choice === "off",
							onClick: () => void select("off"),
							className: choice === "off" ? `${TokyoNightRow_module_css_default.cube} ${TokyoNightRow_module_css_default.selected}` : TokyoNightRow_module_css_default.cube,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: TokyoNightRow_module_css_default.cubeHead,
								children: t("row.off")
							})
						}, "off")]
					}),
					followAvailable && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: TokyoNightRow_module_css_default.followRow,
						"data-tokyonight-follow": "",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: TokyoNightRow_module_css_default.followHead,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Switch, {
									checked: following,
									onChange: (next) => {
										setFollowSystem(next);
									},
									label: t("row.follow")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.followLabel,
									children: t("row.follow")
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: TokyoNightRow_module_css_default.hint,
								children: t("row.followHint")
							}),
							following && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: TokyoNightRow_module_css_default.shikiRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.previewLabel,
									children: t("row.followDark")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SegmentedControl, {
									id: "tokyonight-follow-dark",
									label: t("row.followDark"),
									value: darkEnd,
									options: themes.filter((flavor) => flavor.id !== "tokyonight-light").map((flavor) => ({
										value: flavor.id,
										label: flavor.label
									})),
									onChange: (next) => {
										setFollowDark(next);
									}
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: TokyoNightRow_module_css_default.codePreview,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: TokyoNightRow_module_css_default.previewLabel,
							children: t("row.previewCode")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
							className: TokyoNightRow_module_css_default.codeSample,
							"aria-label": t("row.previewCode"),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("code", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.tokKeyword,
									children: "const"
								}),
								" ",
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.tokFunction,
									children: "greet"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.tokPunct,
									children: " = ("
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.tokParameter,
									children: "name"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.tokPunct,
									children: ") => "
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.tokString,
									children: "`hi ${name}`"
								}),
								"\n",
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: TokyoNightRow_module_css_default.tokComment,
									children: "// a comment"
								})
							] })
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: TokyoNightRow_module_css_default.overrides,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							size: "sm",
							variant: "ghost",
							className: TokyoNightRow_module_css_default.selfStart,
							"aria-expanded": overridesOpen,
							onClick: () => {
								setOverridesOpen(!overridesOpen);
							},
							children: [
								overridesOpen ? "▾" : "▸",
								" ",
								t("row.overrides"),
								" (",
								Object.keys(overrideMap).length,
								")"
							]
						}), overridesOpen && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: TokyoNightRow_module_css_default.hint,
								children: t("row.overridesHint")
							}),
							Object.keys(overrideMap).length === 0 && draftRows.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: TokyoNightRow_module_css_default.hint,
								children: t("row.overridesEmpty")
							}),
							Object.entries(overrideMap).map(([key, value]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: TokyoNightRow_module_css_default.overrideRow,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "text",
										"aria-label": t("row.overridesKey"),
										defaultValue: key,
										onBlur: (e) => {
											commitPersistedKey(key, e.target.value);
										},
										placeholder: "--dsw-static-blue-500",
										className: TokyoNightRow_module_css_default.overrideInput
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "text",
										"aria-label": t("row.overridesValue"),
										defaultValue: value,
										onBlur: (e) => {
											commitPersistedValue(key, e.target.value);
										},
										placeholder: "#89b4fa",
										className: `${TokyoNightRow_module_css_default.overrideInput} ${TokyoNightRow_module_css_default.overrideValue}`
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: "ghost",
										"aria-label": t("row.overridesRemove"),
										onClick: () => {
											removePersisted(key);
										},
										children: "✕"
									})
								]
							}, key)),
							draftRows.map((row, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: TokyoNightRow_module_css_default.overrideRow,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "text",
										"aria-label": t("row.overridesKey"),
										defaultValue: row.key,
										onBlur: (e) => {
											commitDraftKey(index, e.target.value);
										},
										placeholder: "--dsw-static-blue-500",
										className: TokyoNightRow_module_css_default.overrideInput
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "text",
										"aria-label": t("row.overridesValue"),
										defaultValue: row.value,
										onBlur: (e) => {
											commitDraftValue(index, e.target.value);
										},
										placeholder: "#89b4fa",
										className: `${TokyoNightRow_module_css_default.overrideInput} ${TokyoNightRow_module_css_default.overrideValue}`
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: "ghost",
										"aria-label": t("row.overridesRemove"),
										onClick: () => {
											setDraftRows(draftRows.filter((_, i) => i !== index));
										},
										children: "✕"
									})
								]
							}, row.id)),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								size: "sm",
								variant: "ghost",
								className: TokyoNightRow_module_css_default.selfStart,
								onClick: () => {
									nextDraftId.current += 1;
									setDraftRows([...draftRows, {
										id: nextDraftId.current,
										key: "",
										value: ""
									}]);
								},
								children: ["+ ", t("row.overridesAdd")]
							})
						] })]
					})
				]
			});
		}
		//#endregion
		//#region src/client/glass/glass-seams.ts
		const SEAMS = [
			{
				attribute: "data-dsh-glass-frame",
				selector: ":has(> [class*=\"sidebarCol\"])"
			},
			{
				attribute: "data-dsh-glass-sidebar-root",
				selector: "[class*=\"sidebarCol\"] [class*=\"root\"]",
				first: true
			},
			{
				attribute: "data-dsh-glass-surface",
				selector: "button[class*=\"newSession\"]"
			},
			{
				attribute: "data-dsh-glass-trajectory",
				selector: "[data-conversation-composer-overlay]"
			},
			{
				attribute: "data-dsh-glass-details",
				selector: "[class*=\"rightbarCol\"] [data-sidebar-right-panel], [class*=\"detailsCol\"] [class*=\"root\"]",
				first: true
			},
			{
				attribute: "data-dsh-glass-inputbar",
				selector: ":has(> [data-composer-card])"
			},
			{
				attribute: "data-dsh-glass-add",
				selector: "[data-composer-card] [class*=\"add\"]"
			},
			{
				attribute: "data-dsh-glass-stats",
				selector: "[data-slot=\"conversation.composer.dock\"] > *, [data-slot=\"conversation.composer.dock\"] [class*=\"root\"]"
			},
			{
				attribute: "data-dsh-glass-settings",
				selector: ":has(> [role=\"dialog\"][aria-modal=\"true\"])"
			}
		];
		function stamp(seam) {
			if (seam.first) {
				const el = document.querySelector(seam.selector);
				if (el !== null && !el.hasAttribute(seam.attribute)) el.setAttribute(seam.attribute, "");
				return;
			}
			for (const el of document.querySelectorAll(seam.selector)) if (!el.hasAttribute(seam.attribute)) el.setAttribute(seam.attribute, "");
		}
		function stampAll() {
			for (const seam of SEAMS) stamp(seam);
		}
		/**
		* Stamp the seams once, then keep them stamped as React remounts nodes.
		*
		* The observer callback is debounced through `requestAnimationFrame` (item
		* N): DSH chat streaming mutates the DOM per token, and re-stamping on
		* every single mutation would re-run every selector per token. One frame
		* merges all mutations into one `stampAll()` — a streamed burst of N
		* mutations costs 1 stamp pass, and a frame with no mutations costs
		* nothing (the dirty flag skips the no-op stamp). Stamping stays idempotent
		* and cheap: `stamp()` only sets attributes that are missing.
		*
		* @returns a disposer that disconnects the observer and cancels any
		*  pending frame.
		*/
		function startGlassSeamStamper() {
			stampAll();
			let frame;
			let dirty = false;
			let disposed = false;
			const stampFrame = () => {
				frame = void 0;
				if (!dirty) return;
				dirty = false;
				stampAll();
			};
			const schedule = () => {
				if (disposed) return;
				dirty = true;
				if (frame !== void 0) return;
				frame = requestAnimationFrame(stampFrame);
			};
			const observer = new MutationObserver(schedule);
			observer.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
			return () => {
				disposed = true;
				observer.disconnect();
				if (frame !== void 0) cancelAnimationFrame(frame);
				frame = void 0;
				dirty = false;
			};
		}
		//#endregion
		//#region src/client/glass/glass-css.gen.ts
		/**
		* AUTO-GENERATED by scripts/gen-glass-css.mjs — do not edit by hand.
		* The glass stylesheet text, generated from
		* src/client/glass/glass.module.css on every build. The browser half
		* mounts this text as a <style> tag only while the glass layer is on
		* (item II — lazy CSS), so editing the stylesheet means editing
		* glass.module.css and rebuilding.
		*/
		const GLASS_CSS_TEXT = "[data-dsh-glass] body{--dsh-glass-card:color-mix(in srgb, var(--dsw-alias-bg-layer-1) calc(52% * var(--dsh-glass-frost,1)), transparent);--dsh-glass-card-raised:color-mix(in srgb, var(--dsw-alias-bg-layer-1) calc(64% * var(--dsh-glass-frost,1)), transparent);--dsh-glass-card-hover:color-mix(in srgb, var(--dsw-alias-bg-layer-1) calc(76% * var(--dsh-glass-frost,1)), transparent);--dsh-glass-rim:color-mix(in srgb, var(--dsw-alias-label-primary) 18%, transparent);--dsh-glass-rim-soft:color-mix(in srgb, var(--dsw-alias-label-primary) 12%, transparent);--dsh-glass-rim-strong:color-mix(in srgb, var(--dsw-alias-label-primary) 30%, transparent);--dsh-glass-edge:inset 0 1px 0 #ffffff6b;--dsh-glass-drop:0 10px 32px color-mix(in srgb, var(--dsw-alias-bg-mask-2) 38%, transparent);--dsh-glass-input-shadow:0 1px 2px color-mix(in srgb, var(--dsw-alias-bg-mask-2) 65%, transparent), 0 8px 24px color-mix(in srgb, var(--dsw-alias-bg-mask-2) 80%, transparent);--dsh-glass-ground:color-mix(in srgb, color-mix(in srgb, var(--dsw-alias-bg-base), #fff calc(var(--dsh-glass-brightness-white,0) * 100%)), #000 calc(var(--dsh-glass-brightness-black,0) * 100%));--dsh-glass-ambience:calc(1 - var(--dsh-glass-brightness-white,0) - var(--dsh-glass-brightness-black,0));--dsh-glass-wash-tint:#fff;--dsh-glass-wash-mix:22%}[data-dsh-glass] body[data-ds-dark-theme]{--dsh-glass-rim:color-mix(in srgb, var(--dsw-alias-label-primary) 24%, transparent);--dsh-glass-rim-soft:color-mix(in srgb, var(--dsw-alias-label-primary) 16%, transparent);--dsh-glass-rim-strong:color-mix(in srgb, var(--dsw-alias-label-primary) 30%, transparent);--dsh-glass-edge:inset 0 1px 0 #ffffff14;--dsh-glass-drop:0 10px 32px #02060e73;--dsh-glass-input-shadow:0 1px 2px color-mix(in srgb, var(--dsw-alias-bg-mask-2) 65%, transparent), 0 8px 24px color-mix(in srgb, var(--dsw-alias-bg-mask-2) 80%, transparent);--dsh-glass-wash-tint:var(--dsw-alias-bg-layer-1);--dsh-glass-wash-mix:68%}[data-dsh-glass] body,[data-dsh-glass] [data-dsh-glass-ground-sample]{background:  radial-gradient(calc(58% * var(--dsh-glass-glow-size,1)) calc(46% * var(--dsh-glass-glow-size,1)) at 18% 6%, color-mix(in srgb, var(--dsw-alias-brand-primary-new-colorprimary-new-color) calc(12% * var(--dsh-glass-ambience) * var(--dsh-glass-glow,0) * var(--dsh-glass-glow-strength,1)), transparent), transparent 68%),  radial-gradient(calc(48% * var(--dsh-glass-glow-size,1)) calc(42% * var(--dsh-glass-glow-size,1)) at 86% 14%, color-mix(in srgb, var(--dsw-alias-state-success-tertiary) calc(10% * var(--dsh-glass-ambience) * var(--dsh-glass-glow,0) * var(--dsh-glass-glow-strength,1)), transparent), transparent 62%),  linear-gradient(165deg, color-mix(in srgb, var(--dsh-glass-ground), var(--dsh-glass-wash-tint) calc(var(--dsh-glass-wash-mix) * var(--dsh-glass-ambience))) 0%, var(--dsh-glass-ground) 55%, color-mix(in srgb, var(--dsh-glass-ground), #000 calc(5% * var(--dsh-glass-ambience))) 100%)}[data-dsh-glass] [data-dsh-glass-frame]{background:0 0}html[data-dsh-glass-compat][data-windows-titlebar] [data-dsh-glass-frame]{background:var(--dsw-specific-sidebar-fill)}[data-dsh-glass] [data-phase],[data-dsh-glass] [data-dsh-glass-details],[data-dsh-glass-float] [data-dsh-glass-frame]>[class*=centerCol]{background:0 0}[data-dsh-glass-float] [data-phase=active] header{z-index:8;position:relative}[data-dsh-glass-float] [class*=banner]{position:static}[data-dsh-glass-float] [data-phase=active] [data-conversation-scroll]{margin-top:-95px;padding-top:107px}[data-dsh-glass] [data-phase] [class*=composerSeat][class*=composerSeat]{background:0 0}[data-dsh-glass] [data-phase] [data-dsh-glass-inputbar]>[class*=dock],[data-dsh-glass] [data-phase] [data-dsh-glass-inputbar]>[data-composer-dock]{position:relative}[data-dsh-glass] [data-phase] [data-dsh-glass-inputbar]>[class*=dock]:before,[data-dsh-glass] [data-phase] [data-dsh-glass-inputbar]>[data-composer-dock]:before{content:\"\";left:calc(-1 * var(--dsh-composer-side-clearance,16px));right:calc(-1 * var(--dsh-composer-side-clearance,16px));z-index:-1;pointer-events:none;background:color-mix(in srgb, color-mix(in srgb, var(--dsh-glass-ground), #000 calc(5% * var(--dsh-glass-ambience))) calc(70% + 10% * var(--dsh-glass-frost,1)), transparent);height:calc(100% + 12px);backdrop-filter:blur(var(--dsh-glass-blur,14px));position:absolute;bottom:-4px;-webkit-mask-image:linear-gradient(#0000 0,#000 18px);mask-image:linear-gradient(#0000 0,#000 18px)}[data-dsh-glass] [data-dsh-glass-fade]{z-index:7;pointer-events:none;backdrop-filter:blur(5px);background:#ffffff2e;height:13px;position:fixed;left:0;right:0}[data-dsh-glass] body[data-ds-dark-theme] [data-dsh-glass-fade]{background:#00000024}[data-dsh-glass] [data-dsh-glass-fade=top]{top:0;-webkit-mask-image:linear-gradient(#000 0%,#0000 100%);mask-image:linear-gradient(#000 0%,#0000 100%)}[data-dsh-glass][data-windows-titlebar] [data-dsh-glass-fade=top]{display:none}[data-dsh-glass] [data-dsh-glass-fade=bottom]{bottom:0;-webkit-mask-image:linear-gradient(#0000 0%,#000 100%);mask-image:linear-gradient(#0000 0%,#000 100%)}[data-dsh-glass-float] [data-menu-material=translucent],[data-dsh-glass-float] [role=menu]:not([data-menu-material]):not([data-menu-material] *),[data-dsh-glass-float] [role=dialog],[data-dsh-glass-float] [role=alert],[data-dsh-glass-float] [data-trigger-menu],[data-dsh-glass-float] [data-dsh-glass-surface]{border-radius:14px}[data-dsh-glass-float] [role=menuitem],[data-dsh-glass-float] [class*=pill]{border-radius:8px}[data-dsh-glass-float] button[class*=button]{border-radius:10px}[data-dsh-glass-float] [class*=iconButton],[data-dsh-glass-float] [class*=searchButton]{border-radius:8px}[data-dsh-glass-float] [class*=block]{--dsl-code-block-border-radius:14px;--dsl-diff-radius:14px;--dsl-read-radius:14px;--dsl-terminal-radius:14px;--dsl-web-radius:14px;--dsl-search-radius:14px;border-radius:14px}[data-dsh-glass-float] [data-dsh-glass-add]{background:var(--dsh-glass-card-raised);border:1px solid var(--dsh-glass-rim);box-shadow:var(--dsh-glass-edge);backdrop-filter:blur(var(--dsh-glass-blur,14px))}[data-dsh-glass-float] [data-dsh-glass-add]:hover:not(:disabled){background:var(--dsh-glass-card-hover)}[data-dsh-glass-float] [data-dsh-glass-surface]{background:var(--dsh-glass-card-raised);border:1px solid var(--dsh-glass-rim-soft);box-shadow:var(--dsh-glass-edge);backdrop-filter:blur(var(--dsh-glass-blur,14px))}[data-dsh-glass-float] [data-dsh-glass-surface]:hover:not(:disabled){background:var(--dsh-glass-card-hover)}[data-dsh-glass-float] [data-conversation-scroll] [data-message-bubble],[data-dsh-glass-float] [data-conversation-scroll] [class*=bubbleWidth]>[class*=bubble]:not([role=tooltip]){border:1px solid var(--dsh-glass-rim-soft);background:color-mix(in srgb, var(--dsw-alias-bg-layer-1) calc(46% * var(--dsh-glass-frost,1)), transparent);border-radius:14px}[data-dsh-glass-float] [class*=card]{border-radius:14px}[data-dsh-glass-float] [data-reader-reasoning-card]:not([data-overflow=false][data-expanded=false]),[data-dsh-glass-compat] [data-reader-reasoning-card]:not([data-overflow=false][data-expanded=false]){background:color-mix(in srgb, var(--dsw-alias-bg-module-platform) calc(52% * var(--dsh-glass-frost,1)), transparent);border-color:var(--dsh-glass-rim-soft);border-radius:14px}html[data-dsh-glass-float] [data-changed-files],html[data-dsh-glass-float] [data-presented-file]{--changes-fill:var(--dsh-glass-card);--deliverable-fill:var(--dsh-glass-card);border-color:var(--dsh-glass-rim-soft);border-radius:14px}html[data-dsh-glass-float] [data-presented-file],html[data-dsh-glass-float] [data-changed-files]{background:var(--dsh-glass-card)}html[data-dsh-glass-float] [data-changed-files]>:first-child,html[data-dsh-glass-float] [data-changed-files] ul>li>:first-child,html[data-dsh-glass-float] [data-changed-files] ul{background:0 0}html[data-dsh-glass-float] [data-changed-files] ul{border-top:.5px solid var(--dsh-glass-rim-soft)}html[data-dsh-glass-float] [data-changed-files]>:first-child>:first-child,html[data-dsh-glass-float] [data-presented-file]>:first-child{background:var(--dsh-glass-card-raised)}html[data-dsh-glass-float] [data-turn-trigger]{background:var(--dsh-glass-card);border-color:var(--dsh-glass-rim-soft);border-radius:14px}html[data-dsh-glass-float] [data-turn-trigger]:hover{background:var(--dsh-glass-card-hover)}[data-dsh-glass] [data-dsh-glass-settings]{--dsh-glass-settings-raised:calc(38% + 38% * var(--dsh-glass-frost,1));--dsh-glass-settings-soft:calc(30% + 30% * var(--dsh-glass-frost,1));--dsw-alias-bg-module-platform:color-mix(in srgb, var(--dsw-static-neutral-bluish-800) var(--dsh-glass-settings-raised), transparent);--dsw-alias-bg-layer-3:color-mix(in srgb, var(--dsw-static-neutral-bluish-800) var(--dsh-glass-settings-soft), transparent);--dsw-alias-bg-layer-2:color-mix(in srgb, var(--dsw-static-neutral-bluish-850) var(--dsh-glass-settings-raised), transparent);--dsw-alias-bg-layer-1:color-mix(in srgb, var(--dsw-static-neutral-bluish-850) var(--dsh-glass-settings-soft), transparent);--dsw-specific-sidebar-nav-item-active:color-mix(in srgb, var(--dsw-static-neutral-bluish-750) var(--dsh-glass-settings-raised), transparent);--dsw-specific-sidebar-nav-item-hover:color-mix(in srgb, var(--dsw-static-neutral-bluish-850) var(--dsh-glass-settings-soft), transparent)}[data-dsh-glass] body:not([data-ds-dark-theme]) [data-dsh-glass-settings]{--dsw-alias-bg-module-platform:color-mix(in srgb, var(--dsw-static-neutral-bluish-60) var(--dsh-glass-settings-raised), transparent);--dsw-alias-bg-layer-3:color-mix(in srgb, var(--dsw-static-neutral-bluish-00) var(--dsh-glass-settings-soft), transparent);--dsw-alias-bg-layer-2:color-mix(in srgb, var(--dsw-static-neutral-bluish-00) var(--dsh-glass-settings-raised), transparent);--dsw-alias-bg-layer-1:color-mix(in srgb, var(--dsw-static-neutral-bluish-00) var(--dsh-glass-settings-soft), transparent);--dsw-specific-sidebar-nav-item-active:color-mix(in srgb, var(--dsw-static-neutral-bluish-100) var(--dsh-glass-settings-raised), transparent);--dsw-specific-sidebar-nav-item-hover:color-mix(in srgb, var(--dsw-static-neutral-bluish-75) var(--dsh-glass-settings-soft), transparent)}[data-dsh-glass-float] [data-phase] header:not([class*=headerBlank]){width:100%;margin:var(--dsh-glass-gap,12px) auto 0;max-width:min(calc(var(--dsh-chat-user-width,clamp(680px, calc(var(--dsh-conversation-column-width,1500px) * .64), 920px)) + 32px), calc(100% - 32px));border:1px solid var(--dsh-glass-rim);background:var(--dsh-glass-card);box-shadow:var(--dsh-glass-edge), var(--dsh-glass-drop);backdrop-filter:blur(var(--dsh-glass-blur,14px));border-radius:20px;padding:10px 16px 8px}[data-dsh-glass-float] [data-phase] header:not([class*=headerBlank]):after{display:none}[data-dsh-glass-float] [data-dsh-glass-frame][data-sidebar-collapsed] [data-phase] header:not([class*=headerBlank]){width:auto;margin-left:calc(var(--dsh-glass-gap,12px) + 16px);max-width:none;margin-right:16px}[data-dsh-glass-float] [class*=sidebarCol]{--dsw-specific-sidebar-fill:transparent;z-index:9;margin:var(--dsh-glass-gap,12px);border:1px solid var(--dsh-glass-rim-soft);box-shadow:var(--dsh-glass-drop);border-radius:20px;padding:10px 12px 14px;position:relative;overflow:hidden}[data-dsh-glass-float] [class*=sidebarCol]:before{content:\"\";border-radius:inherit;background:var(--dsh-glass-card);box-shadow:var(--dsh-glass-edge);z-index:-1;pointer-events:none;transition:border-radius .15s var(--ds-ease-in-out);position:absolute;inset:0}[data-dsh-glass-float] body{--dsw-specific-sidebar-fill:color-mix(in srgb, var(--dsw-alias-bg-layer-1) calc(52% * var(--dsh-glass-frost,1)), color-mix(in srgb, var(--dsh-glass-ground), var(--dsh-glass-wash-tint) calc(var(--dsh-glass-wash-mix) * var(--dsh-glass-ambience))))!important}[data-dsh-glass-float] [data-dsh-glass-frame][data-sidebar-collapsed] [class*=sidebarCol]{margin:var(--dsh-glass-gap,12px) calc(-1 * min(var(--dsh-glass-gap,12px), 16px)) var(--dsh-glass-gap,12px) var(--dsh-glass-gap,12px);transition:margin .15s var(--ds-ease-in-out), border-radius .15s var(--ds-ease-in-out);border-radius:16px;padding:0}[data-dsh-glass-float] [data-dsh-glass-frame]:not([data-sidebar-collapsed]) [data-dsh-glass-sidebar-root]{width:100%!important}[data-dsh-glass-float] [data-dsh-glass-trajectory]{margin:8px auto var(--dsh-glass-gap,12px);width:calc(100% - 32px);max-width:min(calc(var(--dsh-chat-user-width,clamp(680px, calc(var(--dsh-conversation-column-width,1500px) * .64), 920px)) + 32px), calc(100% - 32px));height:calc(100% - 8px - var(--dsh-glass-gap,12px));border:1px solid var(--dsh-glass-rim);background:var(--dsh-glass-card);box-shadow:var(--dsh-glass-edge), var(--dsh-glass-drop);border-radius:20px;overflow:hidden}[data-dsh-glass-float] [data-dsh-glass-trajectory] [role=toolbar],[data-dsh-glass-float] [data-dsh-glass-trajectory] section[aria-label=Trajectory\\ timeline]{background:0 0}[data-dsh-glass-float] [data-composer-card],[data-dsh-glass-float] [data-composer-card]:after{border-radius:24px}[data-dsh-glass-float] [data-composer-card]{z-index:8;isolation:isolate;border:1px solid var(--dsh-glass-rim-strong);box-shadow:var(--dsh-glass-input-shadow);background:0 0;position:relative}[data-dsh-glass-float] [data-composer-card]:before{content:\"\";z-index:-1;border-radius:inherit;background:var(--dsh-glass-card);box-shadow:var(--dsh-glass-edge);backdrop-filter:blur(var(--dsh-glass-blur,14px));pointer-events:none;position:absolute;inset:0}[data-dsh-glass-float] [data-dsh-glass-inputbar]:not([class*=hero]):not(:has([data-dsh-glass-stats])){padding-bottom:var(--dsh-glass-gap,12px)}[data-dsh-glass-float] [role=treeitem][aria-selected=true]{background:var(--dsw-alias-interactive-bg-hover)}[data-dsh-glass-float] button[class*=button]:hover:not(:disabled),[data-dsh-glass-float] [role=menuitem]:hover:not(:disabled){box-shadow:0 0 12px color-mix(in srgb, var(--dsw-alias-brand-primary-new-colorprimary-new-color) 20%, transparent)}[data-dsh-glass-float] [data-menu-material=translucent]:not(:focus-visible){--dsw-menu-surface-fill:var(--dsh-glass-card-raised);--dsw-menu-backdrop-filter:blur(var(--dsh-glass-blur,14px))}[data-dsh-glass-float] body[data-ds-dark-theme] [data-menu-material=translucent]:not(:focus-visible){outline:1px solid var(--dsh-glass-rim-soft);outline-offset:-1px}[data-dsh-glass-float] [role=menu]:not([data-menu-material]):not([data-menu-material] *){background:var(--dsh-glass-card-raised);border:1px solid var(--dsh-glass-rim-soft);backdrop-filter:blur(var(--dsh-glass-blur,14px))}[data-dsh-glass-float] [data-menu-material=translucent]:has([role=group]>[role=menuitemradio]){--dsw-menu-surface-fill:color-mix(in srgb, var(--dsw-alias-bg-layer-2) 70%, transparent)}[data-dsh-glass-float] [data-menu-group]:has(>[role=menuitemradio])>[data-menu-group-heading]{background:var(--dsh-glass-card-raised);backdrop-filter:blur(var(--dsh-glass-blur,14px));border-radius:999px;align-items:center;width:fit-content;margin:3px 0 5px 6px;padding:3px 10px;display:inline-flex}[data-dsh-glass-float] [role=presentation]>[role=dialog][aria-modal=true]{isolation:isolate;backdrop-filter:none;border:1px solid var(--dsh-glass-rim);box-shadow:var(--dsh-glass-edge), var(--dsh-glass-drop);background:0 0;border-radius:20px;position:relative}[data-dsh-glass-float] [role=presentation]>[role=dialog][aria-modal=true]:before{content:\"\";z-index:-1;border-radius:inherit;background:var(--dsh-glass-card-raised);backdrop-filter:blur(var(--dsh-glass-blur,14px));pointer-events:none;position:absolute;inset:0}[data-dsh-glass] [data-conversation-scroll]{text-shadow:0 0 1px #ffffff80}[data-dsh-glass] body[data-ds-dark-theme] [data-conversation-scroll]{text-shadow:0 0 1px #0006}[data-dsh-glass-float] [data-dsh-glass-inputbar] [data-slot]{color:var(--dsw-alias-label-secondary)}[data-dsh-glass]{--dsh-glass-entry-scale:1}[data-dsh-glass-compat]{--dsh-glass-entry-scale:0}[data-dsh-glass] [data-testid^=view-]{animation:dsh-glass-in calc(.26s * var(--dsh-glass-entry-scale,1)) var(--ds-ease-in-out)}[data-dsh-glass] [data-tool]{animation:dsh-glass-rise calc(.3s * var(--dsh-glass-entry-scale,1)) var(--ds-ease-in-out) both}[data-dsh-glass] [role=dialog]{animation:dsh-glass-dialog-in calc(.24s * var(--dsh-glass-entry-scale,1)) var(--ds-ease-in-out)}@keyframes dsh-glass-in{0%{opacity:0}}@keyframes dsh-glass-rise{0%{opacity:0;transform:translateY(6px)}}@keyframes dsh-glass-dialog-in{0%{opacity:0}}[data-dsh-glass] :focus-visible:not(input):not(textarea){outline:2px solid color-mix(in srgb, var(--dsw-alias-brand-primary-new-colorprimary-new-color) 85%, transparent);outline-offset:1px}[data-dsh-glass] :is(input,textarea):focus-visible{outline:none}[data-dsh-glass] :has(>:is(input,textarea):focus-visible){outline:2px solid color-mix(in srgb, var(--dsw-alias-brand-primary-new-colorprimary-new-color) 85%, transparent);outline-offset:1px}[data-dsh-glass] ::selection{background:color-mix(in srgb, var(--dsw-alias-brand-primary-new-colorprimary-new-color) 35%, transparent)}[data-dsh-glass-compat] [role=menu]:not([data-menu-material]):not([data-menu-material] *),[data-dsh-glass-compat] [class*=popover],[data-dsh-glass-compat] [class*=dropdown]{backdrop-filter:blur(12px)}[data-dsh-glass-compat] [data-menu-material=translucent]:not(:focus-visible){--dsw-menu-surface-fill:var(--dsh-glass-card-raised);--dsw-menu-backdrop-filter:blur(12px)}[data-dsh-glass-compat] [data-sidebar-right-panel][data-sidebar-right-open],[data-dsh-glass-compat] [data-sidebar-right-panel][data-sidebar-right-open] [class*=panel]{backdrop-filter:blur(12px)}[data-dsh-glass-compat] [role=menu]:not([data-menu-material]):not([data-menu-material] *),[data-dsh-glass-compat] [class*=popover],[data-dsh-glass-compat] [class*=dropdown]{background:var(--dsh-glass-card-raised)}[data-dsh-glass-compat] [data-composer-card]{isolation:isolate;backdrop-filter:none;background:0 0;position:relative}[data-dsh-glass-compat] [data-composer-card]:before{content:\"\";z-index:-1;border-radius:inherit;background:var(--dsh-glass-card-raised);backdrop-filter:blur(12px);pointer-events:none;position:absolute;inset:0}[data-dsh-glass-compat] [role=menu]:not([data-menu-material]):not([data-menu-material] *):not(:focus-visible),[data-dsh-glass-compat] [data-composer-card]:not(:focus-visible),[data-dsh-glass-compat] [class*=popover]:not(:focus-visible),[data-dsh-glass-compat] [class*=dropdown]:not(:focus-visible){outline:1px solid var(--dsh-glass-rim);outline-offset:-1px}[data-dsh-glass-compat] [role=presentation]>[role=dialog][aria-modal=true]{isolation:isolate;backdrop-filter:none;border:1px solid var(--dsh-glass-rim);box-shadow:var(--dsh-glass-edge), var(--dsh-glass-drop);background:0 0;position:relative}[data-dsh-glass-compat] [role=presentation]>[role=dialog][aria-modal=true]:before{content:\"\";z-index:-1;border-radius:inherit;background:var(--dsh-glass-card-raised);backdrop-filter:blur(var(--dsh-glass-blur,12px));pointer-events:none;position:absolute;inset:0}[data-dsh-glass-settings] [role=menu]:not([data-menu-material]):not([data-menu-material] *),[data-dsh-glass-settings] .dsm-select-menu{background:color-mix(in srgb, var(--dsh-glass-ground) 92%, transparent);backdrop-filter:blur(12px);box-shadow:var(--dsh-glass-drop)}[data-dsh-glass-settings] .dsm-panel-head{isolation:isolate;outline:1px solid var(--dsh-glass-rim-soft);outline-offset:-1px;background:0 0;border-radius:14px;padding:6px 12px 4px}[data-dsh-glass-settings] .dsm-panel-head:before{content:\"\";z-index:-1;border-radius:inherit;background:color-mix(in srgb, var(--dsh-glass-ground) 78%, transparent);backdrop-filter:blur(12px);pointer-events:none;position:absolute;inset:0}@media (prefers-reduced-motion:reduce){[data-dsh-glass] [data-testid^=view-],[data-dsh-glass] [data-tool],[data-dsh-glass] [role=dialog]{animation:none}}";
		/** Legacy settings namespace (DSH <= 0.1.6-alpha.2): the Host registers it
		*  through `settings.installSection`, the Client binds it through
		*  `ctx.settingsScope` (see `src/settings-tokyonight.ts`). */
		const TOKYONIGHT_SETTINGS_NS = "tokyonight";
		/**
		* Profile entry id carrying the plugin (DSH >= 0.1.7-alpha.1): the settings
		* service projects our volatile `Config` into a form named by the ACTIVE
		* PROFILE ENTRY's id, so this constant is the new seam's namespace.
		*
		* It is a CONTRACT with `cordis.patch.yml`: the `insert` row whose `name` is
		* `dsh-tokyonight-theme` must keep `id: dsh-tokyonight`, because the
		* Client can only address the form by that id (asserted by
		* `tests/settings-seam.spec.ts`). A user who renames the entry loses the new
		* seam and degrades to localStorage-only — the legacy seam is unaffected,
		* since that namespace is registered by the plugin itself.
		*/
		const TOKYONIGHT_ENTRY_ID = "dsh-tokyonight";
		/**
		* Whether a raw settings view carries a user layer at all.
		*
		* The two seams answer this differently and the difference is load-bearing
		* (issue #15): the NEW form's `user` is the profile patch's `override`, which
		* `configEditor.configuration()` defaults to `{}` — so "absent" arrives as an
		* EMPTY OBJECT, and `!== undefined` would be true forever. The LEGACY
		* document omits the field entirely when the document holds no such section,
		* so the old `!== undefined` test stays correct there. Callers must use the
		* predicate their channel defines (see `src/client/state-sync.ts`).
		* @param user - a snapshot's raw user layer.
		* @returns whether it holds at least one entry.
		*/
		function hasUserLayerSection(user) {
			return typeof user === "object" && user !== null && !Array.isArray(user) && Object.keys(user).length > 0;
		}
		/** The three registered TokyoNight theme ids. MUST stay in sync with the
		*  `themeId` of `TOKYONIGHT_FLAVORS` in `src/client/palettes.ts` — guarded by
		*  `tests/state.spec.ts` — because the persisted flavour value IS the theme id. */
		const TOKYONIGHT_THEME_IDS = [
			"tokyonight-light",
			"tokyonight-storm",
			"tokyonight-night"
		];
		/**
		* The LIGHT end of "follow the OS" (issue #36). Light is the only light
		* flavour TokyoNight ships, so the light half is a constant instead of a
		* setting — a picker here would offer exactly one real option.
		*/
		const FOLLOW_LIGHT_FLAVOR = "tokyonight-light";
		/** The flavours the follow mode may use for its DARK end. Only the two dark
		*  flavours: Light here would paint a light palette into the dark half. */
		const FOLLOW_DARK_FLAVORS = ["tokyonight-storm", "tokyonight-night"];
		/** Shipped follow-mode dark end: Night, TokyoNight's most common dark pick. */
		const DEFAULT_FOLLOW_DARK = "tokyonight-night";
		/** Shipped glass defaults — the single source of truth; the client glass layer
		*  (`src/client/glass/glass-layer.ts`) derives its knob defaults from here. */
		const DEFAULT_GLASS = {
			enabled: false,
			mode: "mica",
			blur: 5,
			frost: 20,
			brightness: 50,
			gap: 12,
			glowStrength: 100,
			glowSize: 100,
			glow: false
		};
		/** Legacy compatibility channel; no active updater consumes it. */
		const DEFAULT_UPDATE_CHANNEL = "latest";
		/** Shipped syntax-highlighting style. */
		const DEFAULT_SHIKI_STYLE = "default";
		/** A fully default state: no TokyoNight flavour and no glass. */
		function defaultState() {
			return {
				version: 1,
				flavor: "off",
				followSystem: false,
				followDark: DEFAULT_FOLLOW_DARK,
				glass: { ...DEFAULT_GLASS },
				autoCheck: true,
				updateChannel: DEFAULT_UPDATE_CHANNEL,
				overrides: {},
				shikiStyle: DEFAULT_SHIKI_STYLE
			};
		}
		/**
		* Keep only well-formed custom token overrides: string values under a `--`
		* key (the token shape `--dsw-*` names). Everything else is dropped so a
		* hand-edited document can never smuggle junk into the theme registration.
		*/
		function sanitizeOverrides(input) {
			const out = {};
			if (typeof input !== "object" || input === null) return out;
			for (const [key, value] of Object.entries(input)) if (typeof value === "string" && key.startsWith("--")) out[key] = value;
			return out;
		}
		/**
		* Whether a raw overrides map carries entries {@link sanitizeOverrides} would
		* drop — a key that is not a `--` token, or a non-string value.
		*
		* The settings-document schema types `overrides` as a dict of strings only, so
		* a hand-edited document can hold such entries. The client reads them away but
		* never wrote the cleaned map back, so every settings publish re-ran the
		* "document wins" adoption for a difference nothing could clear (audit F7).
		* The caller uses this to push the sanitized shape back once, so the document
		* converges instead of drifting forever.
		*/
		function hasUnpersistableOverrides(raw) {
			if (typeof raw !== "object" || raw === null) return false;
			return Object.entries(raw).some(([key, value]) => typeof value !== "string" || !key.startsWith("--"));
		}
		/** Clamp a finite number into [min, max]; non-finite values fall back. */
		function clampFinite(value, min, max, fallback) {
			return typeof value === "number" && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
		}
		/**
		* Normalize arbitrary input (JSON from disk or the wire) into a valid state:
		* unknown/missing fields fall back to defaults, out-of-range numbers clamp,
		* and unknown flavours/invalid enums fall back too. The Host applies this on
		* both read and write so a corrupt file or a hand-crafted payload can never
		* poison the plugin's settings.
		*/
		function sanitizeState(input) {
			const state = defaultState();
			if (typeof input !== "object" || input === null) return state;
			const raw = input;
			const flavor = raw.flavor;
			if (typeof flavor === "string" && TOKYONIGHT_THEME_IDS.includes(flavor)) state.flavor = flavor;
			else if (flavor === "off") state.flavor = "off";
			const followDark = raw.followDark;
			state.followDark = typeof followDark === "string" && FOLLOW_DARK_FLAVORS.includes(followDark) ? followDark : DEFAULT_FOLLOW_DARK;
			state.followSystem = raw.followSystem === true;
			if (state.flavor === "off") state.followSystem = false;
			const glass = typeof raw.glass === "object" && raw.glass !== null ? raw.glass : {};
			state.glass.enabled = glass.enabled === true;
			state.glass.mode = glass.mode === "compat" ? "compat" : "mica";
			state.glass.blur = clampFinite(glass.blur, 0, 40, DEFAULT_GLASS.blur);
			state.glass.frost = clampFinite(glass.frost, 0, 100, DEFAULT_GLASS.frost);
			state.glass.brightness = clampFinite(glass.brightness, 0, 100, DEFAULT_GLASS.brightness);
			state.glass.gap = clampFinite(glass.gap, 4, 24, DEFAULT_GLASS.gap);
			state.glass.glowStrength = clampFinite(glass.glowStrength, 0, 200, DEFAULT_GLASS.glowStrength);
			state.glass.glowSize = clampFinite(glass.glowSize, 100, 250, DEFAULT_GLASS.glowSize);
			state.glass.glow = glass.glow === true;
			state.autoCheck = raw.autoCheck !== false;
			state.updateChannel = raw.updateChannel === "beta" ? "beta" : "latest";
			state.overrides = sanitizeOverrides(raw.overrides);
			state.shikiStyle = raw.shikiStyle === "italic-comments" ? "italic-comments" : "default";
			return state;
		}
		/** Whether a normalized state carries nothing beyond the shipped defaults —
		*  i.e. the user never actually chose anything worth persisting. Used to tell
		*  "no durable state yet" apart from "an explicit default choice". */
		function isDefaultState(state) {
			const expected = defaultState();
			return state.flavor === expected.flavor && state.followSystem === expected.followSystem && state.followDark === expected.followDark && state.glass.enabled === expected.glass.enabled && state.glass.mode === expected.glass.mode && state.glass.blur === expected.glass.blur && state.glass.frost === expected.glass.frost && state.glass.brightness === expected.glass.brightness && state.glass.gap === expected.glass.gap && state.glass.glowStrength === expected.glass.glowStrength && state.glass.glowSize === expected.glass.glowSize && state.glass.glow === expected.glass.glow && state.autoCheck === expected.autoCheck && state.updateChannel === expected.updateChannel && Object.keys(state.overrides).length === 0 && state.shikiStyle === expected.shikiStyle;
		}
		/** Drop the synthetic `version` field: full state → settings-document section. */
		function settingsSectionFromState(state) {
			return {
				flavor: state.flavor,
				followSystem: state.followSystem,
				followDark: state.followDark,
				glass: { ...state.glass },
				autoCheck: state.autoCheck,
				updateChannel: state.updateChannel,
				overrides: { ...state.overrides },
				shikiStyle: state.shikiStyle
			};
		}
		/** Lift a settings-document section back into the full state-shaped contract
		*  (re-sanitized so a hand-edited document can never poison the plugin). */
		function stateFromSettingsSection(section) {
			return sanitizeState(section);
		}
		/** Field-for-field equality of two override maps — the same rule
		*  {@link settingsSectionsEqual} applies to them (both directions, so a key
		*  that only one side holds makes them differ). */
		function sameOverrides(a, b) {
			const keys = Object.keys(a);
			return keys.length === Object.keys(b).length && keys.every((key) => b[key] === a[key]);
		}
		/** Whether two settings sections are field-for-field equal (used to skip
		*  redundant mirror writes and to recognize the Host echoing our own write). */
		function settingsSectionsEqual(a, b) {
			return a.flavor === b.flavor && a.followSystem === b.followSystem && a.followDark === b.followDark && a.glass.enabled === b.glass.enabled && a.glass.mode === b.glass.mode && a.glass.blur === b.glass.blur && a.glass.frost === b.glass.frost && a.glass.brightness === b.glass.brightness && a.glass.gap === b.glass.gap && a.glass.glowStrength === b.glass.glowStrength && a.glass.glowSize === b.glass.glowSize && a.glass.glow === b.glass.glow && a.autoCheck === b.autoCheck && a.updateChannel === b.updateChannel && a.shikiStyle === b.shikiStyle && sameOverrides(a.overrides, b.overrides);
		}
		/**
		* Replay the local changes a window made BEFORE the durable channel became
		* usable onto the document state — the issue #30 fix.
		*
		* The R2 mechanism (`pendingLocalPush` in `src/client/index.ts`) exists so a
		* change made during the boot window is not rolled back by the first snapshot
		* the settings scope resolves. It used to replay the WHOLE local state, and on
		* a fresh origin (empty localStorage: a new port, a cleared site, a webview
		* partition) "the whole local state" is nothing but the shipped defaults — so
		* the first snapshot rewrote the document to `flavor: off`, `glass.enabled:
		* false`, `mode: mica`. The trigger is not even a user action: the glass layer
		* republishes on every `theme/change`, and `ui-theme` adopts its preference on
		* every boot.
		*
		* This replays only the fields whose value moved away from `baseline` — the
		* local section as of the last moment the window knew it was in sync with the
		* document (boot, or the last adoption / successful write). Everything else
		* keeps the document's value, and `changed === false` tells the caller to take
		* the ordinary "document wins" adoption path instead of writing anything.
		*
		* ⚠️ Every field of {@link TokyoNightSettingsSection} must be carried here.
		* A missing one is SILENT in both directions — a boot-window change to it is
		* dropped, and (because the caller's whole-state fallback is gone) nothing
		* else would notice. Same rule as `stateToMutateOps` (issue #26), and
		* `tests/state.spec.ts` holds a drift guard that fails when a field is added
		* without a mutant here.
		*
		* Known gap (accepted): a delta cannot tell "untouched" from "explicitly set
		* to the current default", so setting a field BACK to its default value inside
		* the boot window yields to the document. The window is sub-second and the
		* direction is "document wins", i.e. no durable data is lost.
		*
		* @param document - the section the settings document resolved (wins).
		* @param baseline - the local section at the last sync point.
		* @param local - the local section right now.
		* @returns the merged state plus whether anything actually differed.
		*/
		function replayLocalChanges(document, baseline, local) {
			const merged = settingsSectionFromState(document);
			let changed = false;
			const carry = (key) => {
				if (local[key] !== baseline[key]) {
					merged[key] = local[key];
					changed = true;
				}
			};
			const carryGlass = (key) => {
				if (local.glass[key] !== baseline.glass[key]) {
					merged.glass[key] = local.glass[key];
					changed = true;
				}
			};
			carry("flavor");
			carry("followSystem");
			carry("followDark");
			carryGlass("enabled");
			carryGlass("mode");
			carryGlass("blur");
			carryGlass("frost");
			carryGlass("brightness");
			carryGlass("gap");
			carryGlass("glowStrength");
			carryGlass("glowSize");
			carryGlass("glow");
			carry("autoCheck");
			carry("updateChannel");
			carry("shikiStyle");
			if (!sameOverrides(local.overrides, baseline.overrides)) {
				merged.overrides = { ...local.overrides };
				changed = true;
			}
			return {
				state: sanitizeState(merged),
				changed
			};
		}
		//#endregion
		//#region src/client/glass/glass-layer.ts
		/** html attribute selecting the glass layer: CSS hooks and page effects. */
		const GLASS_ATTRIBUTE = "data-dsh-glass";
		/** html attribute selecting the mica (floating-card) layout rules. */
		const GLASS_FLOAT_ATTRIBUTE = "data-dsh-glass-float";
		/** html attribute selecting the compatibility (stock-layout) rules. */
		const GLASS_COMPAT_ATTRIBUTE = "data-dsh-glass-compat";
		/** The knob-driven custom properties `applySettings()` publishes. They live on
		*  <html> (the stylesheet's root scope) and are MIRRORED onto <body> for one
		*  reason: the official desktop shell re-reads its native caption colour when
		*  <body>'s style attribute changes (`syncWindowsAppearance` in the shell's
		*  `lib/preload-app.cjs` observes that attribute, `data-ds-dark-theme` and
		*  the <head> subtree) — see `applySettings`. */
		const GLASS_KNOB_PROPERTIES = [
			"--dsh-glass-blur",
			"--dsh-glass-frost",
			"--dsh-glass-brightness-black",
			"--dsh-glass-brightness-white",
			"--dsh-glass-glow",
			"--dsh-glass-gap",
			"--dsh-glass-glow-strength",
			"--dsh-glass-glow-size"
		];
		/** localStorage key carrying the layer enable flag. */
		const GLASS_ENABLED_KEY = "dsh.tokyonight.glass.enabled";
		/** Plugin identity stamped onto the lazily-mounted glass <style> tag (the
		*  shell's unload cleanup keys off `data-plugin`). */
		const GLASS_STYLE_PLUGIN = "dsh-tokyonight-theme";
		const GLASS_STYLE_TAG_ID = "glass.module.css";
		/** The lazily-mounted glass stylesheet <style> tag (undefined while the
		*  layer is off — item II: the glass CSS only enters the document while
		*  the glass layer is enabled, instead of being injected at plugin load). */
		let glassStyleTag = null;
		/** Default state when nothing is stored yet: off (the stock UI stays stock). */
		const DEFAULT_ENABLED = DEFAULT_GLASS.enabled;
		/**
		* Shipped knob defaults — the knob-only view of `DEFAULT_GLASS` in
		* `src/state.ts` (the single source of truth, inlined into both bundles).
		* The shipped look aligns with the reference project
		* (DSH-Transparent-UI-Plugin / Aqua): mica mode, blur 5px, frost 20
		* (the 0-100 slider maps to a 0-1.4 alpha multiplier via frost/50, so 20
		* reads as a light frost) and neutral backdrop brightness.
		*/
		const SETTINGS_DEFAULTS = {
			mode: DEFAULT_GLASS.mode,
			blur: DEFAULT_GLASS.blur,
			frost: DEFAULT_GLASS.frost,
			brightness: DEFAULT_GLASS.brightness,
			gap: DEFAULT_GLASS.gap,
			glowStrength: DEFAULT_GLASS.glowStrength,
			glowSize: DEFAULT_GLASS.glowSize,
			glow: DEFAULT_GLASS.glow
		};
		/** Numeric knob keys and their localStorage names. */
		const NUMERIC_KEYS = {
			blur: "dsh.tokyonight.glass.blur",
			frost: "dsh.tokyonight.glass.frost",
			brightness: "dsh.tokyonight.glass.brightness",
			gap: "dsh.tokyonight.glass.gap",
			glowStrength: "dsh.tokyonight.glass.glow-strength",
			glowSize: "dsh.tokyonight.glass.glow-size"
		};
		/** Per-knob [min, max]. One table instead of the old `key === 'blur' ? 40 : 100`
		*  test: the gap knob is the first one that is NOT zero-based (4-24, issue
		*  #31), and a shared "0 to max" clamp would have silently turned its floor
		*  into 0 and its ceiling into 100. */
		const NUMERIC_BOUNDS = {
			blur: [0, 40],
			frost: [0, 100],
			brightness: [0, 100],
			gap: [4, 24],
			glowStrength: [0, 200],
			glowSize: [100, 250]
		};
		/** The localStorage names of the numeric knobs — the reverse of
		*  `NUMERIC_KEYS`. Used by the cross-tab `storage` handler: the event's `key`
		*  is a localStorage name (`dsh.tokyonight.glass.blur`), so it must be matched
		*  against the VALUES, never with `key in NUMERIC_KEYS` (that tests the object's
		*  property names — `blur`/`frost`/`brightness` — and is false for every real
		*  storage key, which silently killed cross-tab knob sync; audit F1). */
		const NUMERIC_STORAGE_KEYS = Object.values(NUMERIC_KEYS);
		const MODE_KEY = "dsh.tokyonight.glass.mode";
		/** localStorage key of the ground-glow switch (issue #26). */
		const GLOW_KEY = "dsh.tokyonight.glass.glow";
		/** Clamp a numeric knob into its `NUMERIC_BOUNDS` range. Two knobs are NOT
		*  0-100 and would silently snap back if folded into that arm: `gap` (issue
		*  #31, 4-24px) and `glowStrength` (issue #32, 0-`GLOW_STRENGTH_MAX`% — a
		*  contrast budget, not a taste number). */
		function clampSetting(key, value) {
			const [min, max] = NUMERIC_BOUNDS[key];
			return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : SETTINGS_DEFAULTS[key];
		}
		/** Read one numeric knob from localStorage (absent/parse failure means the default). */
		function readSetting(key) {
			try {
				const raw = localStorage.getItem(NUMERIC_KEYS[key]);
				return raw === null ? SETTINGS_DEFAULTS[key] : clampSetting(key, Number(raw));
			} catch {
				return SETTINGS_DEFAULTS[key];
			}
		}
		/** Persist one numeric knob (storage failures keep the in-memory state). */
		function writeSetting(key, value) {
			try {
				localStorage.setItem(NUMERIC_KEYS[key], String(value));
			} catch {}
		}
		/** Read the rendering mode ('mica' or 'compat'). */
		function readMode() {
			try {
				return localStorage.getItem(MODE_KEY) === "compat" ? "compat" : "mica";
			} catch {
				return "mica";
			}
		}
		/** Persist the rendering mode. */
		function writeMode(value) {
			try {
				localStorage.setItem(MODE_KEY, value);
			} catch {}
		}
		/** Read the persisted enable flag (absent storage means the default). */
		function readEnabled() {
			try {
				const raw = localStorage.getItem(GLASS_ENABLED_KEY);
				return raw === null ? DEFAULT_ENABLED : raw === "true";
			} catch {
				return DEFAULT_ENABLED;
			}
		}
		/** Persist the enable flag (storage failures keep the in-memory state). */
		function writeEnabled(value) {
			try {
				localStorage.setItem(GLASS_ENABLED_KEY, String(value));
			} catch {}
		}
		/** Read the ground-glow switch (absent storage means the shipped default: off). */
		function readGlow() {
			try {
				const raw = localStorage.getItem(GLOW_KEY);
				return raw === null ? SETTINGS_DEFAULTS.glow : raw === "true";
			} catch {
				return SETTINGS_DEFAULTS.glow;
			}
		}
		/** Persist the ground-glow switch. */
		function writeGlow(value) {
			try {
				localStorage.setItem(GLOW_KEY, String(value));
			} catch {}
		}
		/** Resolved scheme from the theme service (falls back to the body attribute). */
		function resolveDark(ctx) {
			try {
				return ctx.theme.getTheme().active.colorScheme === "dark";
			} catch {
				return document.body.hasAttribute("data-ds-dark-theme");
			}
		}
		/**
		* The page-edge fade bands injected while enabled (ported from
		* DSH-Transparent-UI-Plugin): two fixed-position, click-through strips
		* that blur the chat content melting into the viewport edges. Both are
		* removed together on disable. The page ground itself is pure CSS (the
		* body rule), so no backdrop element is needed.
		*/
		const FADE_MARKUP = ["<span data-dsh-glass-fade=\"top\" aria-hidden=\"true\"></span>", "<span data-dsh-glass-fade=\"bottom\" aria-hidden=\"true\"></span>"].join("");
		/**
		* Owns the glass layer lifecycle: reads the durable enable flag and knobs,
		* and applies / retracts every layer on change. Cross-tab flips arrive through
		* the storage event; the seam observer and every subscription are released
		* when the plugin fiber is disposed.
		*/
		var GlassLayer = class {
			enabled = false;
			settings = { ...SETTINGS_DEFAULTS };
			/** Cached snapshot for the settings row (stable reference between changes). */
			snapshot;
			listeners = /* @__PURE__ */ new Set();
			dark = false;
			seamDisposer;
			ctx;
			/**
			* @param ctx - owning client context (listeners ride this fiber).
			*/
			constructor(ctx) {
				this.ctx = ctx;
				this.enabled = readEnabled();
				this.reloadSettings();
				this.dark = resolveDark(ctx);
				this.snapshot = this.buildSnapshot();
				ctx.effect(() => {
					const onStorage = (event) => {
						if (event.key === null) {
							this.reloadSettings();
							this.enabled = readEnabled();
							this.sync();
						} else if (event.key === "dsh.tokyonight.glass.enabled") {
							this.enabled = readEnabled();
							this.sync();
						} else if (event.key === MODE_KEY || event.key === GLOW_KEY || NUMERIC_STORAGE_KEYS.includes(event.key)) {
							this.reloadSettings();
							if (this.enabled) this.applySettings();
							this.publish();
						}
					};
					window.addEventListener("storage", onStorage);
					const themeListener = ctx.on("theme/change", () => {
						this.dark = resolveDark(ctx);
						if (this.enabled) this.applySettings();
						this.publish();
					});
					return () => {
						window.removeEventListener("storage", onStorage);
						themeListener();
						this.unmount();
					};
				}, "tokyonight: glass layer lifecycle");
				this.sync();
			}
			/** Current state snapshot (stable reference until the next change). */
			getSnapshot() {
				return this.snapshot;
			}
			/** Subscribe to snapshot changes. Returns the disposer. */
			subscribe(listener) {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			}
			/** The durable subset of the current layer state (no derived `dark`). */
			getRemoteState() {
				return {
					enabled: this.enabled,
					mode: this.settings.mode,
					blur: this.settings.blur,
					frost: this.settings.frost,
					brightness: this.settings.brightness,
					gap: this.settings.gap,
					glowStrength: this.settings.glowStrength,
					glowSize: this.settings.glowSize,
					glow: this.settings.glow
				};
			}
			/** Overlay durable state hydrated from the Host file: persist it to
			*  localStorage (the cache), apply it to the live layer, and republish so
			*  the settings row reflects the restored choice. */
			applyRemote(remote) {
				this.enabled = remote.enabled;
				this.settings = {
					mode: remote.mode === "compat" ? "compat" : "mica",
					blur: clampSetting("blur", remote.blur),
					frost: clampSetting("frost", remote.frost),
					brightness: clampSetting("brightness", remote.brightness),
					gap: clampSetting("gap", remote.gap),
					glowStrength: clampSetting("glowStrength", remote.glowStrength),
					glowSize: clampSetting("glowSize", remote.glowSize),
					glow: remote.glow === true
				};
				writeEnabled(this.enabled);
				writeMode(this.settings.mode);
				writeSetting("blur", this.settings.blur);
				writeSetting("frost", this.settings.frost);
				writeSetting("brightness", this.settings.brightness);
				writeSetting("gap", this.settings.gap);
				writeSetting("glowStrength", this.settings.glowStrength);
				writeSetting("glowSize", this.settings.glowSize);
				writeGlow(this.settings.glow);
				this.sync();
			}
			/** Flip the layer: persist, then apply or retract every owned effect. */
			setEnabled(value) {
				if (value === this.enabled) return;
				this.enabled = value;
				writeEnabled(value);
				this.sync();
			}
			/** Set the rendering mode ('mica' or 'compat'). */
			setMode(value) {
				if (value === this.settings.mode) return;
				this.settings.mode = value;
				writeMode(value);
				if (this.enabled) this.applySettings();
				this.publish();
			}
			/** Set the glass blur radius (px). */
			setBlur(value) {
				const next = clampSetting("blur", value);
				if (next === this.settings.blur) return;
				this.settings.blur = next;
				writeSetting("blur", next);
				if (this.enabled) this.applySettings();
				this.publish();
			}
			/** Set the glass frost amount (0-100). */
			setFrost(value) {
				const next = clampSetting("frost", value);
				if (next === this.settings.frost) return;
				this.settings.frost = next;
				writeSetting("frost", next);
				if (this.enabled) this.applySettings();
				this.publish();
			}
			/** Set the backdrop brightness (0-100: 0 = pure black, 50 = transparent, 100 = pure white). */
			setBrightness(value) {
				const next = clampSetting("brightness", value);
				if (next === this.settings.brightness) return;
				this.settings.brightness = next;
				writeSetting("brightness", next);
				if (this.enabled) this.applySettings();
				this.publish();
			}
			/**
			* Set the floating-card inset (px, 4-24) — issue #31.
			*
			* Layout-only: it writes `--dsh-glass-gap`, which the mica rules read for the
			* sidebar sheet's margin, the header/trajectory margins and the composer
			* bar's bottom pad. No repaint of any material, so a drag is cheap; the
			* presets call it with a constant.
			*/
			setGap(value) {
				const next = clampSetting("gap", value);
				if (next === this.settings.gap) return;
				this.settings.gap = next;
				writeSetting("gap", next);
				if (this.enabled) this.applySettings();
				this.publish();
			}
			/** Toggle the two static ground glows (issue #26; wash-only is the default). */
			setGlow(value) {
				if (value === this.settings.glow) return;
				this.settings.glow = value;
				writeGlow(value);
				if (this.enabled) this.applySettings();
				this.publish();
			}
			/** Set the ground-glow strength, percent of the shipped look (issue #32).
			*  Only scales the two radial layers — the wash is deliberately untouchable
			*  (it is the issue #26 default) and the switch stays the on/off. */
			setGlowStrength(value) {
				const next = clampSetting("glowStrength", value);
				if (next === this.settings.glowStrength) return;
				this.settings.glowStrength = next;
				writeSetting("glowStrength", next);
				if (this.enabled) this.applySettings();
				this.publish();
			}
			/** Set the ground-glow SPREAD, percent of the shipped radii (issue #32
			*  follow-up). Geometry only: the peak alpha stays put, the falloff flattens
			*  — and positions stay hardcoded (no "where" axis, see
			*  `docs/issue-32-glow-tuning.md` §2). */
			setGlowSize(value) {
				const next = clampSetting("glowSize", value);
				if (next === this.settings.glowSize) return;
				this.settings.glowSize = next;
				writeSetting("glowSize", next);
				if (this.enabled) this.applySettings();
				this.publish();
			}
			/** Restore every knob to the shipped defaults (persisted immediately). */
			resetDefaults() {
				this.settings = { ...SETTINGS_DEFAULTS };
				writeMode(this.settings.mode);
				writeSetting("blur", this.settings.blur);
				writeSetting("frost", this.settings.frost);
				writeSetting("brightness", this.settings.brightness);
				writeSetting("gap", this.settings.gap);
				writeSetting("glowStrength", this.settings.glowStrength);
				writeSetting("glowSize", this.settings.glowSize);
				writeGlow(this.settings.glow);
				if (this.enabled) this.applySettings();
				this.publish();
			}
			/** Re-read every knob from localStorage into memory. */
			reloadSettings() {
				this.settings = {
					mode: readMode(),
					blur: readSetting("blur"),
					frost: readSetting("frost"),
					brightness: readSetting("brightness"),
					gap: readSetting("gap"),
					glowStrength: readSetting("glowStrength"),
					glowSize: readSetting("glowSize"),
					glow: readGlow()
				};
			}
			buildSnapshot() {
				return {
					...this.settings,
					enabled: this.enabled,
					dark: this.dark
				};
			}
			publish() {
				this.snapshot = this.buildSnapshot();
				for (const listener of this.listeners) listener();
			}
			sync() {
				if (this.enabled) this.mount();
				else this.unmount();
				this.publish();
			}
			/** Write the knob-driven CSS variables and mode attributes onto <html>. */
			applySettings() {
				const style = document.documentElement.style;
				const dark = this.dark;
				const knobs = {
					"--dsh-glass-blur": `${this.settings.blur}px`,
					"--dsh-glass-frost": String(Math.min(this.settings.frost / 50, 1.4)),
					"--dsh-glass-brightness-black": String(dark ? Math.max(0, (50 - this.settings.brightness) / 50) : 0),
					"--dsh-glass-brightness-white": String(dark ? 0 : Math.max(0, (this.settings.brightness - 50) / 50)),
					"--dsh-glass-glow": this.settings.glow ? "1" : "0",
					"--dsh-glass-gap": `${this.settings.gap}px`,
					"--dsh-glass-glow-strength": String(this.settings.glowStrength / 100),
					"--dsh-glass-glow-size": String(this.settings.glowSize / 100)
				};
				for (const [property, value] of Object.entries(knobs)) style.setProperty(property, value);
				const compat = this.settings.mode === "compat";
				document.documentElement.toggleAttribute(GLASS_FLOAT_ATTRIBUTE, !compat);
				document.documentElement.toggleAttribute(GLASS_COMPAT_ATTRIBUTE, compat);
				const body = document.body;
				if (body !== null) for (const [property, value] of Object.entries(knobs)) body.style.setProperty(property, value);
			}
			mount() {
				this.ensureStyle();
				document.documentElement.setAttribute(GLASS_ATTRIBUTE, "");
				this.applySettings();
				this.ensureFades();
				if (this.seamDisposer === void 0) this.seamDisposer = startGlassSeamStamper();
			}
			unmount() {
				document.documentElement.removeAttribute(GLASS_ATTRIBUTE);
				document.documentElement.removeAttribute(GLASS_FLOAT_ATTRIBUTE);
				document.documentElement.removeAttribute(GLASS_COMPAT_ATTRIBUTE);
				for (const node of document.querySelectorAll("[data-dsh-glass-fade]")) node.remove();
				this.seamDisposer?.();
				this.seamDisposer = void 0;
				this.releaseStyle();
				const body = document.body;
				if (body !== null) for (const property of GLASS_KNOB_PROPERTIES) body.style.removeProperty(property);
			}
			/** Mount the glass stylesheet <style> tag (lazy — first enable only;
			*  re-append when toggling back on). The CSS text ships in the bundle as
			*  `GLASS_CSS_TEXT` (see `glass-css.gen.ts`), so no document work happens
			*  while the layer is off and only a detached/re-attached tag marks the
			*  on/off boundary after the first mount. */
			ensureStyle() {
				if (glassStyleTag !== null) {
					document.head.append(glassStyleTag);
					return;
				}
				const tag = document.createElement("style");
				tag.dataset.plugin = GLASS_STYLE_PLUGIN;
				tag.dataset.pluginCss = GLASS_STYLE_TAG_ID;
				tag.textContent = GLASS_CSS_TEXT;
				document.head.append(tag);
				glassStyleTag = tag;
			}
			/** Remove the lazily-mounted stylesheet tag (the layer's CSS leaves the
			*  document with it; the body attribute removal already made every rule
			*  inert). */
			releaseStyle() {
				glassStyleTag?.remove();
				glassStyleTag = null;
			}
			/** Insert the page-edge fade bands (or reuse the existing ones). */
			ensureFades() {
				if (document.querySelector("[data-dsh-glass-fade]") !== null) return;
				const holder = document.createElement("div");
				holder.innerHTML = FADE_MARKUP;
				for (const node of Array.from(holder.children)) if (node instanceof HTMLElement) document.body.append(node);
			}
		};
		//#endregion
		//#region src/client/HelpBadge.tsx
		/**
		* Shared "?" help badge used by the settings rows.
		*
		* Not an official primitive: dsh-client-ui-primitives ships `Tooltip`, but it
		* wants an anchor/focus contract (delay, dismissal, collision) that the rows do
		* not own. The badge carries the full help text in the native `title` attribute
		* plus an accessible name, which is what the rows shipped before issue #27 and
		* what they keep — only its styling moved into the shared row stylesheet.
		*/
		/**
		* Render the badge.
		* @param props.label - accessible name (localized "what is this" copy).
		* @param props.help - the full help text, shown by the native tooltip.
		* @returns the badge element.
		*/
		function HelpBadge({ label, help }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				role: "img",
				"aria-label": label,
				title: help,
				className: settings_row_module_css_default.help,
				children: "?"
			});
		}
		//#endregion
		//#region \0dsh-css:/home/Resona/Repos/dsh-tokyonight-theme/src/client/glass/GlassRow.module.css.mjs
		const css$1 = ".bwz3_a_controls{flex-direction:column;gap:10px;margin-top:6px;display:flex}.bwz3_a_row{flex-wrap:wrap;align-items:center;gap:10px;display:flex}.bwz3_a_sampleRow{align-items:center;gap:10px;display:flex}.bwz3_a_groundSample{border:.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm);flex:1;min-width:0;height:44px;overflow:hidden}.bwz3_a_rowLabel{width:92px;color:var(--dsw-alias-label-secondary);flex:none;font-size:12px;line-height:18px}.bwz3_a_rowHint{color:var(--dsw-alias-label-tertiary);margin-top:-4px;margin-left:102px;font-size:12px;line-height:18px}.bwz3_a_presetGroup{flex-wrap:wrap;gap:8px;display:flex}.bwz3_a_knob{align-items:center;gap:10px;display:flex}.bwz3_a_knobLabel{width:92px;color:var(--dsw-alias-label-secondary);flex:none;font-size:12px;line-height:18px}.bwz3_a_slider{-webkit-appearance:none;appearance:none;cursor:pointer;background:0 0;flex:1;min-width:0;height:20px;margin:0;padding:0}.bwz3_a_slider::-webkit-slider-runnable-track{background:linear-gradient(to right, var(--dsw-alias-state-business-primary) 0 var(--fill,0%), var(--dsw-alias-bg-layer-3) var(--fill,0%) 100%);border-radius:999px;height:4px}.bwz3_a_slider::-webkit-slider-thumb{-webkit-appearance:none;border:.5px solid var(--dsw-alias-border-l3);background:var(--dsw-alias-bg-layer-1);width:14px;height:14px;box-shadow:var(--dsw-elevation-soft);border-radius:50%;margin-top:-5px}.bwz3_a_slider:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:4px;border-radius:4px}.bwz3_a_numberWrap{flex:none;align-items:center;gap:6px;display:inline-flex}.bwz3_a_number{border:.5px solid var(--dsw-alias-border-l3);border-radius:var(--dsw-radius-sm);width:52px;height:28px;color:var(--dsw-alias-label-primary);font:inherit;text-align:right;font-variant-numeric:tabular-nums;background:0 0;padding:0 8px;font-size:13px;line-height:26px}.bwz3_a_number:focus-visible{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-business-primary) 35%, transparent);outline:none}.bwz3_a_unit{width:14px;color:var(--dsw-alias-label-tertiary);flex:none;font-size:12px;line-height:18px}";
		const tagId$1 = "dsh-tokyonight-theme/GlassRow.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-tokyonight-theme";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var GlassRow_module_css_default = {
			"controls": "bwz3_a_controls",
			"groundSample": "bwz3_a_groundSample",
			"knob": "bwz3_a_knob",
			"knobLabel": "bwz3_a_knobLabel",
			"number": "bwz3_a_number",
			"numberWrap": "bwz3_a_numberWrap",
			"presetGroup": "bwz3_a_presetGroup",
			"row": "bwz3_a_row",
			"rowHint": "bwz3_a_rowHint",
			"rowLabel": "bwz3_a_rowLabel",
			"sampleRow": "bwz3_a_sampleRow",
			"slider": "bwz3_a_slider",
			"unit": "bwz3_a_unit"
		};
		//#endregion
		//#region src/client/glass/glass-row.tsx
		/**
		* TokyoNight glass settings row — the second row of the plugin's own settings
		* page (issue #27) and of the plugin detail card. Holds the master on/off
		* switch plus every glass knob: mode (mica / compatibility), blur, frost and
		* backdrop brightness. Every write goes straight through to the glass layer,
		* so the skin moves live.
		*
		* Issue #27 (visual language): the two toggles are the official `Switch` atom
		* and the mode pick is the official `SegmentedControl`; the presets are
		* official `Button`s (a SegmentedControl cannot express "no preset matches").
		* The knobs stay a hand-drawn range — upstream ships no slider primitive — but
		* the value beside each slider is an editable box on the official input
		* geometry, so a precise value no longer has to be dragged.
		*/
		/** Number formatting for the value box: no float noise from the 0.5 step. */
		const formatValue = (value) => String(Math.round(value * 100) / 100);
		/**
		* One slider plus an editable value box, wired to a single number.
		*
		* Editing contract (issue #27): the box stages what is typed and commits on
		* Enter or blur — never per keystroke. Per-keystroke writes would re-run the
		* layer's setters (and the debounced persist) on every character, which is the
		* same trap item TT hit on the token-override editor. Out-of-range drafts clamp,
		* garbage reverts, Escape drops the draft, and Up/Down step by the axis step.
		*/
		function Knob(props) {
			const { label, value, min, max, step, unit, onChange } = props;
			const [draft, setDraft] = (0, react.useState)(null);
			const labelId = `${(0, react.useId)()}-knob`;
			/** Clamp to the axis, then snap to the step (float noise rounded away). */
			const clampSnap = (n) => {
				const snapped = Math.round(Math.min(max, Math.max(min, Number.isFinite(n) ? n : value)) / step) * step;
				return Math.min(max, Math.max(min, Math.round(snapped * 1e3) / 1e3));
			};
			const commit = () => {
				if (draft === null) return;
				const parsed = Number.parseFloat(draft.replace(",", "."));
				setDraft(null);
				if (!Number.isFinite(parsed)) return;
				const next = clampSnap(parsed);
				if (next !== value) onChange(next);
			};
			const fill = max > min ? (value - min) / (max - min) * 100 : 0;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: GlassRow_module_css_default.knob,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: GlassRow_module_css_default.knobLabel,
						id: labelId,
						children: label
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "range",
						className: GlassRow_module_css_default.slider,
						min,
						max,
						step,
						value,
						"aria-labelledby": labelId,
						"aria-valuetext": `${value}${unit}`,
						style: { "--fill": `${fill}%` },
						onChange: (e) => {
							onChange(clampSnap(Number(e.target.value)));
						}
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: GlassRow_module_css_default.numberWrap,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "text",
							inputMode: "decimal",
							className: GlassRow_module_css_default.number,
							"aria-labelledby": labelId,
							value: draft ?? formatValue(value),
							onChange: (e) => {
								setDraft(e.target.value);
							},
							onBlur: commit,
							onKeyDown: (e) => {
								if (e.key === "Enter") {
									e.preventDefault();
									commit();
									e.currentTarget.blur();
								} else if (e.key === "Escape") {
									e.preventDefault();
									setDraft(null);
									e.currentTarget.blur();
								} else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
									e.preventDefault();
									setDraft(null);
									onChange(clampSnap(value + (e.key === "ArrowUp" ? step : -step)));
								}
							}
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: GlassRow_module_css_default.unit,
							children: unit
						})]
					})
				]
			});
		}
		/** One-click material presets — blur/frost/brightness triples the row applies
		*  through the existing setters (the debounced persist coalesces the burst
		*  into one Host write). Brightness stays neutral (50) so every preset works
		*  in both schemes; the knobs remain for fine tuning. */
		const GLASS_PRESETS = [
			{
				id: "clear",
				key: "glass.presetClear",
				blur: 0,
				frost: 8,
				brightness: 50
			},
			{
				id: "standard",
				key: "glass.presetStandard",
				blur: SETTINGS_DEFAULTS.blur,
				frost: SETTINGS_DEFAULTS.frost,
				brightness: SETTINGS_DEFAULTS.brightness
			},
			{
				id: "frosted",
				key: "glass.presetFrosted",
				blur: 12,
				frost: 45,
				brightness: 50
			}
		];
		/**
		* Floating-card inset presets (issue #31) — a SEPARATE axis from the material
		* presets above, and deliberately not folded into them: `activePreset` matches
		* on the blur/frost/brightness triple, so a gap-only change would otherwise
		* flip the material row to "custom" for no reason. The three tiers sit inside
		* the knob's 4-24 range; the slider stays for anything in between.
		*/
		const GAP_PRESETS = [
			{
				id: "compact",
				key: "glass.gapCompact",
				gap: 8
			},
			{
				id: "standard",
				key: "glass.gapStandard",
				gap: SETTINGS_DEFAULTS.gap
			},
			{
				id: "loose",
				key: "glass.gapLoose",
				gap: 20
			}
		];
		/**
		* Render the glass row: title, the master switch, and — while enabled — the
		* mode picker and every knob.
		* @param props - composed slot props.
		* @returns the settings row.
		*/
		function GlassRow({ t, getState, subscribe, setEnabled, setMode, setBlur, setFrost, setBrightness, setGap, setGlow, setGlowStrength, setGlowSize, resetDefaults, onPreviewMain }) {
			const { enabled, mode, blur, frost, brightness, gap, glow, glowStrength, glowSize, dark } = (0, react.useSyncExternalStore)(subscribe, getState);
			const bgMin = dark ? 0 : 50;
			const bgMax = dark ? 50 : 100;
			const bgDisplay = Math.min(bgMax, Math.max(bgMin, brightness));
			const activePreset = GLASS_PRESETS.find((p) => p.blur === blur && p.frost === frost && p.brightness === brightness)?.id ?? "";
			const activeGapPreset = GAP_PRESETS.find((p) => p.gap === gap)?.id ?? "";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: settings_row_module_css_default.row,
				"data-tokyonight-row": "glass",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: settings_row_module_css_default.title,
						children: [t("glass.title"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HelpBadge, {
							label: t("glass.helpLabel"),
							help: t("glass.help")
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: settings_row_module_css_default.desc,
						children: t("glass.description")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: GlassRow_module_css_default.controls,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: GlassRow_module_css_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: GlassRow_module_css_default.rowLabel,
								children: t("glass.enable")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Switch, {
								checked: enabled,
								onChange: (next) => {
									setEnabled(next);
								},
								label: t("glass.enable")
							})]
						}), enabled && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassRow_module_css_default.row,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: GlassRow_module_css_default.rowLabel,
										children: t("glass.mode")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SegmentedControl, {
										id: "tokyonight-glass-mode",
										label: t("glass.mode"),
										value: mode,
										options: [{
											value: "mica",
											label: t("glass.modeMica")
										}, {
											value: "compat",
											label: t("glass.modeCompat")
										}],
										onChange: (next) => {
											setMode(next);
										}
									}),
									onPreviewMain !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: "ghost",
										onClick: onPreviewMain,
										children: t("glass.previewMode")
									})
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: GlassRow_module_css_default.rowHint,
								children: t("glass.modeHint")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassRow_module_css_default.row,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: GlassRow_module_css_default.rowLabel,
									children: t("glass.presets")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: GlassRow_module_css_default.presetGroup,
									role: "group",
									"aria-label": t("glass.presets"),
									children: GLASS_PRESETS.map((preset) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: activePreset === preset.id ? "primary" : "outline",
										"aria-pressed": activePreset === preset.id,
										onClick: () => {
											setBlur(preset.blur);
											setFrost(preset.frost);
											setBrightness(preset.brightness);
										},
										children: t(preset.key)
									}, preset.id))
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
								label: t("glass.blur"),
								value: blur,
								min: 0,
								max: 40,
								step: .5,
								unit: "px",
								onChange: setBlur
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
								label: t("glass.frost"),
								value: frost,
								min: 0,
								max: 100,
								step: 1,
								unit: "%",
								onChange: setFrost
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
								label: t("glass.brightness"),
								value: bgDisplay,
								min: bgMin,
								max: bgMax,
								step: 1,
								unit: "%",
								onChange: setBrightness
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: GlassRow_module_css_default.rowHint,
								children: t(dark ? "glass.brightnessHintDark" : "glass.brightnessHintLight")
							}),
							mode === "mica" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: GlassRow_module_css_default.row,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: GlassRow_module_css_default.rowLabel,
										children: t("glass.gap")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: GlassRow_module_css_default.presetGroup,
										role: "group",
										"aria-label": t("glass.gap"),
										children: GAP_PRESETS.map((preset) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
											size: "sm",
											variant: activeGapPreset === preset.id ? "primary" : "outline",
											"aria-pressed": activeGapPreset === preset.id,
											onClick: () => {
												setGap(preset.gap);
											},
											children: t(preset.key)
										}, preset.id))
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
									label: t("glass.gap"),
									value: gap,
									min: 4,
									max: 24,
									step: 1,
									unit: "px",
									onChange: setGap
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: GlassRow_module_css_default.rowHint,
									children: t("glass.gapHint")
								})
							] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassRow_module_css_default.row,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: GlassRow_module_css_default.rowLabel,
									children: t("glass.glow")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Switch, {
									checked: glow,
									onChange: (next) => {
										setGlow(next);
									},
									label: t("glass.glow")
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: GlassRow_module_css_default.rowHint,
								children: t("glass.glowHint")
							}),
							glow && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
								label: t("glass.glowStrength"),
								value: glowStrength,
								min: 0,
								max: 200,
								step: 5,
								unit: "%",
								onChange: setGlowStrength
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Knob, {
								label: t("glass.glowSize"),
								value: glowSize,
								min: 100,
								max: 250,
								step: 5,
								unit: "%",
								onChange: setGlowSize
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: GlassRow_module_css_default.sampleRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: GlassRow_module_css_default.knobLabel,
									children: t("glass.previewGround")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: GlassRow_module_css_default.groundSample,
									"data-dsh-glass-ground-sample": "",
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: GlassRow_module_css_default.rowHint,
								children: t("glass.previewGroundHint")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: GlassRow_module_css_default.row,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									onClick: () => {
										resetDefaults();
									},
									children: t("glass.reset")
								})
							})
						] })]
					})
				]
			});
		}
		//#endregion
		//#region src/client/LinksRow.tsx
		/**
		* GitHub repository — where a star lands. Keep the `-theme` name: it is the
		* current repo name (the pre-rename URL only redirects), and only COMPLETE
		* GitHub URLs use it (AGENTS.md「项目身份速览：三套名字」).
		*/
		const REPO_URL = "https://github.com/Re50Na/dsh-tokyonight-theme";
		/** GitHub issue tracker — where feedback lands. */
		const ISSUES_URL = `${REPO_URL}/issues`;
		/** The row's links: token-coloured, underlined, quiet. */
		const linkStyle = {
			color: "var(--dsw-alias-state-business-primary)",
			fontSize: 12,
			lineHeight: "18px",
			textDecoration: "underline",
			textUnderlineOffset: 3
		};
		/**
		* Render the feedback row: a title and the two links.
		* @param props - composed slot props.
		* @returns the row element tree.
		*/
		function LinksRow({ t }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: settings_row_module_css_default.row,
				"data-tokyonight-row": "links",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: settings_row_module_css_default.title,
					children: t("links.title")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						flexWrap: "wrap",
						gap: "16px"
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
						href: ISSUES_URL,
						target: "_blank",
						rel: "noreferrer noopener",
						style: linkStyle,
						children: t("links.issue")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
						href: REPO_URL,
						target: "_blank",
						rel: "noreferrer noopener",
						style: linkStyle,
						children: t("links.star")
					})]
				})]
			});
		}
		//#endregion
		//#region src/client/detail-card.tsx
		/**
		* Render the four preference rows on the plugin's own detail page.
		*
		* The rows carry their own title, help affordance and spacing (a bottom
		* border each), so the card is a plain column — the page owns the section
		* chrome (`[data-plugin-config]`).
		* @param props - the injected faces plus the framework seats.
		* @returns the stacked rows.
		*/
		function TokyoNightDetailCard(props) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: settings_row_module_css_default.stack,
				"data-tokyonight-detail-card": true,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TokyoNightRow, {
						...props.flavor,
						t: props.t
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(GlassRow, {
						...props.glass,
						t: props.t
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(LinksRow, { t: props.t })
				]
			});
		}
		//#endregion
		//#region \0dsh-css:/home/Resona/Repos/dsh-tokyonight-theme/src/client/settings-section.module.css.mjs
		const css = ".B-4-Hq_title{color:var(--dsw-alias-label-primary);margin:16px 0 0;font-size:16px;font-weight:500;line-height:24px}";
		const tagId = "dsh-tokyonight-theme/settings-section.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-tokyonight-theme";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var settings_section_module_css_default = { "title": "B-4-Hq_title" };
		//#endregion
		//#region src/client/settings-section.tsx
		/**
		* Render the TokyoNight settings page.
		* @param props - the injected faces plus the framework seats.
		* @returns the page: heading plus the four preference rows.
		*/
		function TokyoNightSettingsPage(props) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: settings_row_module_css_default.stack,
				"data-tokyonight-settings": true,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
						className: settings_section_module_css_default.title,
						children: props.t("page.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TokyoNightRow, {
						...props.flavor,
						t: props.t
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(GlassRow, {
						...props.glass,
						t: props.t,
						onPreviewMain: () => {
							props.close();
						}
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(LinksRow, { t: props.t })
				]
			});
		}
		//#endregion
		//#region src/client/locales.ts
		/**
		* Tokyo Night settings-row copy. The zh dictionary is the key-set source of
		* truth; every other dictionary mirrors it (guarded by tests/locales.spec.ts
		* asserting key-set equality against `zh`).
		*/
		/** Simplified Chinese dictionary. */
		const zh = {
			"nav.title": "Tokyo Night",
			"page.title": "TokyoNIght主题",
			"row.title": "Tokyo Night 主题",
			"row.description": "Night / Storm / Light 三款配色，一键切换。",
			"row.off": "关闭（官方主题）",
			"row.follow": "跟随系统深色/浅色",
			"row.followHint": "浅色时用 Light，深色时用下方选中的风味；跟随 Windows 的深浅色设置切换，原生标题栏与窗口按钮一起变。深色端默认 Night。",
			"row.followDark": "深色模式主题",
			"row.helpLabel": "关于 Tokyo Night 主题",
			"row.help": "基于 Tokyo Night 原版色板移植的三款配色：Light（浅色）、Night / Storm（深色）。选择后立即生效并持久保存。",
			"row.previewCode": "代码样本",
			"row.overrides": "自定义覆盖",
			"row.overridesHint": "按「--dsw-* 变量: 值」覆盖单个配色 token，例如 --dsw-static-blue-500: #7aa2f7。键名与值都在失焦时生效，清空值即删除。",
			"row.overridesEmpty": "暂无覆盖。点击「+ 添加」新增一条 token 覆盖。",
			"row.overridesAdd": "添加",
			"row.overridesRemove": "删除此覆盖",
			"row.overridesKey": "token 名称",
			"row.overridesValue": "token 值",
			"flavor.light.subtitle": "浅色",
			"flavor.storm.subtitle": "深色",
			"flavor.night.subtitle": "深色",
			"glass.title": "玻璃质感",
			"glass.description": "顶栏、侧边栏、输入框、统计行、轨迹视图的磨砂玻璃效果，一键开关。",
			"glass.helpLabel": "关于玻璃质感",
			"glass.help": "在 Tokyo Night 主题之上叠加磨砂玻璃皮肤：悬浮卡片（云母效果）或保持原版排版的兼容模式。模糊度、磨砂度、背景亮度均可调，并支持清透 / 标准 / 磨砂三档预设。云母效果会在顶栏、输入框等大面积区域做背景模糊，流式输出时较吃 GPU——在意性能请用兼容模式，或选「清透」预设。",
			"glass.enable": "总开关",
			"glass.mode": "模式",
			"glass.modeMica": "云母效果",
			"glass.modeCompat": "兼容模式",
			"glass.modeHint": "云母效果把界面改成悬浮磨砂卡片；兼容模式保持原版排版，只换玻璃材质（不模糊大面积区域，性能更稳妥）",
			"glass.previewMode": "看一眼主界面",
			"glass.presets": "预设",
			"glass.presetClear": "清透",
			"glass.presetStandard": "标准",
			"glass.presetFrosted": "磨砂",
			"glass.blur": "玻璃模糊度",
			"glass.frost": "磨砂度",
			"glass.brightness": "背景亮度",
			"glass.brightnessHintDark": "深色模式：0 压暗至纯黑，50 原样",
			"glass.brightnessHintLight": "浅色模式：50 原样，100 提亮至纯白",
			"glass.gap": "卡片间距",
			"glass.gapHint": "云母模式下悬浮卡片与窗口边缘的留白。调大后侧栏卡片自身会变窄，正文列宽不变；兼容模式不受影响。",
			"glass.gapCompact": "紧凑",
			"glass.gapStandard": "标准",
			"glass.gapLoose": "宽松",
			"glass.glow": "地面光斑",
			"glass.glowHint": "在渐变地面上叠加两枚柔光斑。光斑固定在屏幕上，各块玻璃面板会透出它的不同部位，所以默认关闭；打开后左上角会明显偏亮，强度可调，100% 即上述观感。背景亮度拉满时氛围归零，光斑会一并淡出",
			"glass.glowStrength": "地面光斑强度",
			"glass.glowSize": "地面光斑范围",
			"glass.previewGround": "地面样本",
			"glass.previewGroundHint": "这一段就是页面地面的真实取色：拖动「背景亮度」或切换「地面光斑」，它当场变化。",
			"glass.reset": "还原默认值",
			"links.title": "反馈与支持",
			"links.issue": "对 Tokyo Night 外观插件有问题或建议？欢迎在 GitHub 提 Issue",
			"links.star": "喜欢这个 Tokyo Night 外观插件？点一个 Star ⭐"
		};
		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"nav.title": "Tokyo Night",
			"page.title": "Tokyo Night appearance",
			"row.title": "Tokyo Night theme",
			"row.description": "Night / Storm / Light, one click away.",
			"row.off": "Turn off (official theme)",
			"row.follow": "Follow system light/dark",
			"row.followHint": "Light on light, the flavour picked below on dark; switches with the Windows light/dark setting, native title bar and window buttons included. The dark end defaults to Night.",
			"row.followDark": "Dark-end flavour",
			"row.helpLabel": "About the Tokyo Night theme",
			"row.help": "Three palettes based on Tokyo Night: Light (light), Night / Storm (dark). Applies instantly and persists.",
			"row.previewCode": "Code sample",
			"row.overrides": "Custom overrides",
			"row.overridesHint": "Override individual colour tokens as \"--dsw-* variable: value\", e.g. --dsw-static-blue-500: #7aa2f7. Both fields apply on blur; an empty value deletes the entry.",
			"row.overridesEmpty": "No overrides yet. Click \"+ Add\" to create one.",
			"row.overridesAdd": "Add",
			"row.overridesRemove": "Remove this override",
			"row.overridesKey": "Token name",
			"row.overridesValue": "Token value",
			"flavor.light.subtitle": "Light",
			"flavor.storm.subtitle": "Dark",
			"flavor.night.subtitle": "Dark",
			"glass.title": "Glassmorphism",
			"glass.description": "Frosted glass for the top bar, sidebar, composer, stats line and trajectory view — one click on/off.",
			"glass.helpLabel": "About glassmorphism",
			"glass.help": "A frosted-glass skin layered over the Tokyo Night theme: floating cards (Mica) or the stock layout with a glass material (Compatibility). Blur, frost and backdrop brightness are tunable, with Clear / Standard / Frosted presets. Mica blurs large areas (top bar, composer), so it costs GPU while output streams — pick Compatibility or the Clear preset if that matters.",
			"glass.enable": "Master switch",
			"glass.mode": "Mode",
			"glass.modeMica": "Mica",
			"glass.modeCompat": "Compatibility",
			"glass.modeHint": "Mica restyles the UI into floating frosted cards; Compatibility keeps the stock layout and only swaps the material to glass (no large-area blur — the lighter option)",
			"glass.previewMode": "Show the UI",
			"glass.presets": "Presets",
			"glass.presetClear": "Clear",
			"glass.presetStandard": "Standard",
			"glass.presetFrosted": "Frosted",
			"glass.blur": "Glass blur",
			"glass.frost": "Frost",
			"glass.brightness": "Backdrop brightness",
			"glass.brightnessHintDark": "Dark mode: 0 fades to pure black, 50 unchanged",
			"glass.brightnessHintLight": "Light mode: 50 unchanged, 100 brightens to pure white",
			"glass.gap": "Card spacing",
			"glass.gapHint": "Whitespace between the floating cards and the window edge (Mica only). A larger gap narrows the sidebar sheet itself; the reading column does not move. Compatibility mode is unaffected.",
			"glass.gapCompact": "Compact",
			"glass.gapStandard": "Standard",
			"glass.gapLoose": "Loose",
			"glass.glow": "Ground glows",
			"glass.glowHint": "Adds the two soft radial glows back on top of the gradient ground (the 0.6.3 look). They are pinned to the screen while the glass panes sit elsewhere, so each pane transmits a different slice of them — off by default; turning it on visibly brightens the top-left corner, and the strength knob below scales it (100% is that look). At maximum backdrop brightness the ambience collapses and the glows fade out with it",
			"glass.glowStrength": "Ground glow strength",
			"glass.glowSize": "Ground glow spread",
			"glass.previewGround": "Ground sample",
			"glass.previewGroundHint": "This strip is the page ground itself: drag the brightness knob or toggle the glows and it changes on the spot.",
			"glass.reset": "Reset to defaults",
			"links.title": "Feedback & support",
			"links.issue": "Found a problem with the Tokyo Night appearance plugin, or have an idea? Open an issue",
			"links.star": "Enjoying this Tokyo Night appearance plugin? Star it on GitHub ⭐"
		};
		/** Japanese dictionary. */
		const ja = {
			"nav.title": "Tokyo Night",
			"page.title": "Tokyo Night 外観設定",
			"row.title": "Tokyo Night テーマ",
			"row.description": "Night / Storm / Light の3色をワンクリックで切替。",
			"row.off": "オフ（標準テーマ）",
			"row.follow": "システムのライト/ダークに追従",
			"row.followHint": "ライトは Light、ダークは下で選んだフレーバー。Windows のライト/ダーク設定に合わせて切り替わり、ネイティブのタイトルバーとウィンドウボタンも追従します。ダーク側の既定は Night。",
			"row.followDark": "ダーク側のフレーバー",
			"row.helpLabel": "Tokyo Night テーマについて",
			"row.help": "Tokyo Night コミュニティの3色: Light（ライト）、Night / Storm（ダーク）。選択直後に反映され、保存されます。",
			"row.previewCode": "コードサンプル",
			"row.overrides": "カスタム上書き",
			"row.overridesHint": "「--dsw-* 変数: 値」の形で個別トークンを上書きします。例: --dsw-static-blue-500: #7aa2f7。フォーカスを外すと反映、空値で削除。",
			"row.overridesEmpty": "上書きはまだありません。「+ 追加」で作成します。",
			"row.overridesAdd": "追加",
			"row.overridesRemove": "この上書きを削除",
			"row.overridesKey": "トークン名",
			"row.overridesValue": "トークン値",
			"flavor.light.subtitle": "ライト",
			"flavor.storm.subtitle": "ダーク",
			"flavor.night.subtitle": "ダーク",
			"glass.title": "ガラス質感",
			"glass.description": "トップバー・サイドバー・入力欄・ステータス行・軌跡ビューにすりガラス効果、ワンクリックで ON/OFF。",
			"glass.helpLabel": "ガラス質感について",
			"glass.help": "Tokyo Night テーマの上に乗せるガラススキン: 浮遊カード（Mica）または原版レイアウト互換モード。ぼかし・曇り・背景輝度を調整でき、クリア / スタンダード / 曇りのプリセット付き。Mica はトップバーや入力欄など広い範囲をぼかすため、ストリーミング中は GPU を消費します。気になる場合は互換モードか「クリア」プリセットを。",
			"glass.enable": "マスタースイッチ",
			"glass.mode": "モード",
			"glass.modeMica": "Mica",
			"glass.modeCompat": "互換",
			"glass.modeHint": "Mica は浮遊するすりガラスカードに再構成。互換は原版レイアウトのまま素材だけガラスに（広範囲のぼかしなし＝軽い）",
			"glass.previewMode": "UI を見る",
			"glass.presets": "プリセット",
			"glass.presetClear": "クリア",
			"glass.presetStandard": "スタンダード",
			"glass.presetFrosted": "曇り",
			"glass.blur": "ぼかし",
			"glass.frost": "曇り",
			"glass.brightness": "背景の輝度",
			"glass.brightnessHintDark": "ダーク: 0 で純黒、50 でそのまま",
			"glass.brightnessHintLight": "ライト: 50 でそのまま、100 で純白",
			"glass.gap": "カード間隔",
			"glass.gapHint": "Mica モードで浮遊カードとウィンドウ端のあいだに取る余白。広げるとサイドバーのカード自体が細くなり、本文の列幅は変わりません。互換モードには影響しません。",
			"glass.gapCompact": "コンパクト",
			"glass.gapStandard": "標準",
			"glass.gapLoose": "ゆったり",
			"glass.glow": "地面の光だまり",
			"glass.glowHint": "グラデーションの地面に 2 つの柔らかな光だまりを重ねます（0.6.3 の見た目）。光だまりは画面に固定され、各ガラス面はその別々の部分を透かすため、既定ではオフ。オンにすると左上が明るくなります。下の強さで拡大でき、100% がその見た目です。背景の明るさを最大にすると雰囲気が 0 になり、光だまりも消えます",
			"glass.glowStrength": "地面の光だまりの強さ",
			"glass.glowSize": "地面の光だまりの広がり",
			"glass.previewGround": "地面サンプル",
			"glass.previewGroundHint": "この帯はページの地面そのものです。背景の輝度を動かすか光だまりを切り替えると、その場で変わります。",
			"glass.reset": "デフォルトに戻す",
			"links.title": "フィードバックとサポート",
			"links.issue": "Tokyo Night 外観プラグインの問題や提案がありますか？Issue を作成",
			"links.star": "この Tokyo Night 外観プラグインが気に入ったら GitHub でスターを ⭐"
		};
		/** Korean dictionary. */
		const ko = {
			"nav.title": "Tokyo Night",
			"page.title": "Tokyo Night 모양 설정",
			"row.title": "Tokyo Night 테마",
			"row.description": "Night / Storm / Light 세 가지 배색, 한 번의 클릭으로 전환.",
			"row.off": "끄기(기본 테마)",
			"row.follow": "시스템 밝기/어둡기 따르기",
			"row.followHint": "밝을 때는 Light, 어두울 때는 아래에서 고른 플레이버. Windows 밝기 설정에 따라 전환되며 기본 제목 표시줄과 창 버튼도 함께 바뀝니다. 어두운 쪽 기본값은 Night.",
			"row.followDark": "어두운 쪽 플레이버",
			"row.helpLabel": "Tokyo Night 테마 정보",
			"row.help": "Tokyo Night 커뮤니티의 세 가지 배색: Light(밝음), Night / Storm(어두움). 선택 즉시 적용되고 저장됩니다.",
			"row.previewCode": "코드 샘플",
			"row.overrides": "사용자 정의 오버라이드",
			"row.overridesHint": "\"--dsw-* 변수: 값\" 형태로 개별 토큰을 덮어씁니다. 예: --dsw-static-blue-500: #7aa2f7. 포커스를 벗어나면 적용, 빈 값은 삭제.",
			"row.overridesEmpty": "아직 오버라이드가 없습니다. \"+ 추가\"로 만드세요.",
			"row.overridesAdd": "추가",
			"row.overridesRemove": "이 오버라이드 삭제",
			"row.overridesKey": "토큰 이름",
			"row.overridesValue": "토큰 값",
			"flavor.light.subtitle": "밝음",
			"flavor.storm.subtitle": "어두움",
			"flavor.night.subtitle": "어두움",
			"glass.title": "글라스 질감",
			"glass.description": "상단바·사이드바·입력창·통계줄·궤적 뷰에 프러스트드 글라스 효과, 원클릭 ON/OFF.",
			"glass.helpLabel": "글라스 질감 정보",
			"glass.help": "Tokyo Night 테마 위에 얹는 글라스 스킨: 떠 있는 카드(Mica) 또는 원본 레이아웃 호환 모드. 블러·프로스트·배경 밝기를 조절할 수 있고 클리어/스탠다드/프로스트 프리셋이 있습니다. Mica는 상단 바·입력창 등 넓은 영역을 흐리게 하므로 스트리밍 중 GPU를 더 씁니다. 부담되면 호환 모드나 「클리어」 프리셋을 쓰세요.",
			"glass.enable": "마스터 스위치",
			"glass.mode": "모드",
			"glass.modeMica": "Mica",
			"glass.modeCompat": "호환",
			"glass.modeHint": "Mica는 UI를 떠 있는 프러스트드 카드로 변경. 호환은 원본 레이아웃을 유지하고 재질만 글라스로 (넓은 영역 블러 없음 = 더 가벼움)",
			"glass.previewMode": "UI 보기",
			"glass.presets": "프리셋",
			"glass.presetClear": "클리어",
			"glass.presetStandard": "스탠다드",
			"glass.presetFrosted": "프로스트",
			"glass.blur": "블러",
			"glass.frost": "프로스트",
			"glass.brightness": "배경 밝기",
			"glass.brightnessHintDark": "다크 모드: 0이면 순수 검정, 50이면 그대로",
			"glass.brightnessHintLight": "라이트 모드: 50이면 그대로, 100이면 순수 흰색",
			"glass.gap": "카드 간격",
			"glass.gapHint": "Mica 모드에서 떠 있는 카드와 창 가장자리 사이의 여백입니다. 넓히면 사이드바 카드 자체가 좁아지고 본문 열 너비는 그대로입니다. 호환 모드에는 영향이 없습니다.",
			"glass.gapCompact": "좁게",
			"glass.gapStandard": "표준",
			"glass.gapLoose": "넓게",
			"glass.glow": "지면 광점",
			"glass.glowHint": "그라데이션 지면 위에 부드러운 광점 두 개를 다시 올립니다(0.6.3 모양). 광점은 화면에 고정되어 각 유리 패널이 서로 다른 부분을 비추므로 기본값은 꺼짐이며, 켜면 왼쪽 위가 밝아집니다. 아래 강도로 키울 수 있고 100%가 그 모양입니다. 배경 밝기를 최대로 올리면 분위기가 0이 되어 광점도 사라집니다",
			"glass.glowStrength": "지면 광점 강도",
			"glass.glowSize": "지면 광점 범위",
			"glass.previewGround": "바닥 샘플",
			"glass.previewGroundHint": "이 띠는 페이지 바닥 그대로입니다. 배경 밝기를 움직이거나 빛무리를 켜면 바로 바뀝니다.",
			"glass.reset": "기본값으로 되돌리기",
			"links.title": "피드백 및 지원",
			"links.issue": "Tokyo Night 테마 플러그인에 문제나 제안이 있나요? 이슈를 남겨 주세요",
			"links.star": "이 Tokyo Night 테마 플러그인이 마음에 드셨다면 GitHub에서 스타를 ⭐"
		};
		/** Spanish dictionary. */
		const es = {
			"nav.title": "Tokyo Night",
			"page.title": "Aspecto de Tokyo Night",
			"row.title": "Tema Tokyo Night",
			"row.description": "Night / Storm / Light, a un clic.",
			"row.off": "Desactivar (tema oficial)",
			"row.follow": "Seguir el modo claro/oscuro del sistema",
			"row.followHint": "Light en claro y el sabor elegido abajo en oscuro; cambia con el ajuste de Windows, incluidos la barra de título nativa y los botones de la ventana. El extremo oscuro es Night por defecto.",
			"row.followDark": "Sabor del extremo oscuro",
			"row.helpLabel": "Acerca del tema Tokyo Night",
			"row.help": "Tres paletas basadas en Tokyo Night: Light (claro), Night / Storm (oscuro). Se aplican al instante y se guardan.",
			"row.previewCode": "Muestra de código",
			"row.overrides": "Anulaciones personalizadas",
			"row.overridesHint": "Anula tokens individuales como \"variable --dsw-*: valor\", p. ej. --dsw-static-blue-500: #7aa2f7. Se aplica al salir del campo; un valor vacío elimina la entrada.",
			"row.overridesEmpty": "Aún no hay anulaciones. Pulsa \"+ Añadir\" para crear una.",
			"row.overridesAdd": "Añadir",
			"row.overridesRemove": "Eliminar esta anulación",
			"row.overridesKey": "Nombre del token",
			"row.overridesValue": "Valor del token",
			"flavor.light.subtitle": "Claro",
			"flavor.storm.subtitle": "Oscuro",
			"flavor.night.subtitle": "Oscuro",
			"glass.title": "Vidrio esmerilado",
			"glass.description": "Efecto de vidrio esmerilado en barra superior, barra lateral, redactor, línea de estadísticas y vista de trayectoria: un clic para activarlo.",
			"glass.helpLabel": "Acerca del vidrio esmerilado",
			"glass.help": "Una piel de vidrio esmerilado sobre el tema Tokyo Night: tarjetas flotantes (Mica) o el diseño original con material de vidrio (Compatibilidad). Desenfoque, escarcha y brillo del fondo ajustables, con preajustes Claro / Estándar / Escarchado. Mica desenfoca zonas grandes (barra superior, cuadro de texto), así que consume GPU mientras llega la respuesta: usa Compatibilidad o el preajuste Claro si te importa.",
			"glass.enable": "Interruptor general",
			"glass.mode": "Modo",
			"glass.modeMica": "Mica",
			"glass.modeCompat": "Compatibilidad",
			"glass.modeHint": "Mica convierte la interfaz en tarjetas flotantes esmeriladas; Compatibilidad mantiene el diseño original y solo cambia el material (sin desenfoque de zonas grandes: más ligero)",
			"glass.previewMode": "Ver la interfaz",
			"glass.presets": "Preajustes",
			"glass.presetClear": "Claro",
			"glass.presetStandard": "Estándar",
			"glass.presetFrosted": "Escarchado",
			"glass.blur": "Desenfoque del vidrio",
			"glass.frost": "Escarcha",
			"glass.brightness": "Brillo del fondo",
			"glass.brightnessHintDark": "Modo oscuro: 0 atenúa a negro puro, 50 sin cambios",
			"glass.brightnessHintLight": "Modo claro: 50 sin cambios, 100 aclara hasta blanco puro",
			"glass.gap": "Espaciado de tarjetas",
			"glass.gapHint": "Espacio entre las tarjetas flotantes y el borde de la ventana (solo Mica). Al ampliarlo, la tarjeta de la barra lateral se estrecha; la columna de lectura no se mueve. El modo Compatibilidad no se ve afectado.",
			"glass.gapCompact": "Compacto",
			"glass.gapStandard": "Estándar",
			"glass.gapLoose": "Amplio",
			"glass.glow": "Destellos del fondo",
			"glass.glowHint": "Vuelve a añadir los dos destellos radiales suaves sobre el fondo degradado (el aspecto de 0.6.3). Están fijados a la pantalla y cada panel de vidrio deja pasar una parte distinta, por eso está desactivado por defecto; al activarlo se aclara la esquina superior izquierda y el control de intensidad de abajo lo amplía (100 % es ese aspecto). Con el brillo del fondo al máximo la ambientación se anula y los destellos desaparecen con ella",
			"glass.glowStrength": "Intensidad de los destellos",
			"glass.glowSize": "Extensión de los destellos",
			"glass.previewGround": "Muestra del fondo",
			"glass.previewGroundHint": "Esta banda es el fondo real de la página: mueve el brillo o activa los destellos y cambia al instante.",
			"glass.reset": "Restablecer valores",
			"links.title": "Comentarios y soporte",
			"links.issue": "¿Un problema o una idea con el plugin de apariencia Tokyo Night? Abre un issue",
			"links.star": "¿Te gusta este plugin de apariencia Tokyo Night? Dale una estrella en GitHub ⭐"
		};
		/** French dictionary. */
		const fr = {
			"nav.title": "Tokyo Night",
			"page.title": "Apparence Tokyo Night",
			"row.title": "Thème Tokyo Night",
			"row.description": "Night / Storm / Light, en un clic.",
			"row.off": "Désactiver (thème officiel)",
			"row.follow": "Suivre le clair/sombre du système",
			"row.followHint": "Light en clair, la saveur choisie ci-dessous en sombre ; bascule avec le réglage Windows, barre de titre native et boutons de fenêtre compris. L’extrémité sombre est Night par défaut.",
			"row.followDark": "Saveur de l’extrémité sombre",
			"row.helpLabel": "À propos du thème Tokyo Night",
			"row.help": "Trois palettes basées sur Tokyo Night : Light (clair), Night / Storm (sombre). Application immédiate et persistante.",
			"row.previewCode": "Échantillon de code",
			"row.overrides": "Remplacements personnalisés",
			"row.overridesHint": "Remplace des jetons individuellement sous la forme « variable --dsw-*: valeur », ex. --dsw-static-blue-500: #7aa2f7. Application à la sortie du champ ; une valeur vide supprime l'entrée.",
			"row.overridesEmpty": "Aucun remplacement pour l'instant. Cliquez sur « + Ajouter » pour en créer un.",
			"row.overridesAdd": "Ajouter",
			"row.overridesRemove": "Supprimer ce remplacement",
			"row.overridesKey": "Nom du jeton",
			"row.overridesValue": "Valeur du jeton",
			"flavor.light.subtitle": "Clair",
			"flavor.storm.subtitle": "Sombre",
			"flavor.night.subtitle": "Sombre",
			"glass.title": "Verre dépoli",
			"glass.description": "Effet verre dépoli sur la barre du haut, la barre latérale, le rédacteur, la ligne de stats et la vue de trajectoire — un clic pour activer.",
			"glass.helpLabel": "À propos du verre dépoli",
			"glass.help": "Une peau en verre dépoli par-dessus le thème Tokyo Night : cartes flottantes (Mica) ou mise en page d'origine avec un matériau verre (Compatibilité). Flou, givre et luminosité du fond réglables, avec les préréglages Clair / Standard / Givré. Mica floute de grandes zones (barre supérieure, champ de saisie) : cela consomme le GPU pendant la génération — préférez Compatibilité ou le préréglage Clair si c'est gênant.",
			"glass.enable": "Interrupteur principal",
			"glass.mode": "Mode",
			"glass.modeMica": "Mica",
			"glass.modeCompat": "Compatibilité",
			"glass.modeHint": "Mica transforme l'interface en cartes flottantes dépoli ; Compatibilité garde la mise en page d'origine et change seulement le matériau (pas de flou sur de grandes zones : plus léger)",
			"glass.previewMode": "Voir l’interface",
			"glass.presets": "Préréglages",
			"glass.presetClear": "Clair",
			"glass.presetStandard": "Standard",
			"glass.presetFrosted": "Givré",
			"glass.blur": "Flou du verre",
			"glass.frost": "Givre",
			"glass.brightness": "Luminosité du fond",
			"glass.brightnessHintDark": "Mode sombre : 0 atténue vers le noir pur, 50 inchangé",
			"glass.brightnessHintLight": "Mode clair : 50 inchangé, 100 éclaircit vers le blanc pur",
			"glass.gap": "Espacement des cartes",
			"glass.gapHint": "Espace entre les cartes flottantes et le bord de la fenêtre (Mica uniquement). En l'augmentant, la carte de la barre latérale se rétrécit ; la colonne de lecture ne bouge pas. Le mode Compatibilité n'est pas concerné.",
			"glass.gapCompact": "Compact",
			"glass.gapStandard": "Standard",
			"glass.gapLoose": "Large",
			"glass.glow": "Halos du fond",
			"glass.glowHint": "Rajoute les deux halos radiaux doux sur le fond dégradé (l'aspect 0.6.3). Ils sont fixés à l'écran et chaque panneau de verre en laisse passer une partie différente, d'où la valeur par défaut désactivée ; l'activer éclaircit le coin supérieur gauche, et le curseur d'intensité ci-dessous l'amplifie (100 % correspond à cet aspect). Au maximum de luminosité du fond, l'ambiance s'annule et les halos disparaissent avec elle",
			"glass.glowStrength": "Intensité des halos",
			"glass.glowSize": "Étendue des halos",
			"glass.previewGround": "Échantillon du fond",
			"glass.previewGroundHint": "Cette bande est le fond réel de la page : bougez la luminosité ou activez les halos et elle change aussitôt.",
			"glass.reset": "Restaurer les valeurs",
			"links.title": "Retours et support",
			"links.issue": "Un problème ou une idée pour le plugin d'apparence Tokyo Night ? Ouvrez une issue",
			"links.star": "Vous aimez ce plugin d'apparence Tokyo Night ? Laissez une Star sur GitHub ⭐"
		};
		/** German dictionary. */
		const de = {
			"nav.title": "Tokyo Night",
			"page.title": "Tokyo Night-Darstellung",
			"row.title": "Tokyo Night-Design",
			"row.description": "Night / Storm / Light, mit einem Klick.",
			"row.off": "Aus (offizielles Theme)",
			"row.follow": "System-Hell/Dunkel folgen",
			"row.followHint": "Light bei Hell, die unten gewählte Variante bei Dunkel; wechselt mit der Windows-Einstellung, inklusive nativer Titelleiste und Fensterknöpfe. Das dunkle Ende ist standardmäßig Night.",
			"row.followDark": "Variante fürs dunkle Ende",
			"row.helpLabel": "Über das Tokyo Night-Design",
			"row.help": "Drei Paletten auf Basis von Tokyo Night: Light (hell), Night / Storm (dunkel). Wirkt sofort und wird gespeichert.",
			"row.previewCode": "Codebeispiel",
			"row.overrides": "Benutzerdefinierte Überschreibungen",
			"row.overridesHint": "Einzelne Tokens als „--dsw-*-Variable: Wert“ überschreiben, z. B. --dsw-static-blue-500: #7aa2f7. Wirkt beim Verlassen des Feldes; ein leerer Wert löscht den Eintrag.",
			"row.overridesEmpty": "Noch keine Überschreibungen. Klicken Sie auf „+ Hinzufügen“, um eine anzulegen.",
			"row.overridesAdd": "Hinzufügen",
			"row.overridesRemove": "Diese Überschreibung entfernen",
			"row.overridesKey": "Token-Name",
			"row.overridesValue": "Token-Wert",
			"flavor.light.subtitle": "Hell",
			"flavor.storm.subtitle": "Dunkel",
			"flavor.night.subtitle": "Dunkel",
			"glass.title": "Glasmorphismus",
			"glass.description": "Milchglas-Effekt für obere Leiste, Seitenleiste, Eingabe, Statistikzeile und Trajektorienansicht – ein Klick an/aus.",
			"glass.helpLabel": "Über Glasmorphismus",
			"glass.help": "Eine Milchglas-Haut über dem Tokyo Night-Design: schwebende Karten (Mica) oder das Original-Layout mit Glas-Material (Kompatibilität). Unschärfe, Frost und Hintergrundhelligkeit einstellbar, mit den Voreinstellungen Klar / Standard / Frostig. Mica verwischt große Flächen (Kopfleiste, Eingabefeld) und kostet daher GPU, während die Antwort streamt — nimm Kompatibilität oder die Voreinstellung Klar, wenn das stört.",
			"glass.enable": "Hauptschalter",
			"glass.mode": "Modus",
			"glass.modeMica": "Mica",
			"glass.modeCompat": "Kompatibilität",
			"glass.modeHint": "Mica verwandelt die Oberfläche in schwebende Milchglas-Karten; Kompatibilität behält das Original-Layout und tauscht nur das Material (keine großen Unschärfeflächen — die leichtere Option)",
			"glass.previewMode": "UI ansehen",
			"glass.presets": "Voreinstellungen",
			"glass.presetClear": "Klar",
			"glass.presetStandard": "Standard",
			"glass.presetFrosted": "Frostig",
			"glass.blur": "Glas-Unschärfe",
			"glass.frost": "Frost",
			"glass.brightness": "Hintergrundhelligkeit",
			"glass.brightnessHintDark": "Dunkelmodus: 0 verdunkelt zu reinem Schwarz, 50 unverändert",
			"glass.brightnessHintLight": "Hellmodus: 50 unverändert, 100 hellt zu reinem Weiß auf",
			"glass.gap": "Kartenabstand",
			"glass.gapHint": "Abstand zwischen den schwebenden Karten und dem Fensterrand (nur Mica). Ein größerer Abstand verschmälert die Seitenleisten-Karte selbst; die Lesespalte bleibt gleich. Der Kompatibilitätsmodus ist nicht betroffen.",
			"glass.gapCompact": "Kompakt",
			"glass.gapStandard": "Standard",
			"glass.gapLoose": "Weit",
			"glass.glow": "Hintergrund-Lichtflecken",
			"glass.glowHint": "Legt die beiden weichen Lichtflecken wieder über den Verlaufs-Hintergrund (das Aussehen von 0.6.3). Sie sind am Bildschirm fixiert und jede Glasscheibe lässt einen anderen Ausschnitt durch, deshalb standardmäßig aus; eingeschaltet hellt sich die linke obere Ecke auf, und der Regler für die Stärke darunter verstärkt sie (100 % entspricht diesem Aussehen). Bei maximaler Hintergrundhelligkeit fällt die Ambience auf 0 und die Lichtflecken verschwinden mit",
			"glass.glowStrength": "Stärke der Lichtflecken",
			"glass.glowSize": "Ausdehnung der Lichtflecken",
			"glass.previewGround": "Bodenprobe",
			"glass.previewGroundHint": "Dieser Streifen ist der echte Seitenhintergrund: Helligkeit ziehen oder Lichtflecken einschalten – er ändert sich sofort.",
			"glass.reset": "Standardwerte wiederherstellen",
			"links.title": "Feedback & Support",
			"links.issue": "Problem oder Idee zum Tokyo Night-Design-Plugin? Eröffnen Sie ein Issue",
			"links.star": "Gefällt Ihnen dieses Tokyo Night-Design-Plugin? Geben Sie ihm einen Star auf GitHub ⭐"
		};
		const TOKYONIGHT_FLAVORS = [
			{
				themeId: "tokyonight-light",
				colorScheme: "light",
				label: "Light",
				accent: "#2959aa",
				tokens: {
					"--dsw-static-amber-100": "color-mix(in srgb, #8f5e15 20%, #e6e7ed)",
					"--dsw-static-amber-400": "color-mix(in srgb, #8f5e15 70%, #e6e7ed)",
					"--dsw-static-amber-500": "#8f5e15",
					"--dsw-static-amber-600": "#8f5e15",
					"--dsw-static-amber-900": "color-mix(in srgb, #8f5e15 32%, #e6e7ed)",
					"--dsw-static-blue-100": "color-mix(in srgb, #2959aa 22%, #e6e7ed)",
					"--dsw-static-blue-300": "color-mix(in srgb, #2959aa 48%, #e6e7ed)",
					"--dsw-static-blue-400": "color-mix(in srgb, #2959aa 65%, #e6e7ed)",
					"--dsw-static-blue-450": "color-mix(in srgb, #2959aa 82%, #e6e7ed)",
					"--dsw-static-blue-500": "#2959aa",
					"--dsw-static-blue-50": "color-mix(in srgb, #2959aa 8%, #e6e7ed)",
					"--dsw-static-blue-50p": "color-mix(in srgb, #2959aa 12%, #e6e7ed)",
					"--dsw-static-blue-600": "color-mix(in srgb, #2959aa 82%, #e6e7ed)",
					"--dsw-static-blue-75": "color-mix(in srgb, #2959aa 16%, #e6e7ed)",
					"--dsw-static-blue-800": "color-mix(in srgb, #2959aa 50%, #e6e7ed)",
					"--dsw-static-blue-900": "color-mix(in srgb, #2959aa 30%, #343b58)",
					"--dsw-static-blue-950": "color-mix(in srgb, #2959aa 26%, #e6e7ed)",
					"--dsw-static-deepseek-100": "color-mix(in srgb, #2959aa 22%, #e6e7ed)",
					"--dsw-static-deepseek-200": "color-mix(in srgb, #2959aa 34%, #e6e7ed)",
					"--dsw-static-deepseek-300": "color-mix(in srgb, #2959aa 48%, #e6e7ed)",
					"--dsw-static-deepseek-400": "color-mix(in srgb, #2959aa 65%, #e6e7ed)",
					"--dsw-static-deepseek-450": "color-mix(in srgb, #2959aa 82%, #e6e7ed)",
					"--dsw-static-deepseek-500": "#2959aa",
					"--dsw-static-deepseek-50": "color-mix(in srgb, #2959aa 8%, #e6e7ed)",
					"--dsw-static-deepseek-600": "color-mix(in srgb, #2959aa 82%, #e6e7ed)",
					"--dsw-static-deepseek-700-delete": "color-mix(in srgb, #2959aa 66%, #e6e7ed)",
					"--dsw-static-deepseek-800": "color-mix(in srgb, #2959aa 50%, #e6e7ed)",
					"--dsw-static-deepseek-900": "color-mix(in srgb, #2959aa 38%, #e6e7ed)",
					"--dsw-static-green-100": "color-mix(in srgb, #385f0d 18%, #e6e7ed)",
					"--dsw-static-green-400": "color-mix(in srgb, #385f0d 80%, #e6e7ed)",
					"--dsw-static-green-500": "#385f0d",
					"--dsw-static-green-500-a08": "color-mix(in srgb, #385f0d 8%, transparent)",
					"--dsw-static-green-500-a12": "color-mix(in srgb, #385f0d 12%, transparent)",
					"--dsw-static-green-900": "color-mix(in srgb, #385f0d 30%, #e6e7ed)",
					"--dsw-static-neutral-00": "#e6e7ed",
					"--dsw-static-neutral-1000": "#343b58",
					"--dsw-static-neutral-100": "#cbcdd7",
					"--dsw-static-neutral-150": "#bdbfcb",
					"--dsw-static-neutral-200": "#696f85",
					"--dsw-static-neutral-250": "#696f85",
					"--dsw-static-neutral-300": "#5d637a",
					"--dsw-static-neutral-400": "#6c6e75",
					"--dsw-static-neutral-500": "#464c67",
					"--dsw-static-neutral-50": "#e1e2e9",
					"--dsw-static-neutral-550": "#464c67",
					"--dsw-static-neutral-600": "#40434f",
					"--dsw-static-neutral-700": "#40434f",
					"--dsw-static-neutral-800": "#343b58",
					"--dsw-static-neutral-850": "#343b58",
					"--dsw-static-neutral-900": "#343b58",
					"--dsw-static-neutral-bluish-00": "#e6e7ed",
					"--dsw-static-neutral-bluish-1000": "#343b58",
					"--dsw-static-neutral-bluish-100": "#cbcdd7",
					"--dsw-static-neutral-bluish-150": "#bdbfcb",
					"--dsw-static-neutral-bluish-200": "#696f85",
					"--dsw-static-neutral-bluish-300": "#5d637a",
					"--dsw-static-neutral-bluish-400": "#6c6e75",
					"--dsw-static-neutral-bluish-500": "#464c67",
					"--dsw-static-neutral-bluish-50": "#e1e2e9",
					"--dsw-static-neutral-bluish-600": "#40434f",
					"--dsw-static-neutral-bluish-60": "#e1e2e9",
					"--dsw-static-neutral-bluish-700": "#40434f",
					"--dsw-static-neutral-bluish-750": "#343b58",
					"--dsw-static-neutral-bluish-75": "#d8d9e1",
					"--dsw-static-neutral-bluish-800": "#343b58",
					"--dsw-static-neutral-bluish-850": "#343b58",
					"--dsw-static-neutral-bluish-875": "#343b58",
					"--dsw-static-neutral-bluish-900": "#343b58",
					"--dsw-static-neutral-bluish-950": "#343b58",
					"--dsw-static-red-100": "color-mix(in srgb, #8c4351 20%, #e6e7ed)",
					"--dsw-static-red-400": "color-mix(in srgb, #8c4351 70%, #e6e7ed)",
					"--dsw-static-red-400-a12": "color-mix(in srgb, #a77480 12%, transparent)",
					"--dsw-static-red-500": "#8c4351",
					"--dsw-static-red-50": "color-mix(in srgb, #8c4351 10%, #e6e7ed)",
					"--dsw-static-red-600": "#8c4351",
					"--dsw-static-red-600-a08": "color-mix(in srgb, #8c4351 8%, transparent)",
					"--dsw-static-red-900": "color-mix(in srgb, #8c4351 34%, #e6e7ed)",
					"--dsw-alias-bg-base": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-bg-document-preview": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-bg-document-selection": "color-mix(in srgb, var(--dsw-static-blue-500) 40%, transparent)",
					"--dsw-alias-label-document-preview": "var(--dsw-static-neutral-bluish-700)",
					"--dsw-alias-bg-layer-1": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-bg-layer-2": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-bg-layer-3": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.24)",
					"--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.12)",
					"--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.48)",
					"--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
					"--dsw-alias-bg-mask-drop": "rgba(255, 255, 255, 0.7)",
					"--dsw-alias-bg-module-platform": "var(--dsw-static-neutral-bluish-60)",
					"--dsw-alias-bg-multi-select": "var(--dsw-static-neutral-bluish-60)",
					"--dsw-alias-bg-overlay": "var(--dsw-static-neutral-bluish-150)",
					"--dsw-alias-bg-skeleton": "rgba(0, 0, 0, 0.04)",
					"--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0)",
					"--dsw-alias-border-inverted": "rgba(0, 0, 0, 0)",
					"--dsw-alias-border-l1": "rgba(0, 0, 0, 0.04)",
					"--dsw-alias-border-l2-darkmode-thin": "rgba(0, 0, 0, 0.1)",
					"--dsw-alias-border-l2": "rgba(0, 0, 0, 0.1)",
					"--dsw-alias-border-l3": "rgba(0, 0, 0, 0.12)",
					"--dsw-alias-border-l4": "rgba(0, 0, 0, 0.16)",
					"--dsw-alias-brand-primary-invert": "var(--dsw-static-neutral-bluish-1000)",
					"--dsw-alias-brand-primary-new-colorprimary-new-color": "#2959aa",
					"--dsw-alias-brand-primary": "var(--dsw-static-neutral-bluish-1000)",
					"--dsw-alias-brand-text": "var(--dsw-static-neutral-bluish-1000)",
					"--dsw-alias-button-contrast-fill": "var(--dsw-static-neutral-bluish-700)",
					"--dsw-alias-button-elevated-fill": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-button-floating-fill": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-button-floating-hover": "var(--dsw-static-neutral-bluish-75)",
					"--dsw-alias-button-ghost-active-border": "var(--dsw-static-neutral-bluish-500)",
					"--dsw-alias-button-ghost-active-fill": "var(--dsw-static-neutral-bluish-100)",
					"--dsw-alias-button-ghost-active-hover": "var(--dsw-static-neutral-bluish-150)",
					"--dsw-alias-button-info-fill": "var(--dsw-static-deepseek-500)",
					"--dsw-alias-button-info-hover": "var(--dsw-static-deepseek-400)",
					"--dsw-alias-button-primary-dimmed": "var(--dsw-static-neutral-bluish-100)",
					"--dsw-alias-button-primary-fill": "var(--dsw-alias-brand-primary)",
					"--dsw-alias-button-primary-hover": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-button-tool-bar-fill-invisible": "rgba(31, 31, 31, 0.36)",
					"--dsw-alias-button-tool-bar-fill": "rgba(84, 85, 87, 0.5)",
					"--dsw-alias-button-tool-bar-hover": "rgba(84, 85, 87, 0.6)",
					"--dsw-alias-interactive-bg-active": "rgba(38, 49, 72, 0.1)",
					"--dsw-alias-interactive-bg-hover-accent": "rgba(38, 49, 72, 0.14)",
					"--dsw-alias-interactive-bg-hover-danger": "rgba(236, 19, 19, 0.05)",
					"--dsw-alias-interactive-bg-hover-solid": "var(--dsw-static-neutral-bluish-75)",
					"--dsw-alias-interactive-bg-hover": "rgba(38, 49, 72, 0.06)",
					"--dsw-alias-label-caption": "var(--dsw-static-neutral-bluish-400)",
					"--dsw-alias-label-deep-diving": "color-mix(in srgb, var(--dsw-static-deepseek-500) 70%, var(--dsw-static-blue-950))",
					"--dsw-alias-label-deep-diving-shimmer": "color-mix(in srgb, var(--dsw-static-deepseek-500) 30%, var(--dsw-static-blue-950))",
					"--dsw-alias-label-dimmed": "var(--dsw-static-neutral-bluish-200)",
					"--dsw-alias-label-primary-bluish": "var(--dsw-static-blue-900)",
					"--dsw-alias-label-primary-dimmed": "var(--dsw-static-neutral-bluish-950)",
					"--dsw-alias-label-primary-foreground": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-label-primary-inverted": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-label-primary": "var(--dsw-static-neutral-bluish-1000)",
					"--dsw-alias-label-secondary": "var(--dsw-static-neutral-bluish-700)",
					"--dsw-alias-label-shimmer": "color-mix(in srgb, var(--dsw-static-neutral-1000) 30%, transparent)",
					"--dsw-alias-label-tertiary": "var(--dsw-static-neutral-bluish-600)",
					"--dsw-alias-menu-icon": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-link": "#33635c",
					"--dsw-alias-markdown-citation": "var(--dsw-static-neutral-bluish-100)",
					"--dsw-alias-markdown-code-block-banner": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-markdown-code-block": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-markdown-code-segment-selected": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-markdown-code-segment-unselected": "var(--dsw-static-neutral-bluish-75)",
					"--dsw-alias-markdown-inline-code": "var(--dsw-static-neutral-50)",
					"--dsw-alias-markdown-placeholder": "var(--dsw-static-neutral-bluish-60)",
					"--dsw-alias-markdown-tag": "var(--dsw-static-neutral-bluish-75)",
					"--dsw-alias-scrollbar-bg-l1": "var(--dsw-static-neutral-200)",
					"--dsw-alias-scrollbar-bg-l2": "var(--dsw-static-neutral-200)",
					"--dsw-alias-scrollbar-hover-l1": "var(--dsw-static-neutral-300)",
					"--dsw-alias-scrollbar-hover-l2": "var(--dsw-static-neutral-300)",
					"--dsw-alias-state-business-primary": "var(--dsw-static-deepseek-500)",
					"--dsw-alias-state-business-tertiary": "var(--dsw-static-deepseek-100)",
					"--dsw-alias-code-diff-added": "var(--dsw-static-green-500-a08)",
					"--dsw-alias-code-diff-deleted": "var(--dsw-static-red-600-a08)",
					"--dsw-alias-file-diff-added-bg": "var(--dsw-static-green-500-a08)",
					"--dsw-alias-file-diff-added-gutter": "color-mix(in srgb, var(--dsw-static-green-500) 4%, transparent)",
					"--dsw-alias-file-diff-added-marker": "var(--dsw-static-green-500)",
					"--dsw-alias-file-diff-deleted-bg": "var(--dsw-static-red-600-a08)",
					"--dsw-alias-file-diff-deleted-gutter": "color-mix(in srgb, var(--dsw-static-red-500) 4%, transparent)",
					"--dsw-alias-file-diff-deleted-marker": "var(--dsw-static-red-500)",
					"--dsw-alias-state-error-primary": "var(--dsw-static-red-600)",
					"--dsw-alias-state-error-secondary": "var(--dsw-static-red-400)",
					"--dsw-alias-state-idle-primary": "var(--dsw-static-neutral-300)",
					"--dsw-alias-state-success-primary": "var(--dsw-static-green-500)",
					"--dsw-alias-state-success-secondary": "var(--dsw-static-green-400)",
					"--dsw-alias-state-success-tertiary": "var(--dsw-static-green-100)",
					"--dsw-alias-state-warn-label": "var(--dsw-static-amber-600)",
					"--dsw-alias-state-warn-primary": "var(--dsw-static-amber-500)",
					"--dsw-alias-state-warn-secondary": "var(--dsw-static-amber-400)",
					"--dsw-alias-state-warn-tertiary": "var(--dsw-static-amber-100)",
					"--dsw-alias-switch-thumb": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-toast-bg": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-toast-label": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-tooltip-bg": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-tooltip-key-bg": "color-mix(in srgb, var(--dsw-alias-tooltip-bg), white 18%)",
					"--dsw-alias-turn-trigger-bg": "var(--dsw-alias-markdown-code-block)",
					"--dsw-alias-turn-trigger-bg-hover": "var(--dsw-alias-interactive-bg-hover)",
					"--dsw-alias-menu-group-header-fill": "color-mix(in srgb, var(--dsw-alias-bg-layer-3) 94%, transparent)",
					"--dsw-specific-bubble-highlight": "var(--dsw-static-deepseek-200)",
					"--dsw-specific-bubble": "var(--dsw-static-deepseek-50)",
					"--dsw-specific-input-major": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-specific-login-input": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-specific-menu": "var(--dsw-menu-surface-fill)",
					"--dsw-specific-selector": "var(--dsw-static-neutral-bluish-60)",
					"--dsw-specific-sidebar-fill": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-specific-sidebar-nav-item-active-accent": "var(--dsw-static-deepseek-100)",
					"--dsw-specific-sidebar-nav-item-active": "var(--dsw-static-neutral-bluish-100)",
					"--dsw-specific-sidebar-nav-item-hover": "var(--dsw-static-neutral-bluish-75)",
					"--dsw-specific-tip": "var(--dsw-static-neutral-bluish-60)",
					"--dsw-menu-surface-fill": "color-mix(in srgb, var(--dsw-alias-bg-layer-3) 58%, transparent)"
				}
			},
			{
				themeId: "tokyonight-storm",
				colorScheme: "dark",
				label: "Storm",
				accent: "#7aa2f7",
				tokens: {
					"--dsw-static-amber-100": "color-mix(in srgb, #e0af68 20%, #2a2e44)",
					"--dsw-static-amber-400": "color-mix(in srgb, #e0af68 70%, #2a2e44)",
					"--dsw-static-amber-500": "#e0af68",
					"--dsw-static-amber-600": "#e0af68",
					"--dsw-static-amber-900": "color-mix(in srgb, #e0af68 18%, #24283b)",
					"--dsw-static-blue-100": "color-mix(in srgb, #7aa2f7 24%, #2a2e44)",
					"--dsw-static-blue-300": "color-mix(in srgb, #7aa2f7 50%, #2a2e44)",
					"--dsw-static-blue-400": "color-mix(in srgb, #7aa2f7 66%, #2a2e44)",
					"--dsw-static-blue-450": "color-mix(in srgb, #7aa2f7 84%, #2a2e44)",
					"--dsw-static-blue-500": "#7aa2f7",
					"--dsw-static-blue-50": "color-mix(in srgb, #7aa2f7 10%, #2a2e44)",
					"--dsw-static-blue-50p": "color-mix(in srgb, #7aa2f7 14%, #2a2e44)",
					"--dsw-static-blue-600": "color-mix(in srgb, #7aa2f7 84%, #2a2e44)",
					"--dsw-static-blue-75": "color-mix(in srgb, #7aa2f7 18%, #2a2e44)",
					"--dsw-static-blue-800": "color-mix(in srgb, #7aa2f7 10%, #24283b)",
					"--dsw-static-blue-900": "color-mix(in srgb, #7aa2f7 14%, #24283b)",
					"--dsw-static-blue-950": "color-mix(in srgb, #7aa2f7 10%, #24283b)",
					"--dsw-static-deepseek-100": "color-mix(in srgb, #7aa2f7 24%, #2a2e44)",
					"--dsw-static-deepseek-200": "color-mix(in srgb, #7aa2f7 36%, #2a2e44)",
					"--dsw-static-deepseek-300": "color-mix(in srgb, #7aa2f7 50%, #2a2e44)",
					"--dsw-static-deepseek-400": "color-mix(in srgb, #7aa2f7 66%, #2a2e44)",
					"--dsw-static-deepseek-450": "color-mix(in srgb, #7aa2f7 84%, #2a2e44)",
					"--dsw-static-deepseek-500": "#7aa2f7",
					"--dsw-static-deepseek-50": "color-mix(in srgb, #7aa2f7 10%, #2a2e44)",
					"--dsw-static-deepseek-600": "color-mix(in srgb, #7aa2f7 84%, #2a2e44)",
					"--dsw-static-deepseek-700-delete": "color-mix(in srgb, #7aa2f7 68%, #2a2e44)",
					"--dsw-static-deepseek-800": "color-mix(in srgb, #7aa2f7 10%, #24283b)",
					"--dsw-static-deepseek-900": "color-mix(in srgb, #7aa2f7 14%, #24283b)",
					"--dsw-static-green-100": "color-mix(in srgb, #9ece6a 18%, #2a2e44)",
					"--dsw-static-green-400": "color-mix(in srgb, #9ece6a 80%, #2a2e44)",
					"--dsw-static-green-500": "#9ece6a",
					"--dsw-static-green-500-a08": "color-mix(in srgb, #9ece6a 8%, transparent)",
					"--dsw-static-green-500-a12": "color-mix(in srgb, #9ece6a 12%, transparent)",
					"--dsw-static-green-900": "color-mix(in srgb, #9ece6a 18%, #24283b)",
					"--dsw-static-neutral-00": "#a9b1d6",
					"--dsw-static-neutral-1000": "#24283b",
					"--dsw-static-neutral-100": "#959cbf",
					"--dsw-static-neutral-150": "#959cbf",
					"--dsw-static-neutral-200": "#888faf",
					"--dsw-static-neutral-250": "#888faf",
					"--dsw-static-neutral-300": "#7a81a0",
					"--dsw-static-neutral-400": "#6d7390",
					"--dsw-static-neutral-500": "#414868",
					"--dsw-static-neutral-50": "#a9b1d6",
					"--dsw-static-neutral-550": "#3a405d",
					"--dsw-static-neutral-600": "#3a405d",
					"--dsw-static-neutral-700": "#323852",
					"--dsw-static-neutral-800": "#323852",
					"--dsw-static-neutral-850": "#2a2e44",
					"--dsw-static-neutral-900": "#272b40",
					"--dsw-static-neutral-bluish-00": "#a9b1d6",
					"--dsw-static-neutral-bluish-1000": "#24283b",
					"--dsw-static-neutral-bluish-100": "#959cbf",
					"--dsw-static-neutral-bluish-150": "#959cbf",
					"--dsw-static-neutral-bluish-200": "#888faf",
					"--dsw-static-neutral-bluish-300": "#7a81a0",
					"--dsw-static-neutral-bluish-400": "#6d7390",
					"--dsw-static-neutral-bluish-500": "#414868",
					"--dsw-static-neutral-bluish-50": "#a9b1d6",
					"--dsw-static-neutral-bluish-600": "#3a405d",
					"--dsw-static-neutral-bluish-60": "#9aa5ce",
					"--dsw-static-neutral-bluish-700": "#323852",
					"--dsw-static-neutral-bluish-750": "#323852",
					"--dsw-static-neutral-bluish-75": "#9aa5ce",
					"--dsw-static-neutral-bluish-800": "#323852",
					"--dsw-static-neutral-bluish-850": "#2a2e44",
					"--dsw-static-neutral-bluish-875": "#272b40",
					"--dsw-static-neutral-bluish-900": "#272b40",
					"--dsw-static-neutral-bluish-950": "#24283b",
					"--dsw-static-red-100": "color-mix(in srgb, #f7768e 20%, #2a2e44)",
					"--dsw-static-red-400": "color-mix(in srgb, #f7768e 70%, #2a2e44)",
					"--dsw-static-red-400-a12": "color-mix(in srgb, #b96078 12%, transparent)",
					"--dsw-static-red-500": "#f7768e",
					"--dsw-static-red-50": "color-mix(in srgb, #f7768e 10%, #2a2e44)",
					"--dsw-static-red-600": "#f7768e",
					"--dsw-static-red-600-a08": "color-mix(in srgb, #f7768e 8%, transparent)",
					"--dsw-static-red-900": "color-mix(in srgb, #f7768e 34%, #2a2e44)",
					"--dsw-alias-bg-base": "var(--dsw-static-neutral-bluish-950)",
					"--dsw-alias-bg-document-preview": "var(--dsw-static-neutral-bluish-950)",
					"--dsw-alias-bg-document-selection": "color-mix(in srgb, var(--dsw-static-blue-500) 40%, transparent)",
					"--dsw-alias-label-document-preview": "var(--dsw-static-neutral-bluish-75)",
					"--dsw-alias-bg-layer-1": "var(--dsw-static-neutral-bluish-875)",
					"--dsw-alias-bg-layer-2": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-bg-layer-3": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.5)",
					"--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.2)",
					"--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.48)",
					"--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
					"--dsw-alias-bg-mask-drop": "rgba(39, 39, 48, 0.7)",
					"--dsw-alias-bg-module-platform": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-bg-multi-select": "var(--dsw-static-neutral-850)",
					"--dsw-alias-bg-overlay": "var(--dsw-static-neutral-bluish-700)",
					"--dsw-alias-bg-skeleton": "rgba(255, 255, 255, 0.08)",
					"--dsw-alias-border-inverted2": "rgba(255, 255, 255, 0.08)",
					"--dsw-alias-border-inverted": "rgba(255, 255, 255, 0.06)",
					"--dsw-alias-border-l1": "rgba(255, 255, 255, 0.06)",
					"--dsw-alias-border-l2-darkmode-thin": "rgba(255, 255, 255, 0.06)",
					"--dsw-alias-border-l2": "rgba(255, 255, 255, 0.12)",
					"--dsw-alias-border-l3": "rgba(255, 255, 255, 0.16)",
					"--dsw-alias-border-l4": "rgba(255, 255, 255, 0.2)",
					"--dsw-alias-brand-primary-invert": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-brand-primary-new-colorprimary-new-color": "#7aa2f7",
					"--dsw-alias-brand-primary": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-brand-text": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-button-contrast-fill": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-button-elevated-fill": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-button-floating-fill": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-button-floating-hover": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-button-ghost-active-border": "var(--dsw-static-neutral-bluish-600)",
					"--dsw-alias-button-ghost-active-fill": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-button-ghost-active-hover": "var(--dsw-static-neutral-bluish-700)",
					"--dsw-alias-button-info-fill": "var(--dsw-static-deepseek-400)",
					"--dsw-alias-button-info-hover": "var(--dsw-static-deepseek-500)",
					"--dsw-alias-button-primary-dimmed": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-button-primary-fill": "var(--dsw-alias-brand-primary)",
					"--dsw-alias-button-primary-hover": "var(--dsw-static-neutral-bluish-100)",
					"--dsw-alias-button-tool-bar-fill-invisible": "rgba(31, 31, 31, 0.36)",
					"--dsw-alias-button-tool-bar-fill": "rgba(84, 85, 87, 0.5)",
					"--dsw-alias-button-tool-bar-hover": "rgba(84, 85, 87, 0.6)",
					"--dsw-alias-interactive-bg-active": "rgba(255, 255, 255, 0.14)",
					"--dsw-alias-interactive-bg-hover-accent": "rgba(255, 255, 255, 0.24)",
					"--dsw-alias-interactive-bg-hover-danger": "rgba(242, 90, 90, 0.15)",
					"--dsw-alias-interactive-bg-hover-solid": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-interactive-bg-hover": "rgba(255, 255, 255, 0.08)",
					"--dsw-alias-label-caption": "var(--dsw-static-neutral-bluish-300)",
					"--dsw-alias-label-deep-diving": "color-mix(in srgb, var(--dsw-static-deepseek-450) 55%, var(--dsw-static-neutral-bluish-400))",
					"--dsw-alias-label-deep-diving-shimmer": "color-mix(in srgb, var(--dsw-static-blue-300) 65%, var(--dsw-static-deepseek-400))",
					"--dsw-alias-label-dimmed": "var(--dsw-static-neutral-bluish-400)",
					"--dsw-alias-label-primary-bluish": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-label-primary-dimmed": "var(--dsw-static-neutral-bluish-75)",
					"--dsw-alias-label-primary-foreground": "var(--dsw-static-neutral-bluish-1000)",
					"--dsw-alias-label-primary-inverted": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-label-primary": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-label-secondary": "var(--dsw-static-neutral-bluish-150)",
					"--dsw-alias-label-shimmer": "color-mix(in srgb, var(--dsw-static-neutral-00) 45%, transparent)",
					"--dsw-alias-label-tertiary": "var(--dsw-static-neutral-bluish-200)",
					"--dsw-alias-menu-icon": "var(--dsw-alias-label-primary-dimmed)",
					"--dsw-alias-link": "#73daca",
					"--dsw-alias-markdown-citation": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-markdown-code-block-banner": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-markdown-code-block": "var(--dsw-static-neutral-bluish-900)",
					"--dsw-alias-markdown-code-segment-selected": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-markdown-code-segment-unselected": "var(--dsw-static-neutral-bluish-900)",
					"--dsw-alias-markdown-inline-code": "var(--dsw-static-neutral-800)",
					"--dsw-alias-markdown-placeholder": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-markdown-tag": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-scrollbar-bg-l1": "var(--dsw-static-neutral-700)",
					"--dsw-alias-scrollbar-bg-l2": "var(--dsw-static-neutral-600)",
					"--dsw-alias-scrollbar-hover-l1": "var(--dsw-static-neutral-600)",
					"--dsw-alias-scrollbar-hover-l2": "var(--dsw-static-neutral-550)",
					"--dsw-alias-state-business-primary": "var(--dsw-static-deepseek-500)",
					"--dsw-alias-state-business-tertiary": "var(--dsw-static-deepseek-800)",
					"--dsw-alias-code-diff-added": "var(--dsw-static-green-500-a12)",
					"--dsw-alias-code-diff-deleted": "var(--dsw-static-red-400-a12)",
					"--dsw-alias-file-diff-added-bg": "var(--dsw-static-green-500-a12)",
					"--dsw-alias-file-diff-added-gutter": "color-mix(in srgb, var(--dsw-static-green-500) 6%, transparent)",
					"--dsw-alias-file-diff-added-marker": "var(--dsw-static-green-500)",
					"--dsw-alias-file-diff-deleted-bg": "var(--dsw-static-red-400-a12)",
					"--dsw-alias-file-diff-deleted-gutter": "color-mix(in srgb, var(--dsw-static-red-500) 6%, transparent)",
					"--dsw-alias-file-diff-deleted-marker": "var(--dsw-static-red-500)",
					"--dsw-alias-state-error-primary": "var(--dsw-static-red-400)",
					"--dsw-alias-state-error-secondary": "var(--dsw-static-red-400)",
					"--dsw-alias-state-idle-primary": "var(--dsw-static-neutral-600)",
					"--dsw-alias-state-success-primary": "var(--dsw-static-green-500)",
					"--dsw-alias-state-success-secondary": "var(--dsw-static-green-400)",
					"--dsw-alias-state-success-tertiary": "var(--dsw-static-green-900)",
					"--dsw-alias-state-warn-label": "var(--dsw-static-amber-600)",
					"--dsw-alias-state-warn-primary": "var(--dsw-static-amber-500)",
					"--dsw-alias-state-warn-secondary": "var(--dsw-static-amber-400)",
					"--dsw-alias-state-warn-tertiary": "var(--dsw-static-amber-900)",
					"--dsw-alias-switch-thumb": "var(--dsw-static-neutral-bluish-400)",
					"--dsw-alias-toast-bg": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-toast-label": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-turn-trigger-bg": "var(--dsw-alias-interactive-bg-hover)",
					"--dsw-alias-turn-trigger-bg-hover": "var(--dsw-alias-interactive-bg-active)",
					"--dsw-alias-tooltip-bg": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-tooltip-key-bg": "color-mix(in srgb, var(--dsw-alias-tooltip-bg), white 18%)",
					"--dsw-alias-menu-group-header-fill": "color-mix(in srgb, var(--dsw-alias-bg-layer-3) 94%, transparent)",
					"--dsw-specific-bubble-highlight": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-specific-bubble": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-specific-input-major": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-specific-login-input": "var(--dsw-static-neutral-bluish-900)",
					"--dsw-specific-menu": "var(--dsw-menu-surface-fill)",
					"--dsw-specific-selector": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-specific-sidebar-fill": "var(--dsw-static-neutral-bluish-900)",
					"--dsw-specific-sidebar-nav-item-active-accent": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-specific-sidebar-nav-item-active": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-specific-sidebar-nav-item-hover": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-specific-tip": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-menu-surface-fill": "color-mix(in srgb, var(--dsw-alias-bg-layer-3) 45%, transparent)"
				}
			},
			{
				themeId: "tokyonight-night",
				colorScheme: "dark",
				label: "Night",
				accent: "#7aa2f7",
				tokens: {
					"--dsw-static-amber-100": "color-mix(in srgb, #e0af68 20%, #222433)",
					"--dsw-static-amber-400": "color-mix(in srgb, #e0af68 70%, #222433)",
					"--dsw-static-amber-500": "#e0af68",
					"--dsw-static-amber-600": "#e0af68",
					"--dsw-static-amber-900": "color-mix(in srgb, #e0af68 18%, #1a1b26)",
					"--dsw-static-blue-100": "color-mix(in srgb, #7aa2f7 24%, #222433)",
					"--dsw-static-blue-300": "color-mix(in srgb, #7aa2f7 50%, #222433)",
					"--dsw-static-blue-400": "color-mix(in srgb, #7aa2f7 66%, #222433)",
					"--dsw-static-blue-450": "color-mix(in srgb, #7aa2f7 84%, #222433)",
					"--dsw-static-blue-500": "#7aa2f7",
					"--dsw-static-blue-50": "color-mix(in srgb, #7aa2f7 10%, #222433)",
					"--dsw-static-blue-50p": "color-mix(in srgb, #7aa2f7 14%, #222433)",
					"--dsw-static-blue-600": "color-mix(in srgb, #7aa2f7 84%, #222433)",
					"--dsw-static-blue-75": "color-mix(in srgb, #7aa2f7 18%, #222433)",
					"--dsw-static-blue-800": "color-mix(in srgb, #7aa2f7 10%, #1a1b26)",
					"--dsw-static-blue-900": "color-mix(in srgb, #7aa2f7 14%, #1a1b26)",
					"--dsw-static-blue-950": "color-mix(in srgb, #7aa2f7 10%, #1a1b26)",
					"--dsw-static-deepseek-100": "color-mix(in srgb, #7aa2f7 24%, #222433)",
					"--dsw-static-deepseek-200": "color-mix(in srgb, #7aa2f7 36%, #222433)",
					"--dsw-static-deepseek-300": "color-mix(in srgb, #7aa2f7 50%, #222433)",
					"--dsw-static-deepseek-400": "color-mix(in srgb, #7aa2f7 66%, #222433)",
					"--dsw-static-deepseek-450": "color-mix(in srgb, #7aa2f7 84%, #222433)",
					"--dsw-static-deepseek-500": "#7aa2f7",
					"--dsw-static-deepseek-50": "color-mix(in srgb, #7aa2f7 10%, #222433)",
					"--dsw-static-deepseek-600": "color-mix(in srgb, #7aa2f7 84%, #222433)",
					"--dsw-static-deepseek-700-delete": "color-mix(in srgb, #7aa2f7 68%, #222433)",
					"--dsw-static-deepseek-800": "color-mix(in srgb, #7aa2f7 10%, #1a1b26)",
					"--dsw-static-deepseek-900": "color-mix(in srgb, #7aa2f7 14%, #1a1b26)",
					"--dsw-static-green-100": "color-mix(in srgb, #9ece6a 18%, #222433)",
					"--dsw-static-green-400": "color-mix(in srgb, #9ece6a 80%, #222433)",
					"--dsw-static-green-500": "#9ece6a",
					"--dsw-static-green-500-a08": "color-mix(in srgb, #9ece6a 8%, transparent)",
					"--dsw-static-green-500-a12": "color-mix(in srgb, #9ece6a 12%, transparent)",
					"--dsw-static-green-900": "color-mix(in srgb, #9ece6a 18%, #1a1b26)",
					"--dsw-static-neutral-00": "#a9b1d6",
					"--dsw-static-neutral-1000": "#1a1b26",
					"--dsw-static-neutral-100": "#949abc",
					"--dsw-static-neutral-150": "#949abc",
					"--dsw-static-neutral-200": "#858caa",
					"--dsw-static-neutral-250": "#858caa",
					"--dsw-static-neutral-300": "#777c98",
					"--dsw-static-neutral-400": "#696e87",
					"--dsw-static-neutral-500": "#414868",
					"--dsw-static-neutral-50": "#a9b1d6",
					"--dsw-static-neutral-550": "#373d58",
					"--dsw-static-neutral-600": "#373d58",
					"--dsw-static-neutral-700": "#2e3247",
					"--dsw-static-neutral-800": "#2e3247",
					"--dsw-static-neutral-850": "#222433",
					"--dsw-static-neutral-900": "#1e202d",
					"--dsw-static-neutral-bluish-00": "#a9b1d6",
					"--dsw-static-neutral-bluish-1000": "#1a1b26",
					"--dsw-static-neutral-bluish-100": "#949abc",
					"--dsw-static-neutral-bluish-150": "#949abc",
					"--dsw-static-neutral-bluish-200": "#858caa",
					"--dsw-static-neutral-bluish-300": "#777c98",
					"--dsw-static-neutral-bluish-400": "#696e87",
					"--dsw-static-neutral-bluish-500": "#414868",
					"--dsw-static-neutral-bluish-50": "#a9b1d6",
					"--dsw-static-neutral-bluish-600": "#373d58",
					"--dsw-static-neutral-bluish-60": "#9aa5ce",
					"--dsw-static-neutral-bluish-700": "#2e3247",
					"--dsw-static-neutral-bluish-750": "#2e3247",
					"--dsw-static-neutral-bluish-75": "#9aa5ce",
					"--dsw-static-neutral-bluish-800": "#2e3247",
					"--dsw-static-neutral-bluish-850": "#222433",
					"--dsw-static-neutral-bluish-875": "#1e202d",
					"--dsw-static-neutral-bluish-900": "#1e202d",
					"--dsw-static-neutral-bluish-950": "#1a1b26",
					"--dsw-static-red-100": "color-mix(in srgb, #f7768e 20%, #222433)",
					"--dsw-static-red-400": "color-mix(in srgb, #f7768e 70%, #222433)",
					"--dsw-static-red-400-a12": "color-mix(in srgb, #b75d73 12%, transparent)",
					"--dsw-static-red-500": "#f7768e",
					"--dsw-static-red-50": "color-mix(in srgb, #f7768e 10%, #222433)",
					"--dsw-static-red-600": "#f7768e",
					"--dsw-static-red-600-a08": "color-mix(in srgb, #f7768e 8%, transparent)",
					"--dsw-static-red-900": "color-mix(in srgb, #f7768e 34%, #222433)",
					"--dsw-alias-bg-base": "var(--dsw-static-neutral-bluish-950)",
					"--dsw-alias-bg-document-preview": "var(--dsw-static-neutral-bluish-950)",
					"--dsw-alias-bg-document-selection": "color-mix(in srgb, var(--dsw-static-blue-500) 40%, transparent)",
					"--dsw-alias-label-document-preview": "var(--dsw-static-neutral-bluish-75)",
					"--dsw-alias-bg-layer-1": "var(--dsw-static-neutral-bluish-875)",
					"--dsw-alias-bg-layer-2": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-bg-layer-3": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.5)",
					"--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.2)",
					"--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.48)",
					"--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
					"--dsw-alias-bg-mask-drop": "rgba(39, 39, 48, 0.7)",
					"--dsw-alias-bg-module-platform": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-bg-multi-select": "var(--dsw-static-neutral-850)",
					"--dsw-alias-bg-overlay": "var(--dsw-static-neutral-bluish-700)",
					"--dsw-alias-bg-skeleton": "rgba(255, 255, 255, 0.08)",
					"--dsw-alias-border-inverted2": "rgba(255, 255, 255, 0.08)",
					"--dsw-alias-border-inverted": "rgba(255, 255, 255, 0.06)",
					"--dsw-alias-border-l1": "rgba(255, 255, 255, 0.06)",
					"--dsw-alias-border-l2-darkmode-thin": "rgba(255, 255, 255, 0.06)",
					"--dsw-alias-border-l2": "rgba(255, 255, 255, 0.12)",
					"--dsw-alias-border-l3": "rgba(255, 255, 255, 0.16)",
					"--dsw-alias-border-l4": "rgba(255, 255, 255, 0.2)",
					"--dsw-alias-brand-primary-invert": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-brand-primary-new-colorprimary-new-color": "#7aa2f7",
					"--dsw-alias-brand-primary": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-brand-text": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-button-contrast-fill": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-button-elevated-fill": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-button-floating-fill": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-button-floating-hover": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-button-ghost-active-border": "var(--dsw-static-neutral-bluish-600)",
					"--dsw-alias-button-ghost-active-fill": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-button-ghost-active-hover": "var(--dsw-static-neutral-bluish-700)",
					"--dsw-alias-button-info-fill": "var(--dsw-static-deepseek-400)",
					"--dsw-alias-button-info-hover": "var(--dsw-static-deepseek-500)",
					"--dsw-alias-button-primary-dimmed": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-button-primary-fill": "var(--dsw-alias-brand-primary)",
					"--dsw-alias-button-primary-hover": "var(--dsw-static-neutral-bluish-100)",
					"--dsw-alias-button-tool-bar-fill-invisible": "rgba(31, 31, 31, 0.36)",
					"--dsw-alias-button-tool-bar-fill": "rgba(84, 85, 87, 0.5)",
					"--dsw-alias-button-tool-bar-hover": "rgba(84, 85, 87, 0.6)",
					"--dsw-alias-interactive-bg-active": "rgba(255, 255, 255, 0.14)",
					"--dsw-alias-interactive-bg-hover-accent": "rgba(255, 255, 255, 0.24)",
					"--dsw-alias-interactive-bg-hover-danger": "rgba(242, 90, 90, 0.15)",
					"--dsw-alias-interactive-bg-hover-solid": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-interactive-bg-hover": "rgba(255, 255, 255, 0.08)",
					"--dsw-alias-label-caption": "var(--dsw-static-neutral-bluish-300)",
					"--dsw-alias-label-deep-diving": "color-mix(in srgb, var(--dsw-static-deepseek-450) 55%, var(--dsw-static-neutral-bluish-400))",
					"--dsw-alias-label-deep-diving-shimmer": "color-mix(in srgb, var(--dsw-static-blue-300) 65%, var(--dsw-static-deepseek-400))",
					"--dsw-alias-label-dimmed": "var(--dsw-static-neutral-bluish-400)",
					"--dsw-alias-label-primary-bluish": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-label-primary-dimmed": "var(--dsw-static-neutral-bluish-75)",
					"--dsw-alias-label-primary-foreground": "var(--dsw-static-neutral-bluish-1000)",
					"--dsw-alias-label-primary-inverted": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-label-primary": "var(--dsw-static-neutral-bluish-50)",
					"--dsw-alias-label-secondary": "var(--dsw-static-neutral-bluish-150)",
					"--dsw-alias-label-shimmer": "color-mix(in srgb, var(--dsw-static-neutral-00) 45%, transparent)",
					"--dsw-alias-label-tertiary": "var(--dsw-static-neutral-bluish-200)",
					"--dsw-alias-menu-icon": "var(--dsw-alias-label-primary-dimmed)",
					"--dsw-alias-link": "#73daca",
					"--dsw-alias-markdown-citation": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-markdown-code-block-banner": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-markdown-code-block": "var(--dsw-static-neutral-bluish-900)",
					"--dsw-alias-markdown-code-segment-selected": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-alias-markdown-code-segment-unselected": "var(--dsw-static-neutral-bluish-900)",
					"--dsw-alias-markdown-inline-code": "var(--dsw-static-neutral-800)",
					"--dsw-alias-markdown-placeholder": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-markdown-tag": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-alias-scrollbar-bg-l1": "var(--dsw-static-neutral-700)",
					"--dsw-alias-scrollbar-bg-l2": "var(--dsw-static-neutral-600)",
					"--dsw-alias-scrollbar-hover-l1": "var(--dsw-static-neutral-600)",
					"--dsw-alias-scrollbar-hover-l2": "var(--dsw-static-neutral-550)",
					"--dsw-alias-state-business-primary": "var(--dsw-static-deepseek-500)",
					"--dsw-alias-state-business-tertiary": "var(--dsw-static-deepseek-800)",
					"--dsw-alias-code-diff-added": "var(--dsw-static-green-500-a12)",
					"--dsw-alias-code-diff-deleted": "var(--dsw-static-red-400-a12)",
					"--dsw-alias-file-diff-added-bg": "var(--dsw-static-green-500-a12)",
					"--dsw-alias-file-diff-added-gutter": "color-mix(in srgb, var(--dsw-static-green-500) 6%, transparent)",
					"--dsw-alias-file-diff-added-marker": "var(--dsw-static-green-500)",
					"--dsw-alias-file-diff-deleted-bg": "var(--dsw-static-red-400-a12)",
					"--dsw-alias-file-diff-deleted-gutter": "color-mix(in srgb, var(--dsw-static-red-500) 6%, transparent)",
					"--dsw-alias-file-diff-deleted-marker": "var(--dsw-static-red-500)",
					"--dsw-alias-state-error-primary": "var(--dsw-static-red-400)",
					"--dsw-alias-state-error-secondary": "var(--dsw-static-red-400)",
					"--dsw-alias-state-idle-primary": "var(--dsw-static-neutral-600)",
					"--dsw-alias-state-success-primary": "var(--dsw-static-green-500)",
					"--dsw-alias-state-success-secondary": "var(--dsw-static-green-400)",
					"--dsw-alias-state-success-tertiary": "var(--dsw-static-green-900)",
					"--dsw-alias-state-warn-label": "var(--dsw-static-amber-600)",
					"--dsw-alias-state-warn-primary": "var(--dsw-static-amber-500)",
					"--dsw-alias-state-warn-secondary": "var(--dsw-static-amber-400)",
					"--dsw-alias-state-warn-tertiary": "var(--dsw-static-amber-900)",
					"--dsw-alias-switch-thumb": "var(--dsw-static-neutral-bluish-400)",
					"--dsw-alias-toast-bg": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-toast-label": "var(--dsw-static-neutral-bluish-00)",
					"--dsw-alias-turn-trigger-bg": "var(--dsw-alias-interactive-bg-hover)",
					"--dsw-alias-turn-trigger-bg-hover": "var(--dsw-alias-interactive-bg-active)",
					"--dsw-alias-tooltip-bg": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-alias-tooltip-key-bg": "color-mix(in srgb, var(--dsw-alias-tooltip-bg), white 18%)",
					"--dsw-alias-menu-group-header-fill": "color-mix(in srgb, var(--dsw-alias-bg-layer-3) 94%, transparent)",
					"--dsw-specific-bubble-highlight": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-specific-bubble": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-specific-input-major": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-specific-login-input": "var(--dsw-static-neutral-bluish-900)",
					"--dsw-specific-menu": "var(--dsw-menu-surface-fill)",
					"--dsw-specific-selector": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-specific-sidebar-fill": "var(--dsw-static-neutral-bluish-900)",
					"--dsw-specific-sidebar-nav-item-active-accent": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-specific-sidebar-nav-item-active": "var(--dsw-static-neutral-bluish-750)",
					"--dsw-specific-sidebar-nav-item-hover": "var(--dsw-static-neutral-bluish-850)",
					"--dsw-specific-tip": "var(--dsw-static-neutral-bluish-800)",
					"--dsw-menu-surface-fill": "color-mix(in srgb, var(--dsw-alias-bg-layer-3) 45%, transparent)"
				}
			}
		];
		//#endregion
		//#region src/boot-palette.ts
		/** Attribute marking the injected `<style>` so the Client can find it. */
		const BOOT_PALETTE_ATTR = "data-dsh-tokyonight-boot";
		//#endregion
		//#region src/client/boot-palette.ts
		/**
		* Client half of the pre-paint palette (issue #30 补充, 2026-10-27).
		*
		* The Host injects a `<style data-dsh-tokyonight-boot>` into the index HTML so
		* the first frame is already the persisted flavour (see `src/boot-palette.ts`).
		* That sheet is only a stand-in: its selector is `html body` (0,0,2), which
		* outranks the official `body` token block, so leaving it in place would pin
		* every token and defeat later theme switches (the user picks Light or turns the
		* flavour off and nothing changes).
		*
		* So it is removed the moment the flavour theme actually takes over — which is
		* NOT the same instant as "setTheme was called":
		*  - a reload where the runtime preference already equals the flavour id never
		*    calls setTheme (see `applyDesired`'s early return), and
		*  - a built-in pick (Light / Dark / System) must remove it too, because the
		*    sheet belongs to a flavour that is no longer wanted.
		* The restore effect therefore clears it from every one of those points plus a
		* fallback timer and the effect teardown.
		*/
		/**
		* Remove every injected pre-paint sheet from this document.
		*
		* Idempotent and safe when nothing was injected (hosts without the index
		* injection seam, `flavor: off`, a document that already cleared it).
		* @returns whether an element was actually removed (diagnostics and tests).
		*/
		function clearBootPalette() {
			let removed = false;
			for (const element of document.querySelectorAll(`[${BOOT_PALETTE_ATTR}]`)) {
				element.remove();
				removed = true;
			}
			return removed;
		}
		//#endregion
		//#region src/client/shiki-tokens.ts
		const SHIKI_TOKENS = {
			"light": { "default": {
				"--shiki-foreground": "var(--dsw-alias-label-primary)",
				"--shiki-background": "var(--dsw-alias-markdown-code-block)",
				"--shiki-token-constant": "#965027",
				"--shiki-token-string": "#385f0d",
				"--shiki-token-comment": "#6c6e75",
				"--shiki-token-keyword": "#5a3e8e",
				"--shiki-token-parameter": "#8f5e15",
				"--shiki-token-function": "#2959aa",
				"--shiki-token-string-expression": "#385f0d",
				"--shiki-token-punctuation": "#343b58",
				"--shiki-token-link": "#33635c"
			} },
			"storm": { "default": {
				"--shiki-foreground": "var(--dsw-alias-label-primary)",
				"--shiki-background": "var(--dsw-alias-markdown-code-block)",
				"--shiki-token-constant": "#ff9e64",
				"--shiki-token-string": "#9ece6a",
				"--shiki-token-comment": "#565f89",
				"--shiki-token-keyword": "#bb9af7",
				"--shiki-token-parameter": "#e0af68",
				"--shiki-token-function": "#7aa2f7",
				"--shiki-token-string-expression": "#9ece6a",
				"--shiki-token-punctuation": "#c0caf5",
				"--shiki-token-link": "#73daca"
			} },
			"night": { "default": {
				"--shiki-foreground": "var(--dsw-alias-label-primary)",
				"--shiki-background": "var(--dsw-alias-markdown-code-block)",
				"--shiki-token-constant": "#ff9e64",
				"--shiki-token-string": "#9ece6a",
				"--shiki-token-comment": "#565f89",
				"--shiki-token-keyword": "#bb9af7",
				"--shiki-token-parameter": "#e0af68",
				"--shiki-token-function": "#7aa2f7",
				"--shiki-token-string-expression": "#9ece6a",
				"--shiki-token-punctuation": "#c0caf5",
				"--shiki-token-link": "#73daca"
			} }
		};
		//#endregion
		//#region src/identity.ts
		/** Bundle identity shared by the host and client. */
		const PACKAGE_NAME = "dsh-tokyonight-theme";
		//#endregion
		//#region src/registration-tolerance.ts
		/**
		* Fault-tolerant registration for the plugin's boot-critical wiring.
		*
		* Client and Host share one failure shape: an entry whose `apply()` throws is
		* marked `failed`, the assembly aborts the whole boot (`web boot: N entries
		* did not activate`), and the official desktop's crash rescue then runs
		* `disableAllPlugins()` — taking EVERY third-party plugin down with it. A peer
		* plugin already owning what we are about to register is the realistic
		* trigger (language packs and their BCP 47 ids — issue #23; a duplicate
		* install and its route / slot / theme ids), and the right answer to
		* "someone else already did this" is to skip OUR copy — never to fail the
		* boot. Full evidence chain and the per-call-site audit live in
		* `docs/issue-23-registration-tolerance.md`.
		*
		* Known "already owned" shapes are skipped quietly — the peer's registration
		* stands, matching `dsh-locale-pack`'s own tolerance. Anything else is logged
		* and skipped too: no registration in this plugin is worth the user's whole
		* plugin set. (To restore fail-fast for a class of errors, `throw error` in
		* the warn branch — every call site routes through here on purpose.)
		*/
		/** The "another party already owns this" messages the runtimes throw, checked
		*  against the 0.2.0-rc.2 sources (table in the doc's §6):
		*  - `locale "ja" is already registered` (dsh-client-locale addLanguage)
		*  - `locale namespace "…" already has locale "…"` (dsh-client-locale register)
		*  - `theme "…" is already registered` (dsh-client-ui-theme register)
		*  - `list slot "…" already has an entry with id "…"` (dsh-client-ui-slots)
		*  - `webserver: duplicate exact route "…"` (dsh-host-webserver register) */
		const ALREADY_OWNED = /already (?:registered|has locale|has an entry)|duplicate .*route/u;
		/**
		* Run one registration call, degrading any failure to a no-op disposer.
		* @param run - the registration call, returning its disposer (if any).
		* @returns the real disposer, or a no-op when the registration was skipped.
		*/
		function tolerantRegistration(run) {
			try {
				return run() ?? (() => {});
			} catch (error) {
				const message = error instanceof Error ? error.message : String(error);
				if (!ALREADY_OWNED.test(message)) console.warn(`[dsh-tokyonight] registration skipped — ${message}`);
				return () => {};
			}
		}
		//#endregion
		//#region src/client/state-sync.ts
		/** The snapshot an unbound scope reports: the pre-0.5.0 "transport absent"
		*  degradation, where localStorage is the only store. */
		const UNBOUND_SNAPSHOT = {
			status: "unavailable",
			value: void 0,
			base: void 0,
			user: void 0,
			revision: void 0,
			writable: false,
			mode: "memory"
		};
		/** Whether the scope is usable for durable persistence: the document is
		*  resolved (`ready`) and no seam reported the process-local `memory` store.
		*  A not-yet-ready snapshot is NOT usable — the caller keeps localStorage as
		*  the only store.
		*
		*  An ABSENT `mode` is `host` (DSH 0.2.1 removed the field together with the
		*  memory branch — see {@link DurableSnapshot.mode}); an explicit `memory`
		*  (legacy `settingsScope`, <= 0.1.6) is still unusable. */
		function isScopeUsable(snapshot) {
			return snapshot.status === "ready" && snapshot.mode !== "memory";
		}
		/** The local state contract (with the synthetic `version`) for a usable
		*  scope snapshot; `null` while the section is not resolved. */
		function durableStateFromSnapshot(snapshot) {
			if (!isScopeUsable(snapshot) || snapshot.value === void 0) return null;
			return stateFromSettingsSection(snapshot.value);
		}
		/** The NEW seam's channel (DSH >= 0.1.7-alpha.1). */
		function configFormsScope(form) {
			return {
				kind: "configForms",
				getSnapshot: () => form.getSnapshot(),
				subscribe: (listener) => form.subscribe(listener),
				hasUserLayer: (snapshot) => hasUserLayerSection(snapshot.user),
				write: async (ops, baseRevision) => {
					try {
						return await form.mutate(ops, baseRevision) ? "accepted" : "refused";
					} catch {
						return "failed";
					}
				}
			};
		}
		/** The LEGACY seam's channel (DSH <= 0.1.6-alpha.2). */
		function legacyScope(scope) {
			return {
				kind: "settingsScope",
				getSnapshot: () => scope.getSnapshot(),
				subscribe: (listener) => scope.subscribe(listener),
				hasUserLayer: (snapshot) => snapshot.user !== void 0,
				write: async (ops) => {
					try {
						await scope.mutate(ops);
						return "accepted";
					} catch {
						return "failed";
					}
				}
			};
		}
		/**
		* Bind whichever settings channel this host serves, late and without blocking.
		*
		* Both bindings ride OPTIONAL injections: a service the deployment never
		* provides simply never fires its callback (it does not hold the plugin
		* back), and the two names cannot both be live in one host — 0.1.7-alpha.1
		* removed `settingsScope` from the service set, and 0.1.6 and earlier know
		* nothing of `configForms`. Until one binds, the scope reports the unbound
		* snapshot and every write short-circuits, which is exactly the
		* "settings transport unavailable" degradation the rows already handle.
		* @param ctx - client root context.
		* @returns the scope facade, bound for the lifetime of the caller's fiber.
		*/
		function createDurableScope(ctx) {
			let current;
			let offBound;
			const listeners = /* @__PURE__ */ new Set();
			const notify = () => {
				for (const listener of [...listeners]) listener();
			};
			const attach = (next) => {
				if (next === current) return;
				offBound?.();
				current = next;
				offBound = next?.subscribe(notify);
				notify();
			};
			ctx.inject(["configForms"], (formsCtx) => {
				attach(configFormsScope(formsCtx.configForms.get(TOKYONIGHT_ENTRY_ID)));
				return () => {
					attach(void 0);
				};
			});
			ctx.inject(["settingsScope"], (legacyCtx) => {
				const binder = legacyCtx.settingsScope;
				if (binder !== void 0) attach(legacyScope(binder.bind({ namespace: TOKYONIGHT_SETTINGS_NS })));
				return () => {
					attach(void 0);
				};
			});
			return {
				get kind() {
					return current?.kind ?? "none";
				},
				getSnapshot: () => current?.getSnapshot() ?? UNBOUND_SNAPSHOT,
				subscribe: (listener) => {
					listeners.add(listener);
					return () => {
						listeners.delete(listener);
					};
				},
				hasUserLayer: (snapshot) => current?.hasUserLayer(snapshot) ?? false,
				write: async (ops, baseRevision) => current?.write(ops, baseRevision) ?? "failed"
			};
		}
		/** One atomic mutation covering the whole local state (revision-fenced).
		*  Writing every field keeps the section self-contained — a partial write
		*  could otherwise leave a knob stuck on a stale override after a document
		*  edit elsewhere. */
		function stateToMutateOps(state) {
			const section = settingsSectionFromState(state);
			return [
				{
					op: "set",
					path: ["flavor"],
					value: section.flavor
				},
				{
					op: "set",
					path: ["followSystem"],
					value: section.followSystem
				},
				{
					op: "set",
					path: ["followDark"],
					value: section.followDark
				},
				{
					op: "set",
					path: ["glass", "enabled"],
					value: section.glass.enabled
				},
				{
					op: "set",
					path: ["glass", "mode"],
					value: section.glass.mode
				},
				{
					op: "set",
					path: ["glass", "blur"],
					value: section.glass.blur
				},
				{
					op: "set",
					path: ["glass", "frost"],
					value: section.glass.frost
				},
				{
					op: "set",
					path: ["glass", "brightness"],
					value: section.glass.brightness
				},
				{
					op: "set",
					path: ["glass", "gap"],
					value: section.glass.gap
				},
				{
					op: "set",
					path: ["glass", "glowStrength"],
					value: section.glass.glowStrength
				},
				{
					op: "set",
					path: ["glass", "glowSize"],
					value: section.glass.glowSize
				},
				{
					op: "set",
					path: ["glass", "glow"],
					value: section.glass.glow
				},
				{
					op: "set",
					path: ["autoCheck"],
					value: section.autoCheck
				},
				{
					op: "set",
					path: ["updateChannel"],
					value: section.updateChannel
				},
				{
					op: "set",
					path: ["overrides"],
					value: section.overrides
				},
				{
					op: "set",
					path: ["shikiStyle"],
					value: section.shikiStyle
				}
			];
		}
		/**
		* Read-side consistency guard for the durable persist (items C/X).
		*
		* The WRITE side belongs to the channel — no optimistic locking is re-built
		* here — but the persist path deliberately does NOT hand it a fence: the base
		* below is the revision the local state was derived from (captured at SCHEDULE
		* time), which is the right input for the READ-side guard and the wrong input
		* for a write fence. A write of ours that lands inside the debounce window (or
		* is still in flight when the flush runs) moves the document past that base
		* while our mirror has not caught up, so fencing the next write with it makes
		* the Host refuse a write that must succeed; the refusal is then reported as
		* `stale`, and the caller adopts the remote state — silently reverting the
		* user's newest change. That is the 2026-10-01 "switching the mica/compat mode
		* quickly sometimes fails" report: two mode switches ~300ms apart, the second
		* one reverted.
		*
		* What a fence cannot see is a STALE LOCAL VIEW: tab A reads an old
		* localStorage value, the user changes flavour, and the debounced flush writes
		* that old-based state over tab B's already-committed newer choice. That is
		* what the guard below is for, and it is also the ONLY conflict detector the
		* legacy seam can offer — that seam resolves a refused write silently, so
		* without it a concurrent edit would be lost without a trace.
		*
		* The guard compares the revision the local state was derived from
		* (`baseRevision`, captured at schedule time) with the snapshot revision at
		* flush time:
		*  - equal → the document did not move while we were debouncing → write.
		*  - moved, and the remote section equals our own last written section →
		*    the movement is our own write's echo, safe to write the newer change.
		*  - moved otherwise → an external edit landed mid-debounce; the local
		*    change is stale, so it is abandoned and `stale` is returned so the
		*    caller can adopt the remote state and surface the conflict.
		* Also returns `noop` when the local state already equals the document
		* (the normal echo back of our own committed writes; previously this wrote
		* a redundant identical mutation).
		*/
		async function persistStateToScope(scope, state, options = {}) {
			const snapshot = scope.getSnapshot();
			if (!isScopeUsable(snapshot)) return "error";
			const remote = durableStateFromSnapshot(snapshot);
			const localSection = settingsSectionFromState(state);
			if (remote !== null && settingsSectionsEqual(settingsSectionFromState(remote), localSection)) return "noop";
			const { baseRevision, lastWrittenSection } = options;
			if (baseRevision !== void 0 && snapshot.revision !== void 0 && snapshot.revision !== baseRevision) {
				if (!(lastWrittenSection !== void 0 && remote !== null && settingsSectionsEqual(settingsSectionFromState(remote), lastWrittenSection))) return "stale";
			}
			const outcome = await scope.write(stateToMutateOps(state));
			if (outcome === "accepted") return "written";
			if (outcome === "refused") return "stale";
			return "error";
		}
		let pendingTimer;
		let pendingWrite;
		/**
		* Debounced trailing persist: after a burst of changes (a slider drag emits a
		* stream of snapshot updates) the write happens once, a short beat after the
		* last change. Pass an accessor so the state snapshot is taken at flush time,
		* never stale.
		*/
		function scheduleDurablePersist(write, delayMs = 300) {
			if (pendingTimer !== void 0) window.clearTimeout(pendingTimer);
			pendingWrite = write;
			pendingTimer = window.setTimeout(() => {
				pendingTimer = void 0;
				const run = pendingWrite;
				pendingWrite = void 0;
				if (run !== void 0) Promise.resolve().then(run).catch(() => {});
			}, delayMs);
		}
		/** Drop any queued persist (plugin unload / page teardown). */
		function cancelDurablePersist() {
			if (pendingTimer !== void 0) window.clearTimeout(pendingTimer);
			pendingTimer = void 0;
			pendingWrite = void 0;
		}
		/**
		* Capture-once holder for the revision a debounced write is based on (audit
		* F2, 2026-09-22).
		*
		* The read-side guard in {@link persistStateToScope} only means anything if
		* `baseRevision` is the revision the LOCAL state was derived from — i.e.
		* sampled when the change was SCHEDULED. Reading it inside the flush instead
		* made the comparison a tautology: the flush and the guard's own
		* `scope.getSnapshot()` run in the same synchronous block, so the two
		* revisions are always equal and `'stale'` is unreachable. The effect was a
		* silently lost read-side protection: with two windows open, an external edit
		* landing inside the 300 ms debounce window was overwritten by the stale local
		* state and the conflict banner never appeared.
		*
		* `capture` keeps the FIRST revision of a burst (`??=`, not assignment): a
		* slider drag emits several changes, and the local state each of them is based
		* on is still the one that was current when the burst started. `take` clears
		* the slot as it reads, so the next burst starts fresh — including when the
		* flush bails out (unusable scope), where the value must not leak forward.
		*/
		function createBaseRevisionTracker() {
			let pending;
			return {
				capture(read) {
					if (pending === void 0) pending = read();
				},
				take() {
					const value = pending;
					pending = void 0;
					return value;
				}
			};
		}
		//#endregion
		//#region src/client/index.ts
		/** Locale namespace owned by this plugin. */
		const NS = "tokyonight";
		/** localStorage key carrying the persisted flavour choice. */
		const FLAVOR_STORAGE_KEY = "dsh.tokyonight.flavor";
		/** localStorage key recording the last built-in theme preference. */
		const RESTORE_STORAGE_KEY = "dsh.tokyonight.restore";
		/** localStorage key carrying the auto-check update preference (item H). */
		const AUTO_CHECK_KEY = "dsh.tokyonight.autoCheck";
		/** localStorage key carrying the update channel preference (item I). */
		const UPDATE_CHANNEL_KEY = "dsh.tokyonight.updateChannel";
		/** localStorage key carrying the user token overrides JSON (item K). */
		const OVERRIDES_KEY = "dsh.tokyonight.overrides";
		/** localStorage key carrying the shiki style preference (item M). */
		const SHIKI_STYLE_KEY = "dsh.tokyonight.shikiStyle";
		/** localStorage key carrying the follow-the-OS flag (issue #36). */
		const FOLLOW_SYSTEM_KEY = "dsh.tokyonight.followSystem";
		/** localStorage key carrying the follow-mode dark half (issue #36). */
		const FOLLOW_DARK_KEY = "dsh.tokyonight.followDark";
		/** Accepted flavour values — the three registered theme ids plus `off`. These
		*  MUST stay in sync with the registered themes (guarded by
		*  tests/palettes.spec.ts) because the persisted value is the theme id. */
		const TOKYONIGHT_FLAVOR_VALUES = [...TOKYONIGHT_FLAVORS.map((f) => f.themeId), "off"];
		/** The flavour whose themeId this is, or `off`. */
		function flavorFromThemeId(themeId) {
			return TOKYONIGHT_FLAVORS.some((f) => f.themeId === themeId) ? themeId : "off";
		}
		/** The flavour registered for a theme id, or undefined when not a TokyoNight theme. */
		function flavorInfo(themeId) {
			return TOKYONIGHT_FLAVORS.find((f) => f.themeId === themeId);
		}
		/** Read the persisted flavour (absent / unknown values mean the default `off`). */
		function readFlavor() {
			try {
				const raw = localStorage.getItem(FLAVOR_STORAGE_KEY);
				return raw !== null && TOKYONIGHT_FLAVOR_VALUES.includes(raw) ? raw : "off";
			} catch {
				return "off";
			}
		}
		/** Whether localStorage carries an EXPLICIT `off` flavour choice.
		*
		* `readFlavor()` maps both "no value" and "off" to `off`, and the two are not
		* the same thing: an absent value only means THIS browser/origin never chose
		* (a first visit, cleared site data, or a second Desktop instance that landed
		* on the next free loopback port), while the durable store — which may
		* legitimately hold a flavour picked elsewhere — is machine-wide. Only a
		* literal `off` in storage proves the user (or another window) actually turned
		* the flavour off, which is the case the cross-tab restore must act on
		* (audit F4). */
		function readExplicitFlavorOff() {
			try {
				return localStorage.getItem(FLAVOR_STORAGE_KEY) === "off";
			} catch {
				return false;
			}
		}
		/** Persist the flavour choice (storage failures keep the in-memory state). */
		function writeFlavor(choice) {
			try {
				localStorage.setItem(FLAVOR_STORAGE_KEY, choice);
			} catch {}
		}
		/** Remember a built-in preference (system/light/dark) whenever the runtime is
		*  not on a TokyoNight flavour, so switching the plugin off restores the
		*  user's pre-plugin choice instead of dropping them onto 'system'. The boot
		*  preference is the settings-document value, so this survives Desktop's
		*  per-launch port churn without joining the durable state schema. */
		function rememberBuiltinPreference(preference) {
			if (TOKYONIGHT_FLAVOR_VALUES.includes(preference)) return;
			try {
				localStorage.setItem(RESTORE_STORAGE_KEY, preference);
			} catch {}
		}
		/** The preference to restore when turning the flavour off (default: system). */
		function readRestoredPreference() {
			try {
				const raw = localStorage.getItem(RESTORE_STORAGE_KEY);
				return raw === "light" || raw === "dark" ? raw : "system";
			} catch {
				return "system";
			}
		}
		/** Read the persisted auto-check flag (absent means the shipped default: on). */
		function readAutoCheck() {
			try {
				const raw = localStorage.getItem(AUTO_CHECK_KEY);
				return raw === null ? true : raw === "true";
			} catch {
				return true;
			}
		}
		/** Persist the auto-check flag. */
		function writeAutoCheck(value) {
			try {
				localStorage.setItem(AUTO_CHECK_KEY, String(value));
			} catch {}
		}
		/** Read the persisted update channel (absent means `latest`). */
		function readUpdateChannel() {
			try {
				return localStorage.getItem("dsh.tokyonight.updateChannel") === "beta" ? "beta" : DEFAULT_UPDATE_CHANNEL;
			} catch {
				return DEFAULT_UPDATE_CHANNEL;
			}
		}
		/** Persist the update channel. */
		function writeUpdateChannel(value) {
			try {
				localStorage.setItem(UPDATE_CHANNEL_KEY, value);
			} catch {}
		}
		/** Read the persisted token overrides (unparseable/absent → empty map).
		*
		* Sanitized on read (`sanitizeOverrides`, the same guard the settings document
		* goes through) so localStorage and the durable section always have the SAME
		* shape. Without it a key that is not a `--` token (e.g. `dsw-static-blue-500`
		* typed without the dashes) lives in localStorage only: the hydration compares
		* the two shapes, sees a difference, and "the document wins" overwrites the
		* entry — the user's row vanished a debounce-beat after it was typed. */
		function readOverrides() {
			try {
				const raw = localStorage.getItem(OVERRIDES_KEY);
				if (raw === null) return {};
				return sanitizeOverrides(JSON.parse(raw));
			} catch {
				return {};
			}
		}
		/** Persist the token overrides (storage failures keep the in-memory state). */
		function writeOverrides(value) {
			try {
				localStorage.setItem(OVERRIDES_KEY, JSON.stringify(value));
			} catch {}
		}
		let overridesSnapshotCache = null;
		/** Stable-reference snapshot of the token overrides for `useSyncExternalStore`.
		* `readOverrides()` parses localStorage and returns a NEW object per call —
		* a React store whose getSnapshot returns a fresh reference every time loops
		* forever ("Maximum update depth exceeded") and the settings row crashes.
		* This accessor returns the SAME object while the persisted map is unchanged
		* and swaps only when the content actually differs. */
		function overridesSnapshot() {
			const next = readOverrides();
			const cached = overridesSnapshotCache;
			if (cached !== null && JSON.stringify(cached) === JSON.stringify(next)) return cached;
			overridesSnapshotCache = next;
			return next;
		}
		/** Inert legacy value retained for settings-document round-tripping.
		* Rendering always uses SHIKI_TOKENS[flavor].default.
		*/
		function readShikiStyle() {
			try {
				return localStorage.getItem("dsh.tokyonight.shikiStyle") === "italic-comments" ? "italic-comments" : DEFAULT_SHIKI_STYLE;
			} catch {
				return DEFAULT_SHIKI_STYLE;
			}
		}
		/** Persist the shiki style. */
		function writeShikiStyle(value) {
			try {
				localStorage.setItem(SHIKI_STYLE_KEY, value);
			} catch {}
		}
		/** Read the persisted follow-the-OS flag (issue #36; absent means off). */
		function readFollowSystem() {
			try {
				return localStorage.getItem(FOLLOW_SYSTEM_KEY) === "true";
			} catch {
				return false;
			}
		}
		/** Persist the follow-the-OS flag. */
		function writeFollowSystem(value) {
			try {
				localStorage.setItem(FOLLOW_SYSTEM_KEY, String(value));
			} catch {}
		}
		/** Read the follow-mode dark half (only the three dark flavours are legal). */
		function readFollowDark() {
			try {
				const raw = localStorage.getItem(FOLLOW_DARK_KEY);
				return raw !== null && FOLLOW_DARK_FLAVORS.includes(raw) ? raw : DEFAULT_FOLLOW_DARK;
			} catch {
				return DEFAULT_FOLLOW_DARK;
			}
		}
		/** Persist the follow-mode dark half. */
		function writeFollowDark(value) {
			try {
				localStorage.setItem(FOLLOW_DARK_KEY, value);
			} catch {}
		}
		/**
		* Turn one ADOPTED durable section back into local state — the only place a
		* settings-document section is written into the localStorage cache.
		*
		* Issue #38 (2026-11-06): this used to be two hand-copied field lists inside
		* the adoption path, and #36 added `followSystem` / `followDark` to the section
		* without adding them to either. Two origins (Desktop `dsh-app://app` + a LAN
		* web client on another port) then adopted the document without caching the
		* pair, so every publish saw "local ≠ document" and pushed its own stale value
		* back — measured in production at ~0.8 `settings/mutate` per second,
		* ping-ponging `followDark` between two flavours and rewriting
		* `cordis.patch.yml` forever. The record below is a mapped type over the
		* section, so a field added to `TokyoNightSettingsSection` fails to compile
		* until it is cached here too (same drift class as `stateToMutateOps`, which
		* got a derived guard in issue #26).
		*
		* ⚠️ `glass` is written LAST on purpose. `applyRemote` republishes
		* synchronously (`sync()` → `theme/change` → the `glass.subscribe` hook) and
		* that publish runs `queuePersist`, which snapshots `buildLocalState()` on the
		* spot. Writing the glass material earlier — where the pre-#38 code had it,
		* right after the flavour — leaves the follow pair un-cached at snapshot time,
		* so the adoption arms `pendingLocalSection` with a section no flush can ever
		* settle; issue #31's guard 1 then swallows the NEXT external document edit.
		* Verified with a two-snapshot repro: appending the two writes at the END of
		* the adoption block stops the loop but still loses the following edit.
		*
		* @param section - the section the settings document resolved to.
		* @param glass - the glass layer; `applyRemote` caches the knobs and republishes.
		*/
		function writeLocalSection(section, glass) {
			const writers = {
				flavor: writeFlavor,
				followSystem: writeFollowSystem,
				followDark: writeFollowDark,
				autoCheck: writeAutoCheck,
				updateChannel: writeUpdateChannel,
				overrides: writeOverrides,
				shikiStyle: writeShikiStyle,
				glass: (value) => glass.applyRemote(value)
			};
			for (const key of Object.keys(writers)) {
				const write = writers[key];
				write(section[key]);
			}
		}
		/**
		* Does this host ship the menu blur that makes a translucent menu surface work?
		*
		* `--dsw-specific-menu` only became translucent together with the blur: upstream
		* 0.1.7-alpha.1 changed it from `var(--dsw-alias-bg-layer-3)` to a literal
		* 58%/50% neutral AND introduced `--dsw-menu-backdrop-filter: blur(40px)
		* saturate(150%)` in the same release (checked against the 0.1.6-alpha.1 tag,
		* which still has the opaque ladder step and no blur token). On an older host —
		* `latest` is still the 0.1.5 line — the same fill would be *plain*
		* transparency: the transcript would show through the menu with nothing to
		* soften it, and the token also paints panels that carry text (queue dock, todo
		* panel, goal bar, job list, stat dialog, …).
		*
		* Read through <body>'s computed style, where ui-theme declares both tokens.
		* `--dsw-mask-blur` is probed first as a sanity check: it exists in every host
		* we support, so an empty read means the theme stylesheet is not in the cascade
		* yet (or the environment exposes no computed styles). Answering "false" then
		* is the safe side — the opaque fill is correct for every host that predates
		* the blur.
		*/
		function hostHasMenuBlur() {
			if (typeof getComputedStyle !== "function") return false;
			const body = document.body;
			if (body === null) return false;
			const styles = getComputedStyle(body);
			if (styles.getPropertyValue("--dsw-mask-blur").trim() === "") return false;
			return styles.getPropertyValue("--dsw-menu-backdrop-filter").trim() !== "";
		}
		/**
		* Token patch for `--dsw-specific-menu`: the flavour's translucent fill stands
		* where the host declares the matching blur (the value lives in palettes.ts),
		* and the opaque pre-0.1.7 ladder step is injected everywhere else. Applied
		* BEFORE the user overrides, so an explicit `--dsw-specific-menu` in the
		* overrides editor still wins.
		*/
		function menuSurfaceFor(hostHasBlur) {
			return hostHasBlur ? {} : { "--dsw-specific-menu": "var(--dsw-alias-bg-layer-3)" };
		}
		/** Built-in preferences the Appearance row can explicitly pick. */
		const BUILTIN_PREFERENCES = [
			"light",
			"dark",
			"system"
		];
		function isBuiltinPreference(value) {
			return BUILTIN_PREFERENCES.includes(value);
		}
		/** Whether an observed built-in preference wins over the persisted flavour.
		*  Only a light/dark value the user explicitly picked in THIS session — the
		*  recorded `liveBuiltinPick` from the setTheme wrapper — wins. Values adopted
		*  from the settings document at boot/reload (`livePick` null) never win
		*  (issue #6: a doc persisted as `ui-theme.preference: light` was mistaken for
		*  a user choice and buried the flavour on every refresh/restart), and
		*  "system" never wins: while a flavour is on, the TokyoNight row is the
		*  active controller and the Appearance row must not bury the persisted
		*  choice. A user's explicit light/dark pick still wins immediately (matching
		*  livePick) and choosing "off" in the TokyoNight row restores it. */
		function builtinPickWins(preference, livePick) {
			if (preference !== "light" && preference !== "dark") return false;
			return preference === livePick;
		}
		/** Required services: slots + locale (settings rows) and theme (register +
		*  switch). The durable settings transport is NOT a hard dependency: which
		*  service provides it depends on the host version (issue #15 — 0.1.7-alpha.1
		*  replaced `settingsScope` with `configForms`), so `createDurableScope`
		*  binds whichever one appears through its own optional injections. Listing
		*  either name here would leave the plugin permanently pending on the other
		*  half of the installed base. */
		const inject = [
			"slots",
			"locale",
			"theme"
		];
		/**
		* Register the TokyoNight dictionaries, the flavour themes (lazy — item JJ:
		* only the active flavour is registered, the rest on first selection), and
		* the settings rows.
		* @param ctx - client root context.
		*/
		function apply(ctx) {
			ctx.effect(() => {
				const disposers = [
					tolerantRegistration(() => ctx.locale.register(NS, {
						zh,
						en
					})),
					tolerantRegistration(() => ctx.locale.register(NS, "ja", ja)),
					tolerantRegistration(() => ctx.locale.register(NS, "ko", ko)),
					tolerantRegistration(() => ctx.locale.register(NS, "es", es)),
					tolerantRegistration(() => ctx.locale.register(NS, "fr", fr)),
					tolerantRegistration(() => ctx.locale.register(NS, "de", de)),
					tolerantRegistration(() => ctx.locale.addLanguage({
						id: "ja",
						label: "日本語",
						fallback: "en"
					})),
					tolerantRegistration(() => ctx.locale.addLanguage({
						id: "ko",
						label: "한국어",
						fallback: "en"
					})),
					tolerantRegistration(() => ctx.locale.addLanguage({
						id: "es",
						label: "Español",
						fallback: "en"
					})),
					tolerantRegistration(() => ctx.locale.addLanguage({
						id: "fr",
						label: "Français",
						fallback: "en"
					})),
					tolerantRegistration(() => ctx.locale.addLanguage({
						id: "de",
						label: "Deutsch",
						fallback: "en"
					}))
				];
				return () => {
					for (const dispose of disposers) dispose();
				};
			}, "tokyonight: dictionaries");
			const theme = ctx.get("theme");
			const themeDisposers = /* @__PURE__ */ new Map();
			const registerThemeFor = (flavor) => {
				if (themeDisposers.has(flavor.themeId)) return;
				const flavorId = flavor.themeId.replace("tokyonight-", "");
				const shiki = SHIKI_TOKENS[flavorId].default;
				const disposer = tolerantRegistration(() => theme.register({
					id: flavor.themeId,
					colorScheme: flavor.colorScheme,
					tokens: {
						...flavor.tokens,
						...shiki,
						...menuSurfaceFor(hostHasMenuBlur()),
						...readOverrides()
					}
				}));
				themeDisposers.set(flavor.themeId, disposer);
			};
			const ensureThemeRegistered = (themeId) => {
				const flavor = flavorInfo(themeId);
				if (flavor !== void 0) registerThemeFor(flavor);
			};
			const disposeThemeRegistrations = () => {
				for (const dispose of themeDisposers.values()) dispose();
				themeDisposers.clear();
			};
			ctx.effect(() => disposeThemeRegistrations, "tokyonight: flavour theme disposers");
			const glass = new GlassLayer(ctx);
			const scope = createDurableScope(ctx);
			const buildLocalState = () => ({
				version: 1,
				flavor: readFlavor(),
				followSystem: readFollowSystem() && readFlavor() !== "off",
				followDark: readFollowDark(),
				glass: glass.getRemoteState(),
				autoCheck: readAutoCheck(),
				updateChannel: readUpdateChannel(),
				overrides: readOverrides(),
				shikiStyle: readShikiStyle()
			});
			const prefsListeners = /* @__PURE__ */ new Set();
			const emitPrefs = () => {
				for (const listener of prefsListeners) listener();
			};
			let conflictCount = 0;
			const conflictListeners = /* @__PURE__ */ new Set();
			const emitConflict = () => {
				conflictCount += 1;
				for (const listener of conflictListeners) listener();
			};
			const FOLLOW_LAYER_SOURCE = PACKAGE_NAME;
			/** Disposer of the currently stacked follow layer (`undefined` = no layer). */
			let followLayerDispose;
			/** Content signature of the stacked layer, so a no-op refresh does not
			*  republish (every `overrideTokens` call emits `theme/change`). */
			let followLayerSignature;
			/** Theme-id → shiki/flavour key ("tokyonight-light" → "light"). */
			const flavorKey = (flavor) => flavor.themeId.replace("tokyonight-", "");
			/** Whether this host serves `overrideTokens` at all. Hosts before that API
			*  cannot follow the OS; the row hides the control instead of offering a
			*  switch that would do nothing. */
			const followSupported = () => typeof theme.overrideTokens === "function";
			/** Follow mode is wanted AND possible. `off` always wins: turning the plugin
			*  off must not leave a layer painting TokyoNight tokens. */
			const followWanted = () => followSupported() && readFollowSystem() && readFlavor() !== "off";
			/**
			* The two halves of the follow layer.
			*
			* Precedence per token mirrors `registerThemeFor`: flavour tokens < shiki <
			* host-shape menu patch < user overrides (later wins). A user override is
			* scheme-agnostic by contract, so the SAME value goes into both halves.
			* A token present in only one flavour falls back to the other half's value so
			* every entry stays a well-formed `{ light, dark }` pair (`overrideTokens`
			* throws on a bare string).
			* @returns the layer, or null when a flavour table is missing.
			*/
			const followLayerTokens = () => {
				const light = flavorInfo(FOLLOW_LIGHT_FLAVOR);
				const dark = flavorInfo(readFollowDark());
				if (light === void 0 || dark === void 0) return null;
				const lightShiki = SHIKI_TOKENS[flavorKey(light)].default;
				const darkShiki = SHIKI_TOKENS[flavorKey(dark)].default;
				const menu = menuSurfaceFor(hostHasMenuBlur());
				const overrides = readOverrides();
				const names = /* @__PURE__ */ new Set([
					...Object.keys(light.tokens),
					...Object.keys(dark.tokens),
					...Object.keys(lightShiki),
					...Object.keys(darkShiki),
					...Object.keys(menu),
					...Object.keys(overrides)
				]);
				const pairs = {};
				for (const name of names) {
					const lightValue = overrides[name] ?? menu[name] ?? lightShiki[name] ?? light.tokens[name];
					const darkValue = overrides[name] ?? menu[name] ?? darkShiki[name] ?? dark.tokens[name];
					if (lightValue === void 0 && darkValue === void 0) continue;
					pairs[name] = {
						light: lightValue ?? darkValue,
						dark: darkValue ?? lightValue
					};
				}
				return pairs;
			};
			/** Remove the follow layer (idempotent). */
			const disposeFollowLayer = () => {
				if (followLayerDispose === void 0) return;
				followLayerDispose();
				followLayerDispose = void 0;
				followLayerSignature = void 0;
			};
			/**
			* Stack (or refresh, or retire) the follow layer.
			*
			* MUST be called outside a `theme/change` dispatch: `overrideTokens`
			* publishes, and a synchronous publish from inside a dispatch lets the
			* presenter apply the OUTER (stale) snapshot last — the issue #10 trap, same
			* reason `scheduleRestore` defers.
			*/
			const syncFollowLayer = () => {
				if (!followWanted()) {
					disposeFollowLayer();
					return;
				}
				const tokens = followLayerTokens();
				if (tokens === null) {
					disposeFollowLayer();
					return;
				}
				const signature = JSON.stringify(tokens);
				if (followLayerDispose !== void 0 && signature === followLayerSignature) return;
				const dispose = theme.overrideTokens(FOLLOW_LAYER_SOURCE, tokens);
				followLayerDispose?.();
				followLayerDispose = dispose;
				followLayerSignature = signature;
			};
			const reapplyThemePrefs = () => {
				if (followWanted()) {
					syncFollowLayer();
					return;
				}
				disposeFollowLayer();
				const active = theme.getTheme().preference;
				const flavor = flavorInfo(active);
				if (flavor === void 0) return;
				const dispose = themeDisposers.get(flavor.themeId);
				if (dispose === void 0) return;
				themeDisposers.delete(flavor.themeId);
				dispose();
				registerThemeFor(flavor);
				try {
					theme.setTheme(flavor.themeId);
				} catch {}
			};
			let lastWrittenSection;
			let handleStaleConflict;
			let applyRestoredPreference;
			let pendingLocalPush = false;
			let pendingLocalSection = null;
			let maxSeenRevision;
			let revisionKind;
			let lastDocumentSection = null;
			let syncedSection = settingsSectionFromState(buildLocalState());
			const baseRevisionTracker = createBaseRevisionTracker();
			const queuePersist = () => {
				const localSection = settingsSectionFromState(buildLocalState());
				if ((lastDocumentSection === null || !settingsSectionsEqual(localSection, lastDocumentSection)) && !settingsSectionsEqual(localSection, syncedSection)) {
					pendingLocalSection = localSection;
					if (!isScopeUsable(scope.getSnapshot())) pendingLocalPush = true;
				}
				baseRevisionTracker.capture(() => scope.getSnapshot().revision);
				scheduleDurablePersist(persistLocal);
			};
			const persistLocal = () => {
				const baseRevision = baseRevisionTracker.take();
				if (!isScopeUsable(scope.getSnapshot())) {
					pendingLocalSection = null;
					return;
				}
				const state = buildLocalState();
				const flushed = settingsSectionFromState(state);
				persistStateToScope(scope, state, {
					baseRevision,
					lastWrittenSection
				}).then((outcome) => {
					const settled = pendingLocalSection !== null && settingsSectionsEqual(pendingLocalSection, flushed);
					if (outcome === "written") {
						lastWrittenSection = flushed;
						syncedSection = flushed;
						if (settled) pendingLocalSection = null;
					} else if (outcome === "noop") {
						syncedSection = flushed;
						if (settled) pendingLocalSection = null;
					} else if (outcome === "stale") {
						if (settled) pendingLocalSection = null;
						emitConflict();
						handleStaleConflict?.();
					}
				});
			};
			/** How long the Host's pre-paint palette may survive before it is removed
			*  unconditionally (issue #30 补充). Generous on purpose: removing it EARLY
			*  re-exposes the official palette for one frame, which is the bug. */
			const BOOT_PALETTE_FALLBACK_MS = 1e4;
			ctx.effect(() => {
				let liveBuiltinPick = null;
				const bootPaletteFallback = window.setTimeout(() => {
					clearBootPalette();
				}, BOOT_PALETTE_FALLBACK_MS);
				const originalSetTheme = theme.setTheme;
				const commitTheme = (id, record) => {
					if (record) liveBuiltinPick = isBuiltinPreference(id) ? id : null;
					originalSetTheme.call(theme, id);
					clearBootPalette();
				};
				const restoreGuardSetTheme = (id) => {
					commitTheme(id, true);
				};
				theme.setTheme = restoreGuardSetTheme;
				applyRestoredPreference = (id) => {
					commitTheme(id, false);
				};
				let followSyncPending = false;
				const scheduleFollowSync = () => {
					if (followSyncPending) return;
					followSyncPending = true;
					queueMicrotask(() => {
						followSyncPending = false;
						if (!followWanted()) {
							disposeFollowLayer();
							return;
						}
						syncFollowLayer();
						const preference = theme.getTheme().preference;
						if (preference === "system") {
							clearBootPalette();
							return;
						}
						if (builtinPickWins(preference, liveBuiltinPick)) return;
						try {
							commitTheme("system", false);
						} catch {}
					});
				};
				let restorePending = false;
				let pendingDesired;
				const scheduleRestore = (desired) => {
					pendingDesired = desired;
					if (restorePending) return;
					restorePending = true;
					queueMicrotask(() => {
						restorePending = false;
						const wanted = pendingDesired;
						pendingDesired = void 0;
						const preference = theme.getTheme().preference;
						if (preference === wanted) {
							clearBootPalette();
							return;
						}
						if (builtinPickWins(preference, liveBuiltinPick)) return;
						ensureThemeRegistered(wanted);
						try {
							commitTheme(wanted, false);
						} catch {}
					});
				};
				const applyDesired = () => {
					const follow = followWanted();
					if (!follow) rememberBuiltinPreference(theme.getTheme().preference);
					const desired = readFlavor();
					if (follow) {
						scheduleFollowSync();
						return;
					}
					if (followLayerDispose !== void 0) scheduleFollowSync();
					if (desired === "off") {
						const preference = theme.getTheme().preference;
						if (readExplicitFlavorOff()) {
							clearBootPalette();
							if (flavorFromThemeId(preference) !== "off") scheduleRestore(readRestoredPreference());
						}
						return;
					}
					const preference = theme.getTheme().preference;
					if (preference === desired) {
						clearBootPalette();
						return;
					}
					if (builtinPickWins(preference, liveBuiltinPick)) return;
					scheduleRestore(desired);
				};
				applyDesired();
				const disposer = ctx.on("theme/change", applyDesired);
				const onStorage = (event) => {
					if (event.key === "dsh.tokyonight.followSystem" || event.key === "dsh.tokyonight.followDark") {
						emitPrefs();
						applyDesired();
						return;
					}
					if (event.key !== "dsh.tokyonight.flavor") return;
					if (followWanted()) {
						emitPrefs();
						applyDesired();
						return;
					}
					const next = readFlavor();
					if (next !== "off") {
						ensureThemeRegistered(next);
						try {
							theme.setTheme(next);
						} catch {}
						return;
					}
					if (flavorFromThemeId(theme.getTheme().preference) === "off") return;
					try {
						commitTheme(readRestoredPreference(), false);
					} catch {}
				};
				window.addEventListener("storage", onStorage);
				const offGlass = glass.subscribe(() => {
					queuePersist();
				});
				const applyScopeSnapshot = () => {
					const snapshot = scope.getSnapshot();
					const state = durableStateFromSnapshot(snapshot);
					if (state === null) return;
					const revision = snapshot.revision;
					if (revision !== void 0) {
						if (revisionKind !== scope.kind) {
							revisionKind = scope.kind;
							maxSeenRevision = void 0;
						}
						if (maxSeenRevision !== void 0 && revision < maxSeenRevision) return;
						maxSeenRevision = Math.max(maxSeenRevision ?? revision, revision);
					}
					const local = buildLocalState();
					if (pendingLocalPush) {
						pendingLocalPush = false;
						const replayed = replayLocalChanges(state, syncedSection, settingsSectionFromState(local));
						if (replayed.changed) {
							writeLocalSection(replayed.state, glass);
							emitPrefs();
							reapplyThemePrefs();
							applyDesired();
							syncedSection = settingsSectionFromState(replayed.state);
							lastDocumentSection = settingsSectionFromState(state);
							queuePersist();
							return;
						}
					}
					if (!scope.hasUserLayer(snapshot)) {
						if (!isDefaultState(local)) queuePersist();
						return;
					}
					const pushCleaned = hasUnpersistableOverrides(snapshot.value?.overrides);
					const localSection = settingsSectionFromState(local);
					const documentSection = settingsSectionFromState(state);
					if (settingsSectionsEqual(localSection, documentSection)) {
						lastDocumentSection = documentSection;
						return;
					}
					if (pendingLocalSection !== null && !settingsSectionsEqual(pendingLocalSection, documentSection)) return;
					cancelDurablePersist();
					baseRevisionTracker.take();
					pendingLocalSection = null;
					lastDocumentSection = documentSection;
					syncedSection = documentSection;
					writeLocalSection(state, glass);
					emitPrefs();
					reapplyThemePrefs();
					applyDesired();
					if (pushCleaned) queuePersist();
				};
				applyScopeSnapshot();
				const offScope = scope.subscribe(applyScopeSnapshot);
				handleStaleConflict = () => applyScopeSnapshot();
				return () => {
					offScope();
					offGlass();
					disposer();
					window.removeEventListener("storage", onStorage);
					window.clearTimeout(bootPaletteFallback);
					clearBootPalette();
					cancelDurablePersist();
					handleStaleConflict = void 0;
					applyRestoredPreference = void 0;
					if (theme.setTheme === restoreGuardSetTheme) theme.setTheme = originalSetTheme;
					else console.warn("[dsh-tokyonight] theme.setTheme was replaced by another extension; leaving it in place");
				};
			}, "tokyonight: theme restore");
			const injected = () => ({
				themes: TOKYONIGHT_FLAVORS.map((flavor) => ({
					id: flavor.themeId,
					label: flavor.label,
					accent: flavor.accent
				})),
				current: () => {
					if (readFollowSystem() && readFlavor() !== "off") return readFlavor();
					const pref = theme.getTheme().preference;
					return flavorFromThemeId(pref);
				},
				subscribe: (listener) => ctx.on("theme/change", listener),
				followAvailable: followSupported(),
				followSystem: () => readFollowSystem(),
				setFollowSystem: (enabled) => {
					if (!followSupported()) return;
					if (enabled) {
						if (readFlavor() === "off") writeFlavor(readFollowDark());
						writeFollowSystem(true);
						syncFollowLayer();
						try {
							if (applyRestoredPreference !== void 0) applyRestoredPreference("system");
							else theme.setTheme("system");
						} catch {}
					} else {
						writeFollowSystem(false);
						disposeFollowLayer();
						const target = readFlavor();
						if (target !== "off") try {
							if (applyRestoredPreference !== void 0) applyRestoredPreference(target);
							else theme.setTheme(target);
						} catch {}
					}
					emitPrefs();
					queuePersist();
				},
				followDark: () => readFollowDark(),
				setFollowDark: (dark) => {
					if (!FOLLOW_DARK_FLAVORS.includes(dark)) return;
					writeFollowDark(dark);
					if (followWanted()) syncFollowLayer();
					emitPrefs();
					queuePersist();
				},
				select: (choice) => {
					if (readFollowSystem()) {
						writeFollowSystem(false);
						disposeFollowLayer();
					}
					if (choice === "off") {
						writeFlavor("off");
						try {
							if (applyRestoredPreference !== void 0) applyRestoredPreference(readRestoredPreference());
							else theme.setTheme(readRestoredPreference());
						} catch {}
						queuePersist();
						return;
					}
					const flavor = flavorInfo(choice);
					if (!flavor) return;
					const previous = readFlavor();
					writeFlavor(flavor.themeId);
					ensureThemeRegistered(flavor.themeId);
					try {
						theme.setTheme(flavor.themeId);
					} catch {
						themeDisposers.get(flavor.themeId)?.();
						themeDisposers.delete(flavor.themeId);
						registerThemeFor(flavor);
						try {
							theme.setTheme(flavor.themeId);
						} catch {
							writeFlavor(previous);
							emitPrefs();
							emitConflict();
							return;
						}
					}
					queuePersist();
				},
				overrides: overridesSnapshot,
				setOverrides: (overrides) => {
					writeOverrides(overrides);
					emitPrefs();
					reapplyThemePrefs();
					queuePersist();
				},
				subscribePrefs: (listener) => {
					prefsListeners.add(listener);
					return () => {
						prefsListeners.delete(listener);
					};
				}
			});
			const glassInjected = () => ({
				getState: () => glass.getSnapshot(),
				subscribe: (listener) => glass.subscribe(listener),
				setEnabled: (enabled) => {
					glass.setEnabled(enabled);
				},
				setMode: (mode) => {
					glass.setMode(mode);
				},
				setBlur: (blur) => {
					glass.setBlur(blur);
				},
				setFrost: (frost) => {
					glass.setFrost(frost);
				},
				setBrightness: (brightness) => {
					glass.setBrightness(brightness);
				},
				setGap: (gap) => {
					glass.setGap(gap);
				},
				setGlow: (glow) => {
					glass.setGlow(glow);
				},
				setGlowStrength: (glowStrength) => {
					glass.setGlowStrength(glowStrength);
				},
				setGlowSize: (glowSize) => {
					glass.setGlowSize(glowSize);
				},
				resetDefaults: () => {
					glass.resetDefaults();
				}
			});
			const t = ctx.locale.bind(NS);
			const sectionInjected = () => ({
				flavor: injected(),
				glass: glassInjected()
			});
			ctx.slots.inject("settings.section", () => tolerantRegistration(() => ctx.slots.register({
				name: "settings.section",
				id: "tokyonight",
				order: 25,
				label: () => t("nav.title"),
				locale: NS,
				inject: sectionInjected
			}, TokyoNightSettingsPage)));
			const detailInjected = () => ({
				flavor: injected(),
				glass: glassInjected()
			});
			ctx.inject(["configForms"], (formsCtx) => {
				const forms = formsCtx.configForms;
				if (typeof forms.whileServed !== "function") return;
				return forms.whileServed([TOKYONIGHT_ENTRY_ID], () => ctx.slots.inject("plugins.bundle.config", () => tolerantRegistration(() => ctx.slots.register({
					name: "plugins.bundle.config",
					key: PACKAGE_NAME,
					locale: NS,
					inject: detailInjected
				}, TokyoNightDetailCard))));
			});
		}
		//#endregion
		exports.AUTO_CHECK_KEY = AUTO_CHECK_KEY;
		exports.FLAVOR_STORAGE_KEY = FLAVOR_STORAGE_KEY;
		exports.FOLLOW_DARK_KEY = FOLLOW_DARK_KEY;
		exports.FOLLOW_SYSTEM_KEY = FOLLOW_SYSTEM_KEY;
		exports.NS = NS;
		exports.OVERRIDES_KEY = OVERRIDES_KEY;
		exports.RESTORE_STORAGE_KEY = RESTORE_STORAGE_KEY;
		exports.SHIKI_STYLE_KEY = SHIKI_STYLE_KEY;
		exports.TOKYONIGHT_FLAVOR_VALUES = TOKYONIGHT_FLAVOR_VALUES;
		exports.UPDATE_CHANNEL_KEY = UPDATE_CHANNEL_KEY;
		exports.apply = apply;
		exports.builtinPickWins = builtinPickWins;
		exports.flavorFromThemeId = flavorFromThemeId;
		exports.flavorInfo = flavorInfo;
		exports.hostHasMenuBlur = hostHasMenuBlur;
		exports.inject = inject;
		exports.menuSurfaceFor = menuSurfaceFor;
		exports.overridesSnapshot = overridesSnapshot;
		exports.readAutoCheck = readAutoCheck;
		exports.readExplicitFlavorOff = readExplicitFlavorOff;
		exports.readFlavor = readFlavor;
		exports.readFollowDark = readFollowDark;
		exports.readFollowSystem = readFollowSystem;
		exports.readOverrides = readOverrides;
		exports.readRestoredPreference = readRestoredPreference;
		exports.readShikiStyle = readShikiStyle;
		exports.readUpdateChannel = readUpdateChannel;
		exports.rememberBuiltinPreference = rememberBuiltinPreference;
		exports.writeAutoCheck = writeAutoCheck;
		exports.writeFlavor = writeFlavor;
		exports.writeFollowDark = writeFollowDark;
		exports.writeFollowSystem = writeFollowSystem;
		exports.writeLocalSection = writeLocalSection;
		exports.writeOverrides = writeOverrides;
		exports.writeShikiStyle = writeShikiStyle;
		exports.writeUpdateChannel = writeUpdateChannel;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map