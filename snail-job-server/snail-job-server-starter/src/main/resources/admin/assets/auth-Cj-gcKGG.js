import{l as n}from"./index-DydImCNJ.js";function o(){const r=n();function u(t){return r.isLogin?typeof t=="string"?r.userInfo.roles.includes(t):t.some(e=>r.userInfo.roles.includes(e)):!1}return{hasAuth:u}}export{o as u};