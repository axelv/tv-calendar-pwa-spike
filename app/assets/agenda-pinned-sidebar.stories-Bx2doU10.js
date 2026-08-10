import{i as e}from"./preload-helper-usAeo7Bx.js";import{E as t}from"./iframe-7FHopMLh.js";import{a as n,b as r,c as i,i as a}from"./scheduling-fixtures-Dw9JUuQr.js";import{n as o,t as s}from"./agenda-pinned-sidebar-DHI_jYyY.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{o(),r(),c=t(),{expect:l,fn:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p=a.map(e=>({id:e.id,label:e.name,color:e.color??void 0,active:!0})),m=n.map(e=>({id:e.id,label:e.name,color:e.color??void 0,active:!0,groupLabel:e.siteName??void 0})),h={component:s,parameters:{layout:`fullscreen`,docs:{description:{component:'The pinned month-overview sidebar (#420): `<Calendar mode="single">` on top, a vertical\nagenda-visibility list below — the persistent surface that replaces the popover mini-calendar +\nhorizontal chip strip. Wrapped in a fixed-height frame so the 260px column reads the way\n`AgendaPage` renders it (full page height, bordered on the right).'}}},decorators:[e=>(0,c.jsx)(`div`,{className:`flex h-[640px]`,children:(0,c.jsx)(e,{})})],args:{date:i,calendars:p,hideCancelled:!0,onDateChange:u(),onCalendarToggle:u(),onHideCancelledChange:u()}},g={},_={args:{calendars:p.map((e,t)=>t===1?{...e,active:!1}:e)}},v={args:{calendars:m}},y={play:async({args:e,canvasElement:t})=>{let n=f(t);await d.click(n.getByRole(`button`,{name:a[0].name})),l(e.onCalendarToggle).toHaveBeenCalledWith(a[0].id,!1);let r=t.querySelector(`[data-day="2026-06-10"]`)?.querySelector(`button`);l(r).not.toBeNull(),await d.click(r),l(e.onDateChange).toHaveBeenCalledWith(`2026-06-10`)}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source},description:{story:`Pinned — every agenda visible (checkmark), ungrouped (no site labels on the fixture agendas).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    calendars: CALENDARS.map((c, i) => i === 1 ? {
      ...c,
      active: false
    } : c)
  }
}`,..._.parameters?.docs?.source},description:{story:`One agenda toggled off — the fixture's second agenda (Dr. Verpaele) starts hidden (dimmed, no check).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    calendars: GROUPED_CALENDARS
  }
}`,...v.parameters?.docs?.source},description:{story:`Room agendas clustered under their site (Brussel / Gent), same grouping rule as the horizontal strip.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Toggle the first agenda row off.
    await userEvent.click(canvas.getByRole('button', {
      name: FIXTURE_AGENDAS[0].name
    }));
    expect(args.onCalendarToggle).toHaveBeenCalledWith(FIXTURE_AGENDAS[0].id, false);

    // Pick a day in the mini calendar — FIXTURE_DATE is 2026-06-27; pick the 10th of the same month.
    // Days are addressed by the stable \`data-day\` cell attribute, not accessible name (the day
    // button's aria-label is the full localized date) — mirrors \`calendar.test.tsx\`'s convention.
    const day = canvasElement.querySelector<HTMLTableCellElement>('[data-day="2026-06-10"]');
    const dayButton = day?.querySelector('button');
    expect(dayButton).not.toBeNull();
    await userEvent.click(dayButton!);
    expect(args.onDateChange).toHaveBeenCalledWith('2026-06-10');
  }
}`,...y.parameters?.docs?.source},description:{story:"Interaction: clicking a day in the calendar fires `onDateChange` with that day; clicking an agenda\nrow fires `onCalendarToggle` with its id and the flipped `active` state — the same contract the\nscheduler's horizontal chip strip uses, so `AgendaPage` can wire either to the same handlers.",...y.parameters?.docs?.description}}},b=[`Pinned`,`OneAgendaHidden`,`GroupedBySite`,`Interactive`]}))();export{v as GroupedBySite,y as Interactive,_ as OneAgendaHidden,g as Pinned,b as __namedExportsOrder,h as default};