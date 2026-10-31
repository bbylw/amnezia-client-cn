import path from 'node:path'
import { fileURLToPath } from 'node:url'

const serverModulePath = './dist/server/server.js'
const { default: serverEntry } = (await import(serverModulePath)) as {
  default: { fetch(request: Request): Promise<Response> | Response }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientDir = path.resolve(__dirname, 'dist/client')

async function renderRoute(routePath: string, outFile: string) {
  const res = await serverEntry.fetch(
    new Request(`https://amnezia-client.ndjp.net${routePath}`),
  )
  const html = await res.text()
  await Bun.write(path.join(clientDir, outFile), html)
  console.log(`Prerendered ${routePath} -> dist/client/${outFile} (${html.length} chars)`)
}

await renderRoute('/', 'index.html')
await renderRoute('/404', '404.html')

