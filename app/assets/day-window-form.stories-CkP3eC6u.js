import{i as e}from"./preload-helper-usAeo7Bx.js";import{E as t}from"./iframe-7FHopMLh.js";import{l as n,u as r}from"./button-DHytUkv4.js";import{n as i,t as a}from"./day-window-form-BWZHGjWi.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),i(),o=t(),{expect:s,fn:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f=r.settings.agenda,p=e=>(0,o.jsx)(`div`,{className:`mx-auto mt-6 w-[520px] [--field-background:var(--popover)]`,children:(0,o.jsx)(e,{})}),m={component:a,parameters:{layout:`fullscreen`},decorators:[p],args:{startHour:8,endHour:20,onSubmit:c()}},h={play:async({canvasElement:e})=>{await s(d(e).getByText(`08:00 – 20:00`)).toBeInTheDocument()}},g={args:{startHour:7,endHour:21},play:async({canvasElement:e})=>{await s(d(e).getByText(`07:00 – 21:00`)).toBeInTheDocument()}},_={play:async({canvasElement:e})=>{let t=d(e),n=t.getByLabelText(f.endHour);await l.clear(n),await l.type(n,`18`),await s(await t.findByText(`08:00 – 18:00`)).toBeInTheDocument()}},v={play:async({canvasElement:e,args:t})=>{let n=d(e),r=n.getByLabelText(f.endHour);await l.clear(r),await l.type(r,`6`),await s(await n.findByText(f.endAfterStart)).toBeInTheDocument();let i=n.getByRole(`button`,{name:f.save});await s(i).toBeEnabled(),await l.click(i),await s(t.onSubmit).not.toHaveBeenCalled()}},y={play:async({canvasElement:e,args:t})=>{let n=d(e),r=n.getByLabelText(f.endHour);await l.clear(r),await l.type(r,`19`),await l.click(n.getByRole(`button`,{name:f.save})),await u(()=>s(t.onSubmit).toHaveBeenCalledWith({startHour:8,endHour:19}))}},b={args:{onSubmit:c(async()=>{throw Object.assign(Error(`nope`),{code:`conflict`})})},play:async({canvasElement:e})=>{let t=d(e);await l.click(t.getByRole(`button`,{name:f.save})),await s(await t.findByText(f.conflictError)).toBeInTheDocument(),await s(t.getByLabelText(f.startHour)).toHaveValue(8)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    await expect(screen.getByText('08:00 – 20:00')).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source},description:{story:`The default clinic window — the preview mirrors what the agenda opens on.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    startHour: 7,
    endHour: 21
  },
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    await expect(screen.getByText('07:00 – 21:00')).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source},description:{story:`A wider window (07:00–21:00), e.g. a clinic running early and late lists.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    const end = screen.getByLabelText(ta.endHour);
    await userEvent.clear(end);
    await userEvent.type(end, '18');
    await expect(await screen.findByText('08:00 – 18:00')).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source},description:{story:`Editing an hour updates the live preview per keystroke (the reason this form is controlled).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const screen = within(canvasElement);
    const end = screen.getByLabelText(ta.endHour);
    await userEvent.clear(end);
    await userEvent.type(end, '6');
    await expect(await screen.findByText(ta.endAfterStart)).toBeInTheDocument();

    // Never disabled on invalid — the click goes through and simply doesn't submit.
    const submit = screen.getByRole('button', {
      name: ta.save
    });
    await expect(submit).toBeEnabled();
    await userEvent.click(submit);
    await expect(args.onSubmit).not.toHaveBeenCalled();
  }
}`,...v.parameters?.docs?.source},description:{story:`Cross-field rule: an end at or before the start is rejected by the shared schema's refine, which
is keyed to \`endHour\` so the message lands on that field. The submit button stays ENABLED — the
forms skill forbids disabling on invalid state; clicking reveals the errors instead.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const screen = within(canvasElement);
    const end = screen.getByLabelText(ta.endHour);
    await userEvent.clear(end);
    await userEvent.type(end, '19');
    await userEvent.click(screen.getByRole('button', {
      name: ta.save
    }));
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalledWith({
      startHour: 8,
      endHour: 19
    }));
  }
}`,...y.parameters?.docs?.source},description:{story:`The happy path: submitting emits the exact wire payload the server function validates.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: fn(async () => {
      throw Object.assign(new Error('nope'), {
        code: 'conflict'
      });
    })
  },
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    await userEvent.click(screen.getByRole('button', {
      name: ta.save
    }));
    await expect(await screen.findByText(ta.conflictError)).toBeInTheDocument();
    // Input preserved through the failure.
    await expect(screen.getByLabelText(ta.startHour)).toHaveValue(8);
  }
}`,...b.parameters?.docs?.source},description:{story:`A failed save surfaces the form-level banner and keeps the user's input (never resets).`,...b.parameters?.docs?.description}}},x=[`Default`,`WideWindow`,`PreviewTracksEdits`,`EndBeforeStart`,`SubmitsWirePayload`,`SaveFails`]}))();export{h as Default,v as EndBeforeStart,_ as PreviewTracksEdits,b as SaveFails,y as SubmitsWirePayload,g as WideWindow,x as __namedExportsOrder,m as default};