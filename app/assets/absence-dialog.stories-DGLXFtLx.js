import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./absence-dialog-BSR5lGtr.js";import{b as r,i,t as a}from"./scheduling-fixtures-BhVrYCdJ.js";var o,s,c,l,u;e((()=>{t(),r(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={component:n,parameters:{layout:`fullscreen`,docs:{description:{component:`The agenda list is a prop now (route loader, ADR 0012) — no QueryClient seeding needed.`}}},args:{agendas:i,onClose:o()}},c={args:{dialog:{mode:`edit`,absence:a[0]}}},l={args:{dialog:{mode:`new`}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    dialog: {
      mode: 'edit',
      absence: FIXTURE_ABSENCES[0]
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`EDIT mode on the single-agenda recurring absence — exercises the (now editable, #442) scope toggle
and agenda picker, reason, all-day/time-range, and the shared weekly recurrence card. Mounted
directly from fixtures (no click needed).`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    dialog: {
      mode: 'new'
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`NEW mode — the empty create form: scope toggle live, the first fixture agenda preselected, time
range defaulting to 09:00–17:00, and the "Herhalen" recurrence toggle off.`,...l.parameters?.docs?.description}}},u=[`Edit`,`New`]}))();export{c as Edit,l as New,u as __namedExportsOrder,s as default};