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
                    <el-button type="primary" style="background-color: #0f8edd;border-color: #0f8edd;">筛选</el-button>
                </div>
                <el-table
                    ref="multipleTable"
                    :data="tableData3"
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
                        label="商品" height="95">
                        <template scope="scope">
                            <img :src="scope.row.product_image" alt="" style="width:76px;height:76px;margin-top: 5px;">
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="标题"
                        width="200"
                        show-overflow-tooltip>
                        <template slot-scope="scope">{{ scope.row.product_name }}</template>
                    </el-table-column>
                    <el-table-column
                        prop="exchange_num"
                        label="市场价/元">
                    </el-table-column>
                    <el-table-column
                        prop="wechat_nickname"
                        label="元宝兑换价/个"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="exchange_time"
                        label="库存量"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="info"
                        label="类型"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        prop="express_status"
                        label="状态"
                        show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        label="操作" inline-template width="180">
                        <!--上架---下架-->
                        <template>
                            <span style="display: inline-block;background-color: rgb(223, 236, 235); padding: 0 10px;">编辑</span>
                            <span style="display: inline-block;background-color: rgb(223, 236, 235); padding: 0 10px;">上架</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: center;">
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;">一键上架</el-button>
                    <el-button type="danger" round>一键下架</el-button>
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
                    v-model="textarea" style="width: 488px;margin: 20px 20px 20px 0;">
                </el-input>
                <pre style="font-size: 14px;color: #a6b7bf;display: inline-block;padding-bottom: 50px;">例如：
    成功提交后奖品将在1~3个工作日内发送至提交账户内。
    实物奖品将在1~3个工作日内发货。请耐心等待并在我的兑换内查看。
                </pre>
                <div style="text-align: center;">
                    <el-button type="primary" round style="background-color: #0f8edd;border-color: #0f8edd;margin-left: 50px;">保存</el-button>

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
                        <label for="file1" style="display: inline-block;"><img :src="imgUrl1" alt="" style=" width: 130px;height: 132px;"></label>
                    </div>
                    <el-upload
                        name="images"
                        :action="upload()"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <img src="/static/img/exchange_add_img2.png" alt="" style=" width: 130px;height: 132px;">
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
                dialogImageUrl: '',
                dialogVisible:false,
                input:'',
                goodsDataList: [],
                options1: [{
                    value: '选项1',
                    label: '全部'
                },
                    {
                        value: '选项2',
                        label: '虚拟'
                    },{
                        value: '选项3',
                        label: '实物'
                    }
                ],
                value1:'',
                options2: [{
                    value: '选项1',
                    label: '全部'
                },{
                    value: '选项3',
                    label: '上架'
                }, {
                    value: '选项3',
                    label: '下架'
                }, {
                    value: '选项3',
                    label: '维护'
                }
                ],
                value2:'',
                dateValue1:'',
                tableData3: [
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    },
                    {
                        product_image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
                        product_name: '王小虎哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                        exchange_num:'10',
                        wechat_nickname:'200',
                        exchange_time:'2013-01-22',
                        info:'5',
                        express_status:'0.9',
                    }
                ],
                multipleSelection: [],
                textarea:'',
                des:'',
                options3: [{
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
//            //      获取商品类目数据
//            getGoodsList: function () {
//                this.$ajax({
//                    method: 'POST',
//                    url: '/api/Goodsdata/productTypeData'
//                }).then((res) => {
//                    if (res.data.code == '200') {
//                        this.goodsDataList = res.data.data.more_data
//                        console.log(this.goodsDataList)
////          console.log(imgList)
//                    }
//                }, (err) => {
//                    console.log(err)
//                })
//            },
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
                this.multipleSelection = val;
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

        }
    }
</script>

<style scoped>
    .ms-doc {
        width: 100%;
        /*max-width: 980px;*/
        max-width: 1300px;
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
        display: inline-block;
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
