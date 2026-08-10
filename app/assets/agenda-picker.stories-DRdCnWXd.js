import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,n as i,r as a,t as o,u as s}from"./iframe-C9zIL0dk.js";import{S as c,b as l}from"./scheduling-fixtures-BhVrYCdJ.js";import{n as u,t as d}from"./agenda-picker-DS4Liblw.js";var f,p,m,h,g,_,v,y;t((()=>{f=e(n(),1),a(),i(),l(),u(),p=r(),m=e=>(0,p.jsx)(s,{client:(0,f.useMemo)(()=>{let e=o();return c(e),e},[]),children:(0,p.jsx)(e,{})}),h={component:d,parameters:{layout:`centered`},decorators:[m]},g={render:()=>{let[e,t]=(0,f.useState)(``);return(0,p.jsx)(`div`,{className:`w-64`,children:(0,p.jsx)(d,{value:e,onValueChange:t})})}},_={render:()=>{let[e,t]=(0,f.useState)(`a0000000-0000-0000-0000-000000000001`);return(0,p.jsx)(`div`,{className:`w-64`,children:(0,p.jsx)(d,{value:e,onValueChange:t})})}},v={render:()=>{let[e,t]=(0,f.useState)(null);return(0,p.jsxs)(`form`,{className:`w-64 space-y-3`,onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget);t(String(n.get(`agendaId`)??``))},children:[(0,p.jsx)(d,{name:`agendaId`,defaultValue:`a0000000-0000-0000-0000-000000000002`}),(0,p.jsx)(`button`,{type:`submit`,className:`rounded-md border border-border px-3 py-1.5 text-sm`,children:`Submit`}),e===null?null:(0,p.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Submitted agendaId: `,(0,p.jsx)(`code`,{children:e})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-64">
        <AgendaPicker value={value} onValueChange={setValue} />
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Nothing selected — the trigger shows the placeholder.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('a0000000-0000-0000-0000-000000000001');
    return <div className="w-64">
        <AgendaPicker value={value} onValueChange={setValue} />
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`An agenda preselected — the trigger shows its name.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="w-64 space-y-3" onSubmit={e => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      setSubmitted(String(data.get('agendaId') ?? ''));
    }}>
        <AgendaPicker name="agendaId" defaultValue="a0000000-0000-0000-0000-000000000002" />
        <button type="submit" className="rounded-md border border-border px-3 py-1.5 text-sm">
          Submit
        </button>
        {submitted !== null ? <p className="text-sm text-muted-foreground">
            Submitted agendaId: <code>{submitted}</code>
          </p> : null}
      </form>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Form-wired (uncontrolled): no `value`/`onChange`, just `name` + `defaultValue`. The picker\nmanages its own selection and rides the surrounding `<form>`'s FormData — submitting reads the\nchosen agenda id straight off the form, no React state. Mirrors how the task form uses\n`PatientPicker`.",...v.parameters?.docs?.description}}},y=[`Empty`,`Selected`,`Uncontrolled`]}))();export{g as Empty,_ as Selected,v as Uncontrolled,y as __namedExportsOrder,h as default};