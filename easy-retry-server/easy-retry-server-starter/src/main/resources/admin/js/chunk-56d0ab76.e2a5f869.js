(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56d0ab76","chunk-2d0aa660"],{"119c":function(t,e,a){"use strict";a.r(e);a("ac1f"),a("5319"),a("b0c0");var o=function(){var t=this,e=this,a=e._self._c;return a("div",[e.showHeader?a("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},on:{back:function(){return e.$router.replace("/job/batch/list")}}},[a("div")]):e._e(),null!==e.jobBatchInfo?a("a-card",{attrs:{bordered:!1}},[a("a-descriptions",{attrs:{title:"",column:e.column,bordered:""}},[a("a-descriptions-item",{attrs:{label:"组名称"}},[e._v(" "+e._s(e.jobBatchInfo.groupName)+" ")]),a("a-descriptions-item",{attrs:{label:"任务名称"}},[e._v(" "+e._s(e.jobBatchInfo.jobName)+" ")]),a("a-descriptions-item",{attrs:{label:"状态"}},[a("a-tag",{attrs:{color:e.taskBatchStatus[e.jobBatchInfo.taskBatchStatus].color}},[e._v(" "+e._s(e.taskBatchStatus[e.jobBatchInfo.taskBatchStatus].name)+" ")])],1),a("a-descriptions-item",{attrs:{label:"执行器类型"}},[a("a-tag",{attrs:{color:e.executorType[e.jobBatchInfo.executorType].color}},[e._v(" "+e._s(e.executorType[e.jobBatchInfo.executorType].name)+" ")])],1),a("a-descriptions-item",{attrs:{label:"操作原因"}},[a("a-tag",{attrs:{color:e.operationReason[e.jobBatchInfo.operationReason].color}},[e._v(" "+e._s(e.operationReason[e.jobBatchInfo.operationReason].name)+" ")])],1),a("a-descriptions-item",{attrs:{label:"开始执行时间"}},[e._v(" "+e._s(e.jobBatchInfo.executionAt)+" ")]),a("a-descriptions-item",{attrs:{label:"执行器名称",span:"4"}},[e._v(" "+e._s(e.jobBatchInfo.executorInfo)+" ")]),a("a-descriptions-item",{attrs:{label:"创建时间"}},[e._v(" "+e._s(e.jobBatchInfo.createDt)+" ")])],1)],1):e._e(),a("div",{staticStyle:{margin:"20px 0","border-left":"#f5222d 5px solid","font-size":"medium","font-weight":"bold"}},[a("span",{staticStyle:{"padding-left":"18px"}},[e._v("任务项列表")]),a("span",{staticStyle:{"padding-left":"18px"}},[a("a-icon",{attrs:{type:"sync"},on:{click:function(){return t.$refs.JobTaskListRef.refreshTable(t.queryParam)}}})],1)]),a("JobTaskList",{ref:"JobTaskListRef"})],1)},r=[],n=(a("a9e3"),a("3b7a")),s=a("c1df"),c=a.n(s),i=a("38b7"),l=a.n(i),u=a("36e8"),d={name:"JobInfo",components:{JobTaskList:u["default"]},props:{showHeader:{type:Boolean,default:!0},column:{type:Number,default:3}},data:function(){return{jobBatchInfo:null,taskBatchStatus:l.a.taskBatchStatus,operationReason:l.a.operationReason,taskType:l.a.taskType,triggerType:l.a.triggerType,blockStrategy:l.a.blockStrategy,executorType:l.a.executorType,queryParam:{}}},created:function(){var t=this.$route.query.id,e=this.$route.query.groupName;t&&e?this.jobBatchDetail(t):this.showHeader&&this.$router.push({path:"/404"})},methods:{parseDate:function(t){return c()(t).format("YYYY-MM-DD HH:mm:ss")},jobBatchDetail:function(t){var e=this;Object(n["g"])(t).then((function(a){e.jobBatchInfo=a.data,e.queryParam={groupName:e.jobBatchInfo.groupName,taskBatchId:t,startId:0,fromIndex:0},e.$refs.JobTaskListRef.refreshTable(e.queryParam)}))}}},h=d,f=a("2877"),p=Object(f["a"])(h,o,r,!1,null,"14ced32a",null);e["default"]=p.exports},"29e5":function(t,e,a){"use strict";a.r(e);a("b0c0");var o=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"组名称"}},[e("a-select",{attrs:{placeholder:"请输入组名称"},on:{change:function(e){return t.handleChange(e)}},model:{value:t.queryParam.groupName,callback:function(e){t.$set(t.queryParam,"groupName",e)},expression:"queryParam.groupName"}},t._l(t.groupNameList,(function(a){return e("a-select-option",{key:a,attrs:{value:a}},[t._v(t._s(a))])})),1)],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"任务名称"}},[e("a-select",{attrs:{"show-search":"",placeholder:"请输入任务名称","default-active-first-option":!1,"show-arrow":!0,"filter-option":!1,"not-found-content":null,allowClear:""},on:{search:t.handleSearch,change:t.handleChange},model:{value:t.queryParam.jobId,callback:function(e){t.$set(t.queryParam,"jobId",e)},expression:"queryParam.jobId"}},t._l(t.jobNameList,(function(a,o){return e("a-select-option",{key:o,attrs:{value:a.id}},[t._v(" "+t._s(a.jobName)+" ")])})),1)],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"状态"}},[e("a-select",{attrs:{placeholder:"请选择状态",allowClear:""},model:{value:t.queryParam.taskBatchStatus,callback:function(e){t.$set(t.queryParam,"taskBatchStatus",e)},expression:"queryParam.taskBatchStatus"}},t._l(t.taskBatchStatus,(function(a,o){return e("a-select-option",{key:o,attrs:{value:o}},[t._v(" "+t._s(a.name))])})),1)],1)],1),t.advanced?void 0:t._e(),e("a-col",{attrs:{md:t.advanced?24:8,sm:24}},[e("span",{staticClass:"table-page-search-submitButtons",style:t.advanced&&{float:"right",overflow:"hidden"}||{}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return t.queryParam={}}}},[t._v("重置")]),e("a",{staticStyle:{"margin-left":"8px"},on:{click:t.toggleAdvanced}},[t._v(" "+t._s(t.advanced?"收起":"展开")+" "),e("a-icon",{attrs:{type:t.advanced?"up":"down"}})],1)],1)])],2)],1)],1),e("div",{staticClass:"table-operator"}),e("s-table",{ref:"table",attrs:{size:"default",rowKey:function(t){return t.id},columns:t.columns,data:t.loadData,alert:t.options.alert,rowSelection:t.options.rowSelection,scroll:{x:1500}},scopedSlots:t._u([{key:"serial",fn:function(a){return e("span",{},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.handlerOpenDrawer(a)}}},[t._v(t._s(a.id))])])}},{key:"taskBatchStatus",fn:function(a){return e("span",{},[e("a-tag",{attrs:{color:t.taskBatchStatus[a].color}},[t._v(" "+t._s(t.taskBatchStatus[a].name)+" ")])],1)}},{key:"operationReason",fn:function(a){return e("span",{},[t._v(" "+t._s(t.operationReason[a].name)+" ")])}},{key:"action",fn:function(a,o){return e("span",{},[[e("a",{on:{click:function(e){return t.handleInfo(o)}}},[t._v("详情")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{attrs:{title:"是否停止?","ok-text":"停止","cancel-text":"取消"},on:{confirm:function(e){return t.handleStop(o)}}},[1===o.taskBatchStatus||2===o.taskBatchStatus?e("a",{attrs:{href:"javascript:;"}},[t._v("停止")]):t._e()])]],2)}}])}),e("Drawer",{attrs:{title:"任务详情",placement:"right",width:800,visibleAmplify:!0,visible:t.openDrawer},on:{closeDrawer:t.onClose,handlerAmplify:t.handleInfo}},[e("job-batch-info",{ref:"jobBatchInfoRef",attrs:{showHeader:!1,column:2}})],1)],1)},r=[],n=a("261e"),s=a("27e3"),c=a("2af9"),i=a("3b7a"),l=a("0fea"),u=a("119c"),d=a("38b7"),h={name:"JobBatchList",components:{JobBatchInfo:u["default"],Drawer:c["c"],AInput:s["a"],ATextarea:n["a"],STable:c["i"]},data:function(){var t=this;return{currentComponet:"List",record:"",mdl:{},visible:!1,advanced:!1,queryParam:{jobId:null},taskBatchStatus:d.taskBatchStatus,operationReason:d.operationReason,columns:[{title:"ID",scopedSlots:{customRender:"serial"},fixed:"left"},{title:"组名称",dataIndex:"groupName",ellipsis:!0,width:"15%"},{title:"任务名称",dataIndex:"jobName",ellipsis:!0,width:"15%"},{title:"开始执行时间",dataIndex:"executionAt",width:"15%"},{title:"状态",dataIndex:"taskBatchStatus",scopedSlots:{customRender:"taskBatchStatus"},width:"5%"},{title:"操作原因",dataIndex:"operationReason",scopedSlots:{customRender:"operationReason"},width:"15%"},{title:"创建时间",dataIndex:"createDt",sorter:!0,width:"15%"},{title:"操作",fixed:"right",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],loadData:function(e){return Object(i["h"])(Object.assign(e,t.queryParam)).then((function(t){return t}))},selectedRowKeys:[],selectedRows:[],options:{alert:{show:!0,clear:function(){t.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},optionAlertShow:!1,groupNameList:[],jobNameList:[],openDrawer:!1,currentShowRecord:null}},created:function(){var t=this;Object(l["j"])().then((function(e){t.groupNameList=e.data}));var e=this.$route.query.jobId;Object(i["j"])({jobId:e}).then((function(a){t.jobNameList=a.data,e&&(t.queryParam["jobId"]=t.jobNameList[0].id,t.$refs.table.refresh(!0))}))},methods:{handleSearch:function(t){var e=this;Object(i["j"])({keywords:t,groupName:this.queryParam.groupName}).then((function(t){e.jobNameList=t.data}))},handleChange:function(t){},toggleAdvanced:function(){this.advanced=!this.advanced},handleInfo:function(t){t=t||this.currentShowRecord,this.$router.push({path:"/job/batch/info",query:{id:t.id,groupName:t.groupName}})},handleOk:function(t){},handleStop:function(t){var e=this;Object(i["o"])(t.id).then((function(t){var a=t.status;0===a?e.$message.error("停止失败"):(e.$refs.table.refresh(!0),e.$message.success("停止成功"))}))},refreshTable:function(t){this.$refs.table.refresh(!0)},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},handlerOpenDrawer:function(t){var e=this;this.currentShowRecord=t,this.openDrawer=!0,setTimeout((function(){e.$refs.jobBatchInfoRef.jobBatchDetail(t.id)}),200)},onClose:function(){this.openDrawer=!1,this.currentShowRecord=null}}},f=h,p=a("2877"),m=Object(p["a"])(f,o,r,!1,null,null,null);e["default"]=m.exports}}]);