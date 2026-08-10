import{i as e}from"./preload-helper-usAeo7Bx.js";import{i as t,r as n}from"./booking-form-BNm58ShL.js";var r,i,a,o,s,c,l,u,d,f,p,m;e((()=>{t(),{expect:r,screen:i,userEvent:a,within:o}=__STORYBOOK_MODULE_TEST__,s={component:n,parameters:{layout:`centered`,docs:{description:{component:'The booking-confirmation status shown next to the drawer\'s "Bevestiging versturen" action\n(issue #798). `CommsStatusBadge` is pure and presentational — it renders one `ConfirmationStatus`\nas a toned badge — so each state is exercised directly here. The wiring that *derives* the status\nfrom the latest `communication_request` + its Mailgun delivery events lives in\n`./booking-confirmation-status` (`deriveConfirmationStatus`).'}}}},c={args:{status:{kind:`not-sent`}},play:async({canvasElement:e})=>{await r(o(e).getByText(`Niet verzonden`)).toBeInTheDocument()}},l={args:{status:{kind:`sent`,at:`2026-07-08T09:05:00.000Z`}},play:async({canvasElement:e})=>{await r(o(e).getByText(/^Verzonden op/)).toBeInTheDocument()}},u={args:{status:{kind:`delivered`,at:`2026-07-08T09:06:00.000Z`}},play:async({canvasElement:e})=>{await r(o(e).getByText(/^Afgeleverd op/)).toBeInTheDocument()}},d={args:{status:{kind:`bounced`}},play:async({canvasElement:e})=>{await r(o(e).getByText(`Niet afgeleverd`)).toBeInTheDocument()}},f={args:{status:{kind:`failed`}},play:async({canvasElement:e})=>{await r(o(e).getByText(`Verzenden mislukt`)).toBeInTheDocument()}},p={args:{status:{kind:`skipped`,reason:`Patiënt heeft geen toestemming gegeven`}},play:async({canvasElement:e})=>{let t=o(e);await a.hover(t.getByText(`Overgeslagen`)),await r(await i.findByText(`Patiënt heeft geen toestemming gegeven`)).toBeInTheDocument()}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      kind: 'not-sent'
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('Niet verzonden')).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source},description:{story:`No confirmation has gone out yet — sits beside the enabled send button.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      kind: 'sent',
      at: '2026-07-08T09:05:00.000Z'
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText(/^Verzonden op/)).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source},description:{story:`The request is dispatched but no provider delivery event has landed yet.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      kind: 'delivered',
      at: '2026-07-08T09:06:00.000Z'
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText(/^Afgeleverd op/)).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source},description:{story:`Mailgun reported the message as delivered (webhook #484) — the terminal happy path.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      kind: 'bounced'
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('Niet afgeleverd')).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source},description:{story:`A hard bounce / rejection — the confirmation never reached the patient.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      kind: 'failed'
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('Verzenden mislukt')).toBeInTheDocument();
  }
}`,...f.parameters?.docs?.source},description:{story:`The dispatcher never got the send out the door.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      kind: 'skipped',
      reason: 'Patiënt heeft geen toestemming gegeven'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByText('Overgeslagen'));
    // The tooltip renders through a Base UI Portal (appended to document.body), so query \`screen\`.
    await expect(await screen.findByText('Patiënt heeft geen toestemming gegeven')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source},description:{story:`Skipped (e.g. the patient withheld consent) — the reason rides in a tooltip.`,...p.parameters?.docs?.description}}},m=[`NotSent`,`Sent`,`Delivered`,`Bounced`,`Failed`,`Skipped`]}))();export{d as Bounced,u as Delivered,f as Failed,c as NotSent,l as Sent,p as Skipped,m as __namedExportsOrder,s as default};