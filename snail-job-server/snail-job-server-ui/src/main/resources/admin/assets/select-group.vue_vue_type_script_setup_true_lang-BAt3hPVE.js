import{d as f,Z as n,a0 as b,r as _,o as g,c as v,h as r,$ as N,a7 as V,aa as h}from"./index-U8_FYD1k.js";import{g as y}from"./group-CCJZO849.js";const k=f({name:"SelectGroup",__name:"select-group",props:n({disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:n(["update:modelValue"],["update:modelValue"]),setup(l,{emit:u}){const o=l,t=b(l,"modelValue"),d=u,s=_([]);async function p(){const{data:e,error:a}=await y();a||(s.value=e)}const c=e=>{d("update:modelValue",e)};return p(),(e,a)=>{const m=h;return g(),v(m,{value:t.value,"onUpdate:value":[a[0]||(a[0]=i=>t.value=i),c],placeholder:r(N)("page.retryTask.form.groupName"),options:r(V)(s.value),disabled:o.disabled,clearable:o.clearable,filterable:""},null,8,["value","placeholder","options","disabled","clearable"])}}});export{k as _};