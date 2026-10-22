import { readFile, writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'

await build()
await build({
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: '.prerender',
    copyPublicDir: false,
    emptyOutDir: true,
  },
})

try {
  const { render } = await import(pathToFileURL(resolve('.prerender/entry-server.js')).href)
  const template = await readFile('dist/index.html', 'utf8')
  const outlet = '<div id="root"></div>'
  if (!template.includes(outlet)) throw new Error('Homepage render outlet is missing')
  await writeFile('dist/index.html', template.replace(outlet, () => `<div id="root">${render()}</div>`))
  console.log('Prerendered homepage HTML for users and search engines.')
} finally {
  await rm('.prerender', { recursive: true, force: true })
}
