(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21492311"],{"8f70":function(e,t,n){"use strict";n("99af");var o=function(){var e=this,t=e._self._c;return t("iframe",{ref:"iframe",style:"width: 100%;height:calc(99vh - 60px)",attrs:{src:"".concat("production"===e.mode?e.baseUrl:"","/lib/index.html?id=").concat(e.id,"&mode=").concat(e.mode,"&x1c2Hdd6=").concat(e.value),marginwidth:"0",frameborder:"no"}})},s=[],a=n("53ca"),i={name:"WorkFlow",components:{},props:{value:{type:String,default:""}},data:function(){return{id:"",mode:"production",baseUrl:"/easy-retry"}},mounted:function(){this.id=this.$route.query.id},created:function(){window.addEventListener("message",this.handleMessage,!1)},destroyed:function(){window.removeEventListener("message",this.handleMessage)},methods:{save:function(){window.removeEventListener("message",this.handleMessage),this.$message.info("工作流新增成功"),this.$router.push({path:"/job/workflow/list"})},cancel:function(){window.removeEventListener("message",this.handleMessage),this.$router.push({path:"/job/workflow/list"})},update:function(){this.$message.info("工作流修改成功"),this.$router.push({path:"/job/workflow/list"})},handleMessage:function(e){"object"===Object(a["a"])(e.data)&&("SV5ucvLBhvFkOftb"===e.data.code?this.save():"kb4DO9h6WIiqFhbp"===e.data.code?this.cancel():"8Rr3XPtVVAHfduQg"===e.data.code&&this.update())}}},r=i,c=(n("a3be"),n("2877")),d=Object(c["a"])(r,o,s,!1,null,null,null);t["a"]=d.exports},a3be:function(e,t,n){"use strict";n("f945")},e9f5:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("work-flow",{attrs:{value:"wA4wN1nZ"}})},s=[],a=n("8f70"),i={name:"WorkFlowEdit",components:{WorkFlow:a["a"]}},r=i,c=n("2877"),d=Object(c["a"])(r,o,s,!1,null,null,null);t["default"]=d.exports},f945:function(e,t,n){}}]);