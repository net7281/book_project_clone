import { createStore, applyMiddleware } from 'redux';
import { TokenService } from '../services/TokenService';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const create=()=> {
    const token = TokenService.get();
    //새로고침 하면 로컬토큰과 리덕스의 store 부분의 싱크가 필요
    // -> store 가 처음 만들어질 때  로컬토큰을 얻어서 initialState 와 동기화
    const store = createStore(
        rootReducer
    )
}