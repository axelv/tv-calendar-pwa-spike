import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,n as i,r as a,t as o,u as s}from"./iframe-7FHopMLh.js";import{T as c,b as l,c as u,f as d,l as f,p,u as m}from"./scheduling-fixtures-Dw9JUuQr.js";import{n as h,t as g}from"./org-settings-fixtures-CZpd-IQz.js";import{n as _,t as v}from"./agenda-scheduler-BJ_Up_uR.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{y=e(n(),1),a(),g(),i(),_(),l(),b=r(),{fn:x}=__STORYBOOK_MODULE_TEST__,S=e=>(0,b.jsx)(s,{client:(0,y.useMemo)(()=>{let e=o();return c(e),h(e),e},[]),children:(0,b.jsx)(`div`,{className:`flex h-screen min-h-0 flex-col`,children:(0,b.jsx)(e,{})})}),C={component:v,parameters:{layout:`fullscreen`},decorators:[S],args:{date:u,split:!0,hidden:[],day:f,isLoading:!1,onHideCancelledChange:x(),onCalendarToggle:x(),onSlotSelect:x(),onEventEdit:x(),onEventEditForm:x(),onEventMove:x()}},w={},T={args:{gridDensity:`five`}},E={args:{gridDensity:`quarter`}},D={args:{gridDensity:`half`}},O={args:{gridDensity:void 0}},k={args:{split:!1}},A={args:{hidden:[f.agendas[1].id]}},j={args:{day:d,split:!1,hidden:[f.agendas[1].id,f.agendas[2].id]}},M={args:{day:m,split:!1,hidden:[f.agendas[1].id,f.agendas[2].id]}},N={args:{day:p}},P={args:{day:p,hideCancelled:!0}},F={args:{draftSlot:{agendaId:f.agendas[0].id,startISO:`${u}T12:00:00.000Z`,endISO:`${u}T12:45:00.000Z`}}},I={args:{day:void 0}},L={args:{day:void 0,isLoading:!0}},R={args:{hideCalendarFilters:!0}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source},description:{story:"Per-agenda split lanes with the seeded fixture day (appointments + a greyed midday band).\n The grid now defaults to 5-min precision (`gridDensity='five'`) — see the density stories below.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    gridDensity: 'five'
  }
}`,...T.parameters?.docs?.source},description:{story:`5-min precision — the shipped default: faint graph-paper hairlines every 5 min, gutter :15/:30/:45,
 slot-clicks snap to the 5-min booking grid. Makes free slots + block boundaries readable.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    gridDensity: 'quarter'
  }
}`,...E.parameters?.docs?.source},description:{story:`Quarter-hour precision — lighter grid for practices that book on the quarter.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    gridDensity: 'half'
  }
}`,...D.parameters?.docs?.source},description:{story:`Half-hour precision — the calmest sub-hour option.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    gridDensity: undefined
  }
}`,...O.parameters?.docs?.source},description:{story:"The pre-change look for reference — `gridDensity` omitted: hour-only rule + 15-min click cells.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    split: false
  }
}`,...k.parameters?.docs?.source},description:{story:`One combined column instead of per-agenda lanes.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    hidden: [FIXTURE_DAY.agendas[1].id]
  }
}`,...A.parameters?.docs?.source},description:{story:"Dr. Verpaele (the second fixture agenda) toggled off via `hidden` — exercises the visibility-chip\nfiltering path, so a hidden calendar's events drop out of the grid.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    day: FIXTURE_DAY_WITH_ABSENCE,
    split: false,
    hidden: [FIXTURE_DAY.agendas[1].id, FIXTURE_DAY.agendas[2].id]
  }
}`,...j.parameters?.docs?.source},description:{story:`ABSENCE overlay (#198): Dr. Tonnard's afternoon is greyed/blocked as unavailable time behind the
morning appointments. Single-lane with the other agendas hidden so the overlay band is prominent.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    day: FIXTURE_DAY_APPT_IN_ABSENCE,
    split: false,
    hidden: [FIXTURE_DAY.agendas[1].id, FIXTURE_DAY.agendas[2].id]
  }
}`,...M.parameters?.docs?.source},description:{story:`APPOINTMENT INSIDE AN ABSENCE: the afternoon absence paints as a full-width backdrop (no sub-lane
split) while the overlapping 14:00 booking keeps the full column width and gains an amber accent +
a warning icon (hover the chip for the absence window). Single-lane, other agendas hidden.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    day: FIXTURE_DAY_WITH_CANCELLED
  }
}`,...N.parameters?.docs?.source},description:{story:"A day that mixes active bookings with cancelled + no-show ones. With `hideCancelled` off (default)\nevery chip shows; the `HideCancelled` story below flips the flag so the terminal chips drop out.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    day: FIXTURE_DAY_WITH_CANCELLED,
    hideCancelled: true
  }
}`,...P.parameters?.docs?.source},description:{story:"Same day as `WithCancelled`, but `hideCancelled` on — cancelled / no-show chips are filtered out.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    draftSlot: {
      agendaId: FIXTURE_DAY.agendas[0].id,
      startISO: \`\${FIXTURE_DATE}T12:00:00.000Z\`,
      // 14:00 CEST
      endISO: \`\${FIXTURE_DATE}T12:45:00.000Z\` // 14:45 CEST
    }
  }
}`,...F.parameters?.docs?.source},description:{story:`DRAFT PLACEHOLDER (#new-booking): while the create form is open, the appointment being created is
previewed on the grid as a dashed ghost band derived live from the form's agenda / start / duration.
Here it sits in an open 14:00–14:45 slot on Dr. Tonnard (the story feeds \`draftSlot\` directly; in
the real page the booking column publishes it from the open form).`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    day: undefined
  }
}`,...I.parameters?.docs?.source},description:{story:`No day yet + not loading → the "no columns" placeholder.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    day: undefined,
    isLoading: true
  }
}`,...L.parameters?.docs?.source},description:{story:`No day yet + loading → the loading placeholder.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    hideCalendarFilters: true
  }
}`,...R.parameters?.docs?.source},description:{story:"`hideCalendarFilters` (#420) — set when a pinned sidebar already renders the same agenda-visibility\ntoggle vertically, so the horizontal chip strip underneath the (hidden) toolbar doesn't duplicate it.",...R.parameters?.docs?.description}}},z=[`Default`,`GridFiveMinute`,`GridQuarter`,`GridHalf`,`GridLegacy`,`SingleLane`,`HiddenAgenda`,`AbsenceOverlay`,`AppointmentInAbsence`,`WithCancelled`,`HideCancelled`,`WithDraftSlot`,`Empty`,`Loading`,`HiddenCalendarFilters`]}))();export{j as AbsenceOverlay,M as AppointmentInAbsence,w as Default,I as Empty,T as GridFiveMinute,D as GridHalf,O as GridLegacy,E as GridQuarter,A as HiddenAgenda,R as HiddenCalendarFilters,P as HideCancelled,L as Loading,k as SingleLane,N as WithCancelled,F as WithDraftSlot,z as __namedExportsOrder,C as default};