import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,n as i,r as a,t as o,u as s}from"./iframe-C9zIL0dk.js";import{g as c,m as l,s as u}from"./time-DcWb3yan.js";import{n as d,t as f}from"./availability-form-CxSLVtpM.js";import{n as p,r as m,t as h}from"./working-hours.fixtures-BQ4GcqFc.js";var g,_,v,y,b,x,S,C,w,T,E;t((()=>{g=e(n(),1),a(),i(),d(),h(),l(),_=r(),{fn:v}=__STORYBOOK_MODULE_TEST__,y=e=>(0,_.jsx)(s,{client:(0,g.useMemo)(()=>o(),[]),children:(0,_.jsx)(`div`,{className:`mx-auto mt-6 w-[28rem] rounded-lg border border-border bg-card p-6 text-card-foreground shadow-lg [--field-background:var(--popover)]`,children:(0,_.jsx)(e,{})})}),b={component:f,parameters:{layout:`fullscreen`},decorators:[y],args:{agendaId:`a0000000-0000-0000-0000-000000000001`,weekStart:c(u()),onClose:v()}},x={args:{weekday:0,dayLabel:`Maandag`}},S={args:{weekday:2,dayLabel:`Woensdag`}},C={args:{weekday:5,dayLabel:`Zaterdag`}},w={args:{weekday:0,dayLabel:`Maandag`,slot:m(`2026-12-31`)}},T={args:{weekday:0,dayLabel:`Maandag`,slot:p()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    weekday: 0,
    dayLabel: 'Maandag'
  }
}`,...x.parameters?.docs?.source},description:{story:`Monday default: from 09:00 to 17:00, Herhalen on, elke 1 week, Eindigt "nooit".`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    weekday: 2,
    dayLabel: 'Woensdag'
  }
}`,...S.parameters?.docs?.source},description:{story:`Wednesday default. Same shape as Monday, but anchored on a different weekday.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    weekday: 5,
    dayLabel: 'Zaterdag'
  }
}`,...C.parameters?.docs?.source},description:{story:`Saturday default. Confirms the form copy uses the correct lowercased weekday in the description.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    weekday: 0,
    dayLabel: 'Maandag',
    slot: makeWorkingHoursSlot('2026-12-31')
  }
}`,...w.parameters?.docs?.source},description:{story:`Edit mode: seeded from an existing slot (09:00–17:00 weekly, ending 2026-12-31), so "Herhalen" is
on and "Eindigt" reads "op" with the date beside it. The description, submit label ("Opslaan") and
version-locked update path all switch on the \`slot\` prop.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    weekday: 0,
    dayLabel: 'Maandag',
    slot: makeOneTimeSlot()
  }
}`,...T.parameters?.docs?.source},description:{story:'Edit a one-time (non-recurring) block: seeded from a slot with `recurrence: null`, so "Herhalen"\nis off, the interval + Eindigt rows are collapsed, and submit clears the rule (one-off).',...T.parameters?.docs?.description}}},E=[`Monday`,`Wednesday`,`Saturday`,`Edit`,`EditOneTime`]}))();export{w as Edit,T as EditOneTime,x as Monday,C as Saturday,S as Wednesday,E as __namedExportsOrder,b as default};