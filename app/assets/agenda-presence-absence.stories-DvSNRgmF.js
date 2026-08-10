import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,n as i,r as a,t as o,u as s}from"./iframe-7FHopMLh.js";import{b as c,c as l}from"./scheduling-fixtures-Dw9JUuQr.js";import{a as u,r as d}from"./org-settings-fixtures-CZpd-IQz.js";import{a as f,i as p,o as m,r as h}from"./agenda-model-QlZ0F_yd.js";import{a as g,i as _,n as v,t as y}from"./agenda-event-CCFADuxe.js";import{a as b,n as x,r as S}from"./agenda-bands-fixtures-CLIyRG44.js";function C({date:e,day:t,split:n}){let r=(0,w.useMemo)(()=>f(t),[t]),i=(0,w.useMemo)(()=>m(t.serverNow),[t.serverNow]),a=(0,w.useMemo)(()=>r.calendars.map(e=>({...e,headerBadge:r.agendasOutsideHours.has(e.id)?(0,T.jsx)(_,{}):void 0})),[r]);return(0,T.jsx)(`div`,{className:`relative min-h-0 flex-1 p-2`,children:(0,T.jsx)(d,{hideToolbar:!0,readOnly:!0,hour12:!1,view:`day`,splitCalendars:n,date:p(e),now:i,events:r.events,calendars:a,isLoading:!1,onCalendarToggle:()=>{},onSlotSelect:()=>{},renderEvent:({event:e})=>(0,T.jsx)(y,{event:e,block:r.byId.get(e.id),band:r.bandsById.get(e.id),typeLabel:`Raadpleging`,absences:r.absencesByAppointment.get(e.id),onEdit:()=>{},onEditForm:()=>{},onMove:()=>{}})})})}var w,T,E,D,O,k,A,j,M;t((()=>{w=e(n(),1),a(),i(),u(),h(),v(),g(),b(),c(),T=r(),E=e=>(0,T.jsx)(s,{client:(0,w.useMemo)(()=>o(),[]),children:(0,T.jsx)(`div`,{className:`flex h-screen min-h-0 flex-col`,children:(0,T.jsx)(e,{})})}),D={component:C,parameters:{layout:`fullscreen`},decorators:[E],args:{date:l,split:!0,day:x}},O={},k={args:{split:!1}},A={args:{day:S,split:!1}},j={args:{split:!1}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source},description:{story:`The single-absence tiers in split lanes (#932): Middagpauze (break, flat) · Congres (external,
hatch + MapPin) on Tonnard, all-day Verlof (leave, hatch + CalendarOff) on Verpaele — three
distinct per-kind looks, not one generic tier · a booking inside Congres → the amber ⚠. Present
time is the plain empty column.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    split: false
  }
}`,...k.parameters?.docs?.source},description:{story:`One combined column — checks the tiers still separate when lanes are merged.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    day: PROTOTYPE_CLOSED_DAY,
    split: false
  }
}`,...A.parameters?.docs?.source},description:{story:`Whole-clinic closure (Brugdag): every column is a \`scope='clinic'\` band → the solid closure tier,
"the practice is shut."`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    split: false
  }
}`,...j.parameters?.docs?.source},description:{story:`Booked-into-absence, single lane: the 15:30 booking overlaps the Congres band, so the chip keeps
full width over the backdrop and gains the amber border + ⚠ — the new band vocabulary composes
with the shipped conflict treatment.`,...j.parameters?.docs?.description}}},M=[`Default`,`SingleLane`,`WholeClinicClosed`,`AppointmentInAbsence`]}))();export{j as AppointmentInAbsence,O as Default,k as SingleLane,A as WholeClinicClosed,M as __namedExportsOrder,D as default};