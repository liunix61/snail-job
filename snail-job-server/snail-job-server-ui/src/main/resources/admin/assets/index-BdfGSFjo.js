import{d as f,k as d,bY as w,r as i,i as k,o as _,c as v,h as g,$ as h}from"./index-U8_FYD1k.js";import{u as y,_ as S}from"./workflow.vue_vue_type_style_index_0_lang-CMzs7c_d.js";import{h as $,i as x}from"./workflow-pCRqeEnP.js";import"./job-task-list-table.vue_vue_type_script_setup_true_lang-BYIk--kk.js";import"./table-Ca9YKwr6.js";import"./Grid-CRdsjMH4.js";import"./job-TpLsoFVX.js";import"./detail-drawer-OC-sH5Zw.js";import"./DescriptionsItem-2g61_6UF.js";import"./log-drawer-BN4SgRnd.js";import"./CollapseItem-CEeQD4hQ.js";import"./code-mirror.vue_vue_type_script_setup_true_lang-V_4U2z7h.js";import"./cron-input.vue_vue_type_style_index_0_lang-BTAii-x1.js";import"./group-CCJZO849.js";const A=f({name:"workflow_form_edit",__name:"index",setup(V){const a=y(),u=d(),r=w(),s=i(!1),n=String(u.query.id),e=i({}),p=async()=>{s.value=!0;const{data:t,error:o}=await $(n);o||(e.value=t),s.value=!1};k(()=>{a.clear(),a.setType(0),a.setId(n),p()});const l=async()=>{var o;const{error:t}=await x(e.value);t||((o=window.$message)==null||o.info(h("common.updateSuccess")),r.push({path:"/workflow/task"}))},m=()=>{r.push("/workflow/task")};return(t,o)=>(_(),v(g(S),{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),spinning:s.value,onSave:l,onCancel:m},null,8,["modelValue","spinning"]))}});export{A as default};