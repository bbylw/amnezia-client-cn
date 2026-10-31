import path from 'node:path'
import { fileURLToPath } from 'node:url'
import serverEntry from './dist/server/server.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientDir = path.resolve(__dirname, 'dist/client')

const port = Number(process.env.PORT) || 3000
const hostname = process.env.HOST || '127.0.0.1'

const server = Bun.serve({
  port,
  hostname,
  async fetch(request) {
    const url = new URL(request.url)

    if (request.method === 'GET' || request.method === 'HEAD') {
      const relativePath = decodeURIComponent(url.pathname).replace(/^\/+/, '')
      if (relativePath) {
        const candidate = path.resolve(clientDir, relativePath)
        if (
          candidate.startsWith(clientDir + path.sep) &&
          !relativePath.endsWith('/')
        ) {
          const file = Bun.file(candidate)
          if (await file.exists()) {
            return new Response(file, {
              headers: {
                'cache-control': url.pathname.startsWith('/assets/')
                  ? 'public, max-age=31536000, immutable'
                  : 'public, max-age=3600',
              },
            })
          }
        }
      }
    }

    return serverEntry.fetch(request)
  },
})

console.log(`Amnezia VPN site listening on http://${server.hostname}:${server.port}`)

