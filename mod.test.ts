import userAgent from './mod.ts'
import { assertEquals } from 'https://deno.land/std@v0.184.0/testing/asserts.ts'

Deno.test('userAgent', () => {
  const data = userAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
  )

  assertEquals(data, {
    browser: {
      name: 'Chrome',
      version: '111.0.0.0',
    },
    cpu: {
      architecture: 'amd64',
    },
    device: {
      model: undefined,
      type: undefined,
      vendor: undefined,
    },
    engine: {
      name: 'Blink',
      version: '111.0.0.0',
    },
    os: {
      name: 'Windows',
      version: '10',
    },
  })
})
