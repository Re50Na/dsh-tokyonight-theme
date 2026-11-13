// @vitest-environment node
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { TOKYONIGHT_FLAVORS } from '../src/client/palettes.ts'
import { SHIKI_TOKENS } from '../src/client/shiki-tokens.ts'

const read = (file: string) => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8')
const snapshot = JSON.parse(read('data/dsw-tokens.json')) as Record<string, Record<string, string>>
const reference = read('TokyoNightPalette.md').toLowerCase()

describe('TokyoNightPalette.md integration contract', () => {
  it('retains all three documented backgrounds and main foregrounds', () => {
    for (const [id, bg, fg] of [
      ['light', '#e6e7ed', '#343b58'],
      ['storm', '#24283b', '#a9b1d6'],
      ['night', '#1a1b26', '#a9b1d6'],
    ]) {
      expect(reference).toContain(bg)
      expect(reference).toContain(fg)
      const theme = TOKYONIGHT_FLAVORS.find(f => f.themeId === `tokyonight-${id}`)!
      // Follow a pure var() reference to its static end.
      const resolve = (key: string): string => {
        const value = theme.tokens[key]
        const ref = /^var\((--[\w-]+)\)$/.exec(value)
        return ref ? resolve(ref[1]) : value
      }
      expect(resolve('--dsw-alias-bg-base')).toBe(bg)
      expect(resolve('--dsw-alias-label-primary')).toBe(fg)
    }
  })

  it('covers the pinned DSH token set exactly in every variant', () => {
    for (const theme of TOKYONIGHT_FLAVORS) {
      const scheme = theme.colorScheme
      const keys = ['static', 'alias', 'specific', 'other']
        .flatMap(family => Object.keys(snapshot[`${scheme}_${family}`]).map(k => `--${k}`))
      expect(Object.keys(theme.tokens).sort()).toEqual(keys.sort())
      expect(keys).toHaveLength(190)
    }
    expect(new Set(TOKYONIGHT_FLAVORS.map(f => f.themeId)).size).toBe(3)
  })

  it('uses documented syntax accents rather than inherited Catppuccin colours', () => {
    for (const tokens of Object.values(SHIKI_TOKENS)) {
      for (const [key, colour] of Object.entries(tokens.default)) {
        if (!key.endsWith('foreground') && !key.endsWith('background')) {
          expect(reference, `${key}: ${colour}`).toContain(colour)
        }
      }
    }
  })
})
