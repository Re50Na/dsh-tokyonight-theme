import { readFileSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";
import Schema from "@deepseek-ai/schemastery";
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
/** State file name under the DSH home (kept next to the Desktop-managed
*  `cordis.patch.yml` so it survives the Desktop's per-launch port churn). */
const STATE_FILENAME = "tokyonight-state.json";
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
/** Default settings-document section: no flavour and no glass (mirrors
*  `defaultState()` minus the synthetic `version`). */
function defaultSettingsSection() {
	return {
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
//#endregion
//#region src/boot-palette.ts
/**
* Pre-paint palette: the flavour's `--dsw-*` table, injected into the index
* HTML so the FIRST frame is already TokyoNight (issue #30 补充, 2026-10-27).
*
* Why this exists. The official `dsh-client-ui-theme` Host half contributes two
* boot rows through `webserver/index-inject` (prepended): a head `<style>`
* painting `body{background-color:#151517}` (or `#fff`) plus `color-scheme`,
* and a body script that sets `data-ds-dark-theme` for the durable built-in
* preference. Those decide the colour of everything BEFORE any script runs.
* Our flavours can only be `theme.register()`ed and `setTheme()`d by the
* Client bundle, i.e. strictly after first paint — so a TokyoNight user sees
* the official dark (or light) canvas flash first. Measured by the reporter on
* 0.6.4 (CPU 3x, fresh browser): first-frame centre pixel `#151517`, official
* dark, with `flavor: tokyonight-storm` persisted.
*
* The fix mirrors the official rows: paint the same document canvas with the
* flavour's own token table, and let the Client remove the sheet the moment the
* flavour theme actually takes over (the sheet must not outlive that point —
* its selector outranks the official `body` block, so a leftover sheet would
* pin every token and defeat later theme switches).
*
* Contract notes (all verified against the 0.2.1-rc.3 release):
*  - Rows are plain JSON (`IndexInjection`): `{ kind: 'style', text }`,
*    `{ kind: 'html', placement, html }`, `{ kind: 'script', placement, text }`.
*    This module uses `html` for the sheet so it can carry an identifying
*    attribute the Client can query — a `style` row renders without attributes.
*  - The official rows are pushed with `{ prepend: true }`, so rows appended
*    from here land AFTER them; both the style order and the body-script order
*    therefore favour us. Do not rely on that alone: the sheet selector is
*    `html body` (0,0,2), which beats the official `body` (0,0,1) block that the
*    Client bundle injects later, no matter the order.
*  - The served index carries no CSP header, so inline style/script is allowed
*    (the official theme relies on exactly that).
*  - The Host only knows the durable flavour where the config field is a
*    volatile ref (`Config.flavor.get()` on DSH >= 0.1.7). On the legacy seam
*    the entry config is the profile patch's static value, NOT the settings
*    document, so injecting from it would paint the wrong palette — those hosts
*    get no rows at all (`bootPaletteRows` returns `[]`).
*/
/** Attribute marking the injected `<style>` so the Client can find it. */
const BOOT_PALETTE_ATTR = "data-dsh-tokyonight-boot";
/** Read a volatile config ref; `undefined` when the field is NOT a ref.
*
*  Returning `undefined` for plain values is the legacy-host gate described in
*  the module header: a plain `flavor` is the profile patch's default, so
*  painting it would fight the durable document. */
function readVolatile(value) {
	if (typeof value !== "object" || value === null) return void 0;
	const getter = value.get;
	if (typeof getter !== "function") return void 0;
	try {
		return getter.call(value);
	} catch {
		return;
	}
}
/**
* Keep only override entries that are safe to embed in a `<style>` text node.
*
* `sanitizeOverrides` (the durable contract) already drops non-`--` keys and
* non-string values, but a value is arbitrary text: `}</style><script>…` would
* escape the element, and `;`/`{`/`}` would escape the declaration. Values are
* CSS expressions, so everything else stays allowed (`color-mix(…)`, `var(…)`,
* `rgba(…)`, quotes, slashes).
* @param raw - the durable overrides map as the Host resolved it.
* @returns the subset safe to concatenate into the sheet.
*/
function cssSafeOverrides(raw) {
	const out = {};
	if (typeof raw !== "object" || raw === null) return out;
	for (const [key, value] of Object.entries(raw)) {
		if (typeof value !== "string") continue;
		if (!/^--[A-Za-z0-9_-]+$/u.test(key)) continue;
		if (/[<>\\{};\u0000-\u001f]/u.test(value)) continue;
		out[key] = value;
	}
	return out;
}
/** The declaration block for one flavour: every token, then the user overrides
*  (last wins), then the canvas colour the boot splash reads. */
function declarationBlock(flavor, overrides) {
	const tokens = Object.entries(flavor.tokens).map(([name, value]) => `${name}:${value}`);
	const extra = Object.entries(overrides).map(([name, value]) => `${name}:${value}`);
	return [
		...tokens,
		...extra,
		"background-color:var(--dsw-alias-bg-base)"
	].join(";");
}
/**
* The pre-paint `<style>` element (carries {@link BOOT_PALETTE_ATTR}).
*
* Two selectors on purpose: `html body` outranks the official `body` block
* (which the Client bundle installs later), and the `[data-ds-dark-theme]`
* variant keeps the sheet in force when the official boot script toggled the
* attribute to the opposite scheme.
* @param flavor - the persisted flavour.
* @param overrides - already filtered by {@link cssSafeOverrides}.
* @returns a complete `<style>…</style>` fragment for a `kind: 'html'` row.
*/
function bootPaletteStyle(flavor, overrides = {}) {
	return `<style ${BOOT_PALETTE_ATTR}>:root{color-scheme:${flavor.colorScheme}}html body,html body[data-ds-dark-theme]{${declarationBlock(flavor, overrides)}}</style>`;
}
/**
* The body script that aligns the shell's dark-variant attribute with the
* flavour. Runs after the official script (the official rows are prepended), so
* it wins; it touches NOTHING else — `data-ds-theme-source` and the font
* variables stay the official script's business.
* @param flavor - the persisted flavour.
* @returns the script text for a `kind: 'script'` row.
*/
function bootPaletteScript(flavor) {
	return `(()=>{document.body.toggleAttribute('data-ds-dark-theme',${flavor.colorScheme === "dark"})})()`;
}
/**
* The pre-paint sheet for FOLLOW mode (issue #36): the light half (Light) is
* the default block and the dark half sits behind `prefers-color-scheme`.
*
* Why a media query works here and NOT in the Client: this sheet is plain CSS
* evaluated by the renderer before any script decides a preference, so it
* tracks the OS by itself. The Client cannot do the same (see
* `docs/issue-36-follow-system.md` §2) — which is exactly why follow mode keeps
* the runtime preference on `system` and stacks a token layer.
*
* The dark block is emitted AFTER the light one so it wins on equal
* specificity, and it also matches `[data-ds-dark-theme]` so a stale official
* body script cannot leave the light table in force on a dark OS.
* @param light - the light flavour (Light).
* @param dark - the persisted follow-mode dark flavour.
* @param overrides - already filtered by {@link cssSafeOverrides}; applied to
*  BOTH halves (a user override is scheme-agnostic by contract).
* @returns a complete `<style>…</style>` fragment for a `kind: 'html'` row.
*/
function followPaletteStyle(light, dark, overrides = {}) {
	const lightBlock = declarationBlock(light, overrides);
	const darkBlock = declarationBlock(dark, overrides);
	return `<style ${BOOT_PALETTE_ATTR}>:root{color-scheme:light dark}html body,html body:not([data-ds-dark-theme]){${lightBlock}}@media (prefers-color-scheme: dark){html body,html body[data-ds-dark-theme]{${darkBlock}}}</style>`;
}
/**
* The body script for follow mode: align `data-ds-dark-theme` with the OS
* instead of a fixed flavour scheme, so the attribute-keyed rules (ours and
* the host's) are right on the first frame.
* @returns the script text for a `kind: 'script'` row.
*/
function followPaletteScript() {
	return "(()=>{document.body.toggleAttribute('data-ds-dark-theme',matchMedia('(prefers-color-scheme: dark)').matches)})()";
}
/**
* The boot rows for the current Host state: empty when no flavour is persisted
* (`off`), when the config carries no volatile ref (legacy seam — see the
* module header), or when the value names no known flavour.
*
* Follow mode (issue #36) replaces the fixed-flavour rows with the two-half
* sheet; it still requires a persisted flavour, because follow mode is a
* modifier on a TokyoNight choice, never a way to paint TokyoNight while the
* document says `off`.
* @param config - the plugin config the Loader hands `apply`.
* @returns rows to `push` into the `webserver/index-inject` table.
*/
function bootPaletteRows(config) {
	const flavorId = readVolatile(config?.flavor);
	if (typeof flavorId !== "string") return [];
	const flavor = TOKYONIGHT_FLAVORS.find((candidate) => candidate.themeId === flavorId);
	if (flavor === void 0) return [];
	const overrides = cssSafeOverrides(readVolatile(config?.overrides));
	if (readVolatile(config?.followSystem) === true) {
		const light = TOKYONIGHT_FLAVORS.find((candidate) => candidate.themeId === FOLLOW_LIGHT_FLAVOR);
		const darkId = readVolatile(config?.followDark);
		const dark = TOKYONIGHT_FLAVORS.find((candidate) => candidate.themeId === darkId && candidate.colorScheme === "dark");
		if (light !== void 0 && dark !== void 0) return [{
			kind: "html",
			placement: "head",
			html: followPaletteStyle(light, dark, overrides)
		}, {
			kind: "script",
			placement: "body",
			text: followPaletteScript()
		}];
	}
	return [{
		kind: "html",
		placement: "head",
		html: bootPaletteStyle(flavor, overrides)
	}, {
		kind: "script",
		placement: "body",
		text: bootPaletteScript(flavor)
	}];
}
//#endregion
//#region src/profile-detect.ts
/** The DSH home the running process owns — `$DSH_HOME` when set, else
*  `~/.dsh`. Port-independent and stable across restarts, so it is the right
*  root for the plugin's durable state file. */
function defaultDshHome() {
	return process.env.DSH_HOME?.trim() || join(homedir(), ".dsh");
}
//#endregion
//#region src/legacy-state.ts
/**
* Legacy durable-state read — the one-shot migration source for 0.5.0.
*
* Up to 0.4.x the plugin persisted its state in a small JSON file under the
* DSH home (`tokyonight-state.json`), served to the Client through the
* `/tokyonight/state` route. 0.5.0 migrates persistence to the official
* settings seam (`ctx.settings` Host-side, and whichever Client transport the
* host serves — see `src/client/state-sync.ts`), which is durable across
* browsers and origins just like the file was (it lives in the DSH home). The legacy file is READ-ONLY here: 0.5.0 migrates its content into
* the settings document once and keeps the file on disk as a rollback copy
* (an affected user can restore their old state by hand from it).
*
* Host-only module (node:fs / node:path resolve at runtime in the DSH
* process); the Client never sees it.
*/
/** Absolute path of the legacy state file under a DSH home. */
function legacyStateFilePath(home = defaultDshHome()) {
	return join(home, STATE_FILENAME);
}
/** Read the legacy durable state; absent or unparseable input means none yet. */
function readLegacyState(home = defaultDshHome()) {
	try {
		return sanitizeState(JSON.parse(readFileSync(legacyStateFilePath(home), "utf8")));
	} catch {
		return null;
	}
}
//#endregion
//#region src/migrate-legacy.ts
/**
* Run the migration once.
* @param settings - the live settings service.
* @param ns - the namespace to write: `TOKYONIGHT_SETTINGS_NS` on the legacy
*             seam, `TOKYONIGHT_ENTRY_ID` on the new one.
* @param hasUserLayer - the channel's own "the store already holds a user
*             layer" predicate (see the module header).
* @param options - fence policy (see {@link MigrationOptions}).
* @returns the outcome; only `pending` is worth retrying.
*/
async function migrateLegacyStateOnce(settings, ns, hasUserLayer, options = {}) {
	const legacy = readLegacyState();
	if (legacy === null || isDefaultState(legacy)) return "absent";
	const descriptor = settings.describe({ redactSecrets: true }).find((candidate) => candidate.ns === ns);
	if (descriptor === void 0) return "pending";
	if (hasUserLayer(descriptor.user)) return "skipped";
	await settings.update(ns, settingsSectionFromState(legacy), options.fence === true ? descriptor.revision : void 0);
	return "migrated";
}
/**
* Run the migration on the NEW seam without racing the plugin's own
* activation: one deferred attempt, one retry when the entry's form finally
* lands in the describe mirror, and one last attempt a few seconds later.
* Bounded on purpose — a permanently missing entry (a user who renamed it)
* must not leave a timer running for the process lifetime. The whole schedule
* is fiber-scoped, so unloading the plugin cancels it.
* @param ctx - the Host plugin context.
* @param settings - the live settings service.
* @param ns - the profile entry id carrying the form.
* @param hasUserLayer - the new seam's user-layer predicate.
*/
function scheduleLegacyMigration(ctx, settings, ns, hasUserLayer) {
	let settled = false;
	let claimed = false;
	const attempt = () => {
		if (settled || claimed) return;
		claimed = true;
		migrateLegacyStateOnce(settings, ns, hasUserLayer, { fence: true }).then((outcome) => {
			if (outcome === "pending") {
				claimed = false;
				return;
			}
			settled = true;
		}).catch((error) => {
			settled = true;
			console.warn(`[dsh-tokyonight] legacy state migration failed: ${String(error)}`);
		});
	};
	ctx.effect(() => {
		const deferred = setTimeout(attempt, 0);
		const late = setTimeout(attempt, 3e3);
		const off = ctx.on("settings/document-updated", (documentNs) => {
			if (String(documentNs) === ns) attempt();
		});
		return () => {
			clearTimeout(deferred);
			clearTimeout(late);
			off();
		};
	}, "tokyonight: legacy state migration");
}
//#endregion
//#region src/settings-tokyonight.ts
/**
* The TokyoNight settings contract — the official-settings shape of the
* plugin's durable state (0.5.0+, replacing the legacy
* `tokyonight-state.json`), in BOTH forms the DSH versions in the wild need.
*
* Two seams, one contract (issue #15):
*
*  - **DSH <= 0.1.6-alpha.2** (`latest` on npm) serves an abstract settings
*    document. The Host half registers a namespace on it
*    (`settings.installSection(TOKYONIGHT_SETTINGS_NS, schema, base, hooks)`)
*    and the Client binds that namespace through `ctx.settingsScope`. This
*    module owns the registered schema ({@link TokyoNightSettingsSchema}) and
*    the composition `base` ({@link TOKYONIGHT_SETTINGS_BASE}).
*  - **DSH >= 0.1.7-alpha.1** (`next`) dropped both. A plugin no longer
*    registers a namespace: it declares a `Config` schema whose fields carry
*    `.volatile()`, and the settings service projects exactly those fields
*    into a form named by the ACTIVE PROFILE ENTRY id
*    (`TOKYONIGHT_ENTRY_ID`). That projected schema is {@link Config}, the
*    module's only export the Loader consumes.
*
* Both forms are built from ONE field table ({@link tokyonightSchemaFields}),
* so a field can never drift between them. They must NOT share node
* instances: `.volatile()` mutates the node's meta in place and returns it,
* so reusing a node would silently mark the legacy schema volatile as well.
*
* {@link maybeVolatile} is the compatibility hinge: `.volatile()` exists only
* from schemastery **3.18.3** (DSH 0.1.5/0.1.6 hosts pin `3.18.2`), and this
* module is loaded with the HOST's schemastery (it stays external in the lib
* build). An unconditional `.volatile()` would therefore throw at module
* evaluation time on every old host — turning "plugin pending" into "plugin
* failed to load". On such a host the guarded call is a no-op, which is
* exactly the pre-0.1.7 status quo (no entry-level form exists there).
*
* This module is Host-side because it imports `@deepseek-ai/schemastery`
* (resolved from the DSH profile tree at runtime). The Client never imports
* it; it consumes the form by name.
*/
/**
* Mark a schema node volatile when the running schemastery supports it.
*
* Guarded on purpose (see the module header): `.volatile()` landed in
* schemastery 3.18.3, while DSH <= 0.1.6-alpha.2 hosts pin 3.18.2 and this
* module resolves schemastery from THEIR tree. Calling it unconditionally
* throws at import time on those hosts.
* @param node - freshly built schema node (never reused across schemas).
* @returns the same node, marked volatile when the capability exists.
*/
function maybeVolatile(node) {
	const capable = node;
	return typeof capable.volatile === "function" ? capable.volatile() : node;
}
/**
* Build FRESH schema nodes for every field of the durable contract. Every
* field maps 1:1 onto `TokyoNightSettingsSection` in `src/state.ts`, and every
* default is the shipped default — the Client treats "resolves to the shipped
* defaults" as "no user choice yet", so a wrong default would write garbage
* into a user's profile on first boot.
*
* Callers MUST NOT share the returned nodes between schemas (see the header).
* @returns a new field table, one fresh node per field.
*/
function tokyonightSchemaFields() {
	return {
		flavor: Schema.union([...TOKYONIGHT_THEME_IDS, "off"]).default("off"),
		followSystem: Schema.boolean().default(false),
		followDark: Schema.union([...FOLLOW_DARK_FLAVORS]).default(DEFAULT_FOLLOW_DARK),
		glass: Schema.object({
			enabled: Schema.boolean().default(DEFAULT_GLASS.enabled),
			mode: Schema.union(["mica", "compat"]).default(DEFAULT_GLASS.mode),
			blur: Schema.number().min(0).max(40).default(DEFAULT_GLASS.blur),
			frost: Schema.number().min(0).max(100).default(DEFAULT_GLASS.frost),
			brightness: Schema.number().min(0).max(100).default(DEFAULT_GLASS.brightness),
			gap: Schema.number().min(4).max(24).default(DEFAULT_GLASS.gap),
			glowStrength: Schema.number().min(0).max(200).default(DEFAULT_GLASS.glowStrength),
			glowSize: Schema.number().min(100).max(250).default(DEFAULT_GLASS.glowSize),
			glow: Schema.boolean().default(DEFAULT_GLASS.glow)
		}),
		autoCheck: Schema.boolean().default(true),
		updateChannel: Schema.union(["latest", "beta"]).default(DEFAULT_UPDATE_CHANNEL),
		overrides: Schema.dict(Schema.string()).default({}),
		shikiStyle: Schema.union(["default", "italic-comments"]).default(DEFAULT_SHIKI_STYLE)
	};
}
/** The same table with every leaf marked volatile where the capability exists.
*  Marking the leaves (rather than the `glass` subtree) keeps
*  `isVolatilePath` true for each nested path without putting volatile inside
*  volatile — schemastery rejects that combination. */
function volatileFields() {
	const fields = tokyonightSchemaFields();
	const glassFields = fields.glass.dict ?? {};
	return {
		flavor: maybeVolatile(fields.flavor),
		followSystem: maybeVolatile(fields.followSystem),
		followDark: maybeVolatile(fields.followDark),
		glass: Schema.object(Object.fromEntries(Object.entries(glassFields).map(([key, node]) => [key, maybeVolatile(node)]))),
		autoCheck: maybeVolatile(fields.autoCheck),
		updateChannel: maybeVolatile(fields.updateChannel),
		overrides: maybeVolatile(fields.overrides),
		shikiStyle: maybeVolatile(fields.shikiStyle)
	};
}
/**
* The namespace schema registered by the LEGACY Host seam
* (`settings.installSection`). Deliberately plain: on a host that has
* `installSection` there is no `.volatile()` capability, and the field set is
* resolved by the settings document rather than by a form projection.
*/
const TokyoNightSettingsSchema = Schema.object(tokyonightSchemaFields());
/** The composition `base` for the legacy namespace: the shipped defaults. */
const TOKYONIGHT_SETTINGS_BASE = defaultSettingsSection();
/**
* The plugin `Config` consumed by the NEW Host seam (DSH >= 0.1.7-alpha.1).
* Its volatile fields are what the settings service projects into the form the
* Client addresses by `TOKYONIGHT_ENTRY_ID`; the Host half never reads the
* values itself. On a legacy host every field stays plain, so the entry
* exposes no form at all — the old seam keeps doing the persisting.
*/
const Config = Schema.object(volatileFields());
//#endregion
//#region src/index.ts
/** Stable cordis plugin name (matches cordis.patch.yml insert id). */
const name = "dsh-tokyonight";
/**
* Hard dependencies: the update check is a webServer route, so this Host
* half is not activated until the webServer service is live. Declaring
* inject (not a one-shot `ctx.get` probe) makes route registration
* deterministic: Cordis reactivates the plugin once the service appears, no
* matter the mount order.
*/
const inject = ["webServer"];
/** The legacy document describes "no user layer" as an ABSENT field (it maps
*  over the namespaces it has a section for), so presence is the whole test —
*  the same predicate 0.5.x used. */
function legacyUserLayer(user) {
	return user !== void 0;
}
/** Host plugin body: wire whichever
*  settings seam the running host offers (webServer is inject; settings is
*  optional wiring). */
function apply(ctx, config) {
	ctx.on("webserver/index-inject", (table) => {
		table.push(...bootPaletteRows(config));
	});
	ctx.inject(["settings"], (sctx) => {
		const settings = sctx.settings;
		if (typeof settings.installSection === "function") {
			settings.installSection(sctx, TOKYONIGHT_SETTINGS_NS, TokyoNightSettingsSchema, TOKYONIGHT_SETTINGS_BASE, {
				setSource() {},
				onChange() {}
			});
			migrateLegacyStateOnce(settings, TOKYONIGHT_SETTINGS_NS, legacyUserLayer).catch((error) => {
				console.warn(`[dsh-tokyonight] legacy state migration failed: ${String(error)}`);
			});
			return;
		}
		const releasePresentation = settings.configure?.({ auto: false }, ctx.fiber);
		scheduleLegacyMigration(ctx, settings, TOKYONIGHT_ENTRY_ID, hasUserLayerSection);
		return () => {
			if (typeof releasePresentation === "function") releasePresentation();
		};
	});
}
//#endregion
export { Config, apply, inject, name };

//# sourceMappingURL=index.js.map