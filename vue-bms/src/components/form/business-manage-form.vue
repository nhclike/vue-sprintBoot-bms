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
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="填报人">
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
                  <el-form-item label="客户名称">
                    <el-input v-model="BMForm.userName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="所属区域">
                    <city-choose style="width: 100%">

                    </city-choose>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
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
                <el-col :span="11">
                  <el-form-item label="客户名称">
                    <el-input v-model="BMForm.otherProType" placeholder = "请输入确切的项目类型"></el-input>
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
                  <el-form-item label="客户类型">
                    <el-select v-model="BMForm.customerType">
                      <option value="1" name="直接客户"></option>
                      <option value="2" name="集成商"></option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="客户主经办人">
                    <el-input v-model="BMForm.userHandler"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="经办人联系电话">
                    <el-input v-model="BMForm.handlerPhone"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="客户决策人">
                    <el-input v-model="BMForm.userPolicymaker"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="客户决策人职务">
                    <el-input v-model="BMForm.policymakerDuty"></el-input>
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
                  <el-form-item label="项目集成商">
                    <el-input v-model="BMForm.proContractor"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="集成商联系电话">
                    <el-input v-model="BMForm.contractorPhone"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="22">
                  <el-form-item label="项目集成商情况">
                      <el-input v-model="BMForm.contractorDescribe" type="textarea"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="申请评估" name="2">
              <el-row :gutter="20">
                <el-col :span="22">
                  <el-form-item label="描         述">
                    <el-input v-model="BMForm.assessmentApplyInfo" type="textarea"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="采购预算信息" name="3">
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
                  <el-form-item label="分项预算/占比">
                    <el-input v-model="BMForm.milestoneBudget"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="总体预算">
                    <el-input v-model="BMForm.overallBudget"></el-input>
                  </el-form-item>
                </el-col>
              </el-row >
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="费用范围">
                    <el-input v-model="BMForm.costRangeArr"></el-input>
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
                    <el-input type="textarea" v-model="BMForm.proExplain">
                      1、项目范围（建设内容）;
                      2、项目里程碑时间点（方案提交截止时间、挂标时间预测、实施时间预测、项目验收时间预测）;
                      3、项目角色关系（项目经办人与决策人工作范围和权限;
                      4、工程商项目工作内容及比重;
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item title="竞争对手信息" name="4">
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="竞争对手名称">
                    <el-input v-model="BMForm.competitorName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="竞争对手项目名称">
                    <el-input v-model="BMForm.competitorProName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="竞争对手情况">
                    <el-input type="textarea" v-model="BMForm.competitorInfo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="对手进度" prop="deptStatus">
                    <el-select  v-model="BMForm.deptStatus" placeholder="请选择" style="width: 100%;">
                      <el-option  value="1" label="正在制作方案"></el-option>
                      <el-option  value="2" label="已提交方案"></el-option>
                      <el-option  value="3" label="报价"></el-option>
                      <el-option  value="4" label="其他关系运作"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
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
        activeNames:'',
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
          label: '法庭/讯问'
        }, {
          value: '2',
          label: '远程提讯/提讯指挥'
        }, {
          value: '3',
          label: '会议系统'
        }, {
          value: '4',
          label: '会议系统'
        }, {
          value: '5',
          label: '一般集成/设备销售'
        }, {
          value: '6',
          label: '软件定制开发'
        }, {
          value: '7',
          label: '其他'
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
      },
      handleChange(){

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
                                                                                                                                                                                                                                                                                                                                                                         
