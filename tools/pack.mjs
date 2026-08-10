#!/usr/bin/env node
/**
 * Packs a Storybook static build from the EHR repo into this repo as an installable PWA.
 *
 *   cd ../tonnard-verpaele/app && pnpm build-storybook
 *   node tools/pack.mjs ../tonnard-verpaele/app/storybook-static
 *
 * What it does:
 *  - copies the *preview* half of the build into app/ (the manager UI is dropped: the launcher
 *    replaces it, and dropping it also drops the "Show code" source panels);
 *  - patches app/iframe.html with the iOS/PWA meta tags plus the launcher's css/js;
 *  - writes screens.js, manifest.webmanifest and the root redirect.
 */
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEFAULT_SCREEN, SCREENS } from './screens.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = resolve(process.argv[2] ?? '../tonnard-verpaele/app/storybook-static')
const iconSource = resolve(process.argv[3] ?? join(source, '..', 'public'))

if (!existsSync(join(source, 'iframe.html'))) {
  console.error(`No Storybook build at ${source} (expected iframe.html). Run \`pnpm build-storybook\` first.`)
  process.exit(1)
}

/**
 * Manager-only output plus app/public files the spike has no use for: the preview document the
 * launcher points at loads none of them. `email-templates/` is the GoTrue magic-link mail and
 * `manifest.json` the EHR's own manifest — neither belongs in a published spike.
 */
const DROP = new Set([
  'sb-manager',
  'sb-addons',
  'index.html',
  'project.json',
  'robots.txt',
  'email-templates',
  'manifest.json',
])
const START = `./app/iframe.html?id=${DEFAULT_SCREEN}&viewMode=story`

await rm(join(root, 'app'), { recursive: true, force: true })
await cp(source, join(root, 'app'), { recursive: true, filter: (path) => !DROP.has(path.slice(source.length + 1)) })

// ── iframe.html: the page iOS actually installs ──────────────────────────────
const head = `
    <title>T&amp;V Agenda — spike</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="theme-color" content="#3B6C66" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="T&amp;V Agenda" />
    <link rel="manifest" href="../manifest.webmanifest" />
    <link rel="apple-touch-icon" href="../icons/logo192.png" />
    <link rel="icon" href="../icons/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="../pwa-shell.css" />`

let iframe = await readFile(join(source, 'iframe.html'), 'utf8')
iframe = iframe
  .replace('<title>Storybook</title>', '')
  .replace('<meta name="viewport" content="width=device-width, initial-scale=1" />', head)
  .replace('</body>', '    <script src="../screens.js"></script>\n    <script src="../pwa-shell.js"></script>\n  </body>')
await writeFile(join(root, 'app', 'iframe.html'), iframe)

// ── root files ───────────────────────────────────────────────────────────────
await writeFile(join(root, 'screens.js'), `window.__SPIKE_SCREENS = ${JSON.stringify(SCREENS, null, 2)}\n`)

await writeFile(
  join(root, 'manifest.webmanifest'),
  JSON.stringify(
    {
      name: 'Tonnard & Verpaele — Agenda (spike)',
      short_name: 'T&V Agenda',
      description: 'Statische PWA-spike van de agenda, op vaste testdata.',
      start_url: START,
      scope: './',
      display: 'standalone',
      orientation: 'any',
      theme_color: '#3B6C66',
      background_color: '#ffffff',
      icons: [
        { src: './icons/logo192.png', type: 'image/png', sizes: '192x192' },
        { src: './icons/logo512.png', type: 'image/png', sizes: '512x512', purpose: 'any' },
        { src: './icons/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      ],
    },
    null,
    2,
  ) + '\n',
)

await mkdir(join(root, 'icons'), { recursive: true })
for (const icon of ['logo192.png', 'logo512.png', 'favicon.svg', 'favicon.ico']) {
  if (existsSync(join(iconSource, icon))) await cp(join(iconSource, icon), join(root, 'icons', icon))
}

await writeFile(
  join(root, 'index.html'),
  `<!doctype html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <title>T&amp;V Agenda — spike</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="theme-color" content="#3B6C66" />
    <link rel="manifest" href="./manifest.webmanifest" />
    <link rel="apple-touch-icon" href="./icons/logo192.png" />
    <meta http-equiv="refresh" content="0; url=${START}" />
    <script>
      location.replace('${START}')
    </script>
  </head>
  <body>
    <p>Bezig met openen van de <a href="${START}">agenda-spike</a>…</p>
  </body>
</html>
`,
)

await writeFile(join(root, '.nojekyll'), '')
console.log(`Packed ${source} → ${root}`)
