<template>
  <div class="business-list">
    <head-top></head-top>
    <el-table
      :data="busiData"
      v-loading="loading"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="店铺 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="店铺名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="联系电话"
        prop="mobile">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button @click="addGoods(scope.row)" type="text" size="small">添加商品</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteGoods(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
      <!--<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->
    </el-table>
    <el-dialog title="添加商品" :visible.sync="dialogAddGoods">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择商品区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                              style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2"
                              style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="商品性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上商品" name="type"></el-checkbox>
            <el-checkbox label="地推商品" name="type"></el-checkbox>
            <el-checkbox label="线下主题商品" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="商品形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
      <el-form :model="shopForm">
        <el-form-item label="店铺名称" :label-width="formLabelWidth">
          <el-input auto-complete="off" :value="shopForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input :value="shopForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类" :label-width="formLabelWidth">
          <div class="block-options-li">
            <el-cascader
              :options="options">
            </el-cascader>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="deleteVisible"
      width="30%"
      :before-close="handleClose">
      <span>确认删除吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="deleteVisible = false">取 消</el-button>
    <el-button type="primary" @click="deleteGoodsSure">确 定</el-button>
  </span>
    </el-dialog>
    <div class="block page-busi">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="15">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import headTop from '../components/head'

export default {
  name: "busiList",
  components: {
    headTop
  },
  data () {
    return {
      aa: '',
      busiData: [],
      loading: true,
      currentPage: 1,
      dialogFormVisible: false, // 编辑弹框
      dialogAddGoods: false, // 添加商品
      shopForm: {},
      shopDeleteId: '',
      deleteVisible: false,
      formLabelWidth: '120px',
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }], // 级联选择
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入商品名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        region: [
          {required: true, message: '请选择商品区域', trigger: 'change'}
        ],
        date1: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ],
        date2: [
          {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
        ],
        type: [
          {type: 'array', required: true, message: '请至少选择一个商品性质', trigger: 'change'}
        ],
        resource: [
          {required: true, message: '请选择商品资源', trigger: 'change'}
        ],
        desc: [
          {required: true, message: '请填写商品形式', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    getData (size, page) {
      this.axios.post('/client/exercise-recent?size=' + size + '&page=' + page).then((response) => {
        response = response.data;
        console.log(response)
        if (response.code === '000') {
          this.loading = false
          this.busiData = response.result.busiData
        }
      });
    },
    handleSizeChange (val) {
      this.getData(val, 1)
    },
    handleCurrentChange (val) {
      this.getData(10, val)
    },
    handleClick (item) {
      this.dialogFormVisible = true
      this.shopForm = item
    },
    addGoods (item) {
      this.dialogAddGoods = true
      console.log(item)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    deleteGoods (item) {
      const _this = this
      _this.deleteVisible = true
      _this.shopDeleteId = item.id
    },
    deleteGoodsSure () {
      this.deleteVisible = false
      const f = this.busiData.filter(this.gl)
      this.busiData = f
      // _this.busiData = Object.assign({}, _this.busiData) // 更新视图
    },
    gl (ele) {
      if (ele.id !== this.shopDeleteId) {
        return ele
      }
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted () {
    this.getData(10, 1)
  }
}
</script>

<style>
  .el-table__body {
    text-align: left !important;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .page-busi {
    margin: 30px auto;
  }

  .block-options-li {
    text-align: left;
  }

  .demo-ruleForm {
    text-align: left;
  }
</style>
