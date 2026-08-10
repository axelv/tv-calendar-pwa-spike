import{i as e}from"./preload-helper-usAeo7Bx.js";import{E as t}from"./iframe-C9zIL0dk.js";import{n,t as r}from"./slot-row-MNoiSsDl.js";import{n as i,r as a,t as o}from"./working-hours.fixtures-BQ4GcqFc.js";var s,c,l,u,d,f,p,m,h;e((()=>{n(),o(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={component:r,decorators:[e=>(0,s.jsx)(`div`,{className:`max-w-2xl rounded-lg border border-border p-4`,children:(0,s.jsx)(e,{})})],args:{onEdit:c(),onDelete:c()},parameters:{docs:{description:{component:"SlotRow in isolation — the view-only row for one working-hours band. It shows the time range + a\nrecurrence summary and exposes a pencil (edit) and trash (delete); `onEdit`/`onDelete` are spies\nhere, so clicks surface in the Actions panel. Editing itself lives in AvailabilityForm."}}}},u={args:{slot:a()}},d={args:{slot:a(`2026-12-31`)}},f={args:{slot:i()}},p={args:{slot:a(),isDeleting:!0}},m={args:{slot:a(),deleteError:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    slot: makeWorkingHoursSlot()
  }
}`,...u.parameters?.docs?.source},description:{story:`Open-ended weekly band: 09:00 – 17:00, weekly pill, no end date.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    slot: makeWorkingHoursSlot('2026-12-31')
  }
}`,...d.parameters?.docs?.source},description:{story:`Band with a recurrence end date — the "Eindigt <date>" summary renders.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    slot: makeOneTimeSlot()
  }
}`,...f.parameters?.docs?.source},description:{story:`One-off block: no recurrence, so an "Eenmalig" pill + the occurrence date render (not "wekelijks").`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    slot: makeWorkingHoursSlot(),
    isDeleting: true
  }
}`,...p.parameters?.docs?.source},description:{story:`Deleting in flight — the trash button is disabled.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    slot: makeWorkingHoursSlot(),
    deleteError: true
  }
}`,...m.parameters?.docs?.source},description:{story:`A failed delete surfaces an inline alert beneath the row.`,...m.parameters?.docs?.description}}},h=[`Default`,`WithEndDate`,`OneTime`,`Deleting`,`DeleteError`]}))();export{u as Default,m as DeleteError,p as Deleting,f as OneTime,d as WithEndDate,h as __namedExportsOrder,l as default};