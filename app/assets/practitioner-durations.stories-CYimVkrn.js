import{i as e}from"./preload-helper-usAeo7Bx.js";import{E as t}from"./iframe-7FHopMLh.js";import{l as n,u as r}from"./button-DHytUkv4.js";import{b as i,g as a,h as o,m as s}from"./scheduling-fixtures-Dw9JUuQr.js";import{n as c,t as l}from"./category-duration-GjnyhCru.js";import{n as u,r as d,t as f}from"./practitioner-durations-02Ih8x6k.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{u(),c(),i(),n(),p=t(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_=o[0],v=l(_.id,s),y=e=>(0,p.jsx)(`form`,{className:`max-w-md`,onSubmit:e=>e.preventDefault(),children:(0,p.jsx)(e,{})}),b=r.settings.categories.perPractitioner,x={mode:`edit`,service:_,defaultMinutes:v},S={component:f,decorators:[y],args:{estimates:s,members:a}},C={args:x,play:async({canvasElement:e})=>{let t=g(e);m(t.getByText(b.hint(v))).toBeInTheDocument(),m(t.getByLabelText(`Dr. Ann Tonnard`)).toHaveValue(45),m(t.getByLabelText(`Dr. Pierre Verpaele`)).toHaveValue(20),m(t.queryByLabelText(`Ilse Van Damme`)).not.toBeInTheDocument(),m(t.queryByText(b.unknownPractitioner)).not.toBeInTheDocument(),m(t.getByLabelText(b.add)).toBeInTheDocument()}},w={args:{...x,estimates:[]},play:async({canvasElement:e})=>{let t=g(e);m(t.queryByLabelText(`Dr. Ann Tonnard`)).not.toBeInTheDocument(),m(t.getByLabelText(b.add)).toBeInTheDocument(),m(t.queryByText(b.allSet)).not.toBeInTheDocument()}},T={args:{...x,estimates:a.map((e,t)=>({id:`c9000000-0000-0000-0000-00000000001${t}`,healthcareServiceId:_.id,practitionerId:e.id,minutes:30+t*5,version:1}))},play:async({canvasElement:e})=>{let t=g(e);m(t.getByText(b.allSet)).toBeInTheDocument(),m(t.queryByLabelText(b.add)).not.toBeInTheDocument(),m(t.getByLabelText(`Caroline De Wit`)).toHaveValue(30)}},E={args:{...x,estimates:[{id:`c9000000-0000-0000-0000-000000000020`,healthcareServiceId:_.id,practitionerId:`b0000000-0000-0000-0000-0000000000ff`,minutes:90,version:1}]},play:async({canvasElement:e})=>{let t=g(e);m(t.getByText(b.unknownPractitioner)).toBeInTheDocument(),m(t.getByLabelText(b.unknownPractitioner)).toHaveValue(90)}},D={args:{...x,estimates:[],members:[]},play:async({canvasElement:e})=>{m(g(e).getByText(b.allSet)).toBeInTheDocument()}},O={args:{...x,estimates:[{id:`c9000000-0000-0000-0000-000000000030`,healthcareServiceId:_.id,practitionerId:a.find(e=>e.family===`Tonnard`).id,minutes:45,version:1},{id:`c9000000-0000-0000-0000-000000000031`,healthcareServiceId:_.id,practitionerId:a.find(e=>e.family===`Verpaele`).id,minutes:33,version:1}]},play:async({canvasElement:e})=>{let t=g(e),n=t.getByLabelText(`Dr. Ann Tonnard`);m(n).toHaveValue(45),m(n.validity.stepMismatch).toBe(!1),m(n.checkValidity()).toBe(!0);let r=t.getByLabelText(`Dr. Pierre Verpaele`);m(r).toHaveValue(33),m(r.validity.stepMismatch).toBe(!0)}},k={args:{mode:`create`,getBaseMinutes:()=>40},play:async({canvasElement:e})=>{let t=g(e),n=e.querySelector(`form`);if(!n)throw Error(`the story decorator must render the section inside a <form>`);m(t.getByText(b.hintNoBase)).toBeInTheDocument(),m(t.queryByLabelText(`Dr. Ann Tonnard`)).not.toBeInTheDocument(),await h.click(t.getByLabelText(b.add)),await h.click(await g(document.body).findByRole(`option`,{name:`Dr. Ann Tonnard`}));let r=await t.findByLabelText(`Dr. Ann Tonnard`);m(r).toHaveValue(40),m(r.checkValidity()).toBe(!0),await h.clear(r),await h.type(r,`75`),m(d(new FormData(n))).toEqual([{practitionerId:`b0000000-0000-0000-0000-000000000001`,minutes:75}]),await h.click(t.getByLabelText(b.add)),m(g(document.body).queryByRole(`option`,{name:`Dr. Ann Tonnard`})).not.toBeInTheDocument(),await h.keyboard(`{Escape}`),m(t.queryByText(b.unknownPractitioner)).not.toBeInTheDocument(),m(d(new FormData(n))).toEqual([{practitionerId:`b0000000-0000-0000-0000-000000000001`,minutes:75}]),await h.click(t.getByLabelText(b.remove)),m(t.queryByLabelText(`Dr. Ann Tonnard`)).not.toBeInTheDocument(),m(d(new FormData(n))).toEqual([])}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: EDIT_ARGS,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The hint quotes the category's own default duration.
    expect(canvas.getByText(tp.hint(SERVICE_DEFAULT_MINUTES))).toBeInTheDocument();

    // Each row's minutes input is labelled by the practitioner's (prefix-aware) name.
    expect(canvas.getByLabelText('Dr. Ann Tonnard')).toHaveValue(45);
    expect(canvas.getByLabelText('Dr. Pierre Verpaele')).toHaveValue(20);

    // Filtered to this category: Ilse's 60-min override belongs to "Behandeling".
    expect(canvas.queryByLabelText('Ilse Van Damme')).not.toBeInTheDocument();

    // #868: the category's own DEFAULT estimate now lives in the same list as the per-practitioner
    // rows. It is the "Standaardduur" field's value, NOT a behandelaar — it must not be listed here.
    // Exactly four members exist, and only two have an override, so a leaked default row would show
    // up as a third row (named "Onbekende behandelaar", since a null practitioner names nobody).
    expect(canvas.queryByText(tp.unknownPractitioner)).not.toBeInTheDocument();

    // Practitioners without an override remain addable.
    expect(canvas.getByLabelText(tp.add)).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source},description:{story:`Two practitioners with an override (45 / 20 min against the 30-min default) and two still on the
default, so the add-picker stays armed. The fixtures' third estimate sits on another category →
Ilse gets no row here, proving the per-service filter.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...EDIT_ARGS,
    estimates: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByLabelText('Dr. Ann Tonnard')).not.toBeInTheDocument();
    expect(canvas.getByLabelText(tp.add)).toBeInTheDocument();
    expect(canvas.queryByText(tp.allSet)).not.toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source},description:{story:`No overrides yet — the default state for a fresh category: picker only, no rows.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...EDIT_ARGS,
    estimates: FIXTURE_ORG_MEMBERS.map((m, i) => ({
      id: \`c9000000-0000-0000-0000-00000000001\${i}\`,
      healthcareServiceId: SERVICE.id,
      practitionerId: m.id,
      minutes: 30 + i * 5,
      version: 1
    }))
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(tp.allSet)).toBeInTheDocument();
    expect(canvas.queryByLabelText(tp.add)).not.toBeInTheDocument();
    expect(canvas.getByLabelText('Caroline De Wit')).toHaveValue(30);
  }
}`,...T.parameters?.docs?.source},description:{story:`Every member overridden — the add-picker is replaced by the "allSet" note (no pair left to add).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...EDIT_ARGS,
    estimates: [{
      id: 'c9000000-0000-0000-0000-000000000020',
      healthcareServiceId: SERVICE.id,
      practitionerId: 'b0000000-0000-0000-0000-0000000000ff',
      minutes: 90,
      version: 1
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(tp.unknownPractitioner)).toBeInTheDocument();
    expect(canvas.getByLabelText(tp.unknownPractitioner)).toHaveValue(90);
  }
}`,...E.parameters?.docs?.source},description:{story:`An override whose practitioner is no longer in the members list (left the org, or a member the
viewer can't read) — the row degrades to the placeholder name instead of dropping the estimate.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...EDIT_ARGS,
    estimates: [],
    members: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(tp.allSet)).toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source},description:{story:`No members loaded at all (empty org) — today this renders the "everyone has their own duration"
note, which is false: there is nobody to add. Pinned as a story so the misleading branch is
visible; see the note on the section's \`available.length\` check.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...EDIT_ARGS,
    estimates: [{
      id: 'c9000000-0000-0000-0000-000000000030',
      healthcareServiceId: SERVICE.id,
      practitionerId: FIXTURE_ORG_MEMBERS.find(m => m.family === 'Tonnard')!.id,
      minutes: 45,
      // on-grid — the shape every seeded/typical override has
      version: 1
    }, {
      id: 'c9000000-0000-0000-0000-000000000031',
      healthcareServiceId: SERVICE.id,
      practitionerId: FIXTURE_ORG_MEMBERS.find(m => m.family === 'Verpaele')!.id,
      minutes: 33,
      // off-grid — schema-valid, storable via the blur-commit path
      version: 1
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const onGrid = canvas.getByLabelText<HTMLInputElement>('Dr. Ann Tonnard');
    expect(onGrid).toHaveValue(45);
    expect(onGrid.validity.stepMismatch).toBe(false);
    expect(onGrid.checkValidity()).toBe(true);

    // The accepted trade-off of the 5-min grid (review on #1084): an off-grid stored value IS
    // flagged — visibly, on its own input — rather than silently accepted. If this assertion
    // starts failing, the grid was loosened; update the story comment above, not just this line.
    const offGrid = canvas.getByLabelText<HTMLInputElement>('Dr. Pierre Verpaele');
    expect(offGrid).toHaveValue(33);
    expect(offGrid.validity.stepMismatch).toBe(true);
  }
}`,...O.parameters?.docs?.source},description:{story:"Regression (#1083, same class as #715) — the minutes inputs used `min={1} step={5}`, and native\nstep validation anchors its grid at `min`, so the valid values were 1, 6, …, i.e. every REAL\nduration (45, 20 — any multiple of 5) failed `stepMismatch`. Because the rows render inside the\ncategory dialog's native `<form>` (no `noValidate`), one listed behandelaar blocked the dialog's\nSave outright — in edit mode even though the rows commit via their own blur mutations and aren't\npart of Save at all. Fixed per review by re-anchoring the grid (`min={5} step={5}`, matching the\nStandaardduur field): every on-grid value passes, and a stored OFF-grid value (schema-valid, e.g.\na 33 typed into the blur-commit path) is deliberately flagged by the native bubble — an\nactionable \"fix this number\" prompt on the offending input, not the old blocked-on-45 nonsense.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'create',
    getBaseMinutes: () => 40
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const form = canvasElement.querySelector('form');
    if (!form) throw new Error('the story decorator must render the section inside a <form>');

    // No saved standaardduur yet → the hint drops the number rather than quoting a stale one.
    expect(canvas.getByText(tp.hintNoBase)).toBeInTheDocument();
    // Nothing buffered yet: no rows, even though the fixture estimates DO cover this category —
    // create mode must never show another (or a not-yet-existent) category's saved rows.
    expect(canvas.queryByLabelText('Dr. Ann Tonnard')).not.toBeInTheDocument();

    // Add a behandelaar: the row appears, seeded from the base read out of the form at add-time.
    await userEvent.click(canvas.getByLabelText(tp.add));
    await userEvent.click(await within(document.body).findByRole('option', {
      name: 'Dr. Ann Tonnard'
    }));
    const row = await canvas.findByLabelText<HTMLInputElement>('Dr. Ann Tonnard');
    expect(row).toHaveValue(40);
    // The seeded value must be natively submittable — the buffered rows DO ride the dialog's Save,
    // so a \`stepMismatch\` here (the old \`min={1} step={5}\` anchor bug) blocked category creation.
    expect(row.checkValidity()).toBe(true);

    // The value lives in the DOM under the name the dialog's FormData read looks for — this is the
    // whole contract between the buffer and Save (\`readBufferedPractitionerDurations\`).
    await userEvent.clear(row);
    await userEvent.type(row, '75');
    expect(readBufferedPractitionerDurations(new FormData(form))).toEqual([{
      practitionerId: 'b0000000-0000-0000-0000-000000000001',
      minutes: 75
    }]);

    // An added behandelaar drops out of the picker (keeps the pair — and the field name — unique).
    await userEvent.click(canvas.getByLabelText(tp.add));
    expect(within(document.body).queryByRole('option', {
      name: 'Dr. Ann Tonnard'
    })).not.toBeInTheDocument();

    // Dismissing the picker without choosing must add NOTHING. The Select emits \`null\` here, and
    // stringifying that would buffer a \`"null"\` practitioner — a junk row that fails the whole
    // create transaction server-side. Regression guard for exactly that.
    await userEvent.keyboard('{Escape}');
    expect(canvas.queryByText(tp.unknownPractitioner)).not.toBeInTheDocument();
    expect(readBufferedPractitionerDurations(new FormData(form))).toEqual([{
      practitionerId: 'b0000000-0000-0000-0000-000000000001',
      minutes: 75
    }]);

    // Removing the row takes its input out of the form with it — nothing is left to submit.
    await userEvent.click(canvas.getByLabelText(tp.remove));
    expect(canvas.queryByLabelText('Dr. Ann Tonnard')).not.toBeInTheDocument();
    expect(readBufferedPractitionerDurations(new FormData(form))).toEqual([]);
  }
}`,...k.parameters?.docs?.source},description:{story:`CREATE mode (#868 §5) — the category doesn't exist yet, so there's no id to hang an estimate row on
and no saved base to quote in the hint. Rows BUFFER until the dialog's Save, which ships them in the
same transaction as the service. This is the story that proves a category can be given its
per-surgeon durations up front, with no save-and-reopen.

\`getBaseMinutes\` stands in for reading the dialog's uncontrolled "Standaardduur" input.`,...k.parameters?.docs?.description}}},A=[`Default`,`NoOverrides`,`AllPractitionersSet`,`UnknownPractitioner`,`NoMembers`,`OnGridValuesNeverBlockSave`,`CreateModeBuffers`]}))();export{T as AllPractitionersSet,k as CreateModeBuffers,C as Default,D as NoMembers,w as NoOverrides,O as OnGridValuesNeverBlockSave,E as UnknownPractitioner,A as __namedExportsOrder,S as default};