webpackJsonp([21],{1001:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{config:{id:"",rate:"",url:"",day_limit:"",month_limit:"",exchange_brief:""}}},methods:{getAcerConfig:function(){var t=this;this.$ajax.get("/api/Acer/acerConfig").then(function(e){"200"==e.data.code&&(t.config=e.data.data.config)},function(t){console.log(t)})},save:function(){var t=this;this.$ajax.post("/api/Acer/acerConfig",this.config).then(function(e){"200"==e.data.code?t.$message({message:e.data.data.message,type:"success"}):t.$message({message:e.data.error,type:"error"})},function(t){console.log(t)})}},mounted:function(){},created:function(){this.getAcerConfig()}}},1047:function(t,e,i){e=t.exports=i(86)(void 0),e.push([t.i,".ms-doc[data-v-f11596b6]{max-width:980px;background-color:#fff;padding:40px;color:#54667a;margin-bottom:54px}.ms-doc_main[data-v-f11596b6]{padding:20px;border-top:1px solid #e9f1f3}.lead_out img[data-v-f11596b6]{margin:0 10px -3px 0;width:16px;height:18px}",""])},1077:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{staticStyle:{"font-size":"24px","margin-left":"20px"}},[t._v("积分管理")])],1)],1),t._v(" "),i("div",{staticClass:"ms-doc"},[i("div",{staticClass:"ms-doc_main"},[i("p",[t._v("积分汇率（元宝汇率）")]),t._v(" "),i("el-input",{staticStyle:{width:"200px",margin:"20px 20px 20px 0"},attrs:{placeholder:"请输入最低积分"},model:{value:t.config.rate,callback:function(e){t.$set(t.config,"rate",e)},expression:"config.rate"}}),t._v("\n            积分=1元\n            "),i("p",[t._v("获取积分途径")]),t._v(" "),i("el-input",{staticStyle:{width:"300px",margin:"20px 20px 20px 0"},attrs:{placeholder:"请输入链接"},model:{value:t.config.url,callback:function(e){t.$set(t.config,"url",e)},expression:"config.url"}},[i("template",{slot:"prepend"},[t._v("http://")])],2),t._v("\n            积分=1元\n            "),i("p",{staticStyle:{"margin-bottom":"30px"}},[t._v("注：选填项，当用户积分不足时，可跳转至此链接页面，不填则无配置")]),t._v(" "),i("p",[t._v("每日支出上线")]),t._v(" "),i("el-input",{staticStyle:{width:"200px",margin:"20px 20px 20px 0"},attrs:{placeholder:"请输入数值"},model:{value:t.config.day_limit,callback:function(e){t.$set(t.config,"day_limit",e)},expression:"config.day_limit"}}),t._v("元\n            "),i("p",{staticStyle:{"margin-bottom":"30px"}},[t._v("注：选填项，平台每日可消耗的最高金额上限，不填则默认无限制")]),t._v(" "),i("p",[t._v("每月支出上线")]),t._v(" "),i("el-input",{staticStyle:{width:"200px",margin:"20px 20px 20px 0"},attrs:{placeholder:"请输入最低积分"},model:{value:t.config.month_limit,callback:function(e){t.$set(t.config,"month_limit",e)},expression:"config.month_limit"}}),t._v("元\n            "),i("p",{staticStyle:{"margin-bottom":"30px"}},[t._v("注：选填项，平台每月可消耗的最高金额上限，不填则默认无限制")])],1),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("el-button",{attrs:{type:"primary",round:""},on:{click:function(e){t.save()}}},[t._v("确认\n            ")])],1)])])},staticRenderFns:[]}},1112:function(t,e,i){var a=i(1047);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(196)("1d7bc8df",a,!0)},519:function(t,e,i){i(1112);var a=i(197)(i(1001),i(1077),"data-v-f11596b6",null);t.exports=a.exports}});