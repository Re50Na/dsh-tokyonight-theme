// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { Context } from '@deepseek-ai/cordis'
import { apply, Config } from '../../src/index.ts'
import { TOKYONIGHT_ENTRY_ID, TOKYONIGHT_SETTINGS_NS } from '../../src/state.ts'

describe('host settings without an updater', () => {
  it('registers settings without registering a network route', async () => {
    const root = new Context()
    const register = vi.fn(() => () => {})
    const installSection = vi.fn()
    root.provide('webServer', { register })
    root.provide('settings', { installSection, describe: () => [], update: async () => {} })
    try {
      await root.plugin(apply)
      await vi.waitFor(() => expect(installSection).toHaveBeenCalled())
      expect(installSection.mock.calls[0][1]).toBe(TOKYONIGHT_SETTINGS_NS)
      expect(register).not.toHaveBeenCalled()
    } finally {
      await root.fiber.dispose()
    }
  })
})

describe('e2e: host plugin on a 0.1.7-shaped settings service (issue #15)', () => {
  const configure = vi.fn((_presentation: unknown, _owner: unknown) => undefined)
  const update = vi.fn(async (_ns: string, _patch: object, _revision?: number) => { /* noop */ })
  const describeStub = vi.fn(() => [{ ns: TOKYONIGHT_ENTRY_ID, revision: 1, user: {} }])
  let app: Context

  beforeAll(async () => {
    app = new Context()
    app.provide('webServer', { register: () => () => { /* routes are irrelevant here */ } })
    // The 0.1.7 shape: configure / describe / update / replace / mutate, and
    // NO installSection.
    app.provide('settings', { configure, describe: describeStub, update })
    await app.plugin(apply)
    await vi.waitFor(() => expect(configure).toHaveBeenCalled())
  })

  afterAll(async () => {
    await app.fiber.dispose()
  })

  it('activates without installSection and suppresses the auto-generated page', () => {
    expect(configure).toHaveBeenCalledTimes(1)
    expect(configure.mock.calls[0]?.[0]).toEqual({ auto: false })
  })

  it('addresses the durable state by profile entry id, never the removed namespace', async () => {
    // The legacy file may or may not exist on the machine running this suite;
    // what matters is that EVERY write targets the entry id that carries the
    // form, and never the namespace the old seam used.
    for (const call of update.mock.calls) expect(call[0]).toBe(TOKYONIGHT_ENTRY_ID)
    expect(update.mock.calls.some((call) => call[0] === TOKYONIGHT_SETTINGS_NS)).toBe(false)
  })

  it('exports the volatile Config the settings service projects', () => {
    // The Loader reads `Config` off the plugin MODULE, so this asserts the
    // module-level export (not anything on `apply`) really carries the volatile
    // fields the settings service projects into a form.
    expect(Config).toBeDefined()
    expect(JSON.stringify(Config.toJSON())).toContain('"volatile":true')
  })
})