import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,n as i,r as a,t as o,u as s}from"./iframe-7FHopMLh.js";import{S as c,b as l}from"./scheduling-fixtures-Dw9JUuQr.js";import{n as u,t as d}from"./room-picker-2h0mxfnr.js";var f,p,m,h,g,_,v,y,b,x,S;t((()=>{f=e(n(),1),a(),i(),l(),u(),p=r(),m=e=>(0,p.jsx)(s,{client:(0,f.useMemo)(()=>{let e=o();return c(e),e},[]),children:(0,p.jsx)(e,{})}),h={component:d,parameters:{layout:`centered`},decorators:[m]},g=`e0000000-0000-0000-0000-000000000011`,_=`e0000000-0000-0000-0000-000000000012`,v={render:()=>{let[e,t]=(0,f.useState)(null);return(0,p.jsx)(`div`,{className:`w-64`,children:(0,p.jsx)(d,{value:e,onValueChange:t})})}},y={render:()=>{let[e,t]=(0,f.useState)(g);return(0,p.jsx)(`div`,{className:`w-64`,children:(0,p.jsx)(d,{value:e,onValueChange:t})})}},b={render:()=>{let[e,t]=(0,f.useState)(_);return(0,p.jsxs)(`div`,{className:`w-64 space-y-2`,children:[(0,p.jsx)(d,{value:e,onValueChange:t,allowNone:!0}),(0,p.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Value: `,(0,p.jsx)(`code`,{children:e===null?`null`:e})]})]})}},x={render:()=>{let[e,t]=(0,f.useState)(null);return(0,p.jsxs)(`form`,{className:`w-64 space-y-3`,onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget);t(String(n.get(`roomId`)??``))},children:[(0,p.jsx)(d,{name:`roomId`,defaultValue:g}),(0,p.jsx)(`button`,{type:`submit`,className:`rounded-md border border-border px-3 py-1.5 text-sm`,children:`Submit`}),e===null?null:(0,p.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Submitted roomId: `,(0,p.jsx)(`code`,{children:e})]})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div className="w-64">
        <RoomPicker value={value} onValueChange={setValue} />
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Nothing selected — the trigger shows the placeholder.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(ROOM_KONSULTATIE);
    return <div className="w-64">
        <RoomPicker value={value} onValueChange={setValue} />
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`A room preselected — the trigger shows its name.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(ROOM_OR1);
    return <div className="w-64 space-y-2">
        <RoomPicker value={value} onValueChange={setValue} allowNone />
        <p className="text-sm text-muted-foreground">
          Value: <code>{value === null ? 'null' : value}</code>
        </p>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:'`allowNone` — a clearable optional field (the booking form\'s "Geen kamer"). Selecting the\n"no room" entry surfaces `null`.',...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="w-64 space-y-3" onSubmit={e => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      setSubmitted(String(data.get('roomId') ?? ''));
    }}>
        <RoomPicker name="roomId" defaultValue={ROOM_KONSULTATIE} />
        <button type="submit" className="rounded-md border border-border px-3 py-1.5 text-sm">
          Submit
        </button>
        {submitted !== null ? <p className="text-sm text-muted-foreground">
            Submitted roomId: <code>{submitted}</code>
          </p> : null}
      </form>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Form-wired (uncontrolled): no `value`/`onValueChange`, just `name` + `defaultValue`. The picker\nmanages its own selection and rides the surrounding `<form>`'s FormData — submitting reads the\nchosen room id straight off the form, no React state. Mirrors how the booking form wires it.",...x.parameters?.docs?.description}}},S=[`Empty`,`Selected`,`Clearable`,`Uncontrolled`]}))();export{b as Clearable,v as Empty,y as Selected,x as Uncontrolled,S as __namedExportsOrder,h as default};