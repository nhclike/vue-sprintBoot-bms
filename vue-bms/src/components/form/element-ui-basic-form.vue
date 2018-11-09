<template>
  <div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="200px">
        <!--商机信息-->
        <el-row  >
          <div class="panel">
            <div class="panel-header">
              <span class="panel-title-self">商机信息</span>
            </div>
            <div class="panel-body">
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="项目名称">
                    <el-input v-model="form.proName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="用户名称">
                    <el-input v-model="form.userName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="填表人">
                    <el-input v-model="form.writeName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="填表时间">
                    <el-date-picker
                      v-model="form.writeDate"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="所属区域">
                    <el-input v-model="form.area"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="项目类型">
                    <el-select v-model="form.proType" placeholder="请选择">
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
                      v-model="form.purDate"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="预计实施时间">
                    <el-date-picker
                      v-model="form.implDate"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="用户主经办人">
                    <el-input v-model="form.userHandler"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="经办人联系电话">
                    <el-input v-model="form.handlerPhone"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="用户决策人">
                    <el-input v-model="form.userPolicymaker"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="决策人联系电话">
                    <el-input v-model="form.policymakerPhone"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="项目工程商">
                    <el-input v-model="form.proContractor"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="工程商联系电话">
                    <el-input v-model="form.contractorPhone"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="工程商情况描述">
                    <el-select v-model="form.contractorDescribe" placeholder="请选择">
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
                    <el-input v-model="form.contractorDescribeInfo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-row>
        <!--采购预算信息-->
        <el-row>
          <div class="panel">
            <div class="panel-header">
              <span class="panel-title-self">采购预算信息</span>
            </div>
            <div class="panel-body">
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="采购方式">
                    <el-select v-model="form.purWay" placeholder="请选择">
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
                    <el-input v-model="form.overallBudget"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="11">
                  <el-form-item label="分项预算/占比">
                    <el-input v-model="form.milestoneBudget"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="费用金额预计">
                    <el-input v-model="form.costAmount"></el-input>

                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="22">
                  <el-form-item label="项目情况说明">
                    <el-input type="textarea" v-model="form.proExplain"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-row>
        <el-row>
          <div class="panel">
            <div class="panel-header">
              <span class="panel-title-self">竞争对手信息</span>
            </div>
            <div class="panel-body">

              <el-row :gutter="20">
                <el-col :span="22">
                  <el-form-item label="竞争对手情况">
                    <el-input type="textarea" v-model="form.competitorInfo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-row>
        <el-row style="background-color: #fff">
          <el-col :span="6" :offset="9">
            <el-button type="success">保存</el-button>
            <el-button type="info">取消</el-button>


          </el-col>
        </el-row>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        form: {
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
    methods: {
      onSubmit() {
        this.$message.success('提交成功！');
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
    .el-form{
      width:100%;
      height: 100%;
      padding: 20px;
      overflow: scroll;
    }
  }
  /*
	panel面板样式
	*/

  .panel{
/*
    height: 100%;
*/
/*
    border: 1px solid #ddd;
*/
    margin: 0;
    position: relative;
/*
    box-shadow: 3px 3px 3px 3px #ddd;
*/
  .panel-header{
    background:@panel-title-bg;
    padding-left: 10px;
    height: @panel-title-height;
    line-height: @panel-title-height;
    display: flex;
    align-items: center;
  img{
    margin: 0 5px;
    flex:0 0 28px;
  }
  .panel-title-self{
    color: @panel-title-color;
    font-size: @panel-title-font-size*0.8;
    background-color: @panel-title-bg;
    height: @panel-title-height;
    flex: 1;
  }
  }
  .panel-body{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-top: 20px;
    position: relative;
  }
  }

  .el-date-editor.el-input{
    width: 100%;
  }
  .el-select{
    width: 100%;
  }
</style>
