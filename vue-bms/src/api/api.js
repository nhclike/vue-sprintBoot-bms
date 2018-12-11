import axios from "axios";
import qs from 'qs'

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
      axios.post('/user/user_getlist',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updateUserInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/user/user_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getUserInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/user/user_getUserById',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  deleteUserInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/user/user_del',qs.stringify(params)).then((response)=>{
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
      axios.post('/dept/dept_getList',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updateDeptInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/dept/dept_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getDeptInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/dept/dept_getDeptById',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  deleteDeptInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/dept/dept_del',qs.stringify(params)).then((response)=>{
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
      axios.post('/role/role_getList',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updateRoleInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/role/role_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getRoleInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/role/role_getRoleById',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  /*****拿到所有角色******/
  getAllRoleInfo(){
    return new Promise(function(resolve, reject){
      axios.get('/role/role_getAllRole').then((response)=>{
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
      axios.post('/privilege/privilege_getList',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updatePrivilegeInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/privilege/privilege_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getPrivilegeInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/privilege/privilege_getPrivilegeById',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  }
}
export const BusinessManage={
  BMList(params){
    return new Promise(function(resolve, reject){
      axios.post('/businessManage/businessManage_getlist',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  }
}

