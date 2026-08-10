import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as ee,n as te,r as ne,t as r,u as i}from"./iframe-C9zIL0dk.js";import{a,m as o}from"./time-DcWb3yan.js";import{b as s,c as re,h as c,i as l,o as u}from"./scheduling-fixtures-BhVrYCdJ.js";import{n as d,t as f}from"./queries-DUfqEiuh.js";import{N as p,P as ie,R as ae}from"./booking-form-BNm58ShL.js";import{o as oe,t as m}from"./appointment-summary-Cf0VGpqC.js";import{i as se,n as h,r as g,t as _}from"./status-actions-B15HhptM.js";var v,y,b,x,S=t((()=>{v=new Date(`2026-07-22T09:00:00`),y=180,b={verifiedAt:`2025-11-05T10:15:00`,verifiedBy:`Onthaal`,staleAfterDays:y,now:v},x={verifiedAt:null,verifiedBy:null,staleAfterDays:y,now:v}}));function C(e){return c.find(t=>t.id===e.healthcareServiceId)?.label??e.serviceCategory??``}function w(e){return{verifiedAt:e.verifiedAt,verifiedBy:e.verifiedBy??null}}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{T=e(n(),1),ne(),ae(),f(),oe(),g(),o(),s(),S(),te(),E=ee(),{expect:D,fn:O,screen:k,userEvent:A,within:j}=__STORYBOOK_MODULE_TEST__,M=e=>(0,E.jsx)(i,{client:(0,T.useMemo)(()=>{let e=r();return e.setQueryData(d.verificationHorizon(),180),e},[]),children:(0,E.jsx)(e,{})}),N={...u[0],status:`booked`},P={component:m,parameters:{layout:`centered`,docs:{description:{component:`Read-only appointment view rendered inside the scheduling column — the read-mode twin of the
booking form (same Patiënt · Afspraak groups, same ✉ markers, same confirmation slot). See the
design spec in \`./appointment-summary-redesign.stories.tsx\`.

Presentational — takes fully resolved data as props (\`./booking-column\` wires it to queries + the
delete / status mutations). The container passes the status-action row (\`AdvanceBar\`) as a slot;
these stories do the same so the footer renders as it does live.`}}},decorators:[e=>(0,E.jsx)(`div`,{className:`flex h-[640px] w-[440px] flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm`,children:(0,E.jsx)(e,{})}),M],args:{block:N,agendaName:l[0].name,categoryLabel:C(N),locationName:`Brussel`,confirmationStatus:{kind:`delivered`,at:`${N.start}`},onEdit:O(),onReschedule:O(),onDelete:O(),onClose:O(),isDeleting:!1,deleteError:null},render:e=>{let t=e.block.start?a(e.block.start):``;return(0,E.jsx)(m,{...e,statusActions:e.internal?void 0:(0,E.jsx)(_,{block:e.block,date:t,cancelInOverflow:!0}),overflowActions:!e.internal&&se(e.block.status)?(0,E.jsx)(h,{block:e.block,date:t}):void 0})}},F={play:async({canvasElement:e})=>{let t=j(e).getByRole(`link`,{name:/Open dossier van Janssens, Marie/});await D(t.getAttribute(`href`)).toMatch(/^\/patients\/[^/]+$/),await D(t).toHaveAttribute(`target`,`_blank`)}},I={play:async({canvasElement:e})=>{let t=j(e);await D(t.getByText(`Raadpleging`)).toBeInTheDocument(),await D(t.queryByText(N.serviceCategory??``)).not.toBeInTheDocument(),await D(t.queryByText(/consultation/i)).not.toBeInTheDocument();let n=t.getAllByRole(`img`,{name:ie});await D(n).toHaveLength(4),await A.hover(n[0]),await D(await k.findByText(p)).toBeInTheDocument()}},L={args:{internal:!0,block:{...N,patient:null,description:`Teamoverleg`,end:`${re}T08:00:00.000Z`,minutesDuration:60}},play:async({canvasElement:e})=>{let t=j(e);await D(t.getByText(`Interne afspraak`)).toBeInTheDocument(),await D(t.getByText(`Teamoverleg`)).toBeInTheDocument(),await D(t.queryByRole(`link`,{name:/Open dossier/})).not.toBeInTheDocument(),await D(t.queryByText(`Bevestiging`)).not.toBeInTheDocument(),await D(j(t.getByRole(`button`,{name:`Bewerken`}).closest(`div`)).queryByRole(`button`,{name:/Toegekomen/})).not.toBeInTheDocument()}},R={args:{block:{...N,description:`Ooglidcorrectie — bovenste ooglid`}}},z={args:{block:{...N,remark:`Patiënt belt liefst vooraf.`}}},B={args:{confirmationStatus:{kind:`bounced`}}},V={args:{confirmationStatus:{kind:`not-sent`}}},H={args:{block:u[3],agendaName:l[1].name,confirmationStatus:{kind:`not-sent`}}},U={args:{block:{...N,status:`arrived`}},play:async({canvasElement:e})=>{let t=j(e),n=j(t.getByRole(`button`,{name:`Bewerken`}).closest(`div`));await D(n.getByRole(`button`,{name:/In behandeling/})).toBeInTheDocument(),await D(n.queryByRole(`button`,{name:/Annuleer/})).not.toBeInTheDocument(),await A.click(t.getByRole(`button`,{name:`Meer acties`})),await D(await k.findByText(/Geannuleerd door patiënt/)).toBeInTheDocument(),await D(await k.findByRole(`menuitem`,{name:/Terug naar Geboekt/})).toBeInTheDocument()}},W={args:{block:{...N,status:`in-treatment`}},play:async({canvasElement:e})=>{let t=j(e);await D(j(t.getByRole(`button`,{name:`Bewerken`}).closest(`div`)).getByRole(`button`,{name:/Gezien/})).toBeInTheDocument(),await D(t.getByText(`In behandeling`)).toBeInTheDocument(),await A.click(t.getByRole(`button`,{name:`Meer acties`})),await D(await k.findByRole(`menuitem`,{name:/Terug naar Toegekomen/})).toBeInTheDocument()}},G={args:{block:{...N,status:`fulfilled`}},play:async({canvasElement:e})=>{let t=j(e);await D(t.queryByRole(`button`,{name:/Terug inplannen/})).not.toBeInTheDocument(),await A.click(t.getByRole(`button`,{name:`Meer acties`})),await D(await k.findByRole(`menuitem`,{name:/Terug naar In behandeling/})).toBeInTheDocument()}},K={args:{block:{...N,status:`cancelled`}},play:async({canvasElement:e})=>{await D(j(e).getByRole(`button`,{name:/Terug inplannen/})).toBeInTheDocument()}},q={args:{block:{...N,status:`noshow`}},play:async({canvasElement:e})=>{await D(j(e).getByRole(`button`,{name:/Terug inplannen/})).toBeInTheDocument()}},J={args:{rescheduled:!0}},Y={verifiedAt:new Date(Date.now()-1440*60*1e3*30).toISOString(),verifiedBy:`Dr. Verpaele`},X={args:{block:{...N,patient:{...N.patient,verification:w(b)}}},play:async({canvasElement:e})=>{await D(await j(e).findByRole(`link`,{name:`Open dossier van Janssens, Marie in een nieuw tabblad, Verificatie verlopen`})).toBeInTheDocument()}},Z={args:{block:{...N,patient:{...N.patient,verification:w(x)}}},play:async({canvasElement:e})=>{await D(await j(e).findByRole(`link`,{name:`Open dossier van Janssens, Marie in een nieuw tabblad, Niet geverifieerd`})).toBeInTheDocument()}},Q={args:{block:{...N,patient:{...N.patient,verification:w(Y)}}},play:async({canvasElement:e})=>{await D(await j(e).findByRole(`link`,{name:`Open dossier van Janssens, Marie in een nieuw tabblad`})).toBeInTheDocument()}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dossier = canvas.getByRole('link', {
      name: /Open dossier van Janssens, Marie/
    });
    // The framework's memory router leaves the \`$id\` template unresolved in the rendered href (cf.
    // patient-nav / quotes-widget stories), so match the dossier path shape rather than the concrete
    // id — what matters is that the patient line IS a \`/patients/:id\` link, opening in a new tab.
    await expect(dossier.getAttribute('href')).toMatch(/^\\/patients\\/[^/]+$/);
    await expect(dossier).toHaveAttribute('target', '_blank');
  }
}`,...F.parameters?.docs?.source},description:{story:`The card at rest (a booked appointment). Same groups / order / ✉ fields / confirmation slot as the
booking form — one is the readable form of the other. The lighter patient line (avatar + name)
replaces the old card-in-card, and is a link into the dossier that opens in a NEW TAB — the play
pins that contract (\`href\` + \`target="_blank"\`) so it can't silently regress to a same-tab nav
that would bury the open appointment column.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The human label is shown…
    await expect(canvas.getByText('Raadpleging')).toBeInTheDocument();
    // …and the machine code never is. \`queryByText\` (not getBy) — asserting absence.
    await expect(canvas.queryByText(BLOCK.serviceCategory ?? '')).not.toBeInTheDocument();
    await expect(canvas.queryByText(/consultation/i)).not.toBeInTheDocument();

    // The patient-visible fields carry the same marker contract as the booking form.
    const markers = canvas.getAllByRole('img', {
      name: SHARED_FIELD_LABEL
    });
    // 3 field markers (agenda · datum & tijd · locatie) + the confirmation row's legend.
    await expect(markers).toHaveLength(4);
    await userEvent.hover(markers[0]);
    await expect(await screen.findByText(SHARED_FIELD_HINT)).toBeInTheDocument();
  }
}`,...I.parameters?.docs?.source},description:{story:`Regression — the card must show the category's human label, never its machine code, AND carry the
✉ marker contract the booking form does.

This surface used to render the raw service code straight to screen, so a patient-facing-looking
card read \`consultation\` while the booking form showed "Raadpleging" for the same appointment. The
label now arrives resolved via \`categoryLabel\` (the container reads it off \`healthcareServiceId\`),
and this pins it: the code appears nowhere, the label does. It also checks the four ✉ markers
(agenda · datum & tijd · locatie + the confirmation legend) are reachable by accessible name and
that hovering one explains itself — the same contract the form's marker test asserts, so the two
surfaces can't drift apart on what the ✉ means.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    internal: true,
    block: {
      ...BLOCK,
      patient: null,
      description: 'Teamoverleg',
      end: \`\${FIXTURE_DATE}T08:00:00.000Z\`,
      // 10:00 CEST
      minutesDuration: 60
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Interne afspraak')).toBeInTheDocument();
    await expect(canvas.getByText('Teamoverleg')).toBeInTheDocument();
    // No patient dossier link and no confirmation row on an internal block.
    await expect(canvas.queryByRole('link', {
      name: /Open dossier/
    })).not.toBeInTheDocument();
    await expect(canvas.queryByText('Bevestiging')).not.toBeInTheDocument();
    // Footer is Bewerken alone — no patient-visit status actions.
    const footer = canvas.getByRole('button', {
      name: 'Bewerken'
    }).closest('div')!;
    await expect(within(footer).queryByRole('button', {
      name: /Toegekomen/
    })).not.toBeInTheDocument();
  }
}`,...L.parameters?.docs?.source},description:{story:`The internal / staff appointment in read mode — no patient: the Patiënt line becomes a bare
**Titel** ("Teamoverleg"), Type/Onderwerp and the ✉ markers are gone (nothing reaches an inbox),
the confirmation row is dropped, and the footer is Bewerken alone (no toegekomen/gezien lifecycle).
Agenda, datum & tijd, duur and locatie remain.

The play pins the three things that make it internal: the Titel shows, there's no dossier link, and
there's no confirmation row — plus a Bewerken-only footer.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      description: 'Ooglidcorrectie — bovenste ooglid'
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`The subject OVERRIDDEN. The block carries a description ("Ooglidcorrectie — bovenste ooglid"), so
the Onderwerp readout shows it in place of the type, with "Raadpleging" demoted to a chip beside it
— the read-side of the form's Type + Onderwerp unification.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      remark: 'Patiënt belt liefst vooraf.'
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`The internal note filled, so the Opmerkingen readout appears — a bare trailing line. Unmarked: it
never reaches the patient, the same claim the form makes about the same field.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    confirmationStatus: {
      kind: 'bounced'
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`The state that matters most and was invisible before: the confirmation **bounced**. The patient's
inbox rejected it, so they do NOT know about this appointment — a red badge on the resting view.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    confirmationStatus: {
      kind: 'not-sent'
    }
  }
}`,...V.parameters?.docs?.source},description:{story:`Nothing has gone out yet — the neutral state, still legible at a glance.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    block: FIXTURE_APPOINTMENTS[3],
    agendaName: FIXTURE_AGENDAS[1].name,
    confirmationStatus: {
      kind: 'not-sent'
    }
  }
}`,...H.parameters?.docs?.source},description:{story:`A provisional patient (free-text name, no structured given/family yet). The patient line falls back
to its completeness label, and the confirmation can't have gone out (no email on file).`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      status: 'arrived'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const footer = canvas.getByRole('button', {
      name: 'Bewerken'
    }).closest('div')!;
    const inFooter = within(footer);
    // Row is advance-only now.
    await expect(inFooter.getByRole('button', {
      name: /In behandeling/
    })).toBeInTheDocument();
    await expect(inFooter.queryByRole('button', {
      name: /Annuleer/
    })).not.toBeInTheDocument();
    // …but cancel is still reachable in the overflow menu, alongside a "revert one rung" step back to
    // Geboekt (undo a mis-marked check-in).
    await userEvent.click(canvas.getByRole('button', {
      name: 'Meer acties'
    }));
    await expect(await screen.findByText(/Geannuleerd door patiënt/)).toBeInTheDocument();
    await expect(await screen.findByRole('menuitem', {
      name: /Terug naar Geboekt/
    })).toBeInTheDocument();
  }
}`,...U.parameters?.docs?.source},description:{story:`Patient has checked in — the \`arrived\` badge shows in the header, and the footer advances to **In
behandeling** (\`in-treatment\`). Cancel has left the primary row (advance-only from arrival on) and
moved into the ⋯ overflow, reachable but off the primary path.

The play pins that rule: no Annuleer in the footer, but reachable in the overflow.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      status: 'in-treatment'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const footer = canvas.getByRole('button', {
      name: 'Bewerken'
    }).closest('div')!;
    await expect(within(footer).getByRole('button', {
      name: /Gezien/
    })).toBeInTheDocument();
    // Header carries the "In behandeling" badge.
    await expect(canvas.getByText('In behandeling')).toBeInTheDocument();
    // Overflow can step the consultation back one rung, to Toegekomen.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Meer acties'
    }));
    await expect(await screen.findByRole('menuitem', {
      name: /Terug naar Toegekomen/
    })).toBeInTheDocument();
  }
}`,...W.parameters?.docs?.source},description:{story:"Consultation running (`in-treatment`, re-introduced in #948). The only forward step left is\n**Gezien** (`fulfilled`); cancel stays in the overflow, and the info-toned status badge shows.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      status: 'fulfilled'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // No full-width restore-to-booked in the primary row…
    await expect(canvas.queryByRole('button', {
      name: /Terug inplannen/
    })).not.toBeInTheDocument();
    // …but the overflow can step it back one rung, to In behandeling.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Meer acties'
    }));
    await expect(await screen.findByRole('menuitem', {
      name: /Terug naar In behandeling/
    })).toBeInTheDocument();
  }
}`,...G.parameters?.docs?.source},description:{story:`Terminal (\`fulfilled\`) — the primary row collapses to the badge (no full-width **Terug inplannen**:
that restore-to-booked stays reserved for the cancel terminals). But a mis-clicked "Gezien" is
recoverable: the ⋯ overflow carries a one-rung **Terug naar In behandeling** revert.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      status: 'cancelled'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: /Terug inplannen/
    })).toBeInTheDocument();
  }
}`,...K.parameters?.docs?.source},description:{story:"Terminal (`cancelled`) — reversible: a full-width **Terug inplannen** restores the booking to\n`booked`. The status already shows in the header badge, so it isn't repeated beside the button.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      status: 'noshow'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: /Terug inplannen/
    })).toBeInTheDocument();
  }
}`,...q.parameters?.docs?.source},description:{story:"Terminal (`noshow`) — restorable like `cancelled` (a no-show is often a mix-up): **Terug inplannen**\nbrings it back to the booked state.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    rescheduled: true
  }
}`,...J.parameters?.docs?.source},description:{story:`Same surface after a successful reschedule — a green confirmation banner appears above the fields
with the new date + time; the user can dismiss it with the inline close.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      patient: {
        ...BLOCK.patient!,
        verification: toPatientVerification(FIXTURE_VERIFIED_STALE)
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dossier = await canvas.findByRole('link', {
      name: 'Open dossier van Janssens, Marie in een nieuw tabblad, Verificatie verlopen'
    });
    await expect(dossier).toBeInTheDocument();
  }
}`,...X.parameters?.docs?.source},description:{story:`Verification lapsed (>180 days) — a small amber triangle rides beside the name, and the "Open
dossier" link's accessible name carries the notice too (nothing else changes: same layout, same
fields — the warning is additive).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      patient: {
        ...BLOCK.patient!,
        verification: toPatientVerification(FIXTURE_VERIFIED_NONE)
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dossier = await canvas.findByRole('link', {
      name: 'Open dossier van Janssens, Marie in een nieuw tabblad, Niet geverifieerd'
    });
    await expect(dossier).toBeInTheDocument();
  }
}`,...Z.parameters?.docs?.source},description:{story:`Never verified — same amber triangle, distinct wording ("Niet geverifieerd") in the link's
accessible name.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...BLOCK,
      patient: {
        ...BLOCK.patient!,
        verification: toPatientVerification(FRESH_VERIFICATION)
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // The plain link name, with no " — …" notice appended.
    const dossier = await canvas.findByRole('link', {
      name: 'Open dossier van Janssens, Marie in een nieuw tabblad'
    });
    await expect(dossier).toBeInTheDocument();
  }
}`,...Q.parameters?.docs?.source},description:{story:`Freshly verified — the reference stays clean: no triangle, no notice folded into the link name.
This is the normal case, and the point of the feature: nothing changes on the agenda for the
common (verified) patient.`,...Q.parameters?.docs?.description}}},$=[`Default`,`RawCategoryCodeIsNeverShown`,`Internal`,`SubjectOverride`,`WithNotes`,`ConfirmationBounced`,`ConfirmationNotSent`,`ProvisionalPatient`,`Arrived`,`InTreatment`,`Fulfilled`,`Cancelled`,`NoShow`,`Rescheduled`,`PatientLineStale`,`PatientLineNeverVerified`,`PatientLineFresh`]}))();export{U as Arrived,K as Cancelled,B as ConfirmationBounced,V as ConfirmationNotSent,F as Default,G as Fulfilled,W as InTreatment,L as Internal,q as NoShow,Q as PatientLineFresh,Z as PatientLineNeverVerified,X as PatientLineStale,H as ProvisionalPatient,I as RawCategoryCodeIsNeverShown,J as Rescheduled,R as SubjectOverride,z as WithNotes,$ as __namedExportsOrder,P as default};