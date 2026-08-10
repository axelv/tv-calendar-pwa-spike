import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,n as i,r as a,t as o,u as s}from"./iframe-7FHopMLh.js";import{l as c,u as l}from"./button-DHytUkv4.js";import{S as u,b as d,c as f,i as p,k as m,l as h,o as g}from"./scheduling-fixtures-Dw9JUuQr.js";import{r as _,s as v,t as y}from"./booking-flow-DDJW_CaM.js";function b({open:e}){let{openQuickAdd:t}=v(),n=(0,S.useRef)(null),r=(0,S.useCallback)(()=>{let r=n.current;r&&t({...e,anchor:r.getBoundingClientRect()})},[t,e]);return(0,S.useEffect)(()=>{r()},[r]),(0,C.jsx)(`div`,{className:`min-h-[560px] p-10`,children:(0,C.jsx)(`button`,{type:`button`,ref:n,onClick:r,className:`inline-block rounded-md border border-dashed border-border px-3 py-2 text-xs text-muted-foreground hover:text-foreground`,children:`Klik-punt (slot-anker) — klik om opnieuw te openen`})})}function x({open:e}){return(0,C.jsx)(y,{date:f,children:(0,C.jsx)(b,{open:e})})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{S=e(n(),1),a(),c(),i(),_(),d(),C=r(),{expect:w,userEvent:T,within:E}=__STORYBOOK_MODULE_TEST__,D=p[0].id,O=p[1].id,k=e=>(0,C.jsx)(s,{client:(0,S.useMemo)(()=>{let e=o();return u(e),m(e,h),e},[]),children:(0,C.jsx)(e,{})}),A={component:x,parameters:{layout:`fullscreen`},decorators:[k]},j={args:{open:{mode:`create`,agendaId:D,startISO:`${f}T07:00:00.000Z`}},play:async({canvasElement:e})=>{await w(await E(e.ownerDocument.body).findByRole(`button`,{name:`Boek`})).toBeInTheDocument()}},M={args:{open:{mode:`edit`,agendaId:O,block:g[2]}},play:async({canvasElement:e})=>{let t=E(e.ownerDocument.body);await w(await t.findByRole(`button`,{name:`Opslaan`})).toBeInTheDocument(),await w(await t.findByText(/Lefèbvre, Désirée/)).toBeInTheDocument()}},N={args:{open:{mode:`edit`,agendaId:O,block:g[3]}}},P={args:{open:{mode:`create`,agendaId:D,startISO:`${f}T07:00:00.000Z`}},play:async({canvasElement:e})=>{let t=E(e.ownerDocument.body);await T.click(await t.findByRole(`button`,{name:l.scheduling.detail.newPatient})),await T.type(await t.findByPlaceholderText(`Voornaam`),`Carry`),await T.type(await t.findByPlaceholderText(`Naam`),`Testpatiënt`),await T.click(await t.findByRole(`button`,{name:/omschrijving · kamer · opmerking/})),await w(await t.findByText(`Nieuwe afspraak`)).toBeInTheDocument(),await w(await t.findByDisplayValue(`Carry`)).toBeInTheDocument(),await w(await t.findByDisplayValue(`Testpatiënt`)).toBeInTheDocument()}},F={args:{open:{mode:`create`,agendaId:D,startISO:`${f}T10:00:00.000Z`}},play:async({canvasElement:e})=>{await w(await E(e.ownerDocument.body).findByText(/valt binnen een afwezigheid/)).toBeInTheDocument()}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByRole('button', {
      name: 'Boek'
    })).toBeInTheDocument();
  }
}`,...j.parameters?.docs?.source},description:{story:`Create off an empty slot — implicit WHEN (agenda · time · duration), consultation default.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByRole('button', {
      name: 'Opslaan'
    })).toBeInTheDocument();
    await expect(await body.findByText(/Lefèbvre, Désirée/)).toBeInTheDocument();
  }
}`,...M.parameters?.docs?.source},description:{story:`Edit off an existing chip — time range is read-only, form prefills from the block, with the
 status AdvanceBar + "Open dossier" actions for a linked patient.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    open: {
      mode: 'edit',
      agendaId: AGENDA_2,
      block: FIXTURE_APPOINTMENTS[3]
    }
  }
}`,...N.parameters?.docs?.source},description:{story:`Edit a patient-less booking — opens in "Nieuwe patiënt" mode with the free-text name + the call
 action wired to the booking's contact mobile.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
    const body = within(canvasElement.ownerDocument.body);
    // In the quick-add popover: switch to "Nieuwe patiënt" and type voornaam + naam.
    await userEvent.click(await body.findByRole('button', {
      name: t.scheduling.detail.newPatient
    }));
    await userEvent.type(await body.findByPlaceholderText('Voornaam'), 'Carry');
    await userEvent.type(await body.findByPlaceholderText('Naam'), 'Testpatiënt');
    // Escalate to the full booking drawer — surface switch, same form instance.
    await userEvent.click(await body.findByRole('button', {
      name: /omschrijving · kamer · opmerking/
    }));
    // The drawer is now open and the typed identity survived (no re-entry).
    await expect(await body.findByText('Nieuwe afspraak')).toBeInTheDocument();
    await expect(await body.findByDisplayValue('Carry')).toBeInTheDocument();
    await expect(await body.findByDisplayValue('Testpatiënt')).toBeInTheDocument();
  }
}`,...P.parameters?.docs?.source},description:{story:`State carries over on "Meer opties": escalating the popover to the full booking drawer keeps
everything already typed (one shared form across both surfaces — see \`./booking-flow\`). Here the
quick-add fast-path voornaam/naam are entered in the popover, then the drawer opens still holding
them (rendered by the drawer's full \`NewPatientFields\`, #926).`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByText(/valt binnen een afwezigheid/)).toBeInTheDocument();
  }
}`,...F.parameters?.docs?.source},description:{story:`The advisory absence overlap warning: a new slot on Dr. Tonnard that lands inside the midday
 afwezig band flags it (soft — never blocks Boek).`,...F.parameters?.docs?.description}}},I=[`Create`,`Edit`,`EditNewPatient`,`CarryOverToBooking`,`CreateOnAbsence`]}))();export{P as CarryOverToBooking,j as Create,F as CreateOnAbsence,M as Edit,N as EditNewPatient,I as __namedExportsOrder,A as default};