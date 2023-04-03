// @deno-types='https://cdn.jsdelivr.net/npm/@types/ua-parser-js@0.7.36/index.d.ts'
import UAParser from 'https://cdn.jsdelivr.net/npm/ua-parser-js@1.0.34/dist/ua-parser.pack.js/+esm'

export default function userAgent(header: string) {
  const userAgent = new UAParser(header)

  const browser = userAgent.getBrowser()
  const cpu = userAgent.getCPU()
  const device = userAgent.getDevice()
  const engine = userAgent.getEngine()
  const os = userAgent.getOS()

  return {
    browser: {
      name: browser.name,
      version: browser.version,
    },

    cpu: {
      architecture: cpu.architecture,
    },

    device: {
      model: device.model,
      type: device.type,
      vendor: device.vendor,
    },

    engine: {
      name: engine.name,
      version: engine.version,
    },

    os: {
      name: os.name,
      version: os.version,
    },
  }
}
