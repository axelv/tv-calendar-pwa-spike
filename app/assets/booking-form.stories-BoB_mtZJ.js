import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,l as i,n as a,r as ee,t as te,u as ne}from"./iframe-7FHopMLh.js";import{l as re,u as o}from"./button-DHytUkv4.js";import{a as ie,i as ae,n as oe,o as se}from"./queries--l07oanP.js";import{E as ce,O as le,S as ue,T as de,_ as fe,b as pe,c as s,f as me,h as he,i as c,k as ge,l as _e,o as l,v as ve,w as ye,y as be}from"./scheduling-fixtures-Dw9JUuQr.js";import{i as xe,n as Se,r as u,t as Ce}from"./queries-p8L57S8W.js";import{n as we,t as Te}from"./org-settings-fixtures-CZpd-IQz.js";import{n as Ee,t as De}from"./queries-CG_aBkjG.js";import{N as Oe,P as ke,R as Ae,b as je,d as Me,i as Ne,m as Pe,p as Fe,t as Ie,u as Le,y as Re}from"./booking-form-CFgvbHrt.js";import{a as ze,n as Be,r as Ve}from"./booking-flow-DDJW_CaM.js";var He,d,Ue,We=t((()=>{He={id:`d0000000-0000-0000-0000-000000000001`,family:`Janssens`,given:`Marie`,nameText:null,birthDate:`1985-03-12`,age:41,sex:`V`,gender:`female`,mobile:`+32 470 12 34 56`,landline:`+32 9 234 56 78`,email:`marie.janssens@example.com`,address:{street:`Coupurestraat`,nr:`10`,postcode:`9000`,gemeente:`Gent`,country:`België`},communicationLanguage:`nl`,insz:`85073003328`,completeness:`fully-specified`,version:3,verification:{verifiedAt:null,verifiedBy:null}},{...He},d={id:`d0000000-0000-0000-0000-000000000003`,family:`Peeters`,given:`Jonas`,nameText:null,birthDate:null,age:null,sex:null,gender:null,mobile:`+32 478 00 00 03`,landline:null,email:null,address:null,communicationLanguage:null,insz:null,completeness:`incomplete`,version:1,verification:{verifiedAt:null,verifiedBy:null}},Ue={id:`d0000000-0000-0000-0000-000000000003`,family:`Peeters`,given:`Jonas`,nameText:null,birthDate:null,age:null,sex:null,mobile:`+32 478 00 00 03`,landline:null,completeness:`incomplete`}}));function Ge(e){we(e,{communicationServiceEnabled:!1})}function Ke(e){e.setQueryData(Ee.verificationHorizon(),180)}function qe({children:e}){return(0,m.jsx)(`div`,{className:`flex h-[680px] w-[440px] flex-col overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-lg [--field-background:var(--popover)]`,children:e})}function Je({args:e,fallbackDate:t,onSubmit:n}){let{data:r=[]}=i(ie()),{data:a=[]}=i(ae()),ee=ze(Be(e,t,r,{estimates:a,agendas:[]}),n);return(0,m.jsx)(qe,{mode:e.mode,children:(0,m.jsx)(Ie,{form:ee,block:e.block,onClose:()=>{}})})}function f(e,t){return e.queryAllByDisplayValue(t).filter(e=>e.getAttribute(`aria-hidden`)!==`true`)}var p,m,h,g,_,Ye,v,y,b,x,S,C,Xe,Ze,Qe,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,$e,et,B,V,H,U,tt,W,G,K,q,J,nt,Y,X,Z,Q,$;t((()=>{p=e(n(),1),ee(),a(),re(),Ne(),Ve(),se(),Le(),De(),je(),Pe(),Ae(),Se(),We(),Te(),pe(),m=r(),{expect:h,fireEvent:g,fn:_,screen:Ye,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b=`Peeters`,x=31,S=47,C={given:`Marie`,family:`Janssens`,birthDate:`1985-03-12`},Xe={id:d.id,name:`Janssens, Marie`,birthDate:`12/03/1985`,reason:`zelfde naam · zelfde geboortedatum`},Ze=(e,t)=>(0,m.jsx)(ne,{client:(0,p.useMemo)(()=>{let e=te();if(ue(e),Ge(e),Ke(e),le(e),t.parameters.seedDay&&ge(e,t.parameters.seedDayPayload??_e),t.parameters.seedPatientSearch&&(e.setQueryData(u(d.id).queryKey,d),e.setQueryData(xe(b).queryKey,[Ue])),t.parameters.seedOddDuration&&ye(e,be(`consultation`,x)),t.parameters.seedSwitchOffGrid&&ye(e,be(`treatment`,S)),t.parameters.seedDuplicate&&(e.setQueryData(u(d.id).queryKey,d),e.setQueryData(Ce(C).queryKey,[Xe])),t.parameters.comms){let n=t.parameters.comms;we(e,{communicationServiceEnabled:!0}),n.patient&&e.setQueryData(u(n.patient.id).queryKey,n.patient),n.latest&&e.setQueryData(Me(n.latest.appointmentId).queryKey,n.latest.status)}return e},[t.parameters.seedDay,t.parameters.seedDayPayload,t.parameters.seedPatientSearch,t.parameters.seedOddDuration,t.parameters.seedSwitchOffGrid,t.parameters.seedDuplicate,t.parameters.comms]),children:(0,m.jsx)(e,{})}),Qe={component:Je,parameters:{layout:`centered`},decorators:[Ze],args:{fallbackDate:s,onSubmit:_()}},w={args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}}},T={args:{args:{mode:`edit`,block:l[2]}}},E={args:{args:{mode:`edit`,block:l[2]}},play:async({args:e,canvasElement:t})=>{let n=y(t);await v.click(n.getByRole(`button`,{name:`Opslaan`})),await h(e.onSubmit).toHaveBeenCalledWith(h.objectContaining({value:h.objectContaining({agendaId:l[2].agendaId})}))}},D={args:{args:{mode:`edit`,block:l[3]}}},O={args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T09:30:00.000Z`}},play:async({canvasElement:e})=>{let t=y(e);await v.click(t.getByRole(`button`,{name:o.scheduling.detail.newPatient})),await h(t.getByLabelText(`Voornaam`)).toBeInTheDocument(),await h(t.getByLabelText(`Naam`)).toBeInTheDocument(),await h(t.getByLabelText(`Geboortedatum`)).toBeInTheDocument(),await h(t.getByLabelText(`Geslacht`)).toBeInTheDocument(),await h(t.getByLabelText(`GSM`)).toBeInTheDocument(),await h(t.getByLabelText(`E-mail`)).toBeInTheDocument()}},k={args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({args:e,canvasElement:t})=>{let n=y(t),r=y(t.ownerDocument.body);await v.click(n.getByRole(`button`,{name:o.scheduling.detail.newPatient})),await v.type(n.getByLabelText(`Voornaam`),`Marie`),await v.type(n.getByLabelText(`Naam`),`Janssens`),g.change(n.getByLabelText(`Geboortedatum`),{target:{value:`1985-03-12`}}),await v.click(n.getByLabelText(`Geslacht`)),await v.click(await r.findByRole(`option`,{name:`Vrouw`})),await v.type(n.getByLabelText(`GSM`),`0470 12 34 56`),await v.type(n.getByLabelText(`E-mail`),`marie.janssens@voorbeeld.be`),await v.click(n.getByRole(`button`,{name:`Opslaan`})),await h(e.onSubmit).toHaveBeenCalledWith(h.objectContaining({value:h.objectContaining({patientMode:`new`,newPatient:h.objectContaining({givenName:`Marie`,familyName:`Janssens`,birthDate:`1985-03-12`,gender:`female`,mobile:`0470 12 34 56`,email:`marie.janssens@voorbeeld.be`}),agendaId:c[0].id})}))}},A={parameters:{seedPatientSearch:!0},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({args:e,canvasElement:t})=>{let n=y(t),r=y(t.ownerDocument.body),i=n.getByPlaceholderText(`Zoek patiënt…`);await v.click(i),await v.type(i,b);let a=await r.findByRole(`option`,{name:/Peeters/});await v.click(a),await v.click(n.getByRole(`button`,{name:`Opslaan`})),await h(e.onSubmit).toHaveBeenCalledWith(h.objectContaining({value:h.objectContaining({patientMode:`existing`,patientId:d.id,agendaId:c[0].id})}))}},j={parameters:{seedOddDuration:!0},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({args:e,canvasElement:t})=>{let n=y(t);await h(f(n,`30`)).toHaveLength(1),await h(f(n,`${x}`)).toHaveLength(0),await v.click(n.getByRole(`button`,{name:o.scheduling.detail.newPatient})),await v.type(n.getByLabelText(`Voornaam`),`Piet`),await v.type(n.getByLabelText(`Naam`),`Test`),await v.click(n.getByRole(`button`,{name:`Opslaan`})),await h(e.onSubmit).toHaveBeenCalledWith(h.objectContaining({value:h.objectContaining({duration:30})}))}},M={parameters:{seedSwitchOffGrid:!0},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({canvasElement:e})=>{let t=y(e),n=y(e.ownerDocument.body);await h(f(t,`30`)).toHaveLength(1),await v.click(t.getByLabelText(`Type`)),await v.click(await n.findByRole(`option`,{name:/Behandeling/})),await h(f(t,`45`)).toHaveLength(1),await h(f(t,`${S}`)).toHaveLength(0)}},N={args:{args:{mode:`edit`,block:{...l[2],minutesDuration:x}}},play:async({args:e,canvasElement:t})=>{let n=y(t);await h(f(n,`${x}`)).toHaveLength(1),await v.click(n.getByRole(`button`,{name:`Opslaan`})),await h(e.onSubmit).toHaveBeenCalledWith(h.objectContaining({value:h.objectContaining({duration:x})}))}},P={parameters:{seedDay:!0},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({canvasElement:e})=>{await h(await y(e).findByText(/Mogelijk dubbel geboekt/)).toBeInTheDocument()}},F={args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({canvasElement:e})=>{await h(y(e).getAllByRole(`heading`,{name:/Patiënt|Afspraak|Notities/}).map(e=>e.textContent)).toEqual([`Patiënt`,`Afspraak`])}},I={parameters:{seedPatientSearch:!0},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({args:e,canvasElement:t})=>{let n=y(t),r=y(t.ownerDocument.body),i=n.getByPlaceholderText(`Zoek patiënt…`);await v.click(i),await v.type(i,b),await v.click(await r.findByRole(`option`,{name:/Peeters/})),await v.click(n.getByText(`Geen locatie`)),await v.click(await r.findByRole(`option`,{name:`Gent`})),await v.click(n.getByRole(`button`,{name:`Opslaan`})),await h(e.onSubmit).toHaveBeenCalledWith(h.objectContaining({value:h.objectContaining({siteId:ve[1].id})}))}},L={parameters:{seedDay:!0,seedDayPayload:me},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T12:00:00.000Z`}},play:async({canvasElement:e})=>{let t=y(e),n=y(e.ownerDocument.body);await h(await t.findByText(/Dr\. Tonnard is afwezig van 13:00 tot 17:00 wegens "Congres"/)).toBeInTheDocument(),await v.click(t.getByText(`Dr. Tonnard`)),await v.click(await n.findByRole(`option`,{name:`Dr. Verpaele`})),await h(t.queryByText(/is afwezig van/)).not.toBeInTheDocument()}},R={args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({args:e,canvasElement:t})=>{let n=y(t),r=n.getByRole(`button`,{name:`Opslaan`});await v.click(r);let i=e.onSubmit.mock.calls.length>0,a=n.queryByText(/Koppel een patiënt/i)!==null;await h(i||a).toBe(!0)}},z=`e0000000-0000-0000-0000-000000000011`,$e=he.map(e=>e.code===`consultation`?{...e,defaultRoomId:z}:e),et=function(e){return(0,m.jsx)(ne,{client:(0,p.useMemo)(()=>{let e=te();return de(e,$e),Ge(e),Ke(e),ce(e),e.fetchQuery({...oe(),queryFn:()=>new Promise(()=>{})}),e},[]),children:(0,m.jsx)(e,{})})},B={decorators:[et],args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({canvasElement:e})=>{let t=y(e).getByText(`Kamer`).parentElement?.parentElement;await h(t).not.toBeNull(),await h(t).not.toHaveTextContent(z)}},V={args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({canvasElement:e})=>{let t=y(e),n=t.getAllByRole(`img`,{name:ke});await h(n).toHaveLength(Re.size);for(let e of[`Agenda`,`Datum`,`Start`,`Locatie`])await h(t.getByText(e)).toBeInTheDocument();for(let e of[`Type`,`Kamer`]){let n=t.getByText(e).parentElement;await h(n).not.toBeNull(),await h(y(n).queryByRole(`img`,{name:ke})).not.toBeInTheDocument()}await v.hover(n[0]),await h(await Ye.findByText(Oe)).toBeInTheDocument()}},H={parameters:{seedDuplicate:!0},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({canvasElement:e})=>{let t=y(e);await v.click(t.getByRole(`button`,{name:o.scheduling.detail.newPatient})),await v.type(t.getByLabelText(`Voornaam`),C.given),await v.type(t.getByLabelText(`Naam`),C.family),g.change(t.getByLabelText(`Geboortedatum`),{target:{value:C.birthDate}}),await h(await t.findByText(`Mogelijk bestaat deze patiënt al.`)).toBeInTheDocument(),await v.click(t.getByRole(`button`,{name:`Gebruik deze`})),await h(t.queryByLabelText(`Voornaam`)).not.toBeInTheDocument()}},U={id:fe.desiree.id,family:`Lefèbvre`,given:`Désirée`,nameText:null,birthDate:`1978-11-30`,age:47,sex:`V`,gender:null,mobile:`+32 471 00 00 02`,landline:null,email:`desiree@voorbeeld.be`,address:null,communicationLanguage:null,insz:null,completeness:`fully-specified`,version:1,verification:{verifiedAt:new Date().toISOString(),verifiedBy:`Onthaal`}},tt={requestId:`c0000000-0000-0000-0000-000000000001`,status:`sent`,skipReason:null,lastError:null,sentAt:`${s}T07:00:00.000Z`,latestDeliveryEvent:{eventType:`delivered`,severity:null,occurredAt:`${s}T07:00:00.000Z`}},W={parameters:{comms:{patient:U}},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`,patientId:fe.desiree.id}},play:async({canvasElement:e})=>{let t=y(e);await h(await t.findByText(`Stuur bevestiging`)).toBeInTheDocument();let n=t.getByRole(`switch`);await h(n).toBeEnabled(),await h(n).toBeChecked(),await h(t.getByRole(`button`,{name:`Opslaan en versturen`})).toBeInTheDocument()}},G={parameters:{comms:{}},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`}},play:async({canvasElement:e})=>{let t=y(e);await h(await t.findByRole(`switch`)).toHaveAttribute(`aria-disabled`,`true`),await h(t.getByText(`Geen e-mailadres bekend voor deze patiënt.`)).toBeInTheDocument(),await h(t.getByRole(`button`,{name:`Opslaan`})).toBeInTheDocument()}},K={parameters:{comms:{patient:U}},args:{args:{mode:`edit`,block:l[2]}},play:async({canvasElement:e})=>{let t=y(e),n=await t.findByRole(`switch`);await h(n).toBeEnabled(),await h(n).not.toBeChecked(),await h(t.getByRole(`button`,{name:`Opslaan`})).toBeInTheDocument(),await v.click(n),await h(t.getByRole(`button`,{name:`Opslaan en versturen`})).toBeInTheDocument()}},q={...U,given:null,family:null,nameText:`Nieuwe patiënt (online)`,completeness:`provisional`},J={parameters:{comms:{patient:q}},args:{args:{mode:`create`,agendaId:c[0].id,startISO:`${s}T07:00:00.000Z`,patientId:q.id}},play:async({canvasElement:e})=>{let t=y(e);await h(await t.findByRole(`switch`)).toHaveAttribute(`aria-disabled`,`true`),await h(t.getByText(Fe.incomplete_patient)).toBeInTheDocument(),await h(t.getByRole(`button`,{name:`Opslaan`})).toBeInTheDocument()}},nt=`e0000000-0000-0000-0000-0000000000ff`,Y={parameters:{comms:{patient:U}},args:{args:{mode:`edit`,block:{...l[2],agendaId:nt}}},play:async({canvasElement:e})=>{let t=y(e);await h(await t.findByRole(`switch`)).toHaveAttribute(`aria-disabled`,`true`),await h(t.getByText(Fe.incomplete_practitioner)).toBeInTheDocument()}},X={parameters:{comms:{patient:U,latest:{appointmentId:l[2].id,status:tt}}},args:{args:{mode:`edit`,block:l[2]}},play:async({canvasElement:e})=>{let t=y(e);await h(await t.findByText(/Afgeleverd/)).toBeInTheDocument(),await h(t.getByText(`Bevestiging`)).toBeInTheDocument(),await h(t.queryByRole(`switch`)).not.toBeInTheDocument(),await h(t.getByRole(`button`,{name:`Opslaan`})).toBeInTheDocument()}},Z={...l[2],serviceCategory:null,healthcareServiceId:null,patient:null,description:`Teamoverleg`,remark:null,end:`${s}T09:30:00.000Z`,minutesDuration:60},Q={args:{args:{mode:`edit`,block:Z}},play:async({args:e,canvasElement:t})=>{let n=y(t),r=y(t.ownerDocument.body);await h(n.getByRole(`heading`,{name:/Interne afspraak bewerken/})).toBeInTheDocument(),await h(n.getByLabelText(`Titel`)).toHaveValue(`Teamoverleg`),await h(n.queryByRole(`heading`,{name:`Patiënt`})).not.toBeInTheDocument(),await h(f(n,`60`)).toHaveLength(1),await v.click(n.getByRole(`button`,{name:/Interne afspraak bewerken/})),await v.click(await r.findByRole(`menuitemradio`,{name:`Patiëntafspraak`})),await h(n.getByRole(`heading`,{name:/^Afspraak bewerken/})).toBeInTheDocument(),await h(n.getByRole(`heading`,{name:`Patiënt`})).toBeInTheDocument(),await h(n.queryByLabelText(`Titel`)).not.toBeInTheDocument(),await h(f(n,`30`)).toHaveLength(1),await h(f(n,`60`)).toHaveLength(0);let i=n.getByLabelText(`Onderwerp`);await h(i).toHaveValue(`Teamoverleg`),await v.clear(i),await v.type(i,`Eerste raadpleging`),await v.click(n.getByRole(`button`,{name:o.scheduling.detail.newPatient})),await v.type(n.getByLabelText(`Voornaam`),`Marie`),await v.type(n.getByLabelText(`Naam`),`Janssens`),g.change(n.getByLabelText(`Geboortedatum`),{target:{value:`1985-03-12`}}),await v.click(n.getByLabelText(`Geslacht`)),await v.click(await r.findByRole(`option`,{name:`Vrouw`})),await v.type(n.getByLabelText(`GSM`),`0470 12 34 56`),await v.type(n.getByLabelText(`E-mail`),`marie.janssens@voorbeeld.be`),await v.click(n.getByRole(`button`,{name:`Opslaan`})),await h(e.onSubmit).toHaveBeenCalledWith(h.objectContaining({value:h.objectContaining({kind:`patient`,patientMode:`new`,patientId:null,duration:30,description:`Eerste raadpleging`,newPatient:h.objectContaining({givenName:`Marie`,familyName:`Janssens`,birthDate:`1985-03-12`,gender:`female`,mobile:`0470 12 34 56`,email:`marie.janssens@voorbeeld.be`}),agendaId:Z.agendaId})}))}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\` // 09:00 CEST
    }
  }
}`,...w.parameters?.docs?.source},description:{story:`Create mode on Dr. Tonnard's agenda — empty patient, the consultation default (30 min).`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    // Lefèbvre · booked · with a remark (FIXTURE_APPOINTMENTS[2]).
    args: {
      mode: 'edit',
      block: FIXTURE_APPOINTMENTS[2]
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`Edit mode — defaults seeded from an existing booking (patient + remark prefilled).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'edit',
      block: FIXTURE_APPOINTMENTS[2]
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Opslaan'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      value: expect.objectContaining({
        agendaId: FIXTURE_APPOINTMENTS[2].agendaId
      })
    }));
  }
}`,...E.parameters?.docs?.source},description:{story:"Interaction test — the submit path. Edit mode opens valid (existing patient prefilled), so a single\nclick runs `form.handleSubmit()` → the form's `onSubmitAsync`; we assert it fires with the edited\nbooking's values. (The values→wire-payload transform, incl. the optimistic-lock id + version, is\nproven purely in scheduling.test.ts.) Host-owns-mutation is what makes the submit observable here.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'edit',
      block: FIXTURE_APPOINTMENTS[3]
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`Edit a provisional-patient booking (#289) — the form opens in "Bestaande" mode with the
provisional patient pre-selected in the PatientPicker (family=null, nameText shown instead).`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T09:30:00.000Z\`
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: t.scheduling.detail.newPatient
    }));
    await expect(canvas.getByLabelText('Voornaam')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Naam')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Geboortedatum')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Geslacht')).toBeInTheDocument();
    await expect(canvas.getByLabelText('GSM')).toBeInTheDocument();
    await expect(canvas.getByLabelText('E-mail')).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source},description:{story:`Create in "Nieuwe patiënt" mode — user switches the toggle and gets the six-field identity
capture (#926 · G3): voornaam · naam · geboortedatum · geslacht · GSM · e-mail. Creating the
appointment creates the patient atomically on save (#289).`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\` // 09:00 CEST
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: t.scheduling.detail.newPatient
    }));
    await userEvent.type(canvas.getByLabelText('Voornaam'), 'Marie');
    await userEvent.type(canvas.getByLabelText('Naam'), 'Janssens');
    fireEvent.change(canvas.getByLabelText('Geboortedatum'), {
      target: {
        value: '1985-03-12'
      }
    });
    await userEvent.click(canvas.getByLabelText('Geslacht'));
    await userEvent.click(await body.findByRole('option', {
      name: 'Vrouw'
    }));
    await userEvent.type(canvas.getByLabelText('GSM'), '0470 12 34 56');
    await userEvent.type(canvas.getByLabelText('E-mail'), 'marie.janssens@voorbeeld.be');

    // A single click must SAVE — not a silent no-op — since the form is now valid.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Opslaan'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      value: expect.objectContaining({
        patientMode: 'new',
        newPatient: expect.objectContaining({
          givenName: 'Marie',
          familyName: 'Janssens',
          birthDate: '1985-03-12',
          gender: 'female',
          mobile: '0470 12 34 56',
          email: 'marie.janssens@voorbeeld.be'
        }),
        agendaId: FIXTURE_AGENDAS[0].id
      })
    }));
  }
}`,...k.parameters?.docs?.source},description:{story:"Interaction test — the CREATE submit path (the mirror of `SubmitsEditPayload`, which only\nproves the edit path). A fresh booking opens with no patient, so create is invalid on mount;\nthe reliable, self-contained way to reach a valid submit is the \"Nieuwe patiënt\" path (typing\nvoornaam + naam satisfies the `newPatient` refine — no async PatientPicker seeding needed). We\nswitch the toggle, fill all six identity fields (#926 · G3), click Opslaan once, and assert the\nform's `onSubmitAsync` fired with the new-patient values on the seeded agenda — a capture that,\nmapped through `booking-form.mapping.ts`, satisfies `insertPatient`'s `completeness =\n'fully-specified'` (given + family + birth_date + gender all set). The values→wire-payload\ntransform itself is proven separately in scheduling.test.ts; here we prove the create form\nactually SAVES rather than silently no-op'ing.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    seedPatientSearch: true
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\` // 09:00 CEST
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    // Open the PatientPicker and type — the seeded search hit surfaces as a selectable option.
    const search = canvas.getByPlaceholderText('Zoek patiënt…');
    await userEvent.click(search);
    await userEvent.type(search, PATIENT_SEARCH_QUERY);
    const option = await body.findByRole('option', {
      name: /Peeters/
    });
    await userEvent.click(option);

    // A patient is now linked, so the form is valid — a single click must SAVE.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Opslaan'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      value: expect.objectContaining({
        patientMode: 'existing',
        patientId: FIXTURE_INCOMPLETE_PATIENT_DETAIL.id,
        agendaId: FIXTURE_AGENDAS[0].id
      })
    }));
  }
}`,...A.parameters?.docs?.source},description:{story:"Interaction test — the CREATE submit path with an EXISTING patient (the \"Bestaande\" default). A\nfresh booking opens with no patient linked, so this drives the real link flow: open the\nPatientPicker, type a query, pick the surfaced hit, then Opslaan. The picker's search + detail\ncaches are pre-seeded (`seedPatientSearch`) so the option appears and the chosen chip resolves\nwith no network. Asserts the form's onSubmitAsync fires with `patientMode: 'existing'` + the\nlinked `patientId` — the counterpart to `CreatesNewBooking` (which covers the new-patient path).",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    seedOddDuration: true
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\` // 09:00 CEST
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // The 31-min preset snapped to 30 on open (nearest multiple of 5).
    await expect(visibleDurationValues(canvas, '30')).toHaveLength(1);
    await expect(visibleDurationValues(canvas, \`\${ODD_DURATION_MINUTES}\`)).toHaveLength(0);
    // Make it valid (new-patient path), then a single click saves the snapped duration.
    await userEvent.click(canvas.getByRole('button', {
      name: t.scheduling.detail.newPatient
    }));
    await userEvent.type(canvas.getByLabelText('Voornaam'), 'Piet');
    await userEvent.type(canvas.getByLabelText('Naam'), 'Test');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Opslaan'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      value: expect.objectContaining({
        duration: 30
      })
    }));
  }
}`,...j.parameters?.docs?.source},description:{story:`A category preset that isn't a multiple of the stepper's 5-min step snaps onto the grid on open.
The consultation preset is seeded at 31 min (allowed by the schema: \`z.number().int().positive()\`),
but a fresh booking must open at the nearest clean value — 30 min — so the ±5 stepper never starts
off-grid. After making the form valid via the new-patient path, saving carries the snapped 30.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    seedSwitchOffGrid: true
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\` // 09:00 CEST
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    // Opens on the on-grid consultation default.
    await expect(visibleDurationValues(canvas, '30')).toHaveLength(1);
    // Switch to the off-grid category via the combobox (its input currently reads "Raadpleging" —
    // a value, not text content, since CategoryCombobox swapped in for the old Select-based picker).
    await userEvent.click(canvas.getByLabelText('Type'));
    await userEvent.click(await body.findByRole('option', {
      name: /Behandeling/
    }));
    // The 47-min preset snapped to 45 on selection — never the raw off-grid value.
    await expect(visibleDurationValues(canvas, '45')).toHaveLength(1);
    await expect(visibleDurationValues(canvas, \`\${OFF_GRID_SWITCH_MINUTES}\`)).toHaveLength(0);
  }
}`,...M.parameters?.docs?.source},description:{story:"The category-switch snap path (the counterpart to `SnapsOddDurationPreset`, which only covers the\non-open seed in `buildBookingDefaultValues`). A user actively picks a category whose `defaultMinutes`\nis off-grid mid-session: `CategoryPicker`'s `onValueChange` applies `snapDurationToStep`, so the\nstepper lands on the grid, never the raw preset. The form opens on the consultation default\n(30 min); switching to Behandeling (seeded at 47 min) must land on 45, not 47. Guards the\nbooking-form.tsx call site against being dropped in a refactor.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'edit',
      block: {
        ...FIXTURE_APPOINTMENTS[2],
        minutesDuration: ODD_DURATION_MINUTES
      }
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Stored off-grid duration is preserved (not snapped) on edit.
    await expect(visibleDurationValues(canvas, \`\${ODD_DURATION_MINUTES}\`)).toHaveLength(1);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Opslaan'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      value: expect.objectContaining({
        duration: ODD_DURATION_MINUTES
      })
    }));
  }
}`,...N.parameters?.docs?.source},description:{story:'Regression (the safety net) — an EXISTING booking whose stored `minutesDuration` is off-grid must\nstill save. Snapping only touches presets; a stored 31-min duration is preserved on edit, so the\nstepper opens at 31 and its `<input type="number" step="5">` fails native `stepMismatch`. Without\n`<form noValidate>`, the browser would silently eat the Opslaan click (`handleSubmit` never runs).\nEdit mode opens valid (patient prefilled), so one click must SAVE with the un-snapped `duration: 31`.',...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    seedDay: true
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\` // overlaps the 09:00–09:30 fixture booking
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText(/Mogelijk dubbel geboekt/)).toBeInTheDocument();
  }
}`,...P.parameters?.docs?.source},description:{story:`The conflict banner: a new 09:00 slot on Dr. Tonnard overlaps a booking in the seeded day, so the
 footer flags it (advisory only — saving stays enabled).`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByRole('heading', {
      name: /Patiënt|Afspraak|Notities/
    });
    await expect(headings.map(h => h.textContent)).toEqual(['Patiënt', 'Afspraak']);
  }
}`,...F.parameters?.docs?.source},description:{story:`The two sections at rest, in order — Patiënt · Afspraak — with Opmerkingen trailing as a bare
field, not its own "Notities" box (a titled section around a single textarea would double its
border + label; see the form header and \`booking-form-redesign\`). Guards the regroup against a
drift back to a flat field stack.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    seedPatientSearch: true
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    // Link an existing patient so the form is valid, then pick a Locatie.
    const search = canvas.getByPlaceholderText('Zoek patiënt…');
    await userEvent.click(search);
    await userEvent.type(search, PATIENT_SEARCH_QUERY);
    await userEvent.click(await body.findByRole('option', {
      name: /Peeters/
    }));

    // \`allowNone\` means the empty state shows the clearable entry's own label ("Geen locatie"), not
    // the bare placeholder — see \`EntitySelect\`'s \`emptyText\`.
    await userEvent.click(canvas.getByText('Geen locatie'));
    await userEvent.click(await body.findByRole('option', {
      name: 'Gent'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Opslaan'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      value: expect.objectContaining({
        siteId: FIXTURE_SITES[1].id
      })
    }));
  }
}`,...I.parameters?.docs?.source},description:{story:"The Locatie (site) picker — issue #924 G1's appointment-site link. Distinct from Kamer: choosing\na vestiging sets `siteId`, saved separately from the room. Selecting Gent and saving carries\n`siteId` through the form's onSubmitAsync payload, on top of the existing-patient create path.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    seedDay: true,
    seedDayPayload: FIXTURE_DAY_WITH_ABSENCE
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T12:00:00.000Z\` // 14:00 CEST — inside the Congres band
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    // The Congres absence is named, with its window — not a bare "valt binnen een afwezigheid".
    await expect(await canvas.findByText(/Dr\\. Tonnard is afwezig van 13:00 tot 17:00 wegens "Congres"/)).toBeInTheDocument();

    // Re-point to Dr. Verpaele (free — no absence band seeded on that agenda) via the Agenda
    // select; the banner clears — the check is per agenda, not per day.
    await userEvent.click(canvas.getByText('Dr. Tonnard'));
    await userEvent.click(await body.findByRole('option', {
      name: 'Dr. Verpaele'
    }));
    await expect(canvas.queryByText(/is afwezig van/)).not.toBeInTheDocument();
  }
}`,...L.parameters?.docs?.source},description:{story:'The enriched per-agenda absence advisory (#928) — named practitioner + window + reason (the\noverlapping `busy-unavailable` band\'s `comment`), not the generic "valt binnen een afwezigheid".\nPorted from `booking-form-redesign.stories.tsx`\'s `AbsenceWarningNamesAndClears`, driven through\nthe real `BookingForm` + `overlappingAbsenceBands` this time (the prototype hand-passed the bands;\nhere they come off the seeded day cache, exactly as production does).\n\nOpens at 14:00 on Dr. Tonnard, inside `FIXTURE_ABSENCE_BAND`\'s 13:00–17:00 "Congres" window on\n`FIXTURE_DAY_WITH_ABSENCE`. Re-pointing to Dr. Verpaele (no absence band seeded on that agenda in\nthis fixture) clears the notice — the check recomputes per chosen agenda, not per day.',...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', {
      name: 'Opslaan'
    });
    // Mirrors what the reporter did: fill nothing extra, just try to submit.
    await userEvent.click(submitButton);
    const saved = args.onSubmit.mock.calls.length > 0;
    const errorVisible = canvas.queryByText(/Koppel een patiënt/i) !== null;
    await expect(saved || errorVisible).toBe(true);
  }
}`,...R.parameters?.docs?.source},description:{story:`Reported bug (#614): opening the drawer in create mode and clicking "Opslaan" did nothing — no
save, no error, no feedback. \`patientId\` defaults to \`null\` in create mode
(\`buildBookingDefaultValues\`), so \`bookingFormValidator\`'s refine ("Koppel een patiënt.") fails
on mount, and back then the Opslaan button was disabled with no per-field error rendered.

The contract this guards: submitting must either save the appointment or surface a
validation/error message — never a silent no-op. After attempting submit, EITHER the save fired
OR a validation message is visible somewhere in the form.`,...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  decorators: [withPendingAgendas],
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Scope to the Kamer field — its \`SectionField\` wrapper (label + control), not just the bare
    // <label> (which, since #924's regroup, carries only the field's text, not its RoomPicker).
    const roomField = canvas.getByText('Kamer').parentElement?.parentElement;
    await expect(roomField).not.toBeNull();
    await expect(roomField).not.toHaveTextContent(PENDING_ROOM_ID);
  }
}`,...B.parameters?.docs?.source},description:{story:`#108 — with a room pre-selected but the agenda/room list still loading, the Kamer trigger must
show a neutral placeholder, never the raw room UUID.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const markers = canvas.getAllByRole('img', {
      name: SHARED_FIELD_LABEL
    });
    await expect(markers).toHaveLength(BOOKING_CONFIRMED_FORM_LABELS.size); // Agenda · Datum · Start · Locatie

    for (const label of ['Agenda', 'Datum', 'Start', 'Locatie']) {
      await expect(canvas.getByText(label)).toBeInTheDocument();
    }
    // Type and Kamer sit right next to the marked slot fields but carry no ✉ — none of the markers
    // found above belongs to them, so nothing outside Agenda/Datum/Start/Locatie is marked (unmarked
    // means staff-only). SectionField renders the label + marker as siblings in one flex row
    // (\`<label>\`'s own parent), not nested inside the \`<label>\` itself.
    for (const label of ['Type', 'Kamer']) {
      const field = canvas.getByText(label).parentElement;
      await expect(field).not.toBeNull();
      await expect(within(field as HTMLElement).queryByRole('img', {
        name: SHARED_FIELD_LABEL
      })).not.toBeInTheDocument();
    }
    await userEvent.hover(markers[0]);
    await expect(await screen.findByText(SHARED_FIELD_HINT)).toBeInTheDocument();
  }
}`,...V.parameters?.docs?.source},description:{story:'Interaction test (#925) — ported from `booking-form-redesign.stories.tsx`\'s\n`SharedMarkersAreOnTheEmailFields`. Proves the ✉ marker is read straight off\n`BOOKING_CONFIRMED_FORM_LABELS` (`../comms/booking-confirmed-fields.ts`), not hardcoded here:\nexactly the fields it names are marked, each marker carries the accessible `role="img"` name\n(`SHARED_FIELD_LABEL`), and hovering opens the tooltip carrying the why.\n\nThe marked set on THIS form is all four — Agenda · Datum · Start · Locatie — now that #924\'s site\nfield has landed on this branch (the merge reconciled the fourth marker). Type and Kamer, the\ninternal fields sitting right next to the marked ones, stay unmarked — proof the marker tracks the\nshared set precisely, not "everything in the Afspraak area".',...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    seedDuplicate: true
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: t.scheduling.detail.newPatient
    }));
    await userEvent.type(canvas.getByLabelText('Voornaam'), DUPLICATE_IDENTITY.given);
    await userEvent.type(canvas.getByLabelText('Naam'), DUPLICATE_IDENTITY.family);
    fireEvent.change(canvas.getByLabelText('Geboortedatum'), {
      target: {
        value: DUPLICATE_IDENTITY.birthDate
      }
    });

    // The seeded candidate surfaces the advisory.
    await expect(await canvas.findByText('Mogelijk bestaat deze patiënt al.')).toBeInTheDocument();

    // "Gebruik deze" links the existing dossier and flips to the existing-patient path — the
    // new-patient identity capture (its Voornaam field) is gone.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Gebruik deze'
    }));
    await expect(canvas.queryByLabelText('Voornaam')).not.toBeInTheDocument();
  }
}`,...H.parameters?.docs?.source},description:{story:'#927 end-to-end — the advisory duplicate-dossier check driven through the REAL form wiring\n(`duplicateDossiersQueryOptions` → `NewPatientFields`\' `duplicates` + `onUseExisting`), not the\nprototype\'s hand-rolled matcher. Switching to "Nieuwe patiënt" and typing an identity a seeded\ncandidate matches (Marie Janssens · 12/03/1985) trips the warning; "Gebruik deze" links that\ndossier and flips the form to the existing-patient path (the Voornaam field disappears).\n\nGeboortedatum is set in ONE `fireEvent.change` shot so only the final (given, family, birthDate)\nquery key fires — the intermediate keys stay disabled while birthDate is empty, so no un-seeded\nkey can resolve to `undefined`.',...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    comms: {
      patient: CONFIRMATION_PATIENT
    }
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`,
      patientId: FIXTURE_PATIENTS.desiree.id
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Stuur bevestiging')).toBeInTheDocument();
    const toggle = canvas.getByRole('switch');
    await expect(toggle).toBeEnabled();
    await expect(toggle).toBeChecked();
    // The save will also send, so the commit label upgrades.
    await expect(canvas.getByRole('button', {
      name: 'Opslaan en versturen'
    })).toBeInTheDocument();
  }
}`,...W.parameters?.docs?.source},description:{story:`Create + a recipient on file → the "Stuur bevestiging" switch is live and ON by default, and the
commit button reads "Opslaan en versturen". Existing-patient create path (patient pre-linked via
\`patientId\`) behind the org flag, that patient's email seeded. Mirrors the prototype's
\`NewPatientReadyToSend\`.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    comms: {}
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Base UI's Switch is a \`role="switch"\` span that carries \`aria-disabled\`, not the native
    // \`disabled\` attribute jest-dom's \`toBeDisabled()\` looks for — assert the ARIA state directly.
    const toggle = await canvas.findByRole('switch');
    await expect(toggle).toHaveAttribute('aria-disabled', 'true');
    await expect(canvas.getByText('Geen e-mailadres bekend voor deze patiënt.')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Opslaan'
    })).toBeInTheDocument();
  }
}`,...G.parameters?.docs?.source},description:{story:`Create with no recipient yet → the switch is disabled and the legend states why; the commit button
falls back to plain "Opslaan". Org flag ON, no patient linked. Mirrors the prototype's
\`NoRecipientYet\`.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    comms: {
      patient: CONFIRMATION_PATIENT
    }
  },
  args: {
    args: {
      mode: 'edit',
      block: FIXTURE_APPOINTMENTS[2]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole('switch');
    await expect(toggle).toBeEnabled();
    await expect(toggle).not.toBeChecked();
    // Off by default → the commit button stays plain "Opslaan"; toggling it on upgrades the label.
    await expect(canvas.getByRole('button', {
      name: 'Opslaan'
    })).toBeInTheDocument();
    await userEvent.click(toggle);
    await expect(canvas.getByRole('button', {
      name: 'Opslaan en versturen'
    })).toBeInTheDocument();
  }
}`,...K.parameters?.docs?.source},description:{story:`Edit, nothing sent yet → the SAME switch appears on an existing booking (the create/edit
unification), defaulting OFF (an edit doesn't re-confirm unless staff opt in). Org flag ON, patient
email seeded, no prior communication. Flipping it on makes the save also send — proof the switch is
live in edit mode, not just create.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    comms: {
      patient: CONFIRMATION_PATIENT_NO_NAME
    }
  },
  args: {
    args: {
      mode: 'create',
      agendaId: FIXTURE_AGENDAS[0].id,
      startISO: \`\${FIXTURE_DATE}T07:00:00.000Z\`,
      patientId: CONFIRMATION_PATIENT_NO_NAME.id
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole('switch');
    await expect(toggle).toHaveAttribute('aria-disabled', 'true');
    // The disabled reason is preflight's, surfaced verbatim from the shared legend map.
    await expect(canvas.getByText(PREFLIGHT_REASON_MESSAGES.incomplete_patient)).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Opslaan'
    })).toBeInTheDocument();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    comms: {
      patient: CONFIRMATION_PATIENT
    }
  },
  args: {
    args: {
      mode: 'edit',
      block: {
        ...FIXTURE_APPOINTMENTS[2],
        agendaId: UNRESOLVABLE_AGENDA_ID
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole('switch');
    await expect(toggle).toHaveAttribute('aria-disabled', 'true');
    await expect(canvas.getByText(PREFLIGHT_REASON_MESSAGES.incomplete_practitioner)).toBeInTheDocument();
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    comms: {
      patient: CONFIRMATION_PATIENT,
      latest: {
        appointmentId: FIXTURE_APPOINTMENTS[2].id,
        status: DELIVERED_STATUS
      }
    }
  },
  args: {
    args: {
      mode: 'edit',
      block: FIXTURE_APPOINTMENTS[2]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // The delivery badge is shown, and the switch is gone — a re-send is an idempotent no-op.
    await expect(await canvas.findByText(/Afgeleverd/)).toBeInTheDocument();
    await expect(canvas.getByText('Bevestiging')).toBeInTheDocument();
    await expect(canvas.queryByRole('switch')).not.toBeInTheDocument();
    // Editing an already-confirmed booking doesn't re-send, so the commit stays plain "Opslaan".
    await expect(canvas.getByRole('button', {
      name: 'Opslaan'
    })).toBeInTheDocument();
  }
}`,...X.parameters?.docs?.source},description:{story:`Edit, confirmation already delivered → the switch retires and the read-only delivery status takes
its place (the "Bevestiging ✉ · Afgeleverd op …" row) — you don't offer to send what's already
gone out. Org flag ON, patient email + a delivered communication seeded. The write-mode twin of the
summary card; mirrors the prototype's \`EditConfirmationAlreadySent\`.`,...X.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      mode: 'edit',
      block: FIXTURE_INTERNAL_BLOCK
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    // 1. Opens as an internal block — Titel, no Patiënt section, the stored 60 min.
    await expect(canvas.getByRole('heading', {
      name: /Interne afspraak bewerken/
    })).toBeInTheDocument();
    await expect(canvas.getByLabelText('Titel')).toHaveValue('Teamoverleg');
    await expect(canvas.queryByRole('heading', {
      name: 'Patiënt'
    })).not.toBeInTheDocument();
    await expect(visibleDurationValues(canvas, '60')).toHaveLength(1);

    // 2. Flip the kind via the heading menu — a DropdownMenu portalled to the document body, so its
    // radio items are queried there rather than on the canvas.
    await userEvent.click(canvas.getByRole('button', {
      name: /Interne afspraak bewerken/
    }));
    await userEvent.click(await body.findByRole('menuitemradio', {
      name: 'Patiëntafspraak'
    }));
    await expect(canvas.getByRole('heading', {
      name: /^Afspraak bewerken/
    })).toBeInTheDocument();
    await expect(canvas.getByRole('heading', {
      name: 'Patiënt'
    })).toBeInTheDocument();
    await expect(canvas.queryByLabelText('Titel')).not.toBeInTheDocument();
    // The internal 60 gave way to the patient default — the switch resets the duration per kind.
    await expect(visibleDurationValues(canvas, '30')).toHaveLength(1);
    await expect(visibleDurationValues(canvas, '60')).toHaveLength(0);

    // 3. The internal Titel carried over into the Onderwerp override (both kinds write \`description\`),
    // where the staffer replaces the held-slot label with the real reason for the visit.
    const subject = canvas.getByLabelText('Onderwerp');
    await expect(subject).toHaveValue('Teamoverleg');
    await userEvent.clear(subject);
    await userEvent.type(subject, 'Eerste raadpleging');

    // 4. The block has no patient to fall back on, so this is the new-patient path: the six-field
    // identity capture (#926 · G3), then a single click must SAVE.
    await userEvent.click(canvas.getByRole('button', {
      name: t.scheduling.detail.newPatient
    }));
    await userEvent.type(canvas.getByLabelText('Voornaam'), 'Marie');
    await userEvent.type(canvas.getByLabelText('Naam'), 'Janssens');
    fireEvent.change(canvas.getByLabelText('Geboortedatum'), {
      target: {
        value: '1985-03-12'
      }
    });
    await userEvent.click(canvas.getByLabelText('Geslacht'));
    await userEvent.click(await body.findByRole('option', {
      name: 'Vrouw'
    }));
    await userEvent.type(canvas.getByLabelText('GSM'), '0470 12 34 56');
    await userEvent.type(canvas.getByLabelText('E-mail'), 'marie.janssens@voorbeeld.be');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Opslaan'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      value: expect.objectContaining({
        kind: 'patient',
        patientMode: 'new',
        patientId: null,
        duration: 30,
        description: 'Eerste raadpleging',
        newPatient: expect.objectContaining({
          givenName: 'Marie',
          familyName: 'Janssens',
          birthDate: '1985-03-12',
          gender: 'female',
          mobile: '0470 12 34 56',
          email: 'marie.janssens@voorbeeld.be'
        }),
        agendaId: FIXTURE_INTERNAL_BLOCK.agendaId
      })
    }));
  }
}`,...Q.parameters?.docs?.source},description:{story:`Interaction test — the full conversion a staffer does when a held slot gets claimed: an existing
INTERNAL block is turned into a patient appointment for a patient who isn't in the system yet.
Drives the whole chain through the REAL form (the kind switch lives on \`BookingForm\`'s header;
\`booking-form-redesign.stories.tsx\`'s \`KindSwitchReshapesPanel\` only proves the prototype's
reshaping, on hand-passed state).

The four things it pins:
 1. Opening a patient-less block lands in the internal shape — Titel instead of a Patiënt section,
    the block's stored 60 min.
 2. Picking "Patiëntafspraak" from the heading menu reshapes the panel back and RESETS the duration
    to the patient default (30) — \`DEFAULT_MINUTES\` in booking-form.tsx, the one thing the switch
    changes besides \`kind\`.
 3. The internal Titel isn't silently dropped on the way over: both kinds write \`description\`, so it
    resurfaces as the patient booking's Onderwerp override, visible and editable rather than a
    stale value riding along hidden.
 4. The converted booking SAVES on one click, carrying \`kind: 'patient'\` + the inline new patient —
    a capture that, mapped through \`booking-form.mapping.ts\`, becomes a real patient row
    (\`insertPatient\`, \`completeness: 'fully-specified'\`) rather than another patient-less block.

The values→wire transform (incl. \`isInternal\` nulling patient + service) stays proven in
scheduling.test.ts; here the point is that the FORM makes the conversion reachable and saveable.`,...Q.parameters?.docs?.description}}},$=[`Create`,`Edit`,`SubmitsEditPayload`,`EditWithProvisional`,`NewPatient`,`CreatesNewBooking`,`CreatesBookingForExistingPatient`,`SnapsOddDurationPreset`,`SnapsOddDurationOnCategorySwitch`,`SavesEditedBookingWithOffGridDuration`,`WithConflict`,`SectionsInOrder`,`SelectsLocationAndSaves`,`AbsenceWarningNamesAndClears`,`CreateWithoutPatientSurfacesErrorOrSaves`,`RoomPresetWhileAgendasPending`,`SharedMarkersAreOnTheEmailFields`,`DuplicateDossierAdvisory`,`ConfirmationReadyToSend`,`ConfirmationNoRecipient`,`EditConfirmationNotYetSent`,`ConfirmationBlockedWhenPatientHasNoName`,`ConfirmationBlockedWhenPractitionerUnresolvable`,`EditConfirmationAlreadySent`,`ConvertsInternalBlockToNewPatientBooking`]}))();export{L as AbsenceWarningNamesAndClears,J as ConfirmationBlockedWhenPatientHasNoName,Y as ConfirmationBlockedWhenPractitionerUnresolvable,G as ConfirmationNoRecipient,W as ConfirmationReadyToSend,Q as ConvertsInternalBlockToNewPatientBooking,w as Create,R as CreateWithoutPatientSurfacesErrorOrSaves,A as CreatesBookingForExistingPatient,k as CreatesNewBooking,H as DuplicateDossierAdvisory,T as Edit,X as EditConfirmationAlreadySent,K as EditConfirmationNotYetSent,D as EditWithProvisional,O as NewPatient,B as RoomPresetWhileAgendasPending,N as SavesEditedBookingWithOffGridDuration,F as SectionsInOrder,I as SelectsLocationAndSaves,V as SharedMarkersAreOnTheEmailFields,M as SnapsOddDurationOnCategorySwitch,j as SnapsOddDurationPreset,E as SubmitsEditPayload,P as WithConflict,$ as __namedExportsOrder,Qe as default};