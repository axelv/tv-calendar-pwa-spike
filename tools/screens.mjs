/**
 * The screens the PWA launcher offers, in evaluation order.
 *
 * `id` is a Storybook story id from the EHR repo (app/src/features/scheduling/*.stories.tsx).
 * Every one of these renders from PHI-free fixtures in src/stories/scheduling-fixtures.ts —
 * no network, no Supabase, no server functions.
 */
export const SCREENS = [
  {
    group: 'Dagoverzicht',
    items: [
      { id: 'features-scheduling-agenda-page--default', label: 'Dag, gesplitste kolommen', note: 'Kolom per agenda' },
      { id: 'features-scheduling-agenda-page--single-lane', label: 'Dag, één kolom', note: 'Alles samengevoegd' },
      { id: 'features-scheduling-agenda-page--narrow-auto-collapse', label: 'Smal scherm', note: 'Zijbalk klapt dicht' },
      { id: 'features-scheduling-agenda-page--pinned', label: 'Vastgezette zijbalk', note: 'Sidebar naast het raster' },
    ],
  },
  {
    group: 'Afspraak',
    items: [
      { id: 'features-scheduling-agenda-page--view-appointment', label: 'Afspraak bekijken', note: 'Kolom naast het raster' },
      { id: 'features-scheduling-agenda-page--booking-create', label: 'Nieuwe afspraak', note: 'Boekingskolom open' },
      { id: 'features-scheduling-quick-add-form--create', label: 'Snel toevoegen', note: 'Compact formulier' },
    ],
  },
  {
    group: 'Losse panelen',
    items: [
      { id: 'features-scheduling-booking-form-redesign--default', label: 'Boekingsformulier', note: 'Volledig formulier' },
      { id: 'features-scheduling-appointment-summary-redesign--default', label: 'Afspraakoverzicht', note: 'Alleen lezen' },
      { id: 'features-scheduling-agenda-scheduler--grid-quarter', label: 'Raster, kwartier', note: 'Fijnere tijdlijnen' },
      { id: 'features-scheduling-agenda-scheduler--absence-overlay', label: 'Afwezigheden', note: 'Grijze banden' },
    ],
  },
]

export const DEFAULT_SCREEN = SCREENS[0].items[0].id
