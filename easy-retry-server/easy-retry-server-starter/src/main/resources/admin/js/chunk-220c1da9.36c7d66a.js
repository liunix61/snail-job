(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-220c1da9","chunk-35f76107"],{"339f":function(e,t,a){"use strict";var r=function(){var e=this,t=this,a=t._self._c;return a("div",[a("div",{staticStyle:{margin:"20px 0","border-left":"#f5222d 5px solid","font-size":"medium","font-weight":"bold"}},[a("span",{staticStyle:{"padding-left":"18px"}},[t._v("调用日志详情 (总调度次数: "+t._s(t.total)+")")]),a("span",{staticStyle:{"padding-left":"18px"}},[a("a-icon",{attrs:{type:"sync"},on:{click:function(){return e.$refs.table.refresh(!0)}}})],1)]),a("a-card",[a("s-table",{ref:"table",attrs:{size:"default",rowKey:"key",columns:t.columns,data:t.loadData},scopedSlots:t._u([{key:"serial",fn:function(e,r){return a("span",{},[t._v(" "+t._s(r.id)+" ")])}},{key:"clientInfo",fn:function(e){return a("span",{},[t._v(" "+t._s(e?e.split("@")[1]:"无")+" ")])}}])})],1)],1)},s=[],n=a("c1df"),o=a.n(n),i=a("0fea"),l=a("2af9"),c={name:"RetryTaskLogMessageList",components:{STable:l["i"]},data:function(){var e=this;return{columns:[{title:"#",scopedSlots:{customRender:"serial"},width:"10%"},{title:"信息",dataIndex:"message",width:"50%"},{title:"地址",dataIndex:"clientInfo",scopedSlots:{customRender:"clientInfo"},width:"10%"},{title:"触发时间",dataIndex:"createDt",sorter:!0,customRender:function(e){return o()(e).format("YYYY-MM-DD HH:mm:ss")},width:"10%"}],queryParam:{},loadData:function(t){if(e.queryParam["groupName"])return Object(i["w"])(Object.assign(t,e.queryParam)).then((function(t){return e.total=t.total,t}))},total:0}},methods:{refreshTable:function(e){this.queryParam=e,this.$refs.table.refresh(!0)}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,s,!1,null,"7ee48017",null);t["a"]=m.exports},"99f5":function(e,t,a){"use strict";a.r(t);a("ac1f"),a("5319"),a("b0c0");var r=function(){var e=this,t=e._self._c;return t("div",[e.showHeader?t("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},on:{back:function(){return e.$router.replace("/retry/list")}}},[t("div")]):e._e(),null!==e.retryTaskInfo?t("a-card",{attrs:{bordered:!1}},[t("a-descriptions",{attrs:{title:"",column:e.column,bordered:""}},[t("a-descriptions-item",{attrs:{label:"组名称"}},[e._v(" "+e._s(e.retryTaskInfo.groupName)+" ")]),t("a-descriptions-item",{attrs:{label:"场景名称"}},[e._v(" "+e._s(e.retryTaskInfo.sceneName)+" ")]),t("a-descriptions-item",{attrs:{label:"幂等id"}},[e._v(" "+e._s(e.retryTaskInfo.idempotentId)+" ")]),t("a-descriptions-item",{attrs:{label:"唯一id"}},[e._v(" "+e._s(e.retryTaskInfo.uniqueId)+" ")]),t("a-descriptions-item",{attrs:{label:"业务编号"}},[e._v(" "+e._s(e.retryTaskInfo.bizNo)+" ")]),t("a-descriptions-item",{attrs:{label:"重试次数"}},[e._v(" "+e._s(e.retryTaskInfo.retryCount)+" ")]),t("a-descriptions-item",{attrs:{label:"重试状态 | 数据类型"}},[t("a-tag",{attrs:{color:"red"}},[e._v(" "+e._s(e.retryStatus[e.retryTaskInfo.retryStatus])+" ")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-tag",{attrs:{color:e.taskType[e.retryTaskInfo.taskType].color}},[e._v(" "+e._s(e.taskType[e.retryTaskInfo.taskType].name)+" ")])],1),t("a-descriptions-item",{attrs:{label:"下次触发时间"}},[e._v(" "+e._s(e.retryTaskInfo.nextTriggerAt)+" ")]),t("a-descriptions-item",{attrs:{label:"更新时间"}},[e._v(" "+e._s(e.retryTaskInfo.updateDt)+" ")]),t("a-descriptions-item",{attrs:{label:"执行器名称",span:"3"}},[e._v(" "+e._s(e.retryTaskInfo.executorName)+" ")]),t("a-descriptions-item",{attrs:{label:"参数",span:"3"}},[e._v(" "+e._s(e.retryTaskInfo.argsStr)+" ")]),t("a-descriptions-item",{attrs:{label:"扩展参数",span:"3"}},[e._v(" "+e._s(e.retryTaskInfo.extAttrs)+" ")])],1)],1):e._e(),t("RetryTaskLogMessageList",{ref:"retryTaskLogMessageListRef"})],1)},s=[],n=(a("a9e3"),a("0fea")),o=a("339f"),i={name:"RetryTaskInfo",components:{RetryTaskLogMessageList:o["a"]},props:{showHeader:{type:Boolean,default:!0},column:{type:Number,default:3}},data:function(){return{retryTaskInfo:null,retryStatus:{0:"处理中",1:"处理成功",2:"最大次数",3:"暂停"},taskType:{1:{name:"重试数据",color:"#d06892"},2:{name:"回调数据",color:"#f5a22d"}}}},created:function(){var e=this.$route.query.id,t=this.$route.query.groupName;e&&t?this.getRetryTaskById(e,t):this.showHeader&&this.$router.push({path:"/404"})},methods:{getRetryTaskById:function(e,t){var a=this;Object(n["u"])(e,{groupName:t}).then((function(e){a.retryTaskInfo=e.data,a.queryParam={groupName:a.retryTaskInfo.groupName,uniqueId:a.retryTaskInfo.uniqueId},a.$refs.retryTaskLogMessageListRef.refreshTable(a.queryParam)}))}}},l=i,c=a("2877"),u=Object(c["a"])(l,r,s,!1,null,"0b3ba3ef",null);t["default"]=u.exports},"9d75":function(e,t,a){"use strict";a.r(t);a("b0c0");var r=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"组名称"}},[t("a-select",{attrs:{placeholder:"请输入组名称"},on:{change:function(t){return e.handleChange(t)}},model:{value:e.queryParam.groupName,callback:function(t){e.$set(e.queryParam,"groupName",t)},expression:"queryParam.groupName"}},e._l(e.groupNameList,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(a))])})),1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"场景名称"}},[t("a-select",{attrs:{placeholder:"请选择场景名称",allowClear:""},model:{value:e.queryParam.sceneName,callback:function(t){e.$set(e.queryParam,"sceneName",t)},expression:"queryParam.sceneName"}},e._l(e.sceneList,(function(a){return t("a-select-option",{key:a.sceneName,attrs:{value:a.sceneName}},[e._v(" "+e._s(a.sceneName))])})),1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"重试状态"}},[t("a-select",{attrs:{placeholder:"请选择状态",allowClear:""},model:{value:e.queryParam.retryStatus,callback:function(t){e.$set(e.queryParam,"retryStatus",t)},expression:"queryParam.retryStatus"}},e._l(e.retryStatus,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(" "+e._s(a.name))])})),1)],1)],1),e.advanced?[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"业务编号"}},[t("a-input",{attrs:{placeholder:"请输入业务编号",allowClear:""},model:{value:e.queryParam.bizNo,callback:function(t){e.$set(e.queryParam,"bizNo",t)},expression:"queryParam.bizNo"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"幂等id"}},[t("a-input",{attrs:{placeholder:"请输入幂等id",allowClear:""},model:{value:e.queryParam.idempotentId,callback:function(t){e.$set(e.queryParam,"idempotentId",t)},expression:"queryParam.idempotentId"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"UniqueId"}},[t("a-input",{attrs:{placeholder:"请输入唯一id",allowClear:""},model:{value:e.queryParam.uniqueId,callback:function(t){e.$set(e.queryParam,"uniqueId",t)},expression:"queryParam.uniqueId"}})],1)],1)]:e._e(),t("a-col",{attrs:{md:e.advanced?24:8,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons",style:e.advanced&&{float:"right",overflow:"hidden"}||{}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.resetFiled}},[e._v("重置")]),t("a",{staticStyle:{"margin-left":"8px"},on:{click:e.toggleAdvanced}},[e._v(" "+e._s(e.advanced?"收起":"展开")+" "),t("a-icon",{attrs:{type:e.advanced?"up":"down"}})],1)],1)])],2)],1)],1),t("div",{staticClass:"table-operator"},[t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.handleNew()}}},[e._v("单个")]),t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.handleBatchNew()}}},[e._v("批量")]),e.selectedRowKeys.length>0?t("a-dropdown",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}]},[t("a-menu",{attrs:{slot:"overlay"},on:{click:e.onClick},slot:"overlay"},[t("a-menu-item",{key:"1"},[t("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1),t("a-menu-item",{key:"2"},[t("a-icon",{attrs:{type:"edit"}}),e._v("更新")],1)],1),t("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),t("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),t("s-table",{ref:"table",attrs:{size:"default",rowKey:function(e){return e.id},columns:e.columns,data:e.loadData,alert:e.options.alert,rowSelection:e.options.rowSelection,scroll:{x:2e3}},scopedSlots:e._u([{key:"uniqueId",fn:function(a,r){return t("span",{},[t("a",{attrs:{href:"#"},on:{click:function(t){return e.handlerOpenDrawer(r)}}},[e._v(" "+e._s(a))])])}},{key:"taskType",fn:function(a){return t("span",{},[t("a-tag",{attrs:{color:e.taskType[a].color}},[e._v(" "+e._s(e.taskType[a].name)+" ")])],1)}},{key:"retryStatus",fn:function(a){return t("span",{},[t("a-tag",{attrs:{color:e.retryStatus[a].color}},[e._v(" "+e._s(e.retryStatus[a].name)+" ")])],1)}},{key:"action",fn:function(a,r){return t("span",{},[[t("a",{on:{click:function(t){return e.handleInfo(r)}}},[e._v("详情")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"是否暂停?","ok-text":"暂停","cancel-text":"取消"},on:{confirm:function(t){return e.handleSuspend(r)}}},[0===r.retryStatus?t("a",{attrs:{href:"javascript:;"}},[e._v("暂停")]):e._e()]),0===r.retryStatus?t("a-divider",{attrs:{type:"vertical"}}):e._e(),t("a-popconfirm",{attrs:{title:"是否恢复?","ok-text":"恢复","cancel-text":"取消"},on:{confirm:function(t){return e.handleRecovery(r)}}},[3===r.retryStatus?t("a",{attrs:{href:"javascript:;"}},[e._v("恢复")]):e._e()]),3===r.retryStatus?t("a-divider",{attrs:{type:"vertical"}}):e._e(),t("a-popconfirm",{attrs:{title:"是否完成?","ok-text":"完成","cancel-text":"取消"},on:{confirm:function(t){return e.handleFinish(r)}}},[1!==r.retryStatus&&2!==r.retryStatus?t("a",{attrs:{href:"javascript:;"}},[e._v("完成")]):e._e()]),1!==r.retryStatus&&2!==r.retryStatus?t("a-divider",{attrs:{type:"vertical"}}):e._e(),t("a-popconfirm",{attrs:{title:"是否执行任务?","ok-text":"执行","cancel-text":"取消"},on:{confirm:function(t){return e.handleTrigger(r)}}},[1!==r.retryStatus&&2!==r.retryStatus?t("a",{attrs:{href:"javascript:;"}},[e._v("执行")]):e._e()])]],2)}}])}),t("Drawer",{attrs:{title:"任务详情",placement:"right",width:800,visibleAmplify:!0,visible:e.openDrawer},on:{closeDrawer:e.onClose,handlerAmplify:e.handleInfo}},[t("retry-task-info",{ref:"retryTaskInfoRef",attrs:{showHeader:!1,column:1}})],1),t("SaveRetryTask",{ref:"saveRetryTask",on:{refreshTable:e.refreshTable}}),t("BatchUpdateRetryTaskInfo",{ref:"batchUpdateRetryTaskInfo",on:{refreshTable:e.refreshTable}}),t("BatchSaveRetryTask",{ref:"batchSaveRetryTask",on:{refreshTable:e.refreshTable}})],1)},s=[],n=a("261e"),o=a("27e3"),i=a("0fea"),l=a("2af9"),c=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{visible:e.visible,title:"新增任务",width:"800px"},on:{ok:e.handleOk,cancel:function(t){e.visible=!1}}},[t("a-form",e._b({attrs:{form:e.form},on:{submit:e.handleOk}},"a-form",e.formItemLayout,!1),[t("a-form-item",{attrs:{label:"组"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["groupName",{rules:[{required:!0,message:"请选择组"}]}],expression:"['groupName', { rules: [{ required: true, message: '请选择组' }] }]"}],attrs:{placeholder:"请选择组"},on:{change:function(t){return e.handleChange(t)}}},e._l(e.groupNameList,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(a))])})),1)],1),t("a-form-item",{attrs:{label:"场景名称"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sceneName",{rules:[{required:!0,message:"请选择场景名称"}]}],expression:"['sceneName', { rules: [{ required: true, message: '请选择场景名称' }] }]"}],attrs:{placeholder:"请选择场景名称"}},e._l(e.sceneList,(function(a){return t("a-select-option",{key:a.sceneName,attrs:{value:a.sceneName}},[e._v(" "+e._s(a.sceneName))])})),1)],1),t("a-form-item",{attrs:{label:"执行器名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorName",{rules:[{required:!0,message:"请输入执行器名称"}]}],expression:"['executorName', { rules: [{ required: true, message: '请输入执行器名称' }] }]"}],attrs:{name:"executorName",placeholder:"请输入执行器名称"}})],1),t("a-form-item",{attrs:{label:"幂等ID"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["idempotentId",{rules:[{required:!0,message:"请输入幂等ID"}]}],expression:"['idempotentId', { rules: [{ required: true, message: '请输入幂等ID' }] }]"}],attrs:{name:"idempotentId",placeholder:"请输入幂等ID"}},[t("a-tooltip",{attrs:{slot:"suffix"},slot:"suffix"},[t("a",{attrs:{href:e.officialWebsite+"/pages/b74542/#幂等id(idempotentId)",target:"_blank"}},[t("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.45)"},attrs:{type:"info-circle"}})],1)])],1),t("a-button",{staticStyle:{position:"absolute",margin:"3px 10px"},attrs:{type:"primary"},on:{click:e.idempotentIdGenerate}},[e._v(" 通过客户端生成 ")])],1),t("a-form-item",{attrs:{label:"业务编号"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["bizNo",{rules:[{required:!1,message:"请输入业务编号"}]}],expression:"['bizNo', { rules: [{ required: false, message: '请输入业务编号' }] }]"}],attrs:{name:"bizNo",placeholder:"请输入业务编号"}},[t("a-tooltip",{attrs:{slot:"suffix"},slot:"suffix"},[t("a",{attrs:{href:e.officialWebsite+"/pages/b74542/#业务编号(bizNo)",target:"_blank"}},[t("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.45)"},attrs:{type:"info-circle"}})],1)])],1)],1),t("a-form-item",{attrs:{label:"重试状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["retryStatus",{rules:[{required:!0,message:"请选择重试状态"}]}],expression:"['retryStatus', { rules: [{ required: true, message: '请选择重试状态' }] }]"}],attrs:{placeholder:"请选择重试状态"}},e._l(e.retryStatus,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(" "+e._s(a))])})),1)],1),t("a-form-item",{attrs:{label:"参数"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["argsStr",{rules:[{required:!0,message:"请输入参数"}]}],expression:"['argsStr', { rules: [{ required: true, message: '请输入参数' }] }]"}],attrs:{rows:"4",placeholder:"请输入参数"}})],1)],1)],1)],1)},u=[],d=a("ca00"),m={name:"SavRetryTask",props:{},data:function(){return{visible:!1,form:this.$form.createForm(this),formItemLayout:{labelCol:{lg:{span:6},sm:{span:7}},wrapperCol:{lg:{span:14},sm:{span:17}}},groupNameList:[],sceneList:[],retryStatus:{0:"重试中",1:"重试完成",2:"最大次数",3:"暂停"},officialWebsite:Object(d["a"])()}},methods:{handleOk:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||Object(i["M"])(a).then((function(e){t.form.resetFields(),t.$message.success("新增任务成功"),t.visible=!1,t.$emit("refreshTable",1)}))}))},handleChange:function(e){var t=this;Object(i["z"])({groupName:e}).then((function(e){t.sceneList=e.data}))},isShow:function(e,t){var a=this;this.visible=e,Object(i["j"])().then((function(e){a.groupNameList=e.data}))},idempotentIdGenerate:function(){var e=this,t=this.form.getFieldValue("groupName"),a=this.form.getFieldValue("sceneName"),r=this.form.getFieldValue("executorName"),s=this.form.getFieldValue("argsStr");Object(i["E"])({groupName:t,sceneName:a,executorName:r,argsStr:s}).then((function(t){e.form.setFieldsValue({idempotentId:t.data})}))}}},f=m,p=a("2877"),h=Object(p["a"])(f,c,u,!1,null,"059a48c0",null),y=h.exports,v=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{visible:e.visible,title:"批量更新",width:"800px"},on:{ok:e.handleOk,cancel:function(t){e.visible=!1}}},[t("a-form",e._b({attrs:{form:e.form},on:{submit:e.handleOk}},"a-form",e.formItemLayout,!1),[t("a-alert",{attrs:{message:"批量更新只根据选择的数据进行更新, 请操作前确认您的选择的数据是否正确?",banner:""}}),t("a-form-item",{attrs:{label:"执行器名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorName",{rules:[{required:!1,message:"请输入执行器名称"}]}],expression:"['executorName', { rules: [{ required: false, message: '请输入执行器名称' }] }]"}],attrs:{name:"executorName",placeholder:"请输入执行器名称"}})],1),t("a-form-item",{attrs:{label:"重试状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["retryStatus",{rules:[{required:!1,message:"请选择重试状态"}]}],expression:"['retryStatus', { rules: [{ required: false, message: '请选择重试状态' }] }]"}],attrs:{placeholder:"请选择重试状态"}},e._l(e.retryStatus,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(" "+e._s(a))])})),1)],1)],1)],1)],1)},g=[],b={name:"BatchUpdateRetryTaskInfo",props:{},data:function(){return{visible:!1,form:this.$form.createForm(this),formItemLayout:{labelCol:{lg:{span:6},sm:{span:7}},wrapperCol:{lg:{span:14},sm:{span:17}}},groupNameList:[],sceneList:[],retryStatus:{0:"重试中",1:"重试完成",2:"最大次数",3:"暂停"},groupName:"",ids:[]}},methods:{handleOk:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){if(!e){if(void 0===a["executorName"]&&void 0===a["retryStatus"])return void t.$message.error("无需要更新的内容, 请填写任意一项");a["groupName"]=t.groupName,a["ids"]=t.ids,Object(i["e"])(a).then((function(e){t.$emit("refreshTable",1),t.form.resetFields(),t.$message.success("更新任务成功"),t.visible=!1}))}}))},isShow:function(e,t,a){this.visible=e,this.groupName=t[0].groupName,this.ids=a}}},k=b,_=Object(p["a"])(k,v,g,!1,null,"14d86acc",null),w=_.exports,N=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{visible:e.visible,title:"新增任务",width:"800px"},on:{ok:e.handleOk,cancel:function(t){e.visible=!1}}},[t("a-form",e._b({attrs:{form:e.form},on:{submit:e.handleOk}},"a-form",e.formItemLayout,!1),[t("a-form-item",{attrs:{label:"组"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["groupName",{rules:[{required:!0,message:"请选择组"}]}],expression:"['groupName', { rules: [{ required: true, message: '请选择组' }] }]"}],attrs:{placeholder:"请选择组"},on:{change:function(t){return e.handleChange(t)}}},e._l(e.groupNameList,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(a))])})),1)],1),t("a-form-item",{attrs:{label:"重试状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["retryStatus",{rules:[{required:!0,message:"请选择重试状态"}]}],expression:"['retryStatus', { rules: [{ required: true, message: '请选择重试状态' }] }]"}],attrs:{placeholder:"请选择重试状态"}},e._l(e.retryStatus,(function(a,r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(" "+e._s(a))])})),1)],1),t("a-form-item",{attrs:{label:"日志信息"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["logStr",{rules:[{required:!0,message:"请输入包含<|>参数<|>的日志信息."},{validator:e.handleLogStr}],validateTrigger:"change"}],expression:"['logStr', { rules: [{ required: true, message: '请输入包含<|>参数<|>的日志信息.' }, { validator: handleLogStr }], validateTrigger: 'change' }]"}],attrs:{rows:"4","allow-clear":"",placeholder:"请输入日志信息"}}),t("a",{attrs:{href:e.officialWebsite+"/pages/b74542/#如何获取日志信息",target:"_blank"}},[e._v(" 获取日志信息？")])],1)],1)],1)],1)},S=[],I=(a("ac1f"),{name:"SavRetryTask",props:{},data:function(){return{visible:!1,form:this.$form.createForm(this),formItemLayout:{labelCol:{lg:{span:6},sm:{span:7}},wrapperCol:{lg:{span:14},sm:{span:17}}},groupNameList:[],sceneList:[],retryStatus:{0:"重试中",1:"重试完成",2:"最大次数",3:"暂停"},officialWebsite:Object(d["a"])()}},methods:{handleOk:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||Object(i["d"])(a).then((function(e){t.form.resetFields(),t.$message.success("新增任务成功"),t.visible=!1,t.$emit("refreshTable",1)}))}))},handleChange:function(e){var t=this;Object(i["z"])({groupName:e}).then((function(e){t.sceneList=e.data}))},isShow:function(e,t){var a=this;this.visible=e,Object(i["j"])().then((function(e){a.groupNameList=e.data}))},handleLogStr:function(e,t,a){if(!t)return a();var r,s=/<\|>(.*?)<\|>/g,n=0;while(null!==(r=s.exec(t))){r[1];n++}return 0===n?a(new Error("未包含<|>")):n>500?a(new Error("最多只能提交500个有效数据")):a()}}}),x=I,T=Object(p["a"])(x,N,S,!1,null,"063d9c42",null),q=T.exports,R=a("99f5"),$={name:"RetryTask",components:{Drawer:l["c"],RetryTaskInfo:R["default"],AInput:o["a"],ATextarea:n["a"],STable:l["i"],SaveRetryTask:y,BatchUpdateRetryTaskInfo:w,BatchSaveRetryTask:q},data:function(){var e=this;return{currentComponet:"List",record:"",mdl:{},visible:!1,advanced:!1,queryParam:{},retryStatus:{0:{name:"处理中",color:"#9c1f1f"},1:{name:"处理成功",color:"#f5a22d"},2:{name:"最大次数",color:"#68a5d0"},3:{name:"暂停",color:"#f52d8e"}},taskType:{1:{name:"重试数据",color:"#d06892"},2:{name:"回调数据",color:"#f5a22d"}},columns:[{title:"UniqueId",dataIndex:"uniqueId",fixed:"left",scopedSlots:{customRender:"uniqueId"}},{title:"组名称",dataIndex:"groupName",ellipsis:!0,width:"10%"},{title:"场景名称",dataIndex:"sceneName",width:"10%"},{title:"幂等id",dataIndex:"idempotentId",width:"10%"},{title:"业务编号",dataIndex:"bizNo",width:"10%"},{title:"下次触发时间",dataIndex:"nextTriggerAt",needTotal:!1,width:"10%"},{title:"次数",dataIndex:"retryCount",sorter:!0,width:"6%"},{title:"重试状态",dataIndex:"retryStatus",scopedSlots:{customRender:"retryStatus"},width:"5%"},{title:"任务类型",dataIndex:"taskType",scopedSlots:{customRender:"taskType"},width:"5%"},{title:"更新时间",dataIndex:"updateDt",sorter:!0,width:"10%"},{title:"操作",fixed:"right",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],loadData:function(t){return Object(i["y"])(Object.assign(t,e.queryParam)).then((function(e){return e}))},selectedRowKeys:[],selectedRows:[],options:{alert:{show:!0,clear:function(){e.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},optionAlertShow:!1,groupNameList:[],sceneList:[],openDrawer:!1,currentShowRecord:null}},created:function(){var e=this;Object(i["j"])().then((function(t){e.groupNameList=t.data,null!==e.groupNameList&&e.groupNameList.length>0&&(e.queryParam["groupName"]=e.groupNameList[0],e.$refs.table.refresh(!0),e.handleChange(e.groupNameList[0]))}))},methods:{resetFiled:function(){this.queryParam={},this.sceneList=[]},handleNew:function(){this.$refs.saveRetryTask.isShow(!0,null)},handleBatchNew:function(){this.$refs.batchSaveRetryTask.isShow(!0,null)},handleChange:function(e){var t=this;Object(i["z"])({groupName:e}).then((function(e){t.sceneList=e.data}))},toggleAdvanced:function(){this.advanced=!this.advanced},handleInfo:function(e){e=e||this.currentShowRecord,this.$router.push({path:"/retry/info",query:{id:e.id,groupName:e.groupName}})},handleOk:function(e){},handleSuspend:function(e){var t=this;Object(i["R"])({id:e.id,groupName:e.groupName,retryStatus:3}).then((function(e){var a=e.status;0===a?t.$message.error("暂停失败"):(t.$refs.table.refresh(!0),t.$message.success("暂停成功"))}))},handleRecovery:function(e){var t=this;Object(i["R"])({id:e.id,groupName:e.groupName,retryStatus:0}).then((function(e){var a=e.status;0===a?t.$message.error("恢复失败"):(t.$refs.table.refresh(!0),t.$message.success("恢复成功"))}))},handleFinish:function(e){var t=this;Object(i["R"])({id:e.id,groupName:e.groupName,retryStatus:1}).then((function(e){var a=e.status;0===a?t.$message.error("执行失败"):(t.$refs.table.refresh(!0),t.$message.success("执行成功"))}))},handleTrigger:function(e){var t=this;1===e.taskType?Object(i["G"])({groupName:e.groupName,uniqueIds:[e.uniqueId]}).then((function(e){var a=e.status;0===a?t.$message.error("执行失败"):(t.$refs.table.refresh(!0),t.$message.success("执行成功"))})):Object(i["F"])({groupName:e.groupName,uniqueIds:[e.uniqueId]}).then((function(e){var a=e.status;0===a?t.$message.error("执行失败"):(t.$refs.table.refresh(!0),t.$message.success("执行完成"))}))},refreshTable:function(e){this.$refs.table.refresh(!0)},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},handlerDel:function(){this.$createElement;var e=this;this.$confirm({title:"您要删除这些数据吗?",content:function(e){return e("div",{style:"color:red;"},["删除后数据不可恢复，请确认!"])},onOk:function(){Object(i["c"])({groupName:e.selectedRows[0].groupName,ids:e.selectedRowKeys}).then((function(t){e.$refs.table.refresh(!0),e.$message.success("成功删除".concat(t.data,"条数据")),e.selectedRowKeys=[]}))},onCancel:function(){},class:"test"})},onClick:function(e){var t=e.key;"2"!==t?"1"===t&&this.handlerDel():this.$refs.batchUpdateRetryTaskInfo.isShow(!0,this.selectedRows,this.selectedRowKeys)},handlerOpenDrawer:function(e){var t=this;this.currentShowRecord=e,this.openDrawer=!0,setTimeout((function(){t.$refs.retryTaskInfoRef.getRetryTaskById(e.id,e.groupName)}),200)},onClose:function(){this.openDrawer=!1,this.currentShowRecord=null}}},L=$,O=Object(p["a"])(L,r,s,!1,null,null,null);t["default"]=O.exports}}]);