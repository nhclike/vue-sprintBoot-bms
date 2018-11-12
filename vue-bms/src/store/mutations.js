/**
 * Created by lij on 2018/11/12.
 */
import * as types from './mutation-types'

const mututations={
  [types.SET_USERNAME](state,userName){
    state.userName=userName;
  }
}

export default mututations;
