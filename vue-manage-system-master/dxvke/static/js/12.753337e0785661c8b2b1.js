webpackJsonp([12],{1019:function(t,e,i){e=t.exports=i(86)(void 0),e.push([t.i,".el-button--small{border-radius:0}",""])},1020:function(t,e,i){e=t.exports=i(86)(void 0),e.push([t.i,"ul[data-v-2a9cd3ca]{list-style:none}.ms-doc[data-v-2a9cd3ca]{max-width:980px;background-color:#fff;padding:40px;color:#54667a;margin-bottom:54px}.ms-doc_main[data-v-2a9cd3ca]{padding:20px;border-top:1px solid #e9f1f3}.lead_out img[data-v-2a9cd3ca]{margin:0 10px -3px 0;width:16px;height:18px}.pro[data-v-2a9cd3ca]{color:#0f8edd;padding:0 10px}.proB[data-v-2a9cd3ca]{border-left:1px solid #bfbfbf;border-right:1px solid #bfbfbf}.model_name[data-v-2a9cd3ca]{margin-right:10px}.model_ul[data-v-2a9cd3ca]{box-sizing:border-box;border-bottom:1px solid #e9f1f3}.model_ul>li[data-v-2a9cd3ca]{font-size:0;border:1px solid #e9f1f3}.model_ul_left[data-v-2a9cd3ca]{width:150px;box-sizing:border-box;font-size:14px;display:inline-block;padding:20px;vertical-align:top}.model_ul_right[data-v-2a9cd3ca]{width:calc(100% - 150px);height:100%;box-sizing:border-box;display:inline-block;font-size:14px;border-left:1px solid #e9f1f3}",""])},1056:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{staticStyle:{"font-size":"24px","margin-left":"20px"}},[t._v("用户组管理")])],1)],1),t._v(" "),i("div",{staticClass:"ms-doc"},[i("el-button",{staticStyle:{"margin-bottom":"14px"},attrs:{type:"primary",round:""},on:{click:function(e){t.handleClick()}}},[t._v("添加用户组\n          ")]),t._v(" "),i("div",{staticClass:"ms-doc_main"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.groupList,border:""}},[i("el-table-column",{attrs:{prop:"title",label:"用户组名"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticClass:"pro",attrs:{type:"text",size:"small"},on:{click:function(i){t.handleClick(e.row.id,e.row.title)}}},[t._v("修改\n                          ")]),t._v(" "),i("el-button",{staticClass:"pro proB",attrs:{type:"text",size:"small"},on:{click:function(i){t.del(e.row.id)}}},[t._v("删除\n                          ")]),t._v(" "),i("el-button",{staticClass:"pro",attrs:{type:"text",size:"small"},on:{click:function(i){t.operate(e.row.id)}}},[t._v("分配权限\n                          ")]),t._v(" "),i("el-button",{staticClass:"pro",staticStyle:{"border-left":"1px solid #bfbfbf"},attrs:{type:"text",size:"small"},on:{click:function(i){t.addMember(e.row.id)}}},[t._v("添加成员\n                          ")])]}}])})],1)],1)],1),t._v(" "),i("el-dialog",{staticStyle:{width:"1000px",margin:"100px auto"},attrs:{title:t.title,visible:t.dialogVisible,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",[i("p",[i("span",{staticClass:"model_name"},[t._v("用户组名:")]),t._v(" "),i("el-input",{staticStyle:{width:"150px",margin:"10px 0 20px"},model:{value:t.group_name,callback:function(e){t.group_name=e},expression:"group_name"}})],1)]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addGroup()}}},[t._v("确 定")])],1)]),t._v(" "),i("el-dialog",{staticStyle:{"min-width":"1300px"},attrs:{title:"分配权限",visible:t.dialogVisible2,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible2=e}}},[i("div",{staticStyle:{"font-size":"14px",color:"#54667a","max-height":"500px"}},[i("ul",{staticClass:"model_ul"},t._l(t.allotRule,function(e){return i("li",[i("div",{staticClass:"model_ul_left"},[i("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.have_rule,callback:function(e){t.have_rule=e},expression:"have_rule"}},[i("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.title)+"\n                              ")])],1)],1),t._v(" "),i("div",{staticClass:"model_ul_right"},t._l(e._data,function(e){return i("ul",{staticStyle:{padding:"5px",border:"1px solid #e9f1f3",margin:"10px 10px"}},[i("li",{staticStyle:{display:"inline-block","font-size":"0px"}},[i("div",{staticClass:"model_ul_left",staticStyle:{"border-right":"1px solid #e9f1f3"}},[i("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.have_rule,callback:function(e){t.have_rule=e},expression:"have_rule"}},[i("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.title)+"\n                                         ")])],1)],1),t._v(" "),i("div",{staticClass:"model_ul_right"},[i("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.have_rule,callback:function(e){t.have_rule=e},expression:"have_rule"}},t._l(e._data,function(e){return i("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.title)+"\n                                          ")])}))],1)])])}))])}))]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible2=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary"},on:{click:function(e){t.save()}}},[t._v("保存")])],1)]),t._v(" "),i("el-dialog",{staticStyle:{"min-width":"1300px"},attrs:{title:"添加成员",visible:t.dialogVisible3,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible3=e}}},[i("div",{staticStyle:{"font-size":"14px",color:"#54667a","max-height":"500px"}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection"}}),t._v(" "),i("el-table-column",{attrs:{prop:"username",label:"用户名","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticClass:"pro",attrs:{type:"text",size:"small"},on:{click:function(i){t.toAdd(e.row.id)}}},[t._v("添加\n                          ")])]}}])})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.saveAdd()}}},[t._v("批量添加")])],1)])],1)},staticRenderFns:[]}},1084:function(t,e,i){var a=i(1019);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(196)("9301f654",a,!0)},1085:function(t,e,i){var a=i(1020);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(196)("6367dee6",a,!0)},507:function(t,e,i){i(1085),i(1084);var a=i(197)(i(989),i(1056),"data-v-2a9cd3ca",null);t.exports=a.exports},989:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{dialogVisible:!1,dialogVisible2:!1,dialogVisible3:!1,groupList:[],group_name:"",id:"",allotRule:[],have_rule:[],isIndeterminate:!0,list:[],multipleSelection:[],ids:[],title:"添加用户组"}},methods:{getGroup:function(){var t=this;this.$ajax.post("/api/Rule/group").then(function(e){"200"==e.data.code&&(t.groupList=e.data.data.group_list)},function(t){console.log(t)})},addGroup:function(){var t=this;if(void 0===this.group_name||0==this.group_name.length)return void this.$message({message:"用户组名不能为空",type:"error"});this.$ajax.post("/api/Rule/editGroup",{id:this.id,group_name:this.group_name}).then(function(e){"200"==e.data.code?(t.dialogVisible=!1,t.groupList=e.data.data.group_list,t.$message({message:e.data.data.message,type:"success"}),t.getGroup()):t.$message({message:e.data.error,type:"error"})},function(t){console.log(t)})},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},modify:function(){this.dialogVisible=!0},handleClick:function(t,e){t?(this.title="修改用户组",this.id=t,this.group_name=e,this.dialogVisible=!0):(this.title="添加用户组",this.group_id="",this.group_name="",this.dialogVisible=!0)},del:function(t){var e=this;this.$confirm("此操作将永久删除该分组, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$ajax.post("/api/Rule/delGroup",{id:t}).then(function(t){"200"==t.data.code?(e.$message({message:t.data.data.message,type:"success"}),e.getGroup()):e.$message({message:t.data.error,type:"error"})},function(t){console.log(t)})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},operate:function(t){var e=this;this.id=t,this.dialogVisible2=!0,this.$ajax.get("/api/Rule/allotRule",{params:{group_id:t}}).then(function(t){"200"==t.data.code&&(e.allotRule=t.data.data.rule_list,e.have_rule=t.data.data.have_rule)},function(t){console.log(t)})},save:function(){var t=this;console.log(this.have_rule),this.$ajax.post("/api/Rule/allotRule",{group_id:this.id,rule_id:this.have_rule}).then(function(e){"200"==e.data.code?(t.id="",t.dialogVisible2=!1,t.$message({message:e.data.data.message,type:"success"})):(t.id="",t.dialogVisible2=!1)},function(t){console.log(t)})},addMember:function(t){var e=this;this.id=t,this.dialogVisible3=!0,this.$ajax.post("/api/Rule/searchUser",{group_id:t}).then(function(t){"200"==t.data.code&&(e.list=t.data.data.admin)},function(t){console.log(t)})},toAdd:function(t){var e=this;this.$ajax.post("/api/Rule/doAdduser",{admin_id:t,group_id:this.id}).then(function(t){"200"==t.data.code?(e.$message({message:t.data.data.message,type:"success"}),e.addMember(e.id)):console.log(t.data.error)},function(t){console.log(t)})},saveAdd:function(){var t=this;this.$ajax.post("/api/Rule/doAdduser",{admin_id:this.ids,group_id:this.id}).then(function(e){"200"==e.data.code?(t.$message({message:e.data.data.message,type:"success"}),t.addMember(t.id)):console.log(e.data.error)},function(t){console.log(t)})},handleSelectionChange:function(t){this.multipleSelection=t;var e=[];this.multipleSelection.map(function(t){e.push(t.id)}),this.ids=e}},mounted:function(){},created:function(){this.getGroup()}}}});