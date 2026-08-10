# tv-calendar-pwa-spike

A throwaway spike: the Tonnard & Verpaele agenda, packaged as an installable PWA, so the
scheduling UI can be judged on a real iPhone instead of a resized desktop window.

**It is a shell around static screens.** No server, no Supabase, no server functions, no live
data. Every screen renders from the PHI-free story fixtures in the EHR repo
(`app/src/stories/scheduling-fixtures.ts`) — invented names, a fixed day (27 Jun 2026).
Nothing here talks to production, and nothing here is a step toward shipping.

## Using it on the phone

1. Open the Pages URL in **Safari** (not Chrome — only Safari can install to the home screen).
2. Share ▸ **Zet op beginscherm** / Add to Home Screen.
3. Launch from the icon. It opens standalone: no address bar, no Safari toolbars, with the
   status bar drawn behind the app (`black-translucent`), which is the layout that actually
   needs judging.

The floating pill at the bottom right switches screens — an installed PWA has no address bar to
type a story id into. `?chrome=0` hides it for a clean look at one screen. A service worker
caches everything after first load, so the installed app opens offline too.

## What to look at

- the day grid at 393pt wide: how many agenda columns survive, what horizontal scrolling feels like
- tap targets on appointment chips, the toolbar, the filter chips
- the booking column vs. the grid: does a side-by-side layout make sense on a phone at all
- safe-area behaviour: notch, home indicator, and the toolbar sitting under the status bar
- keyboard: does the booking form stay usable when iOS pushes the viewport up

## Rebuilding it

```sh
cd ../tonnard-verpaele/app && pnpm build-storybook
cd ../../tv-calendar-pwa-spike && node tools/pack.mjs ../tonnard-verpaele/app/storybook-static
git add -A && git commit -m "chore: repack" && git push
```

`tools/pack.mjs` copies the Storybook *preview* build into `app/` (the manager UI, and with it
the "Show code" source panels, is dropped), patches `app/iframe.html` with the iOS/PWA meta tags
and the launcher, and regenerates `screens.js`, `manifest.webmanifest` and the root redirect.
Which screens the launcher offers lives in `tools/screens.mjs`.

## Layout

| path                   | what                                                        |
| ---------------------- | ----------------------------------------------------------- |
| `app/`                 | packed Storybook preview build (generated — don't hand-edit) |
| `index.html`           | root redirect into the default screen (generated)            |
| `manifest.webmanifest` | PWA manifest (generated)                                     |
| `screens.js`           | launcher menu (generated from `tools/screens.mjs`)           |
| `pwa-shell.{js,css}`   | the launcher + service-worker registration                   |
| `sw.js`                | offline cache                                                |
| `tools/`               | the packer and the screen list                               |
