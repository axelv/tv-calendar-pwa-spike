import{i as e}from"./preload-helper-usAeo7Bx.js";import{E as t}from"./iframe-7FHopMLh.js";import{l as n,u as r}from"./button-DHytUkv4.js";import{n as i,t as a}from"./absence-form-BhMbPA2b.js";import{b as o,i as s,t as c}from"./scheduling-fixtures-Dw9JUuQr.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{n(),i(),o(),l=t(),{expect:u,fn:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m=r.settings.absences,h=e=>(0,l.jsx)(`div`,{className:`mx-auto mt-6 w-[480px] overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-lg [--field-background:var(--popover)]`,children:(0,l.jsx)(e,{})}),g={component:a,parameters:{layout:`fullscreen`},decorators:[h],args:{agendas:s,onClose:d(),onSubmit:d()}},_={args:{dialog:{mode:`new`}}},v={args:{dialog:{mode:`edit`,absence:c[0]}}},y={args:{dialog:{mode:`edit`,absence:c[1]}}},b={args:{dialog:{mode:`new`}},play:async({canvasElement:e})=>{let t=p(e);await u(t.getByText(m.agenda)).toBeInTheDocument(),await f.click(t.getByRole(`tab`,{name:m.scopeClinic})),await u(t.queryByText(m.agenda)).not.toBeInTheDocument(),await u(t.getByText(m.scopeClinicHint,{exact:!1})).toBeInTheDocument(),await f.click(t.getByRole(`tab`,{name:m.scopeSingle})),await u(t.getByText(m.agenda)).toBeInTheDocument(),await u(t.getByText(m.from)).toBeInTheDocument(),await f.click(t.getByRole(`switch`,{name:m.allDay})),await u(t.queryByText(m.from)).not.toBeInTheDocument()}},x={args:{dialog:{mode:`new`}},play:async({args:e,canvasElement:t})=>{let n=p(t);await f.click(n.getByRole(`button`,{name:m.save})),await u(e.onSubmit).toHaveBeenCalledWith(u.objectContaining({mode:`create`,args:u.objectContaining({data:u.objectContaining({scope:`single`})})}))}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    dialog: {
      mode: 'new'
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`NEW mode — the empty create form: scope toggle live, the first fixture agenda preselected, time
range defaulting to 09:00–17:00, and the "Herhalen" recurrence toggle off.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    dialog: {
      mode: 'edit',
      absence: FIXTURE_ABSENCES[0]
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`EDIT mode on the single-agenda recurring absence — scope + agenda are editable now (#442), reason
and time range prefilled, and the weekly recurrence card expanded with the stored rule
(Wednesdays). Changing the agenda or scope prompts a confirm since the whole series moves.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    dialog: {
      mode: 'edit',
      absence: FIXTURE_ABSENCES[1]
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`EDIT mode on the whole-clinic all-day absence — the all-day switch hides the time range and the
clinic scope shows the hint; switching to "Eén agenda" reveals the agenda picker (#442).`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    dialog: {
      mode: 'new'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Single scope (default) shows the agenda field; switching to whole-clinic replaces it with the hint.
    await expect(canvas.getByText(ta.agenda)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', {
      name: ta.scopeClinic
    }));
    await expect(canvas.queryByText(ta.agenda)).not.toBeInTheDocument();
    await expect(canvas.getByText(ta.scopeClinicHint, {
      exact: false
    })).toBeInTheDocument();
    // …and back to a single agenda restores the picker.
    await userEvent.click(canvas.getByRole('tab', {
      name: ta.scopeSingle
    }));
    await expect(canvas.getByText(ta.agenda)).toBeInTheDocument();
    // The all-day switch hides the from/to time range. Named explicitly: the form now also
    // renders the "Herhalen" recurrence switch, so a bare getByRole('switch') is ambiguous.
    await expect(canvas.getByText(ta.from)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('switch', {
      name: ta.allDay
    }));
    await expect(canvas.queryByText(ta.from)).not.toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source},description:{story:`Interaction test — drives the reactive branches through the REAL Base UI primitives (what jsdom
can't fake): the scope Tabs swap the agenda picker for the clinic hint and back, and the all-day
Switch hides the time range. This is the storybook layer's job in the forms testing pyramid — the
transform/payload correctness is proven purely (scheduling.test.ts) and the submit behaviour in
jsdom (absence-form.test.tsx); here we prove a real user's gestures reach the form's state. See the
\`forms\` skill · references/testing.md.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    dialog: {
      mode: 'new'
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: ta.save
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      mode: 'create',
      args: expect.objectContaining({
        data: expect.objectContaining({
          scope: 'single'
        })
      })
    }));
  }
}`,...x.parameters?.docs?.source},description:{story:`Interaction test — the payload contract. With the host owning the mutation, a real submit hands the
wire payload to \`onSubmit\`, so we can assert exactly what the form would send through the real Base
UI controls (the seeded first agenda is preselected → the create form is valid at mount). This is
what host-owned mutations buy: the outgoing payload is observable at the boundary.`,...x.parameters?.docs?.description}}},S=[`New`,`EditRecurring`,`EditClinicAllDay`,`SwitchesScopeAndAllDay`,`SubmitsCreatePayload`]}))();export{y as EditClinicAllDay,v as EditRecurring,_ as New,x as SubmitsCreatePayload,b as SwitchesScopeAndAllDay,S as __namedExportsOrder,g as default};