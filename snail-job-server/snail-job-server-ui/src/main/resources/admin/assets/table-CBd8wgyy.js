import{d as G,j as R,k as V}from"./Grid-DUVCwFN_.js";import{d as A,r as S,al as j,dZ as F,E as N,e1 as q,e2 as H,e3 as U,ag as $,p as K,a as T,aq as W,L as Y,$ as z,q as X,as as Z,e4 as J}from"./index-D2gfy4BV.js";const Q=Object.assign(Object.assign({},R),q),ne=A({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:Q,setup(){const a=S(null);return{formItemInstRef:a,validate:(...n)=>{const{value:p}=a;if(p)return p.validate(...n)},restoreValidation:()=>{const{value:n}=a;n&&n.restoreValidation()}}},render(){return j(G,F(this.$.vnode.props||{},V),{default:()=>{const a=F(this.$props,H);return j(N,Object.assign({ref:"formItemInstRef"},a),this.$slots)}})}});function ee(a){const{loading:l,startLoading:h,endLoading:n}=U(),{bool:p,setBool:f}=$(),{apiFn:w,apiParams:d,transformer:v,immediate:g=!0,getColumnChecks:C,getColumns:I}=a,o=K({...d}),P=S(a.columns()),b=S([]),k=S(C(a.columns())),y=T(()=>I(P.value,k.value));function E(){P.value=a.columns();const i=new Map(k.value.map(c=>[c.key,c.checked])),m=C(P.value);k.value=m.map(c=>({...c,checked:i.get(c.key)??c.checked}))}async function _(){var e;h();const i=D(o),m=await w(i),c=v(m);b.value=c.data,f(c.data.length===0),await((e=a.onFetched)==null?void 0:e.call(a,c)),n()}function D(i){const m={};return Object.entries(i).forEach(([c,e])=>{e!=null&&(m[c]=e)}),m}function r(i){Object.assign(o,i)}function O(){Object.assign(o,d)}return g&&(a.searchParams&&r(a.searchParams),_()),{loading:l,empty:p,data:b,columns:y,columnChecks:k,reloadColumns:E,getData:_,searchParams:o,updateSearchParams:r,resetSearchParams:O}}function oe(a){const l=W(),h=Y(),n=T(()=>h.isMobile),{apiFn:p,apiParams:f,immediate:w,showTotal:d}=a,v="__selection__",g="__expand__",{loading:C,empty:I,data:o,columns:P,columnChecks:b,reloadColumns:k,getData:y,searchParams:E,updateSearchParams:_,resetSearchParams:D}=ee({apiFn:p,apiParams:f,searchParams:a.searchParams,columns:a.columns,transformer:e=>{const{data:u=[],page:t=1,size:x=10,total:s=0}=e.data||{};return{data:u.map((B,L)=>({...B,index:(t-1)*x+L+1})),pageNum:t,pageSize:x,total:s}},getColumnChecks:e=>{const u=[];return e.forEach(t=>{M(t)?u.push({key:t.key,title:t.title,checked:!0}):t.type==="selection"?u.push({key:v,title:z("common.check"),checked:!0}):t.type==="expand"&&u.push({key:g,title:z("common.expandColumn"),checked:!0})}),u},getColumns:(e,u)=>{const t=new Map;return e.forEach(s=>{M(s)?t.set(s.key,s):s.type==="selection"?t.set(v,s):s.type==="expand"&&t.set(g,s),n.value&&s.fixed&&(s.fixed=void 0)}),u.filter(s=>s.checked).map(s=>t.get(s.key))},onFetched:async e=>{const{pageNum:u,pageSize:t,total:x}=e;i({page:u,pageSize:t,itemCount:x})},immediate:w}),r=K({page:1,pageSize:10,showSizePicker:!0,pageSizes:[10,15,20,25,30],onUpdatePage:async e=>{r.page=e,_({page:e,size:r.pageSize}),y()},onUpdatePageSize:async e=>{r.pageSize=e,r.page=1,_({page:r.page,size:e}),y()},...d?{prefix:e=>z("datatable.itemCount",{total:e.itemCount})}:{}}),O=T(()=>({...r,pageSlot:n.value?3:9,prefix:!n.value&&d?r.prefix:void 0}));function i(e){Object.assign(r,e)}async function m(e=1){i({page:e}),_({page:e,size:r.pageSize}),await y()}return l.run(()=>{X(()=>h.locale,()=>{k()})}),Z(()=>{l.stop()}),{loading:C,empty:I,data:o,columns:P,columnChecks:b,reloadColumns:k,pagination:r,mobilePagination:O,updatePagination:i,getData:y,getDataByPage:m,searchParams:E,updateSearchParams:_,resetSearchParams:()=>{D(),y()}}}function re(a,l){const{bool:h,setTrue:n,setFalse:p}=$(),f=S("add");function w(){f.value="add",n()}const d=S(null);function v(o){f.value="edit";const P=a.value.find(b=>b.id===o)||null;d.value=J(P),n()}const g=S([]);async function C(){var o;(o=window.$message)==null||o.success(z("common.deleteSuccess")),g.value=[],await l()}async function I(){var o;(o=window.$message)==null||o.success(z("common.deleteSuccess")),await l()}return{drawerVisible:h,openDrawer:n,closeDrawer:p,operateType:f,handleAdd:w,editingData:d,handleEdit:v,checkedRowKeys:g,onBatchDeleted:C,onDeleted:I}}function M(a){return!!a.key}export{ne as _,re as a,oe as u};