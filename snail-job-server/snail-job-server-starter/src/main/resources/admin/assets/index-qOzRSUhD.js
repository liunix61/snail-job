import{_ as J,u as Q,a as X,N as Y,b as Z}from"./table-Bdl3-G-Y.js";import{bi as L,o as R,b as B,e as ee,d as $,U as z,V as C,p as V,i as te,c as M,w as n,f as l,h as t,$ as a,g as p,t as g,a8 as U,cy as q,N as A,s as ae,ac as oe,ad as v,B as T,M as le,I as re,ae as ne}from"./index-CHgAHQIl.js";import{_ as se}from"./search-form.vue_vue_type_script_setup_true_lang-BfZ4by1v.js";import{e as ie}from"./group-BUALrrKR.js";import{_ as de}from"./select-group.vue_vue_type_script_setup_true_lang-fZ9yr9an.js";import{_ as ue}from"./select-scene.vue_vue_type_script_setup_true_lang-DkFHmVNh.js";import{_ as ce}from"./operate-drawer-3XJn0MkC.js";import{_ as me,a as pe}from"./DescriptionsItem-sCQ7QkHp.js";import{_ as ge}from"./Grid-DHGKk79k.js";import"./FormItem-B3tfy17D.js";import"./Space-CeVCCXQI.js";import"./round-search-KK91k1IY.js";import"./form-BuwwOwyC.js";import"./retry-scene-BlErNK4f.js";import"./close-fullscreen-rounded-DtEdfPev.js";function fe(s){return L({url:"/retry-dead-letter/list",method:"get",params:s})}function _e(s,f){return L({url:`/retry-dead-letter/${s}?groupName=${f}`,method:"get"})}function S(s){return L({url:"/retry-dead-letter/batch/rollback",method:"post",data:s})}function I(s){return L({url:"/retry-dead-letter/batch",method:"delete",data:s})}const ye={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},be=ee("path",{fill:"currentColor",d:"M20.93 14A7.002 7.002 0 0 1 14 20H5.5v-2H14a5 5 0 1 0 0-10H6.914l2.5 2.5L8 11.914L3.086 7L8 2.086L9.414 3.5L6.914 6H14a7 7 0 0 1 7 7v1z"},null,-1),he=[be];function ke(s,f){return R(),B("svg",ye,[...he])}const Ne={name:"tdesign-rollback",render:ke},De=$({name:"RetryDeadLetterSearch",__name:"dead-letter-search",props:{model:{required:!0},modelModifiers:{}},emits:z(["reset","search"],["update:model"]),setup(s,{emit:f}){const i=f,d=C(s,"model"),u=V([]);async function N(){const e=await ie();u.value=e.data}function y(){i("reset")}function h(){i("search")}return te(()=>{N()}),(e,m)=>{const w=J,b=se;return R(),M(b,{model:d.value,onSearch:h,onReset:y},{default:n(()=>[l(w,{span:"24 s:12 m:6",label:t(a)("page.retryLog.groupName"),path:"groupName",class:"pr-24px"},{default:n(()=>[l(de,{value:d.value.groupName,"onUpdate:value":m[0]||(m[0]=D=>d.value.groupName=D)},null,8,["value"])]),_:1},8,["label"]),l(w,{span:"24 s:12 m:6",label:t(a)("page.retryLog.sceneName"),path:"sceneName",class:"pr-24px"},{default:n(()=>[l(ue,{value:d.value.sceneName,"onUpdate:value":m[1]||(m[1]=D=>d.value.sceneName=D),"group-name":d.value.groupName},null,8,["value","group-name"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),we=$({name:"RetryDeadLetterDetailDrawer",__name:"retry-letter-detail-drawer",props:z({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(s){const f=C(s,"visible");return(i,d)=>{const u=me,N=A,y=pe,h=ce;return R(),M(h,{modelValue:f.value,"onUpdate:modelValue":d[0]||(d[0]=e=>f.value=e),title:t(a)("page.retryDeadLetter.detail")},{default:n(()=>[l(y,{"label-placement":"top",bordered:"",column:3},{default:n(()=>[l(u,{label:t(a)("page.retryTask.uniqueId"),span:3},{default:n(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.uniqueId),1)]}),_:1},8,["label"]),l(u,{label:t(a)("page.retryTask.groupName"),span:3},{default:n(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.groupName),1)]}),_:1},8,["label"]),l(u,{label:t(a)("page.retryTask.sceneName"),span:3},{default:n(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.sceneName),1)]}),_:1},8,["label"]),l(u,{label:t(a)("page.retryTask.taskType"),span:1},{default:n(()=>{var e;return[l(N,{type:t(U)((e=i.rowData)==null?void 0:e.taskType)},{default:n(()=>{var m;return[p(g(t(a)(t(q)[(m=i.rowData)==null?void 0:m.taskType])),1)]}),_:1},8,["type"])]}),_:1},8,["label"]),l(u,{label:t(a)("page.retryTask.bizNo"),span:2},{default:n(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.bizNo),1)]}),_:1},8,["label"]),l(u,{label:t(a)("page.retryTask.idempotentId"),span:3},{default:n(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.idempotentId),1)]}),_:1},8,["label"]),l(u,{label:t(a)("page.retryTask.executorName"),span:3},{default:n(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.executorName),1)]}),_:1},8,["label"]),l(u,{label:t(a)("page.retryTask.argsStr"),span:3},{default:n(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.argsStr),1)]}),_:1},8,["label"]),l(u,{label:t(a)("common.createDt"),span:3},{default:n(()=>{var e;return[p(g((e=i.rowData)==null?void 0:e.createDt),1)]}),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])}}}),ve={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function x(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!ne(s)}const Pe=$({name:"retry_dead-letter",__name:"index",setup(s){const f=ae(),i=V(),{bool:d,setTrue:u}=oe(!1),{columns:N,columnChecks:y,data:h,getData:e,loading:m,mobilePagination:w,searchParams:b,resetSearchParams:D}=Q({apiFn:fe,apiParams:{page:1,size:10,groupName:null,sceneName:null},columns:()=>[{type:"selection",align:"center",width:48},{key:"index",title:a("common.index"),align:"center",width:64},{key:"uniqueId",title:a("page.retryDeadLetter.uniqueId"),align:"left",minWidth:120,render:r=>{async function o(){await O(r),u()}return l(T,{text:!0,tag:"a",type:"primary",onClick:o,class:"ws-normal"},{default:()=>[r.uniqueId]})}},{key:"groupName",title:a("page.retryDeadLetter.groupName"),align:"left",minWidth:120},{key:"sceneName",title:a("page.retryDeadLetter.sceneName"),align:"left",minWidth:120},{key:"idempotentId",title:a("page.retryDeadLetter.idempotentId"),align:"left",minWidth:120},{key:"bizNo",title:a("page.retryDeadLetter.bizNo"),align:"left",minWidth:120},{key:"taskType",title:a("page.retryDeadLetter.taskType"),align:"left",minWidth:120,render:r=>{if(r.taskType===null)return null;const o=a(q[r.taskType]);return l(A,{type:U(r.taskType)},x(o)?o:{default:()=>[o]})}},{key:"createDt",title:a("page.retryDeadLetter.createDt"),align:"left",minWidth:120},{key:"operate",title:a("common.operate"),align:"center",width:130,render:r=>{let o;return l("div",{class:"flex-center gap-8px"},[l(T,{type:"primary",text:!0,ghost:!0,size:"small",onClick:()=>j(r)},x(o=a("common.rollback"))?o:{default:()=>[o]}),l(le,{vertical:!0},null),l(Y,{onPositiveClick:()=>H(r)},{default:()=>a("common.confirmDelete"),trigger:()=>{let c;return l(T,{type:"error",text:!0,ghost:!0,size:"small"},x(c=a("common.delete"))?c:{default:()=>[c]})}})])}}]}),{handleAdd:P,checkedRowKeys:k}=X(h,e);async function W(){var o;const{error:r}=await I({ids:k.value,groupName:b.groupName});r||((o=window.$message)==null||o.success(a("common.deleteSuccess")),e())}async function G(){var o;const{error:r}=await S({ids:k.value,groupName:b.groupName});r||((o=window.$message)==null||o.success(a("common.rollbackSuccess")),e())}async function H(r){var c;const{error:o}=await I({ids:[r.id],groupName:r.groupName});o||((c=window.$message)==null||c.success(a("common.deleteSuccess")),e())}async function O(r){const o=await _e(r.id,r.groupName);i.value=o.data||null}async function j(r){var c;const{error:o}=await S({ids:[r.id],groupName:r.groupName});o||((c=window.$message)==null||c.success(a("common.rollbackSuccess")),e())}return(r,o)=>{const c=Ne,F=Z,K=ge,E=re;return R(),B("div",ve,[l(De,{model:t(b),"onUpdate:model":o[0]||(o[0]=_=>v(b)?b.value=_:null),onReset:t(D),onSearch:t(e)},null,8,["model","onReset","onSearch"]),l(E,{title:t(a)("page.retryDeadLetter.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":n(()=>[l(F,{columns:t(y),"onUpdate:columns":o[1]||(o[1]=_=>v(y)?y.value=_:null),"disabled-delete":t(k).length===0,loading:t(m),"show-add":!1,onAdd:t(P),onDelete:W,onRefresh:t(e)},{addAfter:n(()=>[l(t(T),{size:"small",ghost:"",type:"primary",onClick:G},{icon:n(()=>[l(c,{class:"text-icon"})]),default:n(()=>[p(" "+g(t(a)("common.batchRollback")),1)]),_:1})]),_:1},8,["columns","disabled-delete","loading","onAdd","onRefresh"])]),default:n(()=>[l(K,{"checked-row-keys":t(k),"onUpdate:checkedRowKeys":o[2]||(o[2]=_=>v(k)?k.value=_:null),columns:t(N),data:t(h),"flex-height":!t(f).isMobile,"scroll-x":962,loading:t(m),remote:"","row-key":_=>_.id,pagination:t(w),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),l(we,{visible:t(d),"onUpdate:visible":o[3]||(o[3]=_=>v(d)?d.value=_:null),"row-data":i.value},null,8,["visible","row-data"])]),_:1},8,["title"])])}}});export{Pe as default};