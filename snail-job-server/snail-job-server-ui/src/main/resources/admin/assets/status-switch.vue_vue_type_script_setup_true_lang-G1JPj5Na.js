import{d as v,Z as l,a0 as f,ah as b,o as g,c as _,h,$ as k,aM as w,dD as $}from"./index-Cxl_PNjp.js";const B=v({name:"StatusSwitch",__name:"status-switch",props:l({disabled:{type:Boolean,default:!1},info:{default:""}},{value:{required:!1,default:0},valueModifiers:{}}),emits:l(["submitted"],["update:value"]),setup(s,{emit:i}){const o=s,t=f(s,"value"),u=i,{bool:d,setTrue:c,setFalse:r}=b(),m=e=>{var a;t.value=e===0?1:0,(a=window.$dialog)==null||a.warning({title:"系统提示",content:`确定要${k(w[e])}${o.info}吗？`,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{c(),u("submitted",e,n=>{n&&(t.value=e),r()})},onNegativeClick:()=>{}})};return(e,a)=>{const n=$;return g(),_(n,{value:t.value,"onUpdate:value":[a[0]||(a[0]=p=>t.value=p),m],loading:h(d),"rubber-band":!1,"checked-value":1,"unchecked-value":0,disabled:o.disabled},null,8,["value","loading","disabled"])}}});export{B as _};