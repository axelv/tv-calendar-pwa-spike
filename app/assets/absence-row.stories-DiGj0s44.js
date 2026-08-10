import{i as e}from"./preload-helper-usAeo7Bx.js";import{E as t}from"./iframe-7FHopMLh.js";import{l as n,u as r}from"./button-DHytUkv4.js";import{A as i,b as a,i as o,j as s,r as c}from"./scheduling-fixtures-Dw9JUuQr.js";import{r as l,t as u}from"./absences-section-v1x_p7eY.js";function d(e){let t=c.find(t=>t.reason===e);if(!t)throw Error(`no absence fixture with reason "${e}"`);return t}function f(){let e=c.find(e=>e.reason===null);if(!e)throw Error(`no subject-less absence fixture`);return e}function p(e){let[t]=s([e],{time:`all`,agenda:`all`},new Date);return{absence:e,next:t.next}}function m(e){return p(d(e))}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{l(),i(),a(),n(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b=r.settings.absences,x=new Map(o.map(e=>[e.id,e.name])),S={component:u,parameters:{layout:`padded`},args:{agendaName:x,onDelete:_()},decorators:[e=>(0,h.jsx)(`ul`,{className:`mx-auto flex max-w-3xl flex-col gap-1.5`,children:(0,h.jsx)(e,{})})]},C={args:m(`Tandarts`)},w={args:m(`Vakantie`)},T={args:m(`Congres`)},E={args:m(`Boekhouding`)},D={args:m(`Teamoverleg`)},O={args:m(`Herdenkingsdag`)},k={args:m(`Brugdag`)},A={args:m(`Sluitingsdag`)},j={args:p(f())},M={args:m(`Tandarts`),play:async({canvasElement:e,args:t})=>{let n=y(e);await v.click(n.getByLabelText(r.taken.more)),await g(await y(document.body).findByRole(`menuitem`,{name:r.settings.locations.edit})).toHaveProperty(`tagName`,`A`),await v.keyboard(`{Escape}`),await v.click(n.getByLabelText(r.taken.more)),await v.click(await y(document.body).findByRole(`menuitem`,{name:b.delete})),await g(t.onDelete).toHaveBeenCalled()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: card('Tandarts')
}`,...C.parameters?.docs?.source},description:{story:`Single agenda, one-off, timed — agenda-name badge + a time range, no Repeat chip.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: card('Vakantie')
}`,...w.parameters?.docs?.source},description:{story:`Single agenda, all-day, multi-day — an inclusive date range + "Hele dag".`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: card('Congres')
}`,...T.parameters?.docs?.source},description:{story:`Single agenda, weekly recurring — "volgende" date + Repeat chip "Elke week · za".`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: card('Boekhouding')
}`,...E.parameters?.docs?.source},description:{story:`Single agenda, monthly-by-day recurring — Repeat chip "Elke maand · de 15e".`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: card('Teamoverleg')
}`,...D.parameters?.docs?.source},description:{story:`Single agenda, monthly-by-Nth-weekday recurring — Repeat chip "Elke maand · de 1e ma".`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: card('Herdenkingsdag')
}`,...O.parameters?.docs?.source},description:{story:`Single agenda, yearly recurring, all-day — Repeat chip "Elke jaar · 28 jun.".`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: card('Brugdag')
}`,...k.parameters?.docs?.source},description:{story:`Whole clinic, all-day, one-off — the warning "Hele kliniek" badge, no agenda-count badge.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: card('Sluitingsdag')
}`,...A.parameters?.docs?.source},description:{story:`Whole clinic fanned across a subset — warning badge + the muted "2 agenda's" count badge.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: cardOf(noSubject())
}`,...j.parameters?.docs?.source},description:{story:'No subject — `reason: null`, so the card falls back to the "Afwezig" default label.',...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: card('Tandarts'),
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText(t.taken.more));
    const edit = await within(document.body).findByRole('menuitem', {
      name: t.settings.locations.edit
    });
    await expect(edit).toHaveProperty('tagName', 'A');
    await userEvent.keyboard('{Escape}');
    await userEvent.click(canvas.getByLabelText(t.taken.more));
    await userEvent.click(await within(document.body).findByRole('menuitem', {
      name: ta.delete
    }));
    await expect(args.onDelete).toHaveBeenCalled();
  }
}`,...M.parameters?.docs?.source},description:{story:'The per-card actions menu. Verwijderen still fires a callback; Bewerken is a `<Link>` that sets\n`?edit=<id>` for the route loader to resolve (ADR 0012), so all this can check is that it renders\nas a navigation — the memory router at "/" doesn\'t know the absences route\'s search schema and\nrenders the reducer as a bare ".". The menu portals out of the canvas, so items come off `screen`.',...M.parameters?.docs?.description}}},N=[`SingleTimed`,`SingleAllDayRange`,`WeeklyRecurring`,`MonthlyByDay`,`MonthlyByWeekday`,`YearlyRecurring`,`WholeClinic`,`WholeClinicFanned`,`NoSubject`,`RowActions`]}))();export{E as MonthlyByDay,D as MonthlyByWeekday,j as NoSubject,M as RowActions,w as SingleAllDayRange,C as SingleTimed,T as WeeklyRecurring,k as WholeClinic,A as WholeClinicFanned,O as YearlyRecurring,N as __namedExportsOrder,S as default};