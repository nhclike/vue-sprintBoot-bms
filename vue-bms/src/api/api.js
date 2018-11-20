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

export const User = {
  userList(params){
    return new Promise(function(resolve, reject){
      axios.post('/user_getlist',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updateUserInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/user_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getUserInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/user_getUserById',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  deleteUserInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/user_del',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  }
};

export const Dept={
  deptList(params){
    return new Promise(function(resolve, reject){
      axios.post('/dept_getList',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  updateDeptInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/dept_addOrUpdate',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  getDeptInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/dept_getDeptById',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  },
  deleteDeptInfo(params){
    return new Promise(function(resolve, reject){
      axios.post('/dept_del',qs.stringify(params)).then((response)=>{
        let res=response;
        resolve(res)
      })
    })
  }
}


