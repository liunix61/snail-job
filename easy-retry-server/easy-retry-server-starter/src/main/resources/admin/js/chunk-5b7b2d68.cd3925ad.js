(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b7b2d68"],{"12b3":function(e,t){var a={sceneStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},backOffLabels:{1:{name:"延迟等级",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"},3:{name:"CRON表达式",color:"#e1f52d"},4:{name:"随机等待",color:"#a127f3"}},triggerInterval:{1:{name:"CRON表达式",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"}},notifyScene:{1:{name:"场景重试数量超过阈值",color:"#d06892"},2:{name:"场景重试失败数量超过阈值",color:"#f5a22d"},3:{name:"客户端上报失败",color:"#e1f52d"},4:{name:"客户端组件异常",color:"#a127f3"},5:{name:"任务重试失败数量超过阈值",color:"#f5a22d"},6:{name:"任务重试失败进入死信队列",color:"#f5a22d"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},notifyType:{1:{name:"钉钉通知",color:"#64a6ea"},2:{name:"邮箱通知",color:"#1b7ee5"},3:{name:"企业微信",color:"#0082EF"},4:{name:"飞书",color:"#087da1"}},rateLimiterStatus:{0:{name:"未启用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},notifyStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},idGenMode:{1:{name:"号段模式",color:"#1b7ee5"},2:{name:"雪花算法",color:"#087da1"}},groupStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},initScene:{0:{name:"否",color:"#9c1f1f"},1:{name:"是",color:"#f5a22d"}}};e.exports=a},"51b5":function(e,t,a){"use strict";a.r(t);a("b0c0");var n=function(){var e=this,t=e._self._c;return t("div",[t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"组名称"}},[t("a-select",{attrs:{placeholder:"请输入组名称",allowClear:""},on:{change:function(t){return e.handleChange(t)}},model:{value:e.queryParam.groupName,callback:function(t){e.$set(e.queryParam,"groupName",t)},expression:"queryParam.groupName"}},e._l(e.groupNameList,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(a))])})),1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"场景名称"}},[t("a-select",{attrs:{placeholder:"请选择场景名称",allowClear:""},model:{value:e.queryParam.sceneName,callback:function(t){e.$set(e.queryParam,"sceneName",t)},expression:"queryParam.sceneName"}},e._l(e.sceneList,(function(a){return t("a-select-option",{key:a.sceneName,attrs:{value:a.sceneName}},[e._v(" "+e._s(a.sceneName))])})),1)],1)],1)],t("a-col",{attrs:{md:e.advanced?24:8,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons",style:e.advanced&&{float:"right",overflow:"hidden"}||{}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.resetFiled}},[e._v("重置")])],1)])],2)],1)],1),t("div",{staticClass:"table-operator"},[t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.handleNew()}}},[e._v("新增")])],1),t("s-table",{ref:"table",attrs:{size:"default",rowKey:function(e){return e.id},columns:e.sceneColumns,data:e.loadData,alert:e.options.alert,rowSelection:e.options.rowSelection,scroll:{x:2e3}},scopedSlots:e._u([{key:"serial",fn:function(a,n){return t("span",{},[e._v(" "+e._s(n.id)+" ")])}},{key:"sceneStatus",fn:function(a){return t("span",{},[t("a-tag",{attrs:{color:e.sceneStatus[a].color}},[e._v(" "+e._s(e.sceneStatus[a].name)+" ")])],1)}},{key:"backOff",fn:function(a){return t("span",{},[t("a-tag",{attrs:{color:e.backOffLabels[a].color}},[e._v(" "+e._s(e.backOffLabels[a].name)+" ")])],1)}},{key:"triggerInterval",fn:function(a){return t("span",{},[t("a-tooltip",[t("template",{slot:"title"},[e._v(" "+e._s(a||"10s,15s,30s,35s,40s,50s,1m,2m,4m,6m,8m,10m,20m,40m,1h,2h,3h,4h,5h,6h,7h,8h,9h,10h,11h,12h")+" ")]),e._v(" "+e._s(a||"10s,15s,30s,35s,40s,50s,1m,2m,4m,6m,8m,10m,20m,40m,1h,2h,3h,4h,5h,6h,7h,8h,9h,10h,11h,12h")+" ")],2)],1)}},{key:"deadlineRequest",fn:function(a){return t("span",{},[e._v(" "+e._s(a)+"(ms) ")])}},{key:"executorTimeout",fn:function(a){return t("span",{},[e._v(" "+e._s(a)+"(s) ")])}},{key:"action",fn:function(a){return t("span",{},[[t("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")])]],2)}}])})],1)],1)},o=[],r=a("0fea"),s=a("2af9"),c=a("12b3"),l={name:"SceneList",components:{STable:s["i"]},data:function(){var e=this;return{sceneColumns:[{title:"组名",dataIndex:"groupName",key:"groupName",width:"10%",scopedSlots:{customRender:"groupName"}},{title:"场景名称",dataIndex:"sceneName",width:"10%"},{title:"场景状态",dataIndex:"sceneStatus",width:"10%",scopedSlots:{customRender:"sceneStatus"}},{title:"退避策略",dataIndex:"backOff",key:"backOff",width:"10%",scopedSlots:{customRender:"backOff"}},{title:"最大重试次数",dataIndex:"maxRetryCount",key:"maxRetryCount",width:"10%",scopedSlots:{customRender:"maxRetryCount"}},{title:"间隔时间",dataIndex:"triggerInterval",key:"triggerInterval",ellipsis:!0,width:"10%",scopedSlots:{customRender:"triggerInterval"}},{title:"调用链超时时间",dataIndex:"deadlineRequest",key:"deadlineRequest",width:"10%",scopedSlots:{customRender:"deadlineRequest"}},{title:"执行超时时间",dataIndex:"executorTimeout",key:"executorTimeout",width:"10%",scopedSlots:{customRender:"executorTimeout"}},{title:"创建时间",dataIndex:"createDt",key:"createDt",width:"10%"},{title:"更新时间",dataIndex:"updateDt",key:"updateDt",width:"10%"},{title:"描述",dataIndex:"description",key:"description",width:"10%",scopedSlots:{customRender:"description"}},{title:"操作",key:"action",fixed:"right",width:"180px",scopedSlots:{customRender:"action"}}],data:[],pagination:{},backOffLabels:c.backOffLabels,sceneStatus:c.sceneStatus,advanced:!1,queryParam:{},loadData:function(t){return Object(r["A"])(Object.assign(t,e.queryParam)).then((function(e){return e}))},selectedRowKeys:[],selectedRows:[],options:{alert:{show:!0,clear:function(){e.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},optionAlertShow:!1,groupNameList:[],sceneList:[]}},created:function(){var e=this;Object(r["j"])().then((function(t){e.groupNameList=t.data}))},methods:{resetFiled:function(){this.queryParam={},this.sceneList=[]},handleNew:function(){this.$router.push({path:"/retry/scene/config"})},handleEdit:function(e){this.$router.push({path:"/retry/scene/config",query:{id:e.id}})},handleChange:function(e){var t=this;e?Object(r["z"])({groupName:e}).then((function(e){t.sceneList=e.data})):this.sceneList=[]}}},i=l,d=a("2877"),u=Object(d["a"])(i,n,o,!1,null,"13bd8752",null);t["default"]=u.exports}}]);