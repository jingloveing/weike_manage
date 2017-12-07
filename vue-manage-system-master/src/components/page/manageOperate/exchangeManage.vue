<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size: 24px;margin-left: 20px;">兑换商城管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <p class="m_title">商品列表</p>
            <div class="ms-doc_main">
                <div>
                    <el-button type="primary" style="background-color: #0f8edd;border-color: #0f8edd;" @click="dialogVisible = true">添加商品</el-button>
                    <el-select v-model="value1" placeholder="类型"  style="width: 160px;margin:0 20px;" >
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="状态"  style="width: 160px;margin-right: 20px;" >
                        <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" style="background-color: #0f8edd;border-color: #0f8edd;" @click="getGoodsList()">筛选</el-button>
                </div>
                <el-table
                    ref="multipleTable"
                    :data="goodsList"
                    tooltip-effect="dark"
                    style="width: 100%;text-align: center;margin: 20px 0;"
                    border
                    height="480"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                        type="selection"
                        width="50" height="95">
                    </el-table-column>
                    <el-table-column
                        label="商品" height="95" width="110">
                        <template slot-scope="scope">
                            <img :src="scope.row.product_image" alt="" style="width:76px;height:76px;margin-top: 5px;">
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="标题"
                        width="150"
                        show-overflow-tooltip>
                        <template slot-scope="scope">{{ scope.row.product_name }}</template>
                    </el-table-column>
                    <el-table-column
                        prop="market_price"
                        label="市场价/元"  width="100">
                    </el-table-column>
                    <el-table-column
                        prop="exchange_acer"
                        label="元宝兑换价/个"
                        show-overflow-tooltip width="130">
                    </el-table-column>
                    <el-table-column
                        prop="stock"
                        label="库存量"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="类型"
                        show-overflow-tooltip>
                        <template slot-scope="scope">
                            <span v-text="scope.row.product_type==1?'虚拟':'实物'"></span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="状态"
                        show-overflow-tooltip>
                        <template slot-scope="scope">
                            <span v-text="scope.row.is_sale==1?'上架':'未上架'"></span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作" width="140">
                        <!--上架---下架-->
                        <template slot-scope="scope">
                            <el-button @click="edit(scope.row.product_id)" type="text" size="small" class="pros">编辑</el-button>
                            <el-button @click="change(scope.row.product_id,scope.row.is_sale)" type="text" size="small" class="pros" v-text="scope.row.is_sale==1?'下架':'上架'">上架</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: center;">
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;" @click="changeAll(1)">一键上架</el-button>
                    <el-button type="danger" round @click="changeAll(2)">一键下架</el-button>
                </div>
            </div>
        </div>
        <div class="ms-doc sort">
            <p class="m_title">兑换说明</p>
            <div class="ms-doc_main">
                   <div>兑换页说明</div>
                <el-input
                    type="textarea"
                    :rows="6"
                    placeholder="请输入说明内容"
                    v-model="exchangeBrief" style="width: 488px;margin: 20px 20px 20px 0;">
                </el-input>
                <pre style="font-size: 14px;color: #a6b7bf;display: inline-block;padding-bottom: 50px;">例如：
    成功提交后奖品将在1~3个工作日内发送至提交账户内。
    实物奖品将在1~3个工作日内发货。请耐心等待并在我的兑换内查看。
                </pre>
                <div style="text-align: center;">
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;" @click="saveBrief()">保存</el-button>

                </div>
            </div>
        </div>
        <!--添加商品弹出框-->
        <el-dialog
            title="添加兑换商品"
            :visible.sync="dialogVisible"
            :before-close="handleClose">
            <div>
               <p class="model_title">1.商城页展示图 <small>尺寸建议：主图300*200像素，详情图680*454像素；类型要求：jpg,png,3M内大小。</small></p>
                <div class="imgList">
                    <div class="tab">
                        <input id="file1" type="file"  style="display: none" @change="uploadImg1($event)" multiple accept="image/*">
                        <label for="file1" style="display: inline-block;"><img :src="imgUrl1" alt="" style=" width: 128px;height: 130px;"></label>
                    </div>
                    <el-upload
                        name="images"
                        :action="upload()"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove" style="float: left;">
                        <img src="/static/img/exchange_add_img2.png" alt="" style=" width: 128px;height: 130px;">
                    </el-upload>
                </div>
               <div style="font-size: 0;overflow: hidden;">
                   <div style="width: 40%;float: left;">
                       <p class="model_title">2.商品价格及数量</p>
                       <p class="model_name">市场价值/元</p>
                       <el-input v-model="input" style="width: 180px;margin: 10px 0 20px;"></el-input>
                       <p class="model_name">元宝兑换价/个</p>
                       <el-input v-model="input" style="width: 180px;margin: 10px 0 20px;"></el-input>
                       <p class="model_name">上传数量/件</p>
                       <el-input v-model="input" style="width: 180px;margin: 10px 0 20px;"></el-input>
                   </div>
                   <div style="width: 60%;float: right;">
                       <p class="model_title">3.商品详情</p>
                      <div style="display: inline-block;margin-right: 10px;">
                          <p class="model_name" >商品名称 </p>
                          <el-input v-model="input" style="width: 180px;margin: 10px 0 20px;"></el-input>
                      </div>
                       <div style="display: inline-block;">
                           <p class="model_name">商品类型</p>
                           <el-select v-model="value3" placeholder="请选择"  style="width: 180px;margin: 10px 0 20px;" >
                               <el-option
                                   v-for="item in options3"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                               </el-option>
                           </el-select>
                       </div>
                       <p class="model_name">商品详细介绍</p>
                       <el-input
                           type="textarea"
                           :rows="6"
                           placeholder="请输入说明内容"
                           v-model="des" style="width: 100%;margin: 10px 0 20px;">
                       </el-input>
                   </div>
               </div>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible= false" style="background-color: #0f8edd;border-color: #0f8edd;">保存</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                goodsList:[],
                exchangeBrief:'',
                dialogImageUrl: '',
                dialogVisible:false,
                input:'',
                options1: [
                    {
                    value: '0',
                    label: '全部'
                },
                    {
                        value: '1',
                        label: '虚拟'
                    },{
                        value: '2',
                        label: '实物'
                    }
                ],
                value1:'0',
                options2: [
                    {
                    value: '0',
                    label: '全部'
                },{
                    value: '1',
                    label: '上架'
                }, {
                    value: '选项3',
                    label: '未上架'
                }
                ],
                value2:'0',
                dateValue1:'',
                product_id: [],
                des:'',
                options3: [
                    {
                 value: '选项1',
                 label: '选择类型'
             }, {
                 value: '选项2',
                 label: '虚拟-提现'
             }, {
                 value: '选项3',
                 label: '虚拟-充值'
             }, {
                 value: '选项3',
                 label: '实物'
             }
             ],
                value3:'选择类型',
                imgUrl1:'/static/img/exchange_add_img1.png',
            }
        },
        methods: {
            //      获取商品列表列表
            getGoodsList: function () {
                this.$ajax.post('/api/Acerstore/acerList',{product_type:this.value1,is_sale:this.value2}).then((res) => {
                    if (res.data.code == '200') {
                        this.goodsList = res.data.data.acer_list.data
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //     兑换商城兑换说明
            getExchangeBrief: function () {
                this.$ajax.get('/api/Acerstore/exchangeBrief').then((res) => {
                    if (res.data.code == '200') {
                        this.exchangeBrief = res.data.data.brief
                    }
                }, (err) => {
                    console.log(err)
                })
            },
//            修改兑换商城说明
            saveBrief(){
                this.$ajax.post('/api/Acerstore/exchangeBrief',{brief:this.exchangeBrief}).then((res) => {
                    if (res.data.code == '200') {
                        this.$message({
                            message: res.data.data.message,
                            type: 'success'
                        });
                    }else{
                        this.$message({
                            message: res.data.error,
                            type: 'error'
                        });
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //            上下架商品
            change(id,status){
                if(status==1){
                    status=2
                }else{
                    status=1
                }
                this.$ajax.post('/api/Acerstore/changeSale',{product_id:id,is_sale:status}).then((res) => {
                    if (res.data.code == '200') {
                        this.$message({
                            message: res.data.data.message,
                            type: 'success'
                        });
                        this.getGoodsList()
                    }else{
                        this.$message({
                            message: res.data.error,
                            type: 'error'
                        });
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            //            一键上下键
            changeAll:function(e){
                this.$ajax.post('/api/Acerstore/changeSale',{product_id:this.product_id,is_sale:e}).then((res) => {
                    if (res.data.code == '200') {
                        this.$message({
                            message: res.data.data.message,
                            type: 'success'
                        });
                        this.getGoodsList()
                    }else{
                        this.$message({
                            message: res.data.error,
                            type: 'error'
                        });
                    }
                }, (err) => {
                    console.log(err)
                })
            },
            uploadImg1:function(e){
                const formData = new FormData();
                formData.append('images',e.target.files[0]);
                let config ={
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                this.$ajax.post('api/Index/upload', formData, config).then((res)=>{
                    if(res.data.code=='200'){
                        console.log('成功')
                        this.imgUrl1=res.data.data.image_url

                    }
                },(err)=>{})
            },
            handleSelectionChange(val) {
                var data=[]
                for(var i= 0;i<val.length;i++){
                    data.push(val[i].product_id);
                }
                this.product_id = data;
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            upload(){
                return('http://192.168.1.101/manager/Index/upload')
            }
        },
        mounted() {


        },
        created: function () {
             this.getGoodsList()
            this.getExchangeBrief()
        }
    }
</script>

<style scoped>
    .ms-doc {
        width: 100%;
        max-width: 980px;
        /*max-width: 1300px;*/
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        background-color: white;
        padding: 0 40px;
        color: #54667a;
    }

    .m_title {
        font-size: 20px;
        color: #54667a;
        line-height: 60px;
        border-bottom: 1px solid #e9f1f3;
    }

    .ms-doc_main {
        padding: 20px;
    }
    .sort{
        margin:20px 0 54px;
    }
    .imgList{
        font-size: 0;
        margin: 20px 0;
    }
    .tab{
        width: 130px;
        height: 132px;
        margin: 5px 3px;
        border: 1px solid #e9f1f3;
        text-align: center;
        float: left;
        box-sizing: border-box;
        position: relative;
    }
    .model_title{
        font-size: 16px;
        color: #54667a;
        margin-bottom: 24px;
    }
    .model_title small{
        font-size: 12px;
        color: #a6afbb;
        margin-left: 20px;
    }
    .model_name{
        font-size: 14px;
        color: #54667a;
    }
    .pros{
        background-color: rgb(223, 236, 235); padding: 0 10px;cursor: pointer;color: #54667a;line-height: 24px;
    }
</style>
<style>
    .el-upload--picture-card {
        background-color: white;
        border: none;
        border-radius: 0;
        box-sizing: border-box;
        width: 130px;
        height: 132px;
        margin: 5px 3px;
    }
    .el-upload-list--picture-card .el-upload-list__item {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #e9f1f3;
        border-radius: 0;
        box-sizing: border-box;
        width: 130px;
        height: 132px;
        margin: 5px 3px;
        display: inline-block;
    }
</style>
