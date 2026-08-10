/**
 * Trimmed Storybook config for the PWA spike. Copy this directory to
 * `<ehr-repo>/app/.storybook-spike/` and build with:
 *
 *   pnpm exec storybook build -c .storybook-spike -o storybook-static-spike
 *
 * Differences from the app's `.storybook/main.ts`, both to keep the published artefact small
 * and to keep non-calendar code out of it:
 *  - stories are limited to the scheduling feature (the only screens the launcher offers);
 *  - addon-docs, addon-vitest and the local changed-stories addon are dropped — the spike ships
 *    no manager UI, and dropping docs also drops the "Show code" source panels;
 *  - addon-links stays: the redesign prototype stories navigate between each other with linkTo.
 */
import type { StorybookConfig } from '@storybook/tanstack-react'

const config: StorybookConfig = {
  // `titlePrefix` is load-bearing: Storybook auto-titles relative to the glob's directory, so a
  // narrowed glob would silently renumber every story id (agenda-page--default instead of
  // features-scheduling-agenda-page--default) and break every link in screens.mjs.
  stories: [
    {
      directory: '../src/features/scheduling',
      files: '**/*.stories.@(ts|tsx)',
      titlePrefix: 'features/scheduling',
    },
  ],
  framework: {
    name: '@storybook/tanstack-react',
    options: {
      builder: {
        // Same Storybook-only Vite config the real setup uses (Tailwind + the @/# aliases,
        // no TanStack Start/Nitro plugins). Resolved from the project root, not this dir.
        viteConfigPath: '.storybook/vite.config.ts',
      },
    },
  },
  addons: ['@storybook/addon-links'],
}

export default config
