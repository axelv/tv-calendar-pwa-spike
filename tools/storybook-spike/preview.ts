/**
 * Reuses the app's real preview — global QueryClient decorator, Tailwind entry (app.css),
 * the quotes spy-mock — so stories render exactly as they do in the app's Storybook.
 *
 * Only `tags` is overridden: dropping `autodocs` means no docs entries are generated, so the
 * published build carries no story source snippets.
 */
import base from '../.storybook/preview'

export default { ...base, tags: [] }
