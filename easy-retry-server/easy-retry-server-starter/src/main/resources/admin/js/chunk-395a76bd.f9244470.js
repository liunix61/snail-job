(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-395a76bd"],{"38b7":function(e,t){var r={jobStatusEnum:{0:{name:"关闭",color:"#9c1f1f"},1:{name:"开启",color:"#f5a22d"}},taskType:{1:{name:"集群模式",color:"#d06892"},2:{name:"广播模式",color:"#f5a22d"},3:{name:"分片模式",color:"#e1f52d"}},triggerType:{1:{name:"CRON表达式",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"},3:{name:"工作流",color:"#76f52d"}},blockStrategy:{1:{name:"丢弃策略",color:"#d06892"},2:{name:"覆盖",color:"#f5a22d"},3:{name:"并行",color:"#e1f52d"}},executorType:{1:{name:"Java",color:"#d06892"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},taskBatchStatus:{1:{name:"待处理",color:"#64a6ea"},2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"},6:{name:"取消",color:"#f5732d"}},operationReason:{0:{name:""},1:{name:"执行超时",color:"#64a6ea"},2:{name:"无客户端节点",color:"#1b7ee5"},3:{name:"任务已关闭",color:"#087da1"},4:{name:"任务丢弃",color:"#3a2f81"},5:{name:"任务被覆盖",color:"#c2238a"},6:{name:"无可执行任务项",color:"#23c28a"},7:{name:"任务执行期间发生非预期异常",color:"#bdc223"},8:{name:"手动停止",color:"#23c28a"}},taskStatus:{2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"}},notifyScene:{1:{name:"任务执行失败",color:"#d06892"}},notifyType:{1:{name:"钉钉通知",color:"#64a6ea"},2:{name:"邮箱通知",color:"#1b7ee5"},3:{name:"企业微信",color:"#0082EF"},4:{name:"飞书",color:"#087da1"}},notifyStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},rateLimiterStatus:{0:{name:"未启用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},workflowStatus:{0:{name:"关闭",color:"#9c1f1f"},1:{name:"开启",color:"#f5a22d"}}};e.exports=r},"3b7a":function(e,t,r){"use strict";r.d(t,"z",(function(){return n})),r.d(t,"p",(function(){return i})),r.d(t,"s",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"w",(function(){return u})),r.d(t,"x",(function(){return c})),r.d(t,"y",(function(){return d})),r.d(t,"r",(function(){return m})),r.d(t,"o",(function(){return f})),r.d(t,"j",(function(){return p})),r.d(t,"q",(function(){return g})),r.d(t,"a",(function(){return h})),r.d(t,"v",(function(){return b})),r.d(t,"i",(function(){return v})),r.d(t,"l",(function(){return y})),r.d(t,"h",(function(){return w})),r.d(t,"g",(function(){return j})),r.d(t,"f",(function(){return k})),r.d(t,"d",(function(){return x})),r.d(t,"c",(function(){return S})),r.d(t,"m",(function(){return O})),r.d(t,"t",(function(){return F})),r.d(t,"k",(function(){return V})),r.d(t,"e",(function(){return T})),r.d(t,"n",(function(){return C})),r.d(t,"u",(function(){return q}));var a=r("b775"),o={jobPageList:"/job/page/list",jobList:"/job/list",jobDetail:"/job/",saveJob:"/job/",updateJob:"/job/",updateJobStatus:"/job/status",delJob:"/job/",timeByCron:"/job/cron",jobNameList:"/job/job-name/list",triggerJob:"/job/trigger/",jobBatchList:"/job/batch/list",jobBatchDetail:"/job/batch/",stop:"/job/batch/stop/",jobNotifyConfigPageList:"/job/notify/config/page/list",jobNotifyConfigDetail:"/job/notify/config/",saveJobNotify:"/job/notify/config/",updateJobNotify:"/job/notify/config/",jobTaskList:"/job/task/list",jobLogList:"/job/log/list",workflowListPage:"/workflow/page/list",saveWorkflow:"/workflow",updateWorkflow:"/workflow",workflowDetail:"/workflow",workflowBatchListPage:"/workflow/batch/page/list",workflowBatchDetail:"/workflow/batch/",updateStatus:"/workflow/update/status/",delWorkflow:"/workflow/",triggerWorkflow:"/workflow/trigger/",stopWorkflowBatch:"/workflow/batch/stop/",workflowNameList:"/workflow/workflow-name/list"};function n(e){return Object(a["b"])({url:o.workflowNameList,method:"get",params:e})}function i(e){return Object(a["b"])({url:o.stopWorkflowBatch+e,method:"post"})}function l(e){return Object(a["b"])({url:o.triggerWorkflow+e,method:"post"})}function s(e){return Object(a["b"])({url:o.delWorkflow+e,method:"delete"})}function u(e){return Object(a["b"])({url:o.updateStatus+e,method:"put"})}function c(e){return Object(a["b"])({url:o.workflowBatchListPage,method:"get",params:e})}function d(e){return Object(a["b"])({url:o.workflowListPage,method:"get",params:e})}function m(e){return Object(a["b"])({url:o.triggerJob+e,method:"post"})}function f(e){return Object(a["b"])({url:o.stop+e,method:"post"})}function p(e){return Object(a["b"])({url:o.jobNameList,method:"get",params:e})}function g(e){return Object(a["b"])({url:o.timeByCron,method:"get",params:e})}function h(e){return Object(a["b"])({url:o.delJob+e,method:"delete"})}function b(e){return Object(a["b"])({url:o.updateJobStatus,method:"put",data:e})}function v(e){return Object(a["b"])({url:o.jobLogList,method:"get",params:e})}function y(e){return Object(a["b"])({url:o.jobTaskList,method:"get",params:e})}function w(e){return Object(a["b"])({url:o.jobBatchList,method:"get",params:e})}function j(e){return Object(a["b"])({url:o.jobBatchDetail+e,method:"get"})}function k(e){return Object(a["b"])({url:o.jobPageList,method:"get",params:e})}function x(e){return Object(a["b"])({url:o.jobList,method:"get",params:e})}function S(e){return Object(a["b"])({url:o.jobDetail+e,method:"get"})}function O(e){return Object(a["b"])({url:o.saveJob,method:"post",data:e})}function F(e){return Object(a["b"])({url:o.updateJob,method:"put",data:e})}function V(e){return Object(a["b"])({url:o.jobNotifyConfigPageList,method:"get",params:e})}function T(e){return Object(a["b"])({url:o.jobNotifyConfigDetail+e,method:"get"})}function C(e){return Object(a["b"])({url:o.saveJobNotify,method:"post",data:e})}function q(e){return Object(a["b"])({url:o.updateJobNotify,method:"put",data:e})}},4591:function(e,t,r){"use strict";r("b3f4")},"6fb7":function(e,t,r){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{visible:e.visible,title:"Cron表达式",width:"650px"},on:{ok:e.handleOk,cancel:e.handlerCancel}},[t("cron-input",{attrs:{item:e.cronItem},on:{change:e.showFive},model:{value:e.cron,callback:function(t){e.cron=t},expression:"cron"}}),t("a-input",{attrs:{placeholder:"请输入cron表达式"},model:{value:e.cron,callback:function(t){e.cron=t},expression:"cron"}}),t("div",{staticStyle:{margin:"20px 0","border-left":"#f5222d 5px solid","font-size":"medium","font-weight":"bold"}},[e._v("    近5次的运行时间: ")]),e._l(e.list,(function(r,a){return t("div",{key:r,staticStyle:{"margin-top":"10px"}},[e._v(" 第"+e._s(a+1)+"次: "+e._s(r))])}))],2)],1)},o=[],n=r("3b7a"),i={name:"CronModal",data:function(){return{visible:!1,cronItem:["second","minute","hour","day","month","week","year"],cron:"",list:[]}},methods:{handleOk:function(){this.visible=!1,this.$emit("getCron",this.cron)},handlerCancel:function(){this.visible=!1},isShow:function(e){this.cron=e,this.visible=!0},showFive:function(e){var t=this;this.cron=e,Object(n["q"])({cron:e}).then((function(e){t.list=e.data}))}}},l=i,s=(r("4591"),r("2877")),u=Object(s["a"])(l,a,o,!1,null,null,null);t["a"]=u.exports},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,o="[object Arguments]",n="[object Function]",i="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=s||u||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,a=e?e.length:0,o=Array(a);while(++r<a)o[r]=t(e[r],r,e);return o}function f(e,t){var r=-1,a=t.length,o=e.length;while(++r<a)e[o+r]=t[r];return e}var p=Object.prototype,g=p.hasOwnProperty,h=p.toString,b=c.Symbol,v=p.propertyIsEnumerable,y=b?b.isConcatSpreadable:void 0,w=Math.max;function j(e,t,r,a,o){var n=-1,i=e.length;r||(r=O),o||(o=[]);while(++n<i){var l=e[n];t>0&&r(l)?t>1?j(l,t-1,r,a,o):f(o,l):a||(o[o.length]=l)}return o}function k(e,t){return e=Object(e),x(e,t,(function(t,r){return r in e}))}function x(e,t,r){var a=-1,o=t.length,n={};while(++a<o){var i=t[a],l=e[i];r(l,i)&&(n[i]=l)}return n}function S(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,o=w(r.length-t,0),n=Array(o);while(++a<o)n[a]=r[t+a];a=-1;var i=Array(t+1);while(++a<t)i[a]=r[a];return i[t]=n,d(e,this,i)}}function O(e){return T(e)||V(e)||!!(y&&e&&e[y])}function F(e){if("string"==typeof e||M(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function V(e){return q(e)&&g.call(e,"callee")&&(!v.call(e,"callee")||h.call(e)==o)}var T=Array.isArray;function C(e){return null!=e&&_(e.length)&&!N(e)}function q(e){return I(e)&&C(e)}function N(e){var t=L(e)?h.call(e):"";return t==n||t==i}function _(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){return!!e&&"object"==typeof e}function M(e){return"symbol"==typeof e||I(e)&&h.call(e)==l}var D=S((function(e,t){return null==e?{}:k(e,m(j(t,1),F))}));e.exports=D}).call(this,r("c8ba"))},b3f4:function(e,t,r){},eb0f:function(e,t,r){"use strict";r.r(t);r("b0c0");var a=function(){var e=this,t=e._self._c;return t("div",[t("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},attrs:{content:"定时任务配置"},on:{back:function(){return e.$router.go(-1)}}},[t("div")]),t("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1,loading:e.loading}},[t("a-form",{staticClass:"form-row",staticStyle:{width:"40%",margin:"auto"},attrs:{form:e.form,layout:"vertical"},on:{submit:e.handleSubmit}},[t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:24,md:24,sm:24}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}})],1),t("a-form-item",{attrs:{label:"任务名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jobName",{rules:[{required:!0,message:"请输入任务名称",whitespace:!0},{required:!0,max:64,message:"最多支持64个字符！"}]}],expression:"[\n                'jobName',\n                {rules: [{ required: true, message: '请输入任务名称', whitespace: true},{required: true, max: 64, message: '最多支持64个字符！'}]}\n              ]"}],attrs:{placeholder:"请输入任务名称",maxLength:64}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:18,md:18,sm:24}},[t("a-form-item",{attrs:{label:"组"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["groupName",{rules:[{required:!0,message:"请选择组"}]}],expression:"['groupName', { rules: [{ required: true, message: '请选择组' }] }]"}],attrs:{placeholder:"请选择组"}},e._l(e.groupNameList,(function(r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(e._s(r))])})),1)],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["jobStatus",{initialValue:"1",rules:[{required:!0,message:"请选择状态"}]}],expression:"[\n                'jobStatus',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择状态'}]\n                }\n              ]"}],attrs:{placeholder:"请选择状态"}},e._l(e.jobStatusEnum,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:12,md:12,sm:24}},[t("a-form-item",{attrs:{label:"路由策略"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["routeKey",{initialValue:"4",rules:[{required:!0,message:"请选择路由策略"}]}],expression:"[\n                'routeKey',\n                {\n                  initialValue: '4',\n                  rules: [{ required: true, message: '请选择路由策略'}]\n                }\n              ]"}],attrs:{placeholder:"请选择路由策略"}},e._l(e.routeKey,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:12,md:12,sm:24}},[t("a-form-item",{attrs:{label:"阻塞策略"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["blockStrategy",{initialValue:"1",rules:[{required:!0,message:"请选择阻塞策略"}]}],expression:"[\n                'blockStrategy',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择阻塞策略'}]\n                }\n              ]"}],attrs:{placeholder:"请选择阻塞策略"}},e._l(e.blockStrategy,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:12,sm:12}},[t("a-form-item",{attrs:{label:"触发类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerType",{initialValue:"2",rules:[{required:!0,message:"请选择触发类型"}]}],expression:"[\n                'triggerType',\n                {\n                  initialValue: '2',\n                  rules: [{ required: true, message: '请选择触发类型'}]\n                }\n              ]"}],attrs:{placeholder:"请选择触发类型"},on:{change:e.handleChange}},e._l(e.triggerType,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:12,sm:12}},[t("a-form-item",{attrs:{label:"间隔时长"}},["2"===e.triggerTypeValue?t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerInterval",{initialValue:"60",rules:[{required:!0,message:"请输入间隔时长"}]}],expression:"[\n                'triggerInterval',\n                {initialValue: '60',\n                 rules: [ { required: true, message: '请输入间隔时长'}]}\n              ]"}],staticStyle:{width:"-webkit-fill-available"},attrs:{placeholder:"请输入间隔时长(秒)",min:1}}):e._e(),"1"===e.triggerTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerInterval",{rules:[{required:!0,message:"请输入间隔时长",whitespace:!0}]}],expression:"[\n                'triggerInterval',\n                {rules: [{ required: true, message: '请输入间隔时长', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入间隔时长"},on:{click:e.handlerCron}}):e._e(),"3"===e.triggerTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerInterval"],expression:"[\n                'triggerInterval'\n              ]"}],attrs:{disabled:"",placeholder:""}}):e._e()],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:6,sm:12}},[t("a-form-item",{attrs:{label:"执行器类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorType",{initialValue:"1",rules:[{required:!0,message:"请选择执行器类型"}]}],expression:"[\n                'executorType',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择执行器类型'}]\n                }\n              ]"}],attrs:{placeholder:"请选择执行器类型"}},e._l(e.executorType,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:24,sm:24}},[t("a-form-item",{attrs:{label:"执行器名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorInfo",{rules:[{required:!0,message:"请输入执行器名称",whitespace:!0}]}],expression:"[\n                'executorInfo',\n                {rules: [{ required: true, message: '请输入执行器名称', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入执行器名称",type:"textarea",rows:1}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:12,sm:24}},[t("a-form-item",{attrs:{label:"任务类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["taskType",{initialValue:e.taskTypeValue,rules:[{required:!0,message:"请选择任务类型"}]}],expression:"[\n                'taskType',\n                {\n                  initialValue: taskTypeValue,\n                  rules: [{ required: true, message: '请选择任务类型'}]\n                }\n              ]"}],attrs:{placeholder:"请选择任务类型"},on:{change:e.handleTaskTypeChange}},e._l(e.taskType,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:24,sm:24}},[t("a-form-item",{attrs:{label:"方法参数"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["argsStr",{rules:[{required:"3"===this.taskTypeValue,message:"请输入方法参数",whitespace:!0}]}],expression:"[\n                'argsStr',\n                {rules: [{ required: this.taskTypeValue === '3', message: '请输入方法参数', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入方法参数",type:"textarea",rows:1},on:{click:e.handleBlur}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"超时时间(秒)"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorTimeout",{initialValue:"60",rules:[{required:!0,message:"请输入超时时间"}]}],expression:"[\n                'executorTimeout',\n                {\n                  initialValue: '60',\n                  rules: [{ required: true, message: '请输入超时时间'}]\n                }\n              ]"}],attrs:{id:"inputNumber",min:1,max:36e3}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"最大重试次数"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["maxRetryTimes",{initialValue:"3",rules:[{required:!0,message:"请输入最大重试次数"}]}],expression:"[\n                'maxRetryTimes',\n                {\n                  initialValue: '3',\n                  rules: [{ required: true, message: '请输入最大重试次数'}]\n                }\n              ]"}],attrs:{min:0}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"重试间隔(秒)"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["retryInterval",{initialValue:"1",rules:[{required:!0,message:"请输入重试间隔"}]}],expression:"[\n                'retryInterval',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请输入重试间隔'\n                  }]\n                }\n              ]"}],attrs:{min:1}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"并行数"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["parallelNum",{initialValue:"1",rules:[{required:!0,message:"请输入并行数"}]}],expression:"[\n                'parallelNum',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请输入并行数'}]\n                }\n              ]"}],attrs:{min:1}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}}),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:24,md:24,sm:24}},[t("a-form-item",{attrs:{label:"描述"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!1,max:256,message:"最多支持256个字符！"}]}],expression:"[\n                'description',\n                {rules: [{required: false, max: 256, message: '最多支持256个字符！'}]}\n              ]"}],attrs:{placeholder:"请输入描述",type:"textarea"}})],1)],1)],1),t("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[t("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1),t("a-modal",{attrs:{visible:e.visible,title:"分片参数",width:"500px"},on:{ok:function(t){return e.submitForm()},cancel:e.handlerCancel}},[t("a-form-model",{ref:"dynamicValidateForm",staticStyle:{"margin-left":"15%"},attrs:{model:e.dynamicValidateForm,layout:"vertical"}},[e._l(e.dynamicValidateForm.domains,(function(r,a){return t("a-form-model-item",{key:r.key,attrs:{label:"分片"+a,prop:"domains."+a+".value",rules:{required:!0,message:"分区参数不能为空",trigger:"blur"}}},[t("a-input",{staticStyle:{width:"80%","margin-right":"8px"},attrs:{placeholder:"请输入分区的参数"},model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"domain.value"}}),e.dynamicValidateForm.domains.length>1?t("a-icon",{staticClass:"dynamic-delete-button",attrs:{type:"minus-circle-o",disabled:1===e.dynamicValidateForm.domains.length},on:{click:function(t){return e.removeDomain(r)}}}):e._e()],1)})),t("a-form-model-item",e._b({},"a-form-model-item",e.formItemLayoutWithOutLabel,!1),[t("a-button",{staticStyle:{width:"60%"},attrs:{type:"dashed"},on:{click:e.add}},[t("a-icon",{attrs:{type:"plus"}}),e._v(" 添加分片 ")],1)],1),t("a-form-model-item",{attrs:{"wrapper-col":{xs:{span:24,offset:0},sm:{span:16,offset:8},lg:{span:7}}}})],2)],1),t("cron-modal",{ref:"cronModalRef",on:{getCron:e.getCron}})],1)},o=[],n=(r("a434"),r("d81d"),r("a15b"),r("99af"),r("4de4"),r("d3b7"),r("25f0"),r("b64b"),r("159b"),r("0fea")),i=r("3b7a"),l=r("88bc"),s=r.n(l),u=r("6fb7"),c=r("6042"),d=r.n(c),m=r("41b2"),f=r.n(m),p=r("4d91"),g=r("4d26"),h=r.n(g),b=r("da05"),v=r("c005"),y=r.n(v),w=r("6a21"),j=r("2a95"),k=r("0644"),x=r.n(k),S=r("daa3"),O=r("b488"),F=r("9cba"),V=r("322e"),T=r("7b05");function C(){}function q(e,t,r){var a=e;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");for(var o=t.split("."),n=0,i=o.length;n<i-1;++n){if(!a&&!r)break;var l=o[n];if(!(l in a)){if(r)throw new Error("please transfer a valid prop path to form item!");break}a=a[l]}return{o:a,k:o[n],v:a?a[o[n]]:null}}var N={id:p["a"].string,htmlFor:p["a"].string,prefixCls:p["a"].string,label:p["a"].any,help:p["a"].any,extra:p["a"].any,labelCol:p["a"].shape(b["a"]).loose,wrapperCol:p["a"].shape(b["a"]).loose,hasFeedback:p["a"].bool,colon:p["a"].bool,labelAlign:p["a"].oneOf(["left","right"]),prop:p["a"].string,rules:p["a"].oneOfType([Array,Object]),autoLink:p["a"].bool,required:p["a"].bool,validateStatus:p["a"].oneOf(["","success","warning","error","validating"])},_={name:"AFormModelItem",__ANT_NEW_FORM_ITEM:!0,mixins:[O["a"]],props:Object(S["t"])(N,{hasFeedback:!1,autoLink:!0}),inject:{configProvider:{default:function(){return F["a"]}},FormContext:{default:function(){return{}}}},data:function(){return{validateState:this.validateStatus,validateMessage:"",validateDisabled:!1,validator:{}}},computed:{fieldValue:function(){var e=this.FormContext.model;if(e&&this.prop){var t=this.prop;return-1!==t.indexOf(":")&&(t=t.replace(/:/g,".")),q(e,t,!0).v}},isRequired:function(){var e=this.getRules(),t=!1;return e&&e.length&&e.every((function(e){return!e.required||(t=!0,!1)})),t}},watch:{validateStatus:function(e){this.validateState=e}},mounted:function(){if(this.prop){var e=this.FormContext.addField;e&&e(this),this.initialValue=x()(this.fieldValue)}},beforeDestroy:function(){var e=this.FormContext.removeField;e&&e(this)},methods:{validate:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C;this.validateDisabled=!1;var a=this.getFilteredRule(e);if(!a||0===a.length)return r(),!0;this.validateState="validating";var o={};a&&a.length>0&&a.forEach((function(e){delete e.trigger})),o[this.prop]=a;var n=new j["a"](o);this.FormContext&&this.FormContext.validateMessages&&n.messages(this.FormContext.validateMessages);var i={};i[this.prop]=this.fieldValue,n.validate(i,{firstFields:!0},(function(e,a){t.validateState=e?"error":"success",t.validateMessage=e?e[0].message:"",r(t.validateMessage,a),t.FormContext&&t.FormContext.$emit&&t.FormContext.$emit("validate",t.prop,!e,t.validateMessage||null)}))},getRules:function(){var e=this.FormContext.rules,t=this.rules,r=void 0!==this.required?{required:!!this.required,trigger:"change"}:[],a=q(e,this.prop||"");return e=e?a.o[this.prop||""]||a.v:[],[].concat(t||e||[]).concat(r)},getFilteredRule:function(e){var t=this.getRules();return t.filter((function(t){return!t.trigger||""===e||(Array.isArray(t.trigger)?t.trigger.indexOf(e)>-1:t.trigger===e)})).map((function(e){return f()({},e)}))},onFieldBlur:function(){this.validate("blur")},onFieldChange:function(){this.validateDisabled?this.validateDisabled=!1:this.validate("change")},clearValidate:function(){this.validateState="",this.validateMessage="",this.validateDisabled=!1},resetField:function(){var e=this;this.validateState="",this.validateMessage="";var t=this.FormContext.model||{},r=this.fieldValue,a=this.prop;-1!==a.indexOf(":")&&(a=a.replace(/:/,"."));var o=q(t,a,!0);this.validateDisabled=!0,Array.isArray(r)?o.o[o.k]=[].concat(this.initialValue):o.o[o.k]=this.initialValue,this.$nextTick((function(){e.validateDisabled=!1}))}},render:function(){var e=this,t=arguments[0],r=this.$slots,a=this.$scopedSlots,o=Object(S["l"])(this),n=Object(S["g"])(this,"label"),i=Object(S["g"])(this,"extra"),l=Object(S["g"])(this,"help"),s={props:f()({},o,{label:n,extra:i,validateStatus:this.validateState,help:this.validateMessage||l,required:this.isRequired||o.required})},u=Object(S["c"])(a["default"]?a["default"]():r["default"]),c=u[0];if(this.prop&&this.autoLink&&Object(S["w"])(c)){var d=Object(S["i"])(c),m=d.blur,p=d.change;c=Object(T["a"])(c,{on:{blur:function(){m&&m.apply(void 0,arguments),e.onFieldBlur()},change:function(){if(Array.isArray(p))for(var t=0,r=p.length;t<r;t++)p[t].apply(p,arguments);else p&&p.apply(void 0,arguments);e.onFieldChange()}}})}return t(V["a"],s,[c,u.slice(1)])}},L={layout:p["a"].oneOf(["horizontal","inline","vertical"]),labelCol:p["a"].shape(b["a"]).loose,wrapperCol:p["a"].shape(b["a"]).loose,colon:p["a"].bool,labelAlign:p["a"].oneOf(["left","right"]),prefixCls:p["a"].string,hideRequiredMark:p["a"].bool,model:p["a"].object,rules:p["a"].object,validateMessages:p["a"].any,validateOnRuleChange:p["a"].bool},I=(p["a"].oneOfType([p["a"].string,p["a"].func]),p["a"].string,p["a"].boolean,p["a"].boolean,p["a"].number,p["a"].number,p["a"].number,p["a"].oneOfType([String,p["a"].arrayOf(String)]),p["a"].custom(y.a),p["a"].func,p["a"].func,{name:"AFormModel",props:Object(S["t"])(L,{layout:"horizontal",hideRequiredMark:!1,colon:!0,validateOnRuleChange:!1}),Item:_,created:function(){this.fields=[]},provide:function(){return{FormContext:this}},inject:{configProvider:{default:function(){return F["a"]}}},watch:{rules:function(){this.validateOnRuleChange&&this.validate((function(){}))}},computed:{vertical:function(){return"vertical"===this.layout}},methods:{addField:function(e){e&&this.fields.push(e)},removeField:function(e){e.prop&&this.fields.splice(this.fields.indexOf(e),1)},onSubmit:function(e){Object(S["k"])(this).submit?this.$emit("submit",e):e.preventDefault()},resetFields:function(){this.model?this.fields.forEach((function(e){e.resetField()})):Object(w["a"])(!1,"FormModel","model is required for resetFields to work.")},clearValidate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.length?"string"===typeof e?this.fields.filter((function(t){return e===t.prop})):this.fields.filter((function(t){return e.indexOf(t.prop)>-1})):this.fields;t.forEach((function(e){e.clearValidate()}))},validate:function(e){var t=this;if(this.model){var r=void 0;"function"!==typeof e&&window.Promise&&(r=new window.Promise((function(t,r){e=function(e){e?t(e):r(e)}})));var a=!0,o=0;0===this.fields.length&&e&&e(!0);var n={};return this.fields.forEach((function(r){r.validate("",(function(r,i){r&&(a=!1),n=f()({},n,i),"function"===typeof e&&++o===t.fields.length&&e(a,n)}))})),r||void 0}Object(w["a"])(!1,"FormModel","model is required for resetFields to work.")},validateField:function(e,t){e=[].concat(e);var r=this.fields.filter((function(t){return-1!==e.indexOf(t.prop)}));r.length?r.forEach((function(e){e.validate("",t)})):Object(w["a"])(!1,"FormModel","please pass correct props!")}},render:function(){var e,t=arguments[0],r=this.prefixCls,a=this.hideRequiredMark,o=this.layout,n=this.onSubmit,i=this.$slots,l=this.configProvider.getPrefixCls,s=l("form",r),u=h()(s,(e={},d()(e,s+"-horizontal","horizontal"===o),d()(e,s+"-vertical","vertical"===o),d()(e,s+"-inline","inline"===o),d()(e,s+"-hide-required-mark",a),e));return t("form",{on:{submit:n},class:u},[i["default"]])}}),M=I,D=r("38b7"),R={name:"JobFrom",components:{CronModal:u["a"],AFormModel:M,AFormModelItem:_},props:{},data:function(){return{form:this.$form.createForm(this),formItemLayout:{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},formItemLayoutWithOutLabel:{wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},formType:"create",groupNameList:[],jobStatusEnum:D.jobStatusEnum,taskType:D.taskType,triggerType:D.triggerType,blockStrategy:D.blockStrategy,executorType:D.executorType,routeKey:D.routeKey,loading:!1,visible:!1,count:0,triggerTypeValue:"2",taskTypeValue:"1",argsStrValue:[],dynamicValidateForm:{domains:[]}}},beforeCreate:function(){},mounted:function(){var e=this;Object(n["j"])().then((function(t){e.groupNameList=t.data})),this.$nextTick((function(){var t=e.$route.query.id;t&&(e.loading=!0,Object(i["c"])(t).then((function(t){e.loadEditInfo(t.data),e.loading=!1})))}))},methods:{handleChange:function(e){this.triggerTypeValue=e,this.form.setFieldsValue({triggerInterval:null})},handleTaskTypeChange:function(e){this.taskTypeValue=e},handlerCron:function(){var e=this.form.getFieldValue("triggerType");if("1"===e){var t=this.form.getFieldValue("triggerInterval");null!==t&&""!==t||(t="* * * * * ?"),this.$refs.cronModalRef.isShow(t)}},removeDomain:function(e){var t=this.dynamicValidateForm.domains.indexOf(e);-1!==t&&this.dynamicValidateForm.domains.splice(t,1)},add:function(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()})},handleBlur:function(){var e=this.form.getFieldValue("taskType");"3"===e&&(this.visible=!this.visible)},getCron:function(e){this.form.setFieldsValue({triggerInterval:e})},submitForm:function(){var e=this,t=this.form;this.$refs["dynamicValidateForm"].validate((function(r){if(!r)return!1;e.argsStrValue=e.dynamicValidateForm.domains.map((function(e,t){return e.value})),t.setFieldsValue({argsStr:e.dynamicValidateForm.domains.map((function(e,t){return"分区:".concat(t,"=>").concat(e.value)})).join("; ")}),e.visible=!e.visible}))},handleOk:function(e){var t=this,r=this.form;e.preventDefault(),this.dynamicForm.validateFields((function(e,a){e||(t.argsStrValue=a["sharding"],r.setFieldsValue({argsStr:t.argsStrValue.filter((function(e){return e})).map((function(e,t){return"分区:".concat(t,"=>").concat(e)})).join("; ")}),t.visible=!1)}))},handlerCancel:function(){this.visible=!1},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||("3"===t.taskTypeValue&&(r["argsStr"]=JSON.stringify(t.argsStrValue)),"3"===t.triggerTypeValue&&(r["triggerInterval"]="0"),"create"===t.formType?Object(i["m"])(r).then((function(e){t.$message.success("任务新增完成"),t.form.resetFields(),t.$router.go(-1)})):Object(i["t"])(r).then((function(e){t.$message.success("任务更新完成"),t.form.resetFields(),t.$router.go(-1)})))}))},loadEditInfo:function(e){var t=this;this.formType="edit";var r=this.form;new Promise((function(e){setTimeout(e,100)})).then((function(){var a=s()(e,["id","jobName","groupName","jobStatus","executorInfo","argsStr","executorTimeout","description","maxRetryTimes","parallelNum","retryInterval","triggerType","blockStrategy","executorType","taskType","triggerInterval"]);a.jobStatus=a.jobStatus.toString(),a.taskType=a.taskType.toString(),a.executorType=a.executorType.toString(),a.blockStrategy=a.blockStrategy.toString(),a.triggerType=a.triggerType.toString(),t.triggerTypeValue=a.triggerType,t.taskTypeValue=a.taskType,"3"===t.triggerTypeValue&&(a.triggerInterval=null),"3"===t.taskTypeValue&&(t.argsStrValue=JSON.parse(a.argsStr),a.argsStr=t.argsStrValue.map((function(e,t){return"分区:".concat(t,"=>").concat(e)})).join(";"),t.argsStrValue.forEach((function(e,r){t.dynamicValidateForm.domains.push({value:e,key:Date.now()+r})}))),r.setFieldsValue(a)}))},reset:function(){this.form.resetFields(),this.dynamicForm.resetFields()}}},A=R,J=r("2877"),$=Object(J["a"])(A,a,o,!1,null,null,null);t["default"]=$.exports}}]);