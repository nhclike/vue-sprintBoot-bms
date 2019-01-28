import axios from "axios";
import qs from 'qs'
/***登录***/
export const loginApi = {
  userLogin(params){
    return new Promise(function(resolve, reject){
      axios.post('/loginVerify',qs.stringify(params)).then((response)=>{
        let res=response.data;
        if(res.code=='1'){ //成功
          resolve(res);
        }
        else{//失败
          reject(res)
        }
      })
    })
  }
};
/***用户***/
export const User = {
  userList(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/user_getlist',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updateUserInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/user_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getUserInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/user_getUserById',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  deleteUserInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/user_del',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  }
};

/***部门***/
export const Dept={
  deptList(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/dept_getList',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updateDeptInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/dept_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getDeptInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/dept_getDeptById',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  deleteDeptInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/dept_del',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  /*****拿到所有部门******/
  getAllDeptInfo(){
    return new Promise(function(resolve, reject){
      axios.get('/bms/dept_getAllDepts').then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  }
}
/***角色***/
export const Role={
  roleList(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/role_getList',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  roleAdd(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/role_add',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updateRoleAndPrivilegeInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/role_updateRoleAndPrivilege',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getRoleInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/role_getRoleAndPrivilegeByRoleId',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  /*****拿到所有角色******/
  getAllRoleInfo(){
    return new Promise(function(resolve, reject){
      axios.get('/bms/role_getAllRole').then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  }
}

/***权限***/
export const Privilege={
  privilegeList(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/privilege_getList',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updatePrivilegeInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/privilege_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getPrivilegeInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/privilege_getPrivilegeById',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  /*****拿到所有权限******/
  getAllPrivilegeInfo(){
    return new Promise(function(resolve, reject){
      axios.get('/bms/privilege_getAllPrivilege').then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  }

}

/***商机***/
export const BusinessManage={
  BMList(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/businessManage_getlist',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  BMAdd(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/businessManage_add',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  }
};


/***首页***/
export const homePage={
  /*加载公告列表*/
  HPGetAllProclamation(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/homePage_getAllProclamation',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  /*加载商机提醒列表*/
  HPGetAllNote(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/homePage_getAllNote',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
}


/***公告***/
export const Proclamation={
  proclamationAddOrUpdate(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/proclamation_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
}

/***统计***/
export const Statistics={
  statisticsGetRank(params){
    return new Promise(function(resolve, reject){
      axios.post('/bms/businessStatistics_getIndividualBusinessMoneyDesc',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
}





