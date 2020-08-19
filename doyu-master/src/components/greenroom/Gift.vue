<template>
  <div style="width: 100%">
    <el-row>
      <el-button type="warning" icon="el-icon-plus"  @click="add" plain>新增礼物</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="礼物名称" width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.giftName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="礼物价格" width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.giftPrice }}</span>
        </template>
      </el-table-column>

      <el-table-column label="礼物图片" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px"><img :src="scope.row.giftImage" width="50px" height="50px"/></span>
        </template>
      </el-table-column>

      <el-table-column label="礼物数量" width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.giftCount }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" class="el-icon-delete" @click="deleteById(scope.row.giftId)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--|=======卍☺☠☹☣卍☺☠☹☣======== 添加用户  ==========卍☺☠☹☣卍☺☠☹☣==============|-->
    <el-dialog title="添加礼物" :visible.sync="adddialogFormVisible">
      <el-form :model="gift">
        <el-form-item label ="礼物名称：" :label-width="formLabelWidth">
          <el-input style="width: 220px" v-model="gift.giftName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label ="礼物价格：" :label-width="formLabelWidth">
          <el-input style="width: 220px" v-model="gift.giftPrice" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label ="礼物logo：" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            action="giftApi/file/uploadToOss"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="uploadSuccess"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="adddialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addGift">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "Gift",
      data() {
        return {
          dialogFormVisible:false,
          adddialogFormVisible:false,
          formLabelWidth:'120',
          tableData: [],
          fileList: [],
          gift:{
            giftName:"",
            giftPrice:"",
            giftImage:""
          }
        }
      },
      created(){
        this.queryGiftList();
      },
      methods: {
        addGift(){
          this.adddialogFormVisible=false;
          console.log(this.gift);
          var self = this;
          return this.$axios.post("giftApi/gift/addGift",this.$qs.stringify(this.gift)).then(function(res){
            if(res.data.code==200){
              self.queryGiftList();
            }
          })
        },
        //查询
        queryGiftList(){
          var self = this;
          return this.$axios.get("giftApi/gift/queryGiftList").then(function(res){
            if(res.data.code==200){
              self.tableData=res.data.data;
              console.log(res.data.data)
            }
          })
        },
        deleteById(giftId){
          var self = this;
          return this.$axios.get("giftApi/gift/deleteGiftById?giftId="+giftId).then(function(res){
            if(res.data.code==200){
              self.queryGiftList();
            }
          })
        },

        //添加
        add(index) {
          console.log(index);
          this.adddialogFormVisible=true;
        },
        //修改
        handleEdit(index, row) {
          console.log(index, row);
          this.dialogFormVisible=true;
        },
        //图片上传附件
        uploadSuccess(response, file, fileList){
          this.gift.giftImage = response.data;
          this.fileList = [{url:response.data}]
        },
        handleRemove(scope,file, fileList) {
          console.log(file, fileList);
          fileList = [];
          this.gift.giftImage="";
        },
        //添加弹框
        add(index) {
          console.log(index);
          this.adddialogFormVisible=true;
        },
        handlePreview(file) {
          console.log(file);
        },
      }
    }
</script>

<style scoped>

</style>
