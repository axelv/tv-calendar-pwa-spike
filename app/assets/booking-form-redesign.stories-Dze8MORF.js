import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,n as i,r as a,t as o,u as s}from"./iframe-C9zIL0dk.js";import{r as c,t as l}from"./button-BoHUYats.js";import{n as u,t as d}from"./input-D5NtT2gw.js";import{n as f,t as p}from"./switch-B-N8vsmS.js";import{f as m,m as h,u as ee}from"./time-DcWb3yan.js";import{i as g,n as _,r as v,t as y}from"./tooltip-CStPVXqA.js";import{C as b,E as x,O as te,S as ne,b as re,c as S,h as ie,i as ae,n as C,v as oe,x as se}from"./scheduling-fixtures-BhVrYCdJ.js";import{C as ce,D as le,F as w,L as T,M as E,N as ue,O as de,P as fe,R as pe,S as me,_ as he,g as ge,h as _e,i as ve,r as ye,v as be,w as xe,x as Se}from"./booking-form-BNm58ShL.js";import{n as Ce,t as D}from"./duration-stepper-C-mxP_Bu.js";import{n as we,t as Te}from"./agenda-picker-DS4Liblw.js";import{i as Ee,r as De}from"./category-picker-DGwiO2al.js";import{o as Oe,r as ke}from"./derive-Db-3MUun.js";function Ae(e={}){let t=e.kind??`patient`;return{kind:t,patientMode:`existing`,patientId:null,newPatient:L,title:``,healthcareServiceId:ie[0].id,agendaId:ae[0].id,date:S,time:`09:00`,duration:I[t],description:``,remark:``,locationId:oe[0].id,sendConfirmation:!0,...e}}function je(e,t,n,r){return!n||!r?[]:e.filter(e=>e.agendaId===t&&e.status===`busy-unavailable`&&Oe(n,r,e.start,e.end))}function Me({mode:e=`create`,initial:t,confirmationStatus:n,absences:r=[],onSave:i}){let[a,o]=(0,k.useState)(()=>Ae(t)),s=e=>o(t=>({...t,...e})),c=a.kind===`internal`,u=e=>o(t=>t.kind===e?t:{...t,kind:e,duration:I[e]}),f=a.patientMode===`new`,p=(0,k.useMemo)(()=>!c&&f?se(a.newPatient):[],[c,f,a.newPatient]),h=f?a.newPatient.email.trim():a.patientId?`p***@voorbeeld.be`:``,g=!c&&h.length>0,_=!!n&&n.kind!==`not-sent`,v=!_&&a.sendConfirmation&&g,{startISO:y,endISO:b}=ee(a.date,a.time,a.duration),x=(0,k.useMemo)(()=>je(r,a.agendaId,y,b),[r,a.agendaId,y,b]),te=ae.find(e=>e.id===a.agendaId)?.name??`Deze agenda`,ne=ie.find(e=>e.id===a.healthcareServiceId)?.label??``,[re,S]=(0,k.useState)(()=>a.description.trim().length>0),C=(0,k.useRef)(!1);return(0,A.jsxs)(`div`,{className:`flex h-[760px] w-[440px] flex-col overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-lg [--field-background:var(--popover)]`,children:[(0,A.jsx)(`div`,{className:`border-b border-border px-5 py-3.5`,children:(0,A.jsx)(he,{kind:a.kind,label:c?e===`edit`?`Interne afspraak bewerken`:`Nieuwe interne afspraak`:e===`edit`?`Afspraak bewerken`:`Nieuwe afspraak`,onKindChange:u})}),(0,A.jsxs)(`div`,{className:`min-h-0 flex-1 space-y-3 overflow-auto px-4 py-4`,children:[c?(0,A.jsx)(w,{label:`Titel`,htmlFor:`proto-title`,children:(0,A.jsx)(d,{id:`proto-title`,value:a.title,placeholder:`bv. Teamoverleg, Administratie…`,onChange:e=>s({title:e.target.value}),className:`h-10`})}):(0,A.jsxs)(E,{title:`Patiënt`,children:[(0,A.jsxs)(`div`,{className:`mb-2 inline-flex gap-1`,children:[(0,A.jsx)(O,{active:!f,onClick:()=>s({patientMode:`existing`}),children:`Bestaande`}),(0,A.jsx)(O,{active:f,onClick:()=>s({patientMode:`new`}),children:`Nieuwe patiënt`})]}),f?(0,A.jsx)(Se,{values:a.newPatient,onChange:e=>s({newPatient:{...a.newPatient,...e}}),duplicates:p,onUseExisting:e=>s({patientMode:`existing`,patientId:e})}):(0,A.jsx)(ce,{value:a.patientId,onValueChange:e=>s({patientId:e})})]}),(0,A.jsxs)(E,{title:`Afspraak`,children:[c?null:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`div`,{className:`flex items-end gap-2`,children:[(0,A.jsx)(w,{label:`Type`,htmlFor:`proto-category`,className:`flex-1`,children:(0,A.jsx)(De,{id:`proto-category`,value:a.healthcareServiceId,onValueChange:e=>s({healthcareServiceId:e})})}),(0,A.jsx)(w,{label:`Duur`,htmlFor:`proto-duration`,className:`shrink-0`,children:(0,A.jsx)(D,{value:a.duration,onChange:e=>s({duration:e})})})]}),re?(0,A.jsx)(w,{label:`Onderwerp`,htmlFor:`proto-subject`,children:(0,A.jsx)(d,{id:`proto-subject`,autoFocus:C.current,value:a.description,placeholder:ne,onChange:e=>s({description:e.target.value}),onBlur:()=>{a.description.trim()||S(!1)},className:`h-10`})}):(0,A.jsx)(`button`,{type:`button`,onClick:()=>{C.current=!0,S(!0)},className:`-mt-0.5 w-fit text-[12px] font-medium text-muted-foreground transition-colors hover:text-foreground`,children:`+ Onderwerp toevoegen`})]}),(0,A.jsx)(w,{label:`Agenda`,htmlFor:`proto-agenda`,shared:!c,children:(0,A.jsx)(Te,{id:`proto-agenda`,value:a.agendaId,onValueChange:e=>s({agendaId:e})})}),c?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(w,{label:`Datum`,htmlFor:`proto-date`,children:(0,A.jsx)(d,{id:`proto-date`,type:`date`,value:a.date,onChange:e=>s({date:e.target.value}),className:`h-10`})}),(0,A.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,A.jsx)(w,{label:`Start`,htmlFor:`proto-time`,children:(0,A.jsx)(d,{id:`proto-time`,type:`time`,step:300,value:a.time,onChange:e=>s({time:e.target.value}),className:`tabular h-10`})}),(0,A.jsx)(w,{label:`Duur`,htmlFor:`proto-duration`,children:(0,A.jsx)(D,{value:a.duration,onChange:e=>s({duration:e}),fullWidth:!0})})]})]}):(0,A.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,A.jsx)(w,{label:`Datum`,htmlFor:`proto-date`,shared:!0,children:(0,A.jsx)(d,{id:`proto-date`,type:`date`,value:a.date,onChange:e=>s({date:e.target.value}),className:`h-10`})}),(0,A.jsx)(w,{label:`Start`,htmlFor:`proto-time`,shared:!0,children:(0,A.jsx)(d,{id:`proto-time`,type:`time`,step:300,value:a.time,onChange:e=>s({time:e.target.value}),className:`tabular h-10`})})]}),(0,A.jsx)(w,{label:`Locatie`,htmlFor:`proto-location`,shared:!c,children:(0,A.jsx)(_e,{id:`proto-location`,value:a.locationId,onValueChange:e=>s({locationId:e}),allowNone:!0})}),b?(0,A.jsxs)(`p`,{className:`tabular text-[11px] text-muted-foreground`,children:[`Tot `,m(b),` · `,a.duration,` min`]}):null,(0,A.jsx)(Pe,{agendaName:te,bands:x})]}),(0,A.jsx)(w,{label:`Opmerkingen`,htmlFor:`proto-remark`,children:(0,A.jsx)(le,{id:`proto-remark`,rows:3,value:a.remark,onChange:e=>s({remark:e.target.value}),className:`text-sm`})}),c?null:(0,A.jsx)(Ne,{sentStatus:_?n:void 0,checked:v,canSend:g,recipientEmail:h,onChange:e=>s({sendConfirmation:e})})]}),(0,A.jsx)(`div`,{className:`border-t border-border bg-muted/30 px-5 py-3.5`,children:(0,A.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,A.jsx)(l,{type:`button`,variant:`secondary`,children:`Annuleer`}),(0,A.jsx)(l,{type:`button`,className:`ml-auto`,size:`lg`,onClick:()=>i(a),children:v?`Opslaan en versturen`:`Opslaan`})]})})]})}function Ne({sentStatus:e,checked:t,canSend:n,recipientEmail:r,onChange:i}){if(e)return(0,A.jsxs)(`div`,{className:`flex items-center gap-3 rounded-lg border border-border bg-muted/20 px-3 py-2.5`,children:[(0,A.jsxs)(`div`,{className:`flex min-w-0 flex-1 items-center gap-1.5`,children:[(0,A.jsx)(`span`,{className:`text-[12px] font-medium text-foreground`,children:`Bevestiging`}),(0,A.jsx)(T,{})]}),(0,A.jsx)(ye,{status:e})]});let a=(0,A.jsxs)(`div`,{className:`flex items-center gap-3 rounded-lg border border-border bg-muted/20 px-3 py-2.5`,children:[(0,A.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,A.jsx)(`label`,{htmlFor:`proto-send`,className:`text-[12px] font-medium text-foreground`,children:`Stuur bevestiging`}),(0,A.jsx)(T,{})]}),(0,A.jsx)(`p`,{className:`mt-0.5 text-[11px] leading-snug text-muted-foreground`,children:n?(0,A.jsxs)(A.Fragment,{children:[`Naar `,r,`, met de velden gemarkeerd met `,(0,A.jsx)(`span`,{"aria-hidden":!0,children:`✉`}),`.`]}):`Geen e-mailadres bekend voor deze patiënt.`})]}),(0,A.jsx)(p,{id:`proto-send`,checked:t,disabled:!n,onCheckedChange:i})]});return n?a:(0,A.jsxs)(y,{children:[(0,A.jsx)(v,{render:(0,A.jsx)(`div`,{children:a})}),(0,A.jsx)(_,{children:`Vul een e-mailadres in om een bevestiging te kunnen sturen.`})]})}function Pe({agendaName:e,bands:t}){return t.length===0?null:(0,A.jsx)(`div`,{role:`status`,className:`flex flex-col gap-1 rounded-lg border border-warning/40 bg-warning/10 px-3 py-2 text-[12px] text-warning`,children:t.map(t=>(0,A.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,A.jsx)(`span`,{"aria-hidden":!0,className:`font-semibold`,children:`⚠`}),(0,A.jsxs)(`span`,{children:[e,` is afwezig van `,m(t.start),` tot `,m(t.end),t.comment?` wegens "${t.comment}"`:``,`.`]})]},t.id))})}function O({active:e,onClick:t,children:n}){return(0,A.jsx)(l,{type:`button`,size:`sm`,shape:`pill`,variant:e?`secondary`:`ghost`,"aria-pressed":e,onClick:t,children:n})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{k=e(n(),1),a(),i(),c(),u(),de(),f(),g(),pe(),me(),Ce(),be(),xe(),we(),Ee(),ge(),ve(),ke(),h(),re(),A=r(),{expect:j,fn:M,screen:N,userEvent:P,within:F}=__STORYBOOK_MODULE_TEST__,I={patient:30,internal:60},L={givenName:``,familyName:``,birthDate:``,gender:``,email:``,mobile:``},R=e=>(0,A.jsx)(s,{client:(0,k.useMemo)(()=>{let e=o();return ne(e),x(e),te(e),b(e),e},[]),children:(0,A.jsx)(e,{})}),z={component:Me,parameters:{layout:`centered`},tags:[`prototype`],decorators:[R],args:{mode:`create`,absences:[C],onSave:M()}},B={},V={args:{initial:{kind:`internal`,title:`Teamoverleg`}}},H={play:async({canvasElement:e})=>{let t=F(e),n=F(document.body);await j(t.getByText(`Patiënt`)).toBeInTheDocument(),await j(t.getByText(`Stuur bevestiging`)).toBeInTheDocument(),await j(t.queryByLabelText(`Titel`)).not.toBeInTheDocument(),await j(t.getByRole(`heading`,{name:/Nieuwe afspraak/})).toBeInTheDocument(),await P.click(t.getByRole(`button`,{name:/Nieuwe afspraak/})),await P.click(await n.findByRole(`menuitemradio`,{name:`Interne afspraak`})),await j(t.getByRole(`heading`,{name:/Nieuwe interne afspraak/})).toBeInTheDocument(),await j(t.getByLabelText(`Titel`)).toBeInTheDocument(),await j(t.queryByText(`Patiënt`)).not.toBeInTheDocument(),await j(t.queryByText(`Stuur bevestiging`)).not.toBeInTheDocument()}},U={play:async({canvasElement:e})=>{let t=F(e),n=t.getByRole(`button`,{name:`+ Onderwerp toevoegen`});await j(t.queryByLabelText(`Onderwerp`)).not.toBeInTheDocument(),await P.click(n);let r=t.getByLabelText(`Onderwerp`);await j(r).toHaveFocus(),await P.type(r,`Ooglidcorrectie — info`),await j(r).toHaveValue(`Ooglidcorrectie — info`),await j(t.queryByRole(`button`,{name:`+ Onderwerp toevoegen`})).not.toBeInTheDocument(),await P.clear(r),await P.tab(),await j(t.queryByLabelText(`Onderwerp`)).not.toBeInTheDocument(),await j(t.getByRole(`button`,{name:`+ Onderwerp toevoegen`})).toBeInTheDocument()}},W={play:async({canvasElement:e})=>{let t=F(e).getByText(`Afspraak`).closest(`section`);await j(t).not.toBeNull();let n=F(t).getAllByRole(`img`,{name:fe});await j(n).toHaveLength(4);for(let e of[`Agenda`,`Datum`,`Start`,`Locatie`])await j(F(t).getByText(e)).toBeInTheDocument();await P.hover(n[0]),await j(await N.findByText(ue)).toBeInTheDocument()}},G={args:{initial:{patientMode:`new`}}},K={args:{initial:{patientMode:`new`,newPatient:{...L,givenName:`Marie`,familyName:`Janssens`,birthDate:`1985-03-12`}}}},q={args:{initial:{patientMode:`new`,newPatient:{givenName:`Lotte`,familyName:`Vermeulen`,birthDate:`1990-05-21`,gender:`female`,email:`lotte@voorbeeld.be`,mobile:`0470 12 34 56`}}}},J={args:{initial:{patientMode:`new`,newPatient:{...L,givenName:`Lotte`,familyName:`Vermeulen`}}}},Y={args:{initial:{time:`14:00`}}},X={args:{initial:{time:`14:00`}},play:async({canvasElement:e})=>{let t=F(e),n=F(document.body);await j(await t.findByText(/Dr\. Tonnard is afwezig van 13:00 tot 17:00 wegens "Congres"/)).toBeInTheDocument(),await P.click(t.getByText(`Dr. Tonnard`)),await P.click(await n.findByRole(`option`,{name:`Dr. Verpaele`})),await j(t.queryByText(/is afwezig van/)).not.toBeInTheDocument()}},Z={args:{mode:`edit`,initial:{description:`Controle litteken`,remark:`Patiënt belt liefst vooraf.`}}},Q={args:{mode:`edit`,initial:{patientMode:`existing`,patientId:`d0000000-0000-0000-0000-000000000001`,description:`Controle litteken`},confirmationStatus:{kind:`delivered`,at:`${S}T07:00:00.000Z`}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source},description:{story:`The three groups at rest, existing-patient path. Read top to bottom: who is it for → what and when
is it → what do we want to remember. The ✉ on Agenda · Datum · Start · Locatie marks the four
fields that reach the patient's inbox; hover one for the reason.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      kind: 'internal',
      title: 'Teamoverleg'
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`The internal / staff appointment path (a team meeting, admin time, a held slot) — the same panel
with no patient. The title dropdown flips the kind: the Patiënt section collapses to a bare Titel,
Type/Onderwerp and the confirmation row drop away (no coded service, no recipient), the ✉ markers
vanish (nothing reaches an inbox), and the slot regroups to Datum (full width) + Start · Duur with
a 60-min default. Open the "Nieuwe interne afspraak ▾" heading to switch back to a patient booking.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    // At rest: patient path — a patient picker, a confirmation switch, no Titel.
    await expect(canvas.getByText('Patiënt')).toBeInTheDocument();
    await expect(canvas.getByText('Stuur bevestiging')).toBeInTheDocument();
    await expect(canvas.queryByLabelText('Titel')).not.toBeInTheDocument();
    // The kind switch is the panel heading, not merely a button — heading-nav must still reach it.
    await expect(canvas.getByRole('heading', {
      name: /Nieuwe afspraak/
    })).toBeInTheDocument();

    // Switch to the internal kind via the title menu.
    await userEvent.click(canvas.getByRole('button', {
      name: /Nieuwe afspraak/
    }));
    await userEvent.click(await body.findByRole('menuitemradio', {
      name: 'Interne afspraak'
    }));

    // Internal: a Titel replaces the patient identity, the heading updates, and confirmation is gone.
    await expect(canvas.getByRole('heading', {
      name: /Nieuwe interne afspraak/
    })).toBeInTheDocument();
    await expect(canvas.getByLabelText('Titel')).toBeInTheDocument();
    await expect(canvas.queryByText('Patiënt')).not.toBeInTheDocument();
    await expect(canvas.queryByText('Stuur bevestiging')).not.toBeInTheDocument();
  }
}`,...H.parameters?.docs?.source},description:{story:'Interaction test — switching kind via the title dropdown reshapes the panel. Proves the heading is\na real control: opening it and picking "Interne afspraak" removes the patient picker and the\nconfirmation row and reveals the Titel; picking "Patiëntafspraak" restores them. The menu portals\nto `document.body`, so its items are queried off `screen`.',...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // At rest: the affordance, no field.
    const add = canvas.getByRole('button', {
      name: '+ Onderwerp toevoegen'
    });
    await expect(canvas.queryByLabelText('Onderwerp')).not.toBeInTheDocument();

    // Open → a focused input appears.
    await userEvent.click(add);
    const field = canvas.getByLabelText('Onderwerp');
    await expect(field).toHaveFocus();

    // Typing overrides the subject; the affordance is gone while the field holds a value.
    await userEvent.type(field, 'Ooglidcorrectie — info');
    await expect(field).toHaveValue('Ooglidcorrectie — info');
    await expect(canvas.queryByRole('button', {
      name: '+ Onderwerp toevoegen'
    })).not.toBeInTheDocument();

    // Clear + blur → collapses back to the affordance, no empty field left behind.
    await userEvent.clear(field);
    await userEvent.tab();
    await expect(canvas.queryByLabelText('Onderwerp')).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: '+ Onderwerp toevoegen'
    })).toBeInTheDocument();
  }
}`,...U.parameters?.docs?.source},description:{story:`Interaction test for the Type + Onderwerp unification — the subject override is subtle by design,
so its reveal/collapse contract is asserted rather than eyeballed. At rest there is no Onderwerp
field, only the "+ Onderwerp toevoegen" affordance (Type is the subject). Opening it reveals a
focused input; typing overrides the subject; clearing it and blurring collapses back to the
affordance, so an empty override never lingers.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const afspraak = canvas.getByText('Afspraak').closest('section');
    await expect(afspraak).not.toBeNull();
    const markers = within(afspraak as HTMLElement).getAllByRole('img', {
      name: SHARED_FIELD_LABEL
    });
    await expect(markers).toHaveLength(4);

    // Each marked label is one of the four fields the confirmation email actually carries — and the
    // internal ones (Type, Duur) are not among them.
    for (const label of ['Agenda', 'Datum', 'Start', 'Locatie']) {
      await expect(within(afspraak as HTMLElement).getByText(label)).toBeInTheDocument();
    }
    await userEvent.hover(markers[0]);
    await expect(await screen.findByText(SHARED_FIELD_HINT)).toBeInTheDocument();
  }
}`,...W.parameters?.docs?.source},description:{story:`Interaction test — the marker is the whole mechanism this cut of the prototype rests on, so it is
asserted rather than eyeballed.

Proves three things at once: exactly FOUR fields are marked (agenda · datum · start · locatie — the
\`BookingConfirmedVariables\` set, so a fifth marker or a missing one fails here rather than in
review); the marker is reachable by its accessible name (it is \`role="img"\`, not a decorative
glyph, so a screen-reader user can tell a shared field from an internal one); and hovering it
actually opens the tooltip carrying the why.

The count deliberately excludes the confirmation row's marker by scoping to the Afspraak section —
that one is the legend, not a field marker.

Base UI portals the popup to \`document.body\`, outside \`canvasElement\`, so the assertion queries
\`screen\` rather than the canvas (same reason as \`comms-send-button.stories.tsx\`).`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      patientMode: 'new'
    }
  }
}`,...G.parameters?.docs?.source},description:{story:`Problem #4: switch to "Nieuwe patiënt" and the identity capture is split into voornaam · naam ·
geboortedatum · GSM · e-mail — parseable, so duplicates are detectable, and addressable, so the
confirmation row below has a recipient.

