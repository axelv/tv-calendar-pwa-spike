import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{E as r,n as i,r as a,t as o,u as s}from"./iframe-C9zIL0dk.js";import{S as c,b as l}from"./scheduling-fixtures-BhVrYCdJ.js";import{n as u,t as d}from"./category-combobox-DZxKEu1_.js";var f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{f=e(n(),1),a(),i(),l(),u(),p=r(),m=e=>(0,p.jsx)(s,{client:(0,f.useMemo)(()=>{let e=o();return c(e),e},[]),children:(0,p.jsx)(e,{})}),h={component:d,parameters:{layout:`centered`},decorators:[m]},g=`f0000000-0000-0000-0000-000000000001`,_=`f0000000-0000-0000-0000-000000000002`,v=`f0000000-0000-0000-0000-000000000003`,y={render:()=>{let[e,t]=(0,f.useState)(null);return(0,p.jsx)(`div`,{className:`w-72`,children:(0,p.jsx)(d,{value:e,onValueChange:t})})}},b={render:()=>{let[e,t]=(0,f.useState)(g);return(0,p.jsx)(`div`,{className:`w-72`,children:(0,p.jsx)(d,{value:e,onValueChange:t})})}},x={render:()=>{let[e,t]=(0,f.useState)(_);return(0,p.jsx)(`div`,{className:`w-72`,children:(0,p.jsx)(d,{value:e,onValueChange:t,clearable:!0})})}},S={render:()=>{let[e,t]=(0,f.useState)(v);return(0,p.jsx)(`div`,{className:`w-72`,children:(0,p.jsx)(d,{value:e,onValueChange:t,keepVisibleId:v})})}},C={render:()=>{let[e,t]=(0,f.useState)(null);return(0,p.jsxs)(`form`,{className:`w-72 space-y-3`,onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget);t(String(n.get(`healthcareServiceId`)??``))},children:[(0,p.jsx)(d,{name:`healthcareServiceId`,defaultValue:g}),(0,p.jsx)(`button`,{type:`submit`,className:`rounded-md border border-border px-3 py-1.5 text-sm`,children:`Submit`}),e===null?null:(0,p.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Submitted healthcareServiceId: `,(0,p.jsx)(`code`,{children:e})]})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div className="w-72">
        <CategoryCombobox value={value} onValueChange={setValue} />
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Nothing selected — the input shows the placeholder; type to filter the list.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(CAT_RAADPLEGING);
    return <div className="w-72">
        <CategoryCombobox value={value} onValueChange={setValue} />
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`A category preselected — the input shows its label; the dropdown row carries the tinted icon.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(CAT_BEHANDELING);
    return <div className="w-72">
        <CategoryCombobox value={value} onValueChange={setValue} clearable />
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Clearable — a ✕ replaces the open chevron once a category is picked.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(CAT_POSTOP_INACTIVE);
    return <div className="w-72">
        <CategoryCombobox value={value} onValueChange={setValue} keepVisibleId={CAT_POSTOP_INACTIVE} />
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:`\`keepVisibleId\` — the booking's stored category has since been deactivated (fixture:
"Postoperatieve controle"). The combobox keeps it selectable so an edit view doesn't lose the
selection.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="w-72 space-y-3" onSubmit={e => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      setSubmitted(String(data.get('healthcareServiceId') ?? ''));
    }}>
        <CategoryCombobox name="healthcareServiceId" defaultValue={CAT_RAADPLEGING} />
        <button type="submit" className="rounded-md border border-border px-3 py-1.5 text-sm">
          Submit
        </button>
        {submitted !== null ? <p className="text-sm text-muted-foreground">
            Submitted healthcareServiceId: <code>{submitted}</code>
          </p> : null}
      </form>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Form-wired (uncontrolled): no `value`/`onValueChange`, just `name` + `defaultValue`. Base UI emits\na hidden input carrying the chosen category id, so it rides the surrounding `<form>`'s FormData —\nsubmitting reads the id straight off the form, no React state.",...C.parameters?.docs?.description}}},w=[`Empty`,`Selected`,`Clearable`,`KeepInactiveVisible`,`Uncontrolled`]}))();export{x as Clearable,y as Empty,S as KeepInactiveVisible,b as Selected,C as Uncontrolled,w as __namedExportsOrder,h as default};