import{i as e}from"./preload-helper-usAeo7Bx.js";import{E as t}from"./iframe-C9zIL0dk.js";import{l as n,u as r}from"./button-BoHUYats.js";import{b as i,c as a,h as o,i as s,n as c,o as l,s as u}from"./scheduling-fixtures-BhVrYCdJ.js";import{c as d,it as f,l as p}from"./org-settings-fixtures-BoIwEaxz.js";import{n as m,o as h,r as g,t as _}from"./agenda-model-eiPzmjFc.js";import{n as v,t as y}from"./agenda-event-zIUFnq8r.js";function b(e,t){let n=h(`${a}T09:00:00.000Z`),r=new Date(n.getTime()+t*6e4);return{id:e.id,title:m(e),start:n,end:r,calendarId:e.agendaId,color:s.find(t=>t.id===e.agendaId)?.color??void 0}}function x(e){return o.find(t=>t.id===e.healthcareServiceId)?.label??e.serviceCategory??``}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{p(),n(),d(),v(),g(),i(),S=t(),{fn:C,userEvent:w,within:T}=__STORYBOOK_MODULE_TEST__,E=(e,t)=>{let n=t.args.event,r=n?Math.max(f(n.end,n.start),15):30;return(0,S.jsx)(`div`,{className:`w-56 p-6`,children:(0,S.jsx)(`div`,{style:{height:Math.max(r/60*67,20)},children:(0,S.jsx)(e,{})})})},D=l[0],O=l[1],k=l[2],A=l[3],j={...k,healthcareServiceId:o[1].id,serviceCategory:`treatment`,description:`Botox voorhoofd — controle na 2 weken`,remark:`Patiënt komt met partner; parkeerkaart meegeven.`},M={component:y,decorators:[E],args:{onEdit:C(),onEditForm:C(),onMove:C()}},N={args:{event:b(k,45),block:k,typeLabel:x(k)}},P={args:{event:b(k,45),block:k,typeLabel:x(k),boundariesActive:!0},play:async({canvasElement:e})=>{let t=T(e);await w.hover(t.getByText(m(k)))}},F={args:{event:b(O,45),block:O,typeLabel:x(O)}},I={args:{event:b(D,45),block:D,typeLabel:x(D)}},L={args:{event:b(j,90),block:j,typeLabel:x(j)}},R={args:{event:b(A,45),block:A,typeLabel:x(A)}},z={args:{event:b(k,15),block:k,typeLabel:x(k)}},B={...k,status:`te-laat`},V={args:{event:b(B,45),block:B,typeLabel:x(B)}},H={...k,status:`cancelled`},U={args:{event:b(H,45),block:H,typeLabel:x(H)}},W={...k,status:`noshow`},G={args:{event:b(W,45),block:W,typeLabel:x(W)}},K={args:{event:b(k,45),block:k,typeLabel:x(k),absences:[c]}},q={args:{event:{id:`${_}${c.id}`,title:r.scheduling.availability.afwezig,start:h(c.start),end:h(c.end)},block:void 0,band:{kind:`external`,reason:c.comment}}},J={args:{event:{id:`${_}${u.id}`,title:r.scheduling.availability.afwezig,start:h(u.start),end:h(u.end)},block:void 0,band:{kind:`closure`,reason:u.comment}}},Y={args:{event:{id:`${_}${c.id}`,title:r.scheduling.availability.afwezig,start:h(`${a}T10:00:00.000Z`),end:h(`${a}T10:30:00.000Z`)},block:void 0,band:{kind:`break`,reason:`Middagpauze`}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(booked, 45),
    block: booked,
    typeLabel: typeLabelFor(booked)
  }
}`,...N.parameters?.docs?.source},description:{story:`A 45-min booked appointment — the common case: name + time · type.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(booked, 45),
    block: booked,
    typeLabel: typeLabelFor(booked),
    boundariesActive: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByText(blockTitle(booked)));
  }
}`,...P.parameters?.docs?.source},description:{story:"SLOT BOUNDARIES (hover state): the chip's hard top/bottom edges + its start / end time markers,\nwhich in the grid reveal on `group-hover/slot` (see `agenda-event`). They're pinned on here via\n`boundariesActive` so the highlighted state renders statically — `userEvent.hover` can't engage the\nCSS `:hover` the reveal relies on (it dispatches events without moving the real cursor). The `play`\nadditionally hovers the chip to open its detail tooltip. The frame's padding leaves room for the\nmarkers, which straddle the top/bottom boundaries.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(arrived, 45),
    block: arrived,
    typeLabel: typeLabelFor(arrived)
  }
}`,...F.parameters?.docs?.source},description:{story:`An arrived (checked-in) provisional patient — different status dot.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(fulfilled, 45),
    block: fulfilled,
    typeLabel: typeLabelFor(fulfilled)
  }
}`,...I.parameters?.docs?.source},description:{story:`A fulfilled appointment.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(withDescription, 90),
    block: withDescription,
    typeLabel: typeLabelFor(withDescription)
  }
}`,...L.parameters?.docs?.source},description:{story:`A 90-min patient appointment with a type + free-text description — all three lines populated.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(freeText, 45),
    block: freeText,
    typeLabel: typeLabelFor(freeText)
  }
}`,...R.parameters?.docs?.source},description:{story:`No patient yet — the title falls back to the description, with the type label beneath.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(booked, 15),
    block: booked,
    typeLabel: typeLabelFor(booked)
  }
}`,...z.parameters?.docs?.source},description:{story:`A very small (15-min) slot: there's only room for the name, so the meta/description rows drop away
and the name is kept fully visible, vertically centred. Full detail stays on the hover tooltip.`,...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(teLaat, 45),
    block: teLaat,
    typeLabel: typeLabelFor(teLaat)
  }
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(cancelled, 45),
    block: cancelled,
    typeLabel: typeLabelFor(cancelled)
  }
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(noshow, 45),
    block: noshow,
    typeLabel: typeLabelFor(noshow)
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    event: eventOf(booked, 45),
    block: booked,
    typeLabel: typeLabelFor(booked),
    absences: [FIXTURE_ABSENCE_BAND]
  }
}`,...K.parameters?.docs?.source},description:{story:`A booked appointment that (partly) falls inside an absence on its own agenda: amber left accent +
a warning icon on the chip, and the hover tooltip gains a line naming the overlapping window
("Valt in een afwezigheid — 13:00–17:00 · Congres").`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    event: {
      id: \`\${PRESENCE_PREFIX}\${FIXTURE_ABSENCE_BAND.id}\`,
      title: t.scheduling.availability.afwezig,
      start: toClinicLocal(FIXTURE_ABSENCE_BAND.start),
      end: toClinicLocal(FIXTURE_ABSENCE_BAND.end)
    },
    block: undefined,
    band: {
      kind: 'external',
      reason: FIXTURE_ABSENCE_BAND.comment
    }
  }
}`,...q.parameters?.docs?.source},description:{story:"A single-agenda absence overlay (#198, retiered #930, per-kind #932): a `presence:`-prefixed\n`busy-unavailable` band with `scope='single'`, `kind='external'` renders `AbsenceBand`'s\nrecessive rose-hatch + MapPin tier + the reason pill (\"Congres\") — non-interactive, no resolved\n`block`. `leave` shares the same hatch weight (CalendarOff icon); `break` is the flatter tier\n(see `AbsenceCompact` below).",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    event: {
      id: \`\${PRESENCE_PREFIX}\${FIXTURE_CLOSURE_BAND.id}\`,
      title: t.scheduling.availability.afwezig,
      start: toClinicLocal(FIXTURE_CLOSURE_BAND.start),
      end: toClinicLocal(FIXTURE_CLOSURE_BAND.end)
    },
    block: undefined,
    band: {
      kind: 'closure',
      reason: FIXTURE_CLOSURE_BAND.comment
    }
  }
}`,...J.parameters?.docs?.source},description:{story:"Whole-clinic closure (#930): a `busy-unavailable` band with `scope='clinic'` derives the `closure`\ntier — solid rose, the most absolute mark, distinct from the single-absence hatch above.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    event: {
      id: \`\${PRESENCE_PREFIX}\${FIXTURE_ABSENCE_BAND.id}\`,
      title: t.scheduling.availability.afwezig,
      start: toClinicLocal(\`\${FIXTURE_DATE}T10:00:00.000Z\`),
      end: toClinicLocal(\`\${FIXTURE_DATE}T10:30:00.000Z\`)
    },
    block: undefined,
    band: {
      kind: 'break',
      reason: 'Middagpauze'
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:"A short (30-min) `kind='break'` absence: below the compact threshold, the reason pill drops so\nthe band stays legible — mirrors a real Middagpauze block.",...Y.parameters?.docs?.description}}},X=[`Booked`,`SlotBoundaries`,`Arrived`,`Fulfilled`,`WithDescription`,`FreeText`,`ShortSlot`,`TeLaat`,`Cancelled`,`NoShow`,`InAbsence`,`Absence`,`Closure`,`AbsenceCompact`]}))();export{q as Absence,Y as AbsenceCompact,F as Arrived,N as Booked,U as Cancelled,J as Closure,R as FreeText,I as Fulfilled,K as InAbsence,G as NoShow,z as ShortSlot,P as SlotBoundaries,V as TeLaat,L as WithDescription,X as __namedExportsOrder,M as default};