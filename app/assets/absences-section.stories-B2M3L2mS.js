import{i as e}from"./preload-helper-usAeo7Bx.js";import{l as t,u as n}from"./button-BoHUYats.js";import{A as r,b as i,i as a,j as o,r as s,t as c}from"./scheduling-fixtures-BhVrYCdJ.js";import{n as l,r as u}from"./absences-section-Mp4Y0HHe.js";function d(e){return{rows:o(e,{time:`all`,agenda:`all`},new Date).map(({absence:e,next:t})=>({...e,next:t.toISOString()})),truncated:!1,total:e.length}}var f,p,m,h,g,_,v,y,b,x,S;e((()=>{u(),r(),i(),t(),{expect:f,screen:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g=n.settings.absences,_={component:l,args:{list:d(c),agendas:a,dialog:null,timeFilter:`all`,agendaFilter:`all`},parameters:{layout:`fullscreen`}},v={play:async({canvasElement:e})=>{let t=h(e);f(t.getByRole(`link`,{name:g.add})).toBeInTheDocument(),await m.click(t.getAllByLabelText(n.taken.more)[0]),f(await p.findByRole(`menuitem`,{name:n.settings.locations.edit})).toHaveProperty(`tagName`,`A`)}},y={args:{list:d(s)}},b={args:{list:d([])}},x={args:{dialog:{mode:`edit`,absence:c[0]}},play:async()=>{f(h(await p.findByRole(`dialog`)).getByText(g.editTitle)).toBeInTheDocument()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('link', {
      name: ta.add
    })).toBeInTheDocument();

    // Row actions live behind the per-row "Meer" menu; the menu portals out of the story canvas.
    await userEvent.click(canvas.getAllByLabelText(t.taken.more)[0]);
    expect(await screen.findByRole('menuitem', {
      name: t.settings.locations.edit
    })).toHaveProperty('tagName', 'A');
  }
}`,...v.parameters?.docs?.source},description:{story:`The Afwezigheden settings list: a single-agenda recurring absence + a whole-clinic all-day one.

Also pins the affordance SHAPE: both dialogs are opened by a \`<Link>\` that sets a search param for
the loader to resolve, not by a callback. Where that link points can't be asserted here — the
memory router at "/" doesn't know this route's search schema, so it renders the reducer as a bare
"." — but a regression back to \`<Button onClick>\` shows up as a role change.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    list: listOf(FIXTURE_ABSENCE_VARIANTS)
  }
}`,...y.parameters?.docs?.source},description:{story:"Every card shape the row can render, one per absence (see `FIXTURE_ABSENCE_VARIANTS`).",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    list: listOf([])
  }
}`,...b.parameters?.docs?.source},description:{story:`Empty state — no absences configured yet (the big call-to-action, distinct from filtered-empty).`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    dialog: {
      mode: 'edit',
      absence: FIXTURE_ABSENCES[0]
    }
  },
  play: async () => {
    const dialog = within(await screen.findByRole('dialog'));
    expect(dialog.getByText(ta.editTitle)).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source},description:{story:"The edit dialog, as the route resolves `?edit=<id>` against the loaded rows.",...x.parameters?.docs?.description}}},S=[`Default`,`CardVariants`,`Empty`,`EditingAbsence`]}))();export{y as CardVariants,v as Default,x as EditingAbsence,b as Empty,S as __namedExportsOrder,_ as default};