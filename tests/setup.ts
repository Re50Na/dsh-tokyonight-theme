import { beforeEach } from 'vitest'

// Node 26's built-in localStorage slot shadows jsdom's during Vitest's global
// population. Use the actual jsdom Window storage, not a map-based mock.
if (typeof window !== 'undefined') {
  const dom = (globalThis as unknown as { jsdom: { window: Window } }).jsdom
  const storage = dom.window.localStorage
  beforeEach(() => {
    Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: storage })
  })
}
