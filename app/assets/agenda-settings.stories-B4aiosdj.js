import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,l as i,n as a,r as o,t as s,u as c}from"./iframe-C9zIL0dk.js";import{l,u}from"./button-BoHUYats.js";import{n as d,t as f}from"./org-settings-fixtures-BoIwEaxz.js";import{a as p,r as m,t as h}from"./queries-DUfqEiuh.js";import{n as g,t as _}from"./day-window-form-BAb-OukY.js";function v(){let e=i({...m(),select:e=>e.agendaDayWindow}),t=p();return(0,y.jsxs)(`div`,{className:`mx-auto max-w-2xl space-y-8 px-6 py-6 [--field-background:var(--popover)]`,children:[(0,y.jsxs)(`header`,{children:[(0,y.jsx)(`h2`,{className:`text-base font-semibold text-foreground`,children:u.settings.agenda.title}),(0,y.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:u.settings.agenda.subtitle})]}),e.isError?(0,y.jsx)(`p`,{className:`text-sm text-destructive`,children:u.settings.agenda.loadError}):e.data?(0,y.jsx)(_,{startHour:e.data.startHour,endHour:e.data.endHour,onSubmit:e=>t.mutateAsync(e)}):null]})}var y,b=t((()=>{o(),l(),h(),g(),y=r(),v.__docgenInfo={description:``,methods:[],displayName:`AgendaSettings`}}));function x(e){return function(t){return(0,C.jsx)(c,{client:(0,S.useMemo)(()=>{let t=s();return d(t,{agendaDayWindow:e}),t},[]),children:(0,C.jsx)(t,{})})}}var S,C,w,T,E,D,O,k;t((()=>{S=e(n(),1),o(),b(),a(),f(),C=r(),{expect:w,within:T}=__STORYBOOK_MODULE_TEST__,E={component:v,parameters:{layout:`fullscreen`}},D={decorators:[x({startHour:8,endHour:20})],play:async({canvasElement:e})=>{let t=T(e);await w(t.getByDisplayValue(`8`)).toBeInTheDocument(),await w(t.getByDisplayValue(`20`)).toBeInTheDocument(),await w(t.getByText(`08:00 – 20:00`)).toBeInTheDocument()}},O={decorators:[x({startHour:7,endHour:21})],play:async({canvasElement:e})=>{await w(T(e).getByText(`07:00 – 21:00`)).toBeInTheDocument()}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [seed({
    startHour: 8,
    endHour: 20
  })],
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    await expect(screen.getByDisplayValue('8')).toBeInTheDocument();
    await expect(screen.getByDisplayValue('20')).toBeInTheDocument();
    await expect(screen.getByText('08:00 – 20:00')).toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source},description:{story:`The default clinic window (08:00–20:00), seeded from the query into the form's defaults.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  decorators: [seed({
    startHour: 7,
    endHour: 21
  })],
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    await expect(screen.getByText('07:00 – 21:00')).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source},description:{story:`A wider window (07:00–21:00) — proves the host threads the persisted values through.`,...O.parameters?.docs?.description}}},k=[`Default`,`WideWindow`]}))();export{D as Default,O as WideWindow,k as __namedExportsOrder,E as default};