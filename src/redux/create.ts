import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { TokenService } from '../services/TokenService';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// 페이지 이동시 App 재 렌더링 막기 위해 함수 밖에 선언
const sagaMiddleware = createSagaMiddleware();

const create=()=> {
    const token = TokenService.get();
    //새로고침 하면 로컬토큰과 리덕스의 store 부분의 싱크가 필요
    // -> store 가 처음 만들어질 때  로컬토큰을 얻어서 initialState 와 동기화
    const store = createStore(
        rootReducer,{
            auth:{
                token : token,
                loading: false,
                error:null,
            }
        },
        composeWithDevTools(applyMiddleware(sagaMiddleware)) //리덕스 devTool 관련 > 크롬에서 확인??
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export default create();