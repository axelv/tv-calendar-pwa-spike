import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r}from"./iframe-7FHopMLh.js";import{l as i,u as a}from"./button-DHytUkv4.js";import{b as o,c as s}from"./scheduling-fixtures-Dw9JUuQr.js";import{n as c,t as l}from"./agenda-nav-CdNTOlN8.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;t((()=>{u=e(n(),1),c(),o(),i(),d=r(),{expect:f,fn:p,screen:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={component:l,parameters:{layout:`fullscreen`,docs:{description:{component:"The agenda toolbar in isolation. Navigation-only: the today / prev-next links and lane toggle are\n`Link`s into the auto-mounted memory router, the date label opens the picker popover, and the\nnew-appointment action is a plain callback (no booking provider needed).\n\nThe pin button (#420) reads/writes `useAgendaPinPreference`, keyed on `agenda.pinned` in\nlocalStorage — clear it before each story so every run starts from the documented default (off)."}}},args:{date:s,split:!0,onNewAppointment:p()},beforeEach:()=>{localStorage.removeItem(`agenda.pinned`)}},v={},y={args:{split:!1}},b={play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`button`,{name:a.scheduling.pinCalendar});f(n).toHaveAttribute(`aria-pressed`,`false`),await h.click(n);let r=t.getByRole(`button`,{name:a.scheduling.unpinCalendar});f(r).toHaveAttribute(`aria-pressed`,`true`),await h.click(r),f(t.getByRole(`button`,{name:a.scheduling.pinCalendar})).toHaveAttribute(`aria-pressed`,`false`)}},x={render:e=>{let[t,n]=(0,u.useState)(e.date);return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(l,{...e,date:t}),(0,d.jsx)(`button`,{type:`button`,onClick:()=>n(`2026-08-15`),children:`jump to 15 Aug 2026 (simulates external date navigation)`})]})},play:async({canvasElement:e})=>{let t=g(e);await h.click(t.getByRole(`button`,{name:/jump to 15 aug 2026/i})),await h.click(t.getByRole(`button`,{name:a.scheduling.openCalendar})),f(m.getByText(/augustus 2026/i)).toBeTruthy()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source},description:{story:`Per-agenda split lane active (the default) — the columns icon is highlighted.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    split: false
  }
}`,...y.parameters?.docs?.source},description:{story:`Single combined column active — the lane toggle highlights the square icon instead.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pinButton = canvas.getByRole('button', {
      name: t.scheduling.pinCalendar
    });
    expect(pinButton).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(pinButton);
    const unpinButton = canvas.getByRole('button', {
      name: t.scheduling.unpinCalendar
    });
    expect(unpinButton).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(unpinButton);
    expect(canvas.getByRole('button', {
      name: t.scheduling.pinCalendar
    })).toHaveAttribute('aria-pressed', 'false');
  }
}`,...b.parameters?.docs?.source},description:{story:`The pin button (#420) toggles independently of the date picker: starts off (default, discoverable
affordance), flips to a pressed/teal state on click, and back on a second click.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState(args.date);
    return <div>
        <AgendaNav {...args} date={date} />
        <button type="button" onClick={() => setDate('2026-08-15')}>
          jump to 15 Aug 2026 (simulates external date navigation)
        </button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The date moves away WITHOUT the popover ever opening.
    await userEvent.click(canvas.getByRole('button', {
      name: /jump to 15 aug 2026/i
    }));

    // Opening it now must show August 2026, not the original (June) month. The calendar portals
    // outside \`canvasElement\` (Base UI's \`Popover.Portal\` → \`document.body\`), so this queries the
    // whole document rather than the scoped \`canvas\`.
    await userEvent.click(canvas.getByRole('button', {
      name: t.scheduling.openCalendar
    }));
    expect(screen.getByText(/augustus 2026/i)).toBeTruthy();
  }
}`,...x.parameters?.docs?.source},description:{story:"Persistent picker (#420) — regression test for the month-tracking bug: a bare\n`useState(() => localDay(date))` only captured `date` once, at mount, so if the viewed date moved\nelsewhere (prev/next day, the pinned sidebar) *while the popover was closed*, reopening it kept\nshowing the stale month instead of scrolling along. `date` here changes via a test-only sibling\nbutton (AgendaNav's real prev/next are router `Link`s, unusable against the story's memory router\n— see #226) to prove the fix works regardless of *how* `date` changes, not just via this popover's\nown selection.",...x.parameters?.docs?.description}}},S=[`Split`,`SingleLane`,`PinToggle`,`PersistentPicker`]}))();export{x as PersistentPicker,b as PinToggle,y as SingleLane,v as Split,S as __namedExportsOrder,_ as default};