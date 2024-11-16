import{_ as Y,a as ee,N as te,b as ae}from"./search-form.vue_vue_type_script_setup_true_lang-B3nrOFM3.js";import{_ as ne}from"./delete-alert-CHYWGh_O.js";import{aQ as P,d as H,Z as K,a1 as Q,y as W,a0 as J,z as oe,A as se,a as le,$ as n,p as ie,q as re,o as C,c as z,w as s,f as e,g as $,t as E,h as a,ac as ue,aR as ce,D as X,B as D,a9 as de,aa as pe,E as me,I as _e,H as fe,L as ge,r as he,K as ye,b as we,ai as B,_ as L,G as ve,a4 as be,ak as Z,F as ke,al as Ie}from"./index-Cxl_PNjp.js";import{_ as xe,u as Ne,a as qe}from"./table-BRmcb0CX.js";import{_ as Se}from"./round-content-copy-CW2Gf36N.js";import{b as $e}from"./Grid-BLjrxj5f.js";function De(i){return P({url:"/namespace/list",method:"get",params:i})}function Ce(i){return P({url:"/namespace",method:"post",data:i})}function Te(i){return P({url:"/namespace",method:"put",data:i})}function Re(i){return P({url:`/namespace/${i}`,method:"delete"})}const Ae=H({name:"NamespaceOperateDrawer",__name:"namespace-operate-drawer",props:K({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:K(["submitted"],["update:visible"]),setup(i,{emit:I}){const r=i,f=I,{copy:x,isSupported:N}=Q(),T=W(),m=J(i,"visible"),{formRef:q,validate:h,restoreValidation:v}=oe(),{defaultRequiredRule:g}=se(),R=le(()=>({add:n("page.namespace.addNamespace"),edit:n("page.namespace.editNamespace")})[r.operateType]),u=ie(b());function b(){return{name:"",uniqueId:""}}const V={name:g,uniqueId:{required:!1,pattern:/^[A-Za-z0-9_-]{1,64}$/,trigger:"change",message:n("page.namespace.form.uniqueIdRule")}};function S(){u.uniqueId=ce(32)}function M(){if(r.operateType==="add"){Object.assign(u,b());return}r.operateType==="edit"&&r.rowData&&Object.assign(u,r.rowData)}function A(){m.value=!1}async function U(){var c,l;if(await h(),r.operateType==="add"){const{name:d,uniqueId:y}=u,{error:t}=await Ce({name:d,uniqueId:y});if(t)return;(c=window.$message)==null||c.success(n("common.addSuccess"))}if(r.operateType==="edit"){const{id:d,name:y,uniqueId:t}=u,{error:o}=await Te({id:d,name:y,uniqueId:t});if(o)return;(l=window.$message)==null||l.success(n("common.updateSuccess"))}await T.getUserInfo(),A(),f("submitted")}re(m,()=>{m.value&&(M(),v())});async function O(c){var l,d;if(!N){(l=window.$message)==null||l.error("您的浏览器不支持 Clipboard API");return}c&&(await x(c),(d=window.$message)==null||d.success("复制成功"))}return(c,l)=>{const d=X,y=Se,t=D,o=de,_=Y,w=pe,F=me,j=_e,p=fe;return C(),z(ue,{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=k=>m.value=k),title:R.value,onSubmitted:U},{footer:s(()=>[e(p,{size:16},{default:s(()=>[e(t,{onClick:A},{default:s(()=>[$(E(a(n)("common.cancel")),1)]),_:1}),e(t,{type:"primary",onClick:U},{default:s(()=>[$(E(a(n)("common.save")),1)]),_:1})]),_:1})]),default:s(()=>[e(j,{ref_key:"formRef",ref:q,model:u,rules:V},{default:s(()=>[e(F,{label:a(n)("page.namespace.uniqueId"),path:"uniqueId"},{default:s(()=>[e(w,null,{default:s(()=>[e(d,{value:u.uniqueId,"onUpdate:value":l[0]||(l[0]=k=>u.uniqueId=k),disabled:r.operateType==="edit",placeholder:a(n)("page.namespace.form.uniqueId")},null,8,["value","disabled","placeholder"]),r.operateType==="edit"?(C(),z(o,{key:0,trigger:"hover"},{trigger:s(()=>[e(t,{type:"default",ghost:"",onClick:l[1]||(l[1]=k=>O(u.uniqueId))},{default:s(()=>[e(y,{class:"text-icon"})]),_:1})]),default:s(()=>[l[4]||(l[4]=$(" 复制 "))]),_:1})):(C(),z(o,{key:1,trigger:"hover"},{trigger:s(()=>[e(t,{type:"default",ghost:"",onClick:S},{default:s(()=>[e(_,{class:"text-icon"})]),_:1})]),default:s(()=>[$(" "+E(a(n)("common.generateRandomly")),1)]),_:1}))]),_:1})]),_:1},8,["label"]),e(F,{label:a(n)("page.namespace.name"),path:"name"},{default:s(()=>[e(d,{value:u.name,"onUpdate:value":l[2]||(l[2]=k=>u.name=k),placeholder:a(n)("page.namespace.form.name")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),Ue=H({name:"NamespaceSearch",__name:"namespace-search",props:{model:{required:!0},modelModifiers:{}},emits:K(["reset","search"],["update:model"]),setup(i,{emit:I}){const r=I,f=J(i,"model");function x(){r("reset")}function N(){r("search")}return(T,m)=>{const q=X,h=xe,v=ee;return C(),z(v,{model:f.value,onSearch:N,onReset:x},{default:s(()=>[e(h,{span:"24 s:12 m:6",label:a(n)("page.namespace.keyword"),path:"keyword",class:"pr-24px"},{default:s(()=>[e(q,{value:f.value.keyword,"onUpdate:value":m[0]||(m[0]=g=>f.value.keyword=g),placeholder:a(n)("page.namespace.form.keyword"),clearable:""},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])}}}),Fe={class:"min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto"};function G(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!Ie(i)}const je=H({name:"namespace",__name:"index",setup(i){const I=ge(),r=W(),f=he(ye.get("namespaceId")),{copy:x,isSupported:N}=Q(),T=t=>{f.value=t,r.setNamespaceId(t)};async function m(t){var o,_;if(!N){(o=window.$message)==null||o.error("您的浏览器不支持 Clipboard API");return}t&&(await x(t),(_=window.$message)==null||_.success("复制成功"))}const{columns:q,columnChecks:h,data:v,getData:g,loading:R,mobilePagination:u,searchParams:b,resetSearchParams:V}=Ne({apiFn:De,apiParams:{page:1,size:10,keyword:null},columns:()=>[{key:"id",title:n("common.index"),align:"center",width:64},{key:"name",title:n("page.namespace.name"),align:"left",width:120},{key:"status",title:n("common.active"),align:"center",width:40,render:t=>e("div",{class:"flex justify-center"},[f.value===t.uniqueId?e(L,{icon:"material-symbols:check-circle",class:"text-20px color-success"},null):e(L,{icon:"material-symbols:cancel",class:"text-20px color-gray400"},null)])},{key:"uniqueId",title:n("page.namespace.uniqueId"),align:"left",width:180,render:t=>e(ve,null,{trigger:()=>e(D,{text:!0,type:"primary",onClick:()=>m(t.uniqueId)},{default:()=>[t.uniqueId]}),default:()=>e("span",null,[$("点击复制")])})},{key:"createDt",title:n("page.common.createTime"),align:"left",width:130},{key:"updateDt",title:n("page.common.upadteTime"),align:"left",width:130},{key:"operate",title:n("common.operate"),align:"center",width:80,render:t=>{let o,_;return e("div",{class:"flex-center gap-8px"},[e(D,{type:"primary",text:!0,ghost:!0,size:"small",onClick:()=>d(t.id)},G(o=n("common.edit"))?o:{default:()=>[o]}),f.value!==t.uniqueId?e(be,null,[e(Z,{vertical:!0},null),e(D,{type:"warning",text:!0,ghost:!0,size:"small",onClick:()=>T(t.uniqueId)},G(_=n("common.switch"))?_:{default:()=>[_]}),e(Z,{vertical:!0},null),e(te,{onPositiveClick:()=>y(t.uniqueId)},{default:()=>n("common.confirmDelete"),trigger:()=>{let w;return e(D,{type:"error",text:!0,ghost:!0,size:"small"},G(w=n("common.delete"))?w:{default:()=>[w]})}})]):""])}}]}),{drawerVisible:S,operateType:M,editingData:A,handleAdd:U,handleEdit:O,checkedRowKeys:c,onDeleted:l}=qe(v,g);function d(t){O(t)}async function y(t){const{error:o}=await Re(t);o||l()}return(t,o)=>{const _=ne,w=ae,F=$e,j=ke;return C(),we("div",Fe,[e(Ue,{model:a(b),"onUpdate:model":o[0]||(o[0]=p=>B(b)?b.value=p:null),onReset:a(V),onSearch:a(g)},null,8,["model","onReset","onSearch"]),e(_),e(j,{title:a(n)("page.namespace.title"),bordered:!1,size:"small",class:"sm:flex-1-hidden card-wrapper","header-class":"view-card-header"},{"header-extra":s(()=>[e(w,{columns:a(h),"onUpdate:columns":o[1]||(o[1]=p=>B(h)?h.value=p:null),"disabled-delete":a(c).length===0,loading:a(R),"show-delete":!1,onAdd:a(U),onRefresh:a(g)},null,8,["columns","disabled-delete","loading","onAdd","onRefresh"])]),default:s(()=>[e(F,{"checked-row-keys":a(c),"onUpdate:checkedRowKeys":o[2]||(o[2]=p=>B(c)?c.value=p:null),columns:a(q),data:a(v),"flex-height":!a(I).isMobile,"scroll-x":962,loading:a(R),remote:"","row-key":p=>p.id,pagination:a(u),class:"sm:h-full"},null,8,["checked-row-keys","columns","data","flex-height","loading","row-key","pagination"]),e(Ae,{visible:a(S),"onUpdate:visible":o[3]||(o[3]=p=>B(S)?S.value=p:null),"operate-type":a(M),"row-data":a(A),onSubmitted:a(g)},null,8,["visible","operate-type","row-data","onSubmitted"])]),_:1},8,["title"])])}}});export{je as default};
