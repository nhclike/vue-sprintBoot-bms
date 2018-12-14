<template>
  <div>
    <div class="form-box">
      <div class="context-box">
        <el-form ref="form" :model="BMForm" label-width="200px">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="商机信息" name="1">
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="项目名称">
                    <el-input v-model="BMForm.proName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="用户名称">
                    <el-input v-model="BMForm.userName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="填表人">
                    <el-input v-model="BMForm.writeName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="填表时间">
                    <el-date-picker
                      v-model="BMForm.writeDate"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="所属区域">
                    <!--<el-input v-model="BMForm.area"></el-input>-->
                    <city-choose style="width: 100%">

                    </city-choose>

                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="项目类型">
                    <el-select v-model="BMForm.proType" placeholder="请选择">
                      <el-option
                        v-for="item in proTypeOption"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="预计采购时间">
                    <el-date-picker
                      v-model="BMForm.purDate"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="预计实施时间">
                    <el-date-picker
                      v-model="BMForm.implDate"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="用户主经办人">
                    <el-input v-model="BMForm.userHandler"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="经办人联系电话">
                    <el-input v-model="BMForm.handlerPhone"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="用户决策人">
                    <el-input v-model="BMForm.userPolicymaker"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="决策人联系电话">
                    <el-input v-model="BMForm.policymakerPhone"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="项目工程商">
                    <el-input v-model="BMForm.proContractor"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="工程商联系电话">
                    <el-input v-model="BMForm.contractorPhone"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="工程商情况描述">
                    <el-select v-model="BMForm.contractorDescribe" placeholder="请选择">
                      <el-option
                        v-for="item in contractorDescribeOption"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="">
                    <el-input v-model="BMForm.contractorDescribeInfo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="采购预算信息" name="2">
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="采购方式">
                    <el-select v-model="BMForm.purWay" placeholder="请选择">
                      <el-option
                        v-for="item in purWayOption"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="总体预算">
                    <el-input v-model="BMForm.overallBudget"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="分项预算/占比">
                    <el-input v-model="BMForm.milestoneBudget"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="费用金额预计">
                    <el-input v-model="BMForm.costAmount"></el-input>

                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="22">
                  <el-form-item label="项目情况说明">
                    <el-input type="textarea" v-model="BMForm.proExplain"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="竞争对手信息" name="3">
              <el-row :gutter="20">
                <el-col :span="22">
                  <el-form-item label="竞争对手情况">
                    <el-input type="textarea" v-model="BMForm.competitorInfo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </el-form>
        <div class="footer">
          <el-button type="success" @click="saveBMInfo">保存</el-button>
          <el-button type="info" @click="goBack">返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CityChoose from '@/components/select/Cascader'
  export default {
    data: function(){
      return {
        BMForm: {
          proName:'',
          userName:'',
          writeDate:'',
          proType:'',
          purDate:'',
          implDate:''
        },
        proTypeOption:[{
          value: '1',
          label: '新建'
        }, {
          value: '2',
          label: '改造'
        }, {
          value: '3',
          label: '散单销售'
        }],
        contractorDescribeOption:[{
          value: '1',
          label: '工程商业务主营(营业执照主营范围,是否具有其他产品代理资格或其他资质)'
        }, {
          value: '2',
          label: '工程商与项目商务关系(是否直接参与投标,作为总包方/分包方,抽取利润,是否分担项目实施或其他内容)'
        }, {
          value: '3',
          label: '工程商其他关联内容'
        }],
        purWayOption:[{
          value: '1',
          label: '公开招标'
        }, {
          value: '2',
          label: '竞争性谈判'
        }, {
          value: '3',
          label: '单一来源采购'
        }, {
          value: '4',
          label: '自行采购'
        }]
      }
    },
    components:{
      CityChoose
    },
    methods: {
      //保存事件广播
      saveBMInfo() {
        this.$emit('saveBMInfo',this.BMForm);
        //this.$message.success('提交成功！');
      },
      //返回商机列表
      goBack(){
        this.$router.push({
          path:'/index/BusinessManage'
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./../../less/comm/variable.less";
  .form-box{
    position: fixed;
    top:50px;
    left:250px;
    bottom:0;
    right:0;
    .context-box{
      position: absolute;
      top:20px;
      left: 20px;
      bottom: 20px;
      right: 20px;
      background: #fff;
      .el-form{
        position: absolute;
        top:0;
        bottom: 60px;
        width: 100%;
        overflow: scroll;
      }
      .footer{
        position: absolute;
        bottom: 0px;
        height: 60px;
        line-height: 60px;
        width: 100%;
      }
    }

  }

  .el-date-editor.el-input{
    width: 100%;
  }
  .el-select{
    width: 100%;
  }
</style>
