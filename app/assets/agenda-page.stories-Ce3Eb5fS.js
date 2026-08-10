import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,n as i,r as a,t as o,u as s}from"./iframe-7FHopMLh.js";import{D as c,S as l,_ as u,b as d,c as f,k as p,l as m,o as h}from"./scheduling-fixtures-Dw9JUuQr.js";import{n as g,t as _}from"./agenda-page-DXHJ_Uh5.js";function v(e){let t=window.matchMedia;return window.matchMedia=t=>({matches:t===`(min-width: 1400px)`?e===`wide`:e===`medium`||e===`wide`,media:t,addEventListener:()=>{},removeEventListener:()=>{}}),()=>{window.matchMedia=t}}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{y=e(n(),1),a(),i(),g(),d(),b=r(),{expect:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w=e=>(0,b.jsx)(s,{client:(0,y.useMemo)(()=>{let e=o();return p(e,m),l(e),c(e),e},[]),children:(0,b.jsx)(`div`,{className:`flex h-screen min-h-0 flex-col`,children:(0,b.jsx)(e,{})})}),T={component:_,parameters:{layout:`fullscreen`},decorators:[w],args:{date:f,lane:`split`,hidden:[],hideCancelled:!1,autoRefresh:!1},beforeEach:()=>{localStorage.removeItem(`agenda.pinned`)}},E={},D={args:{lane:`single`}},O={args:{booking:{kind:`create`}},play:async({canvasElement:e})=>{x(await C(e).findByRole(`heading`,{name:`Nieuwe afspraak`})).toBeInTheDocument()}},k={args:{booking:{kind:`create`,patientId:u.full.id}},play:async({canvasElement:e})=>{x(await C(e).findByRole(`heading`,{name:`Nieuwe afspraak`})).toBeInTheDocument(),x(await C(await S(()=>{let t=e.querySelector(`form`);if(!t)throw Error(`booking form not rendered`);return t})).findByText(new RegExp(u.full.family,`i`))).toBeInTheDocument()}},A={args:{booking:{kind:`view`,appt:h[0].id,apptDate:f}},play:async({canvasElement:e})=>{x(await C(e).findByRole(`button`,{name:`Bewerken`})).toBeInTheDocument()}},j={args:{lane:`single`},beforeEach:()=>(localStorage.setItem(`agenda.pinned`,JSON.stringify({wide:!0,medium:!1})),v(`wide`)),play:async({canvasElement:e})=>{let t=C(e);x(t.getByTestId(`agenda-pinned-sidebar`)).toBeTruthy(),x(t.getAllByText(m.agendas[0].name)).toHaveLength(1)}},M={args:{lane:`single`},beforeEach:()=>v(`wide`),play:async({canvasElement:e})=>{let t=C(e);x(t.queryByTestId(`agenda-pinned-sidebar`)).toBeNull(),x(t.getAllByText(m.agendas[0].name)).toHaveLength(1)}},N={args:{lane:`single`},beforeEach:()=>(localStorage.setItem(`agenda.pinned`,JSON.stringify({wide:!0,medium:!0})),v(`narrow`)),play:async({canvasElement:e})=>{let t=C(e);x(t.queryByTestId(`agenda-pinned-sidebar`)).toBeNull(),x(t.getAllByText(m.agendas[0].name)).toHaveLength(1)}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{}`,...E.parameters?.docs?.source},description:{story:`Per-agenda split lanes with the seeded fixture day (appointments + a greyed midday band).`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    lane: 'single'
  }
}`,...D.parameters?.docs?.source},description:{story:`One combined column instead of per-agenda lanes.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    booking: {
      kind: 'create'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Scope to the form's kind-switch heading: the live draft placeholder mirrored onto the grid
    // (agenda-scheduler.tsx) intentionally carries the same "Nieuwe afspraak" wording.
    expect(await canvas.findByRole('heading', {
      name: 'Nieuwe afspraak'
    })).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source},description:{story:"Booking column driven by the URL intent (#788): `booking={{ kind: 'create' }}` — the same state the\nagenda route hands down from `?book=new` — opens the inline \"Nieuwe afspraak\" form beside the grid.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    booking: {
      kind: 'create',
      patientId: FIXTURE_PATIENTS.full.id
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Scope to the form's kind-switch heading: the live draft placeholder mirrored onto the grid
    // (agenda-scheduler.tsx) intentionally carries the same "Nieuwe afspraak" wording.
    expect(await canvas.findByRole('heading', {
      name: 'Nieuwe afspraak'
    })).toBeInTheDocument();
    // Scope to the booking form: this fixture patient also has appointment chips on the grid, so a
    // canvas-wide query would match those instead of proving anything about the picker.
    const form = await waitFor(() => {
      const el = canvasElement.querySelector('form');
      if (!el) throw new Error('booking form not rendered');
      return el;
    });
    // The picker resolves the seeded id → the patient's chip, rather than sitting on "Zoek patiënt…".
    expect(await within(form).findByText(new RegExp(FIXTURE_PATIENTS.full.family!, 'i'))).toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source},description:{story:`The patient timeline's "Afspraak" hand-off (#788): \`?book=new&bookPatient=<id>\` arrives here as
\`booking={{ kind: 'create', patientId }}\` and must pre-select that patient in the booking form's
picker. This is the whole point of the hand-off — and the seed has to survive a slot re-pick, which
re-opens create with a new agenda/start and re-seeds the form (see \`openCreateLink\`'s carry-over and
its unit tests).`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    booking: {
      kind: 'view',
      appt: FIXTURE_APPOINTMENTS[0].id,
      apptDate: FIXTURE_DATE
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // The view surface's actions confirm the column resolved the block (not the create form).
    expect(await canvas.findByRole('button', {
      name: 'Bewerken'
    })).toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source},description:{story:"Focus an existing appointment via the URL (`booking={{ kind: 'view', appt, apptDate }}` — the state\nthe route derives from `?appt=<id>`). The read-only summary resolves from the seeded fixture day.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    lane: 'single'
  },
  beforeEach: () => {
    localStorage.setItem('agenda.pinned', JSON.stringify({
      wide: true,
      medium: false
    }));
    return stubViewportBucket('wide');
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId('agenda-pinned-sidebar')).toBeTruthy();
    // Exactly one visibility toggle per agenda — the horizontal strip's duplicate is hidden.
    expect(canvas.getAllByText(FIXTURE_DAY.agendas[0].name)).toHaveLength(1);
  }
}`,...j.parameters?.docs?.source},description:{story:`Pinned (#420, wide bucket ≥1400px — a reception monitor): the 260px \`AgendaPinnedSidebar\` joins
the scheduler grid and the horizontal calendar-filter strip is hidden, so each agenda's visibility
toggle appears exactly once (in the sidebar). Single-lane (\`lane: 'single'\`): split lanes also
print each agenda's name as a column header, which would confound the "exactly once" count below.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    lane: 'single'
  },
  beforeEach: () => stubViewportBucket('wide'),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByTestId('agenda-pinned-sidebar')).toBeNull();
    expect(canvas.getAllByText(FIXTURE_DAY.agendas[0].name)).toHaveLength(1);
  }
}`,...M.parameters?.docs?.source},description:{story:`Unpinned (the default, off in every bucket) — no sidebar; the horizontal chip strip is the only
agenda-visibility affordance, unchanged from before #420.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    lane: 'single'
  },
  beforeEach: () => {
    localStorage.setItem('agenda.pinned', JSON.stringify({
      wide: true,
      medium: true
    }));
    return stubViewportBucket('narrow');
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByTestId('agenda-pinned-sidebar')).toBeNull();
    expect(canvas.getAllByText(FIXTURE_DAY.agendas[0].name)).toHaveLength(1);
  }
}`,...N.parameters?.docs?.source},description:{story:`Narrow auto-collapse (#420): even with an explicit "pinned" preference stored in BOTH buckets, the
hard <1100px breakpoint always wins — the sidebar never renders below it, regardless of preference.`,...N.parameters?.docs?.description}}},P=[`Default`,`SingleLane`,`BookingCreate`,`BookingCreateForPatient`,`ViewAppointment`,`Pinned`,`Unpinned`,`NarrowAutoCollapse`]}))();export{O as BookingCreate,k as BookingCreateForPatient,E as Default,N as NarrowAutoCollapse,j as Pinned,D as SingleLane,M as Unpinned,A as ViewAppointment,P as __namedExportsOrder,T as default};