Type \`Janssens\` into **Naam** to trip the duplicate warning: two fixture dossiers are Janssens,
Marie — same family AND given name, different birth date — so the warning offers both and lets you
jump to the existing dossier rather than creating a third. Adding \`Marie\` as **Voornaam** and
\`12/03/1985\` as **Geboortedatum** narrows one row's reason to "zelfde naam · zelfde voornaam ·
zelfde geboortedatum" while the other stays a name-only match — precisely the discrimination
today's single free-text name field cannot make.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      patientMode: 'new',
      newPatient: {
        ...EMPTY_NEW_PATIENT,
        givenName: 'Marie',
        familyName: 'Janssens',
        birthDate: '1985-03-12'
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`The duplicate warning pre-tripped, so the layout can be judged without typing. "Gebruik deze"
switches the panel to the existing-patient path with that dossier linked — click it and the
PatientPicker resolves the chosen patient.

Note the guard is advisory, never blocking: two fixture patients share a name *and* a given name,
which is exactly the real case a practice hits — so the right move is to offer the existing
dossier, not to refuse the create.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      patientMode: 'new',
      newPatient: {
        givenName: 'Lotte',
        familyName: 'Vermeulen',
        birthDate: '1990-05-21',
        gender: 'female',
        email: 'lotte@voorbeeld.be',
        mobile: '0470 12 34 56'
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Problem #2 resolved: a new patient with an email, so the confirmation row is live and the commit
button reads "Opslaan en versturen" — one action instead of save-then-reopen-then-send.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      patientMode: 'new',
      newPatient: {
        ...EMPTY_NEW_PATIENT,
        givenName: 'Lotte',
        familyName: 'Vermeulen'
      }
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`The disabled-send state: a new patient with no email yet. The row states the reason inline instead
of disappearing, and the commit button falls back to plain "Opslaan".`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      time: '14:00'
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:`Booking a slot that lands inside an *afwezigheid*. The default agenda is Dr. Tonnard, who is at a
congres 13:00–17:00 (\`FIXTURE_ABSENCE_BAND\`); the draft time is moved to 14:00, so the slot overlaps
and the soft advisory appears under the slot fields. It names the practitioner, the window, and the
reason — richer than the shipped generic banner — and never blocks: the commit button still saves.

Switch the Agenda to Dr. Verpaele (who has no absence that afternoon) and the banner clears — the
check is per agenda, not per day.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    initial: {
      time: '14:00'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    // The Congres absence is named, with its window — not a bare "valt binnen een afwezigheid".
    await expect(await canvas.findByText(/Dr\\. Tonnard is afwezig van 13:00 tot 17:00 wegens "Congres"/)).toBeInTheDocument();

    // Re-point to Dr. Verpaele (free that afternoon) via the Agenda select (its trigger currently
    // shows "Dr. Tonnard"); the banner clears — the check is per agenda, not per day.
    await userEvent.click(canvas.getByText('Dr. Tonnard'));
    await userEvent.click(await body.findByRole('option', {
      name: 'Dr. Verpaele'
    }));
    await expect(canvas.queryByText(/is afwezig van/)).not.toBeInTheDocument();
  }
}`,...X.parameters?.docs?.source},description:{story:`Interaction test for the absence advisory — the feature the redesign had dropped, so it's asserted
rather than eyeballed. Proves the banner appears for an in-absence slot and carries the *why*
(reason + window read off the overlapping band), then that re-pointing the booking to a free agenda
clears it — the recompute-per-agenda contract the shipped boolean check can't show on its own.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'edit',
    initial: {
      description: 'Controle litteken',
      remark: 'Patiënt belt liefst vooraf.'
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Edit mode — same three groups, so the markers read identically on an existing booking.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'edit',
    // A linked existing patient (seeded by \`seedDuplicateDossiersCache\`) — the recipient the
    // confirmation was delivered to. Janssens, Marie · d0000000-…0001.
    initial: {
      patientMode: 'existing',
      patientId: 'd0000000-0000-0000-0000-000000000001',
      description: 'Controle litteken'
    },
    confirmationStatus: {
      kind: 'delivered',
      at: \`\${FIXTURE_DATE}T07:00:00.000Z\`
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Editing an appointment whose confirmation already went out. The send toggle is gone — you don't
offer to send what's already delivered (a re-send is an idempotent no-op) — and in its place sits
the read-only delivery status, the same \`CommsStatusBadge\` the view card shows. The commit button
is a plain "Opslaan": editing the booking doesn't re-trigger a send.

This is the write-mode counterpart to \`appointment-summary-redesign--default\`: read and write show
the confirmation the same way, so a user moving between them sees one consistent answer to "did the
patient get told?".`,...Q.parameters?.docs?.description}}},$=[`Default`,`Internal`,`KindSwitchReshapesPanel`,`SubjectOverrideRevealsAndCollapses`,`SharedMarkersAreOnTheEmailFields`,`NewPatient`,`NewPatientWithDuplicates`,`NewPatientReadyToSend`,`NoRecipientYet`,`InAbsence`,`AbsenceWarningNamesAndClears`,`Edit`,`EditConfirmationAlreadySent`]}))();export{X as AbsenceWarningNamesAndClears,B as Default,Z as Edit,Q as EditConfirmationAlreadySent,Y as InAbsence,V as Internal,H as KindSwitchReshapesPanel,G as NewPatient,q as NewPatientReadyToSend,K as NewPatientWithDuplicates,J as NoRecipientYet,W as SharedMarkersAreOnTheEmailFields,U as SubjectOverrideRevealsAndCollapses,$ as __namedExportsOrder,z as default};