import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,l as i,n as a,r as o,t as s,u as c}from"./iframe-C9zIL0dk.js";import{a as l,o as u}from"./queries-Mv73Bkgg.js";import{S as d,b as f,c as p,i as m,k as h,l as g,o as _}from"./scheduling-fixtures-BhVrYCdJ.js";import{a as v,c as y,l as b,n as x,r as S}from"./booking-flow-W-h3rubW.js";function C({open:e}){let t={...e,anchor:new DOMRect},{data:n=[]}=i(l());return(0,T.jsx)(`div`,{className:`w-[336px] overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10`,children:(0,T.jsx)(y,{form:v(x(t,p,n)),args:t,date:p,onClose:()=>{},onShowMore:()=>{}})})}var w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{w=e(n(),1),o(),a(),b(),S(),u(),f(),T=r(),{expect:E,within:D}=__STORYBOOK_MODULE_TEST__,O=m[0].id,k=m[1].id,A=e=>(0,T.jsx)(c,{client:(0,w.useMemo)(()=>{let e=s();return d(e),h(e,g),e},[]),children:(0,T.jsx)(e,{})}),j={component:C,parameters:{layout:`centered`},decorators:[A]},M={args:{open:{mode:`create`,agendaId:O,startISO:`${p}T07:00:00.000Z`}},play:async({canvasElement:e})=>{await E(await D(e).findByRole(`button`,{name:`Boek`})).toBeInTheDocument()}},N={args:{open:{mode:`edit`,agendaId:k,block:_[2]}},play:async({canvasElement:e})=>{let t=D(e);await E(await t.findByRole(`button`,{name:`Opslaan`})).toBeInTheDocument(),await E(await t.findByText(/Lefèbvre, Désirée/)).toBeInTheDocument()}},P={args:{open:{mode:`edit`,agendaId:k,block:_[3]}}},F={args:{open:{mode:`create`,agendaId:O,startISO:`${p}T10:00:00.000Z`}},play:async({canvasElement:e})=>{await E(await D(e).findByText(/valt binnen een afwezigheid/)).toBeInTheDocument()}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    open: {
      mode: 'create',
      agendaId: AGENDA_1,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole('button', {
      name: 'Boek'
    })).toBeInTheDocument();
  }
}`,...M.parameters?.docs?.source},description:{story:`Create off an empty slot — implicit WHEN (agenda · time · duration), consultation default.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    open: {
      mode: 'edit',
      agendaId: AGENDA_2,
      block: FIXTURE_APPOINTMENTS[2]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole('button', {
      name: 'Opslaan'
    })).toBeInTheDocument();
    await expect(await canvas.findByText(/Lefèbvre, Désirée/)).toBeInTheDocument();
  }
}`,...N.parameters?.docs?.source},description:{story:`Edit off an existing chip — read-only time range, prefilled form, status AdvanceBar + actions.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    open: {
      mode: 'edit',
      agendaId: AGENDA_2,
      block: FIXTURE_APPOINTMENTS[3]
    }
  }
}`,...P.parameters?.docs?.source},description:{story:`Edit a provisional-patient booking (#289) — opens with the provisional patient (nameText-only)
visible as the linked patient. The call action shows the patient's mobile from the patient row.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    open: {
      mode: 'create',
      agendaId: AGENDA_1,
      startISO: \`\${FIXTURE_DATE}T10:00:00.000Z\`
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText(/valt binnen een afwezigheid/)).toBeInTheDocument();
  }
}`,...F.parameters?.docs?.source},description:{story:`The advisory absence overlap warning: a new slot on Dr. Tonnard that lands inside the midday
 afwezig band flags it (soft — never blocks Boek).`,...F.parameters?.docs?.description}}},I=[`Create`,`Edit`,`EditWithProvisional`,`CreateOnAbsence`]}))();export{M as Create,F as CreateOnAbsence,N as Edit,P as EditWithProvisional,I as __namedExportsOrder,j as default};