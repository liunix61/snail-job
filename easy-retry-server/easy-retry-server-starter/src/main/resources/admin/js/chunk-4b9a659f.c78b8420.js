(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b9a659f"],{"0242c":function(e,t,r){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{visible:e.visible,title:"Cron表达式",width:"650px"},on:{ok:e.handleOk,cancel:e.handlerCancel}},[t("cron-input",{attrs:{item:e.cronItem},on:{change:e.showFive},model:{value:e.cron,callback:function(t){e.cron=t},expression:"cron"}}),t("a-input",{attrs:{placeholder:"请输入cron表达式"},model:{value:e.cron,callback:function(t){e.cron=t},expression:"cron"}}),t("div",{staticStyle:{margin:"20px 0","border-left":"#f5222d 5px solid","font-size":"medium","font-weight":"bold"}},[e._v("    近5次的运行时间: ")]),e._l(e.list,(function(r,n){return t("div",{key:r,staticStyle:{"margin-top":"10px"}},[e._v(" 第"+e._s(n+1)+"次: "+e._s(r))])}))],2)],1)},a=[],o=r("3b7a"),i={name:"CronModal",data:function(){return{visible:!1,cronItem:["second","minute","hour","day","month","week","year"],cron:"",list:[]}},methods:{handleOk:function(){this.visible=!1,this.$emit("getCron",this.cron)},handlerCancel:function(){this.visible=!1},isShow:function(e){this.cron=e,this.visible=!0},showFive:function(e){var t=this;this.cron=e,Object(o["j"])({cron:e}).then((function(e){t.list=e.data}))}}},s=i,u=(r("ae4b"),r("2877")),l=Object(u["a"])(s,n,a,!1,null,null,null);t["a"]=l.exports},"12b3":function(e,t){var r={sceneStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},backOffLabels:{1:{name:"延迟等级",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"},3:{name:"CRON表达式",color:"#e1f52d"},4:{name:"随机等待",color:"#a127f3"}},triggerInterval:{1:{name:"CRON表达式",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"}},notifyScene:{1:{name:"重试数量超过阈值",color:"#d06892"},2:{name:"重试失败数量超过阈值",color:"#f5a22d"},3:{name:"客户端上报失败",color:"#e1f52d"},4:{name:"客户端组件异常",color:"#a127f3"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},notifyType:{1:{name:"钉钉通知",color:"#64a6ea"},2:{name:"邮箱通知",color:"#1b7ee5"},4:{name:"飞书",color:"#087da1"}},notifyStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},idGenMode:{1:{name:"号段模式",color:"#1b7ee5"},2:{name:"雪花算法",color:"#087da1"}},groupStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},initScene:{0:{name:"否",color:"#9c1f1f"},1:{name:"是",color:"#f5a22d"}}};e.exports=r},"398e":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("caad"),r("2532");var n=function(){var e=this,t=e._self._c;return t("div",[t("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},attrs:{content:"场景配置"},on:{back:function(){return e.$router.go(-1)}}},[t("div")]),t("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1,loading:e.loading}},[t("a-form",{staticClass:"form-row",staticStyle:{width:"40%",margin:"auto"},attrs:{form:e.form,layout:"vertical"},on:{submit:e.handleSubmit}},[t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:18,md:12,sm:24}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}})],1),t("a-form-item",{attrs:{label:"通知场景"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["notifyScene",{initialValue:"1",rules:[{required:!0,message:"请选择状态"}]}],expression:"[\n                'notifyScene',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择状态'}]\n                }\n              ]"}],staticStyle:{width:"100%"},attrs:{placeholder:"通知场景"},on:{change:e.changeNotifyScene}},e._l(e.notifyScene,(function(r,n){return t("a-select-option",{key:n,attrs:{value:n}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",[t("a-input",{attrs:{hidden:""}})],1),t("a-form-item",{attrs:{label:"通知阈值"}},[e.notifyThresholdDisabled.includes(this.notifySceneValue)?t("a-input",{attrs:{disabled:""}}):t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["notifyThreshold",{initialValue:"16",rules:[{required:!e.notifyThresholdDisabled.includes(this.notifySceneValue),message:"请输入通知阈值"}]}],expression:"[\n                'notifyThreshold',\n                {\n                  initialValue: '16',\n                  rules: [{ required: !notifyThresholdDisabled.includes(this.notifySceneValue), message: '请输入通知阈值'}]\n                }\n              ]"}],staticStyle:{width:"-webkit-fill-available"},attrs:{id:"inputNumber",min:1}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:18,md:18,sm:24}},[t("a-form-item",{attrs:{label:"组"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["groupName",{rules:[{required:!0,message:"请选择组"}]}],expression:"['groupName', { rules: [{ required: true, message: '请选择组' }] }]"}],attrs:{placeholder:"请选择组"}},e._l(e.groupNameList,(function(r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(e._s(r))])})),1)],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["notifyStatus",{initialValue:"1",rules:[{required:!0,message:"请选择状态"}]}],expression:"[\n                'notifyStatus',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择状态'}]\n                }\n              ]"}],attrs:{placeholder:"请选择状态"}},e._l(e.notifyStatus,(function(r,n){return t("a-select-option",{key:n,attrs:{value:n}},[e._v(e._s(r.name))])})),1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:12,sm:12}},[t("a-form-item",{attrs:{label:"通知类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["notifyType",{initialValue:"1",rules:[{required:!0,message:"请选择状态"}]}],expression:"[\n                'notifyType',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择状态'}]\n                }\n              ]"}],staticStyle:{width:"100%"},attrs:{placeholder:"通知类型"},on:{change:e.handleChange}},e._l(e.notifyType,(function(r,n){return t("a-select-option",{key:n,attrs:{value:n}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:12,sm:12}},[t("a-form-item",{attrs:{label:"配置属性"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["notifyAttribute",{rules:[{required:!0,message:"请输入配置属性",whitespace:!0}]}],expression:"[\n                'notifyAttribute',\n                {rules: [{ required: true, message: '请输入配置属性', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入配置属性"},on:{click:e.handleBlur}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:24,md:24,sm:24}},[t("a-form-item",{attrs:{label:"描述"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!1,max:256,message:"最多支持256个字符！"}]}],expression:"[\n                'description',\n                {rules: [{required: false, max: 256, message: '最多支持256个字符！'}]}\n              ]"}],attrs:{placeholder:"请输入描述",type:"textarea"}})],1)],1)],1),t("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[t("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")]),t("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("重置")])],1)],1)],1),t("a-modal",{attrs:{visible:e.visible,title:"添加配置",width:"1000px"},on:{ok:e.handleOk,cancel:e.handlerCancel}},[t("a-form",e._b({attrs:{form:e.notifyAttributeForm,"body-style":{padding:"0px 0px"}},on:{submit:e.handleSubmit}},"a-form",e.formItemLayout,!1),["1"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"钉钉URL"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dingDingUrl",{rules:[{required:!0,message:"请输入钉钉URL",whitespace:!0}]}],expression:"[\n            'dingDingUrl',\n            {rules: [{ required: true, message: '请输入钉钉URL', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入钉钉URL"}})],1):e._e(),"4"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"飞书URL"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["larkUrl",{rules:[{required:!0,message:"请输入飞书URL",whitespace:!0}]}],expression:"[\n            'larkUrl',\n            {rules: [{ required: true, message: '请输入飞书URL', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入飞书URL"}})],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"用户名"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user",{rules:[{required:!0,message:"请输入用户名",whitespace:!0}]}],expression:"[\n            'user',\n            {rules: [{ required: true, message: '请输入用户名', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入用户名"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"密码"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["pass",{rules:[{required:!0,message:"请输入密码",whitespace:!0}]}],expression:"[\n            'pass',\n            {rules: [{ required: true, message: '请输入密码', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入密码"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"SMTP地址"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["host",{rules:[{required:!0,message:"请输入邮件服务器的SMTP地址",whitespace:!0}]}],expression:"[\n            'host',\n            {rules: [{ required: true, message: '请输入邮件服务器的SMTP地址', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入邮件服务器的SMTP地址"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"SMTP端口"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["port",{rules:[{required:!0,message:"请输入邮件服务器的SMTP端口",whitespace:!0}]}],expression:"[\n            'port',\n            {rules: [{ required: true, message: '请输入邮件服务器的SMTP端口', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入邮件服务器的SMTP端口"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"发件人"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["from",{rules:[{required:!0,message:"请输入发件人",whitespace:!0}]}],expression:"[\n            'from',\n            {rules: [{ required: true, message: '请输入发件人', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入发件人"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"收件人"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["tos",{rules:[{required:!0,message:"请输入收件人",whitespace:!0}]}],expression:"[\n            'tos',\n            {rules: [{ required: true, message: '请输入收件人', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入收件人"}}):e._e()],1):e._e(),t("a-form-item",{attrs:{"wrapper-col":{xs:{span:24,offset:0},sm:{span:16,offset:8},lg:{span:7}}}})],1)],1)],1)},a=[],o=(r("d3b7"),r("b64b"),r("25f0"),r("0fea")),i=r("e941"),s=r("88bc"),u=r.n(s),l=r("0242c"),c=r("12b3"),f={name:"NotifyFrom",components:{CronModal:l["a"]},props:{},comments:{CronModal:l["a"]},data:function(){return{form:this.$form.createForm(this),formItemLayout:{labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}},formItemLayoutWithOutLabel:{wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},formType:"create",groupNameList:[],notifyScene:c.notifyScene,notifyType:c.notifyType,notifyStatus:c.notifyStatus,loading:!1,visible:!1,count:0,notifyTypeValue:"1",notifyAttribute:"",notifyThresholdDisabled:["3","4"],notifySceneValue:"1"}},beforeCreate:function(){this.notifyAttributeForm=this.$form.createForm(this,{name:"notify_attribute_form_item"})},mounted:function(){var e=this;Object(o["j"])().then((function(t){e.groupNameList=t.data})),this.$nextTick((function(){var t=e.$route.query.id;t&&(e.loading=!0,Object(i["a"])(t).then((function(t){e.loadEditInfo(t.data),e.loading=!1})))}))},methods:{handleChange:function(e){this.notifyTypeValue=e},changeNotifyScene:function(e){this.notifySceneValue=e},handleBlur:function(){var e=this;new Promise((function(e){setTimeout(e,100)})).then((function(){if("edit"===e.formType){var t=u()(JSON.parse(e.notifyAttribute),["dingDingUrl","larkUrl","user","pass","host","port","from","tos"]);e.notifyAttributeForm.getFieldDecorator("dingDingUrl",{initialValue:t.dingDingUrl,preserve:!0})}e.visible=!e.visible}))},handlerCancel:function(){this.visible=!1},handleOk:function(){var e=this;this.notifyAttributeForm.validateFields((function(t,r){if(!t){var n=e.form,a=u()(r,["dingDingUrl","larkUrl","user","pass","host","port","from","tos"]);e.notifyAttribute=JSON.stringify(a),n.setFieldsValue({notifyAttribute:e.parseJson(a)}),e.visible=!1}}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||(r["notifyAttribute"]=t.notifyAttribute,"create"===t.formType?Object(i["c"])(r).then((function(e){t.$message.success("任务新增完成"),t.form.resetFields(),t.$router.go(-1)})):Object(i["e"])(r).then((function(e){t.$message.success("任务更新完成"),t.form.resetFields(),t.$router.go(-1)})))}))},loadEditInfo:function(e){var t=this;this.formType="edit";var r=this.form;new Promise((function(e){setTimeout(e,100)})).then((function(){var n=u()(e,["id","notifyAttribute","groupName","notifyStatus","notifyScene","notifyThreshold","notifyType","notifyThreshold","description"]);n.notifyStatus=n.notifyStatus.toString(),n.notifyScene=n.notifyScene.toString(),n.notifyType=n.notifyType.toString(),n.notifyThreshold=n.notifyThreshold.toString(),t.notifyTypeValue=n.notifyType,t.notifyAttribute=n.notifyAttribute,t.notifySceneValue=n.notifyScene,n.notifyAttribute=t.parseJson(JSON.parse(n.notifyAttribute)),r.setFieldsValue(n)}))},parseJson:function(e){if(!e)return null;var t="用户名:"+e["user"]+";密码:"+e["pass"]+";SMTP地址:"+e["host"]+";SMTP端口:"+e["port"]+";发件人:"+e["from"]+";收件人:"+e["tos"]+";";return"1"===this.notifyTypeValue?t=e["dingDingUrl"]:"4"===this.notifyTypeValue&&(t=e["larkUrl"]),t}}},d=f,m=r("2877"),p=Object(m["a"])(d,n,a,!1,null,null,null);t["default"]=p.exports},"3b7a":function(e,t,r){"use strict";r.d(t,"g",(function(){return o})),r.d(t,"j",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"l",(function(){return u})),r.d(t,"f",(function(){return l})),r.d(t,"h",(function(){return c})),r.d(t,"e",(function(){return f})),r.d(t,"d",(function(){return d})),r.d(t,"c",(function(){return m})),r.d(t,"b",(function(){return p})),r.d(t,"i",(function(){return h})),r.d(t,"k",(function(){return b}));var n=r("b775"),a={jobList:"/job/list",jobDetail:"/job/",saveJob:"/job/",updateJob:"/job/",updateJobStatus:"/job/status",delJob:"/job/",timeByCron:"/job/cron",jobNameList:"/job/job-name/list",jobBatchList:"/job/batch/list",jobBatchDetail:"/job/batch/",jobTaskList:"/job/task/list",jobLogList:"/job/log/list"};function o(e){return Object(n["b"])({url:a.jobNameList,method:"get",params:e})}function i(e){return Object(n["b"])({url:a.timeByCron,method:"get",params:e})}function s(e){return Object(n["b"])({url:a.delJob+e,method:"delete"})}function u(e){return Object(n["b"])({url:a.updateJobStatus,method:"put",data:e})}function l(e){return Object(n["b"])({url:a.jobLogList,method:"get",params:e})}function c(e){return Object(n["b"])({url:a.jobTaskList,method:"get",params:e})}function f(e){return Object(n["b"])({url:a.jobBatchList,method:"get",params:e})}function d(e){return Object(n["b"])({url:a.jobBatchDetail+e,method:"get"})}function m(e){return Object(n["b"])({url:a.jobList,method:"get",params:e})}function p(e){return Object(n["b"])({url:a.jobDetail+e,method:"get"})}function h(e){return Object(n["b"])({url:a.saveJob,method:"post",data:e})}function b(e){return Object(n["b"])({url:a.updateJob,method:"put",data:e})}},"5d3b":function(e,t,r){},"88bc":function(e,t,r){(function(t){var r=1/0,n=9007199254740991,a="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",s="[object Symbol]",u="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")();function f(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function d(e,t){var r=-1,n=e?e.length:0,a=Array(n);while(++r<n)a[r]=t(e[r],r,e);return a}function m(e,t){var r=-1,n=t.length,a=e.length;while(++r<n)e[a+r]=t[r];return e}var p=Object.prototype,h=p.hasOwnProperty,b=p.toString,y=c.Symbol,g=p.propertyIsEnumerable,v=y?y.isConcatSpreadable:void 0,w=Math.max;function S(e,t,r,n,a){var o=-1,i=e.length;r||(r=x),a||(a=[]);while(++o<i){var s=e[o];t>0&&r(s)?t>1?S(s,t-1,r,n,a):m(a,s):n||(a[a.length]=s)}return a}function j(e,t){return e=Object(e),T(e,t,(function(t,r){return r in e}))}function T(e,t,r){var n=-1,a=t.length,o={};while(++n<a){var i=t[n],s=e[i];r(s,i)&&(o[i]=s)}return o}function O(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,n=-1,a=w(r.length-t,0),o=Array(a);while(++n<a)o[n]=r[t+n];n=-1;var i=Array(t+1);while(++n<t)i[n]=r[n];return i[t]=o,f(e,this,i)}}function x(e){return V(e)||N(e)||!!(v&&e&&e[v])}function _(e){if("string"==typeof e||U(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function N(e){return k(e)&&h.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==a)}var V=Array.isArray;function L(e){return null!=e&&C(e.length)&&!q(e)}function k(e){return D(e)&&L(e)}function q(e){var t=A(e)?b.call(e):"";return t==o||t==i}function C(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function D(e){return!!e&&"object"==typeof e}function U(e){return"symbol"==typeof e||D(e)&&b.call(e)==s}var F=O((function(e,t){return null==e?{}:j(e,d(S(t,1),_))}));e.exports=F}).call(this,r("c8ba"))},ae4b:function(e,t,r){"use strict";r("5d3b")},e941:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"e",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"f",(function(){return c}));var n=r("b775"),a=(r("0fea"),{scenePageList:"/scene-config/page/list",sceneList:"/scene-config/list",sceneDetail:"/scene-config/",saveScene:"/scene-config",updateScene:"/scene-config",notifyConfigList:"/notify-config/list",notifyConfigDetail:"/notify-config/",saveNotify:"/notify-config/",updateNotify:"/notify-config/"});function o(e){return Object(n["b"])({url:a.notifyConfigDetail+e,method:"get"})}function i(e){return Object(n["b"])({url:a.saveNotify,method:"post",data:e})}function s(e){return Object(n["b"])({url:a.updateNotify,method:"put",data:e})}function u(e){return Object(n["b"])({url:a.sceneDetail+e,method:"get"})}function l(e){return Object(n["b"])({url:a.saveScene,method:"post",data:e})}function c(e){return Object(n["b"])({url:a.updateScene,method:"put",data:e})}}}]);