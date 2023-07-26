import { TokenService } from '../../services/TokenService';
import { AnyAction } from 'redux';
import { createActions, handleActions } from 'redux-actions';
import { call, delay, put, select, takeEvery } from 'redux-saga/effects';
import { UserService } from '../../services/UserService';

import { LoginReqType } from '../../types';
import axios from 'axios';

export interface AuthState{
    token: string | null;
    loading : boolean;
    error : Error | null;
}

const options = { prefix : 'mybooks/auth' }

export const { success, pending, fail } = createActions(
    {SUCCESS : (token: string) => token },
    'PENDING',
    'FAIL',
    options
    );

const initialState: AuthState ={
    token : null,
    loading : false,
    error : null
}

const reducer = handleActions<AuthState,string>(
    {
        PENDING :(state) =>({
            ...state,
            loading:true,
            error:null
        }),
        SUCCESS : (state, action) =>({
            ...state,
            token : action.payload,
            loading :false,
            error :null
        }),
        FAIL : (state,action:any)=>({
            ...state,
            loading:false,
            error:action.payload
        }),
    },
    initialState,
    options
)

export default reducer;

//saga
export const {login, logout} = createActions(
    {
        LOGIN: ({email, password}: LoginReqType) => ({
            email,
            password
        })
    },
    'LOGOUT',
    options
)

interface LoginSagaAction extends AnyAction{
    payload : LoginReqType;
}

//함수에 * 있는이유 = 제너레이터 함수 >> 여러개의 값을 필요에 따라 하나씩 반환(yield)
function* loginSaga(action : LoginSagaAction) {
    try {
        yield put(pending());

        // 토큰 api..
        const token : string = yield call(UserService.login, action.payload)

        //localStorage 에 저장
        TokenService.set(token);

        //지연시간
        yield delay(1000);

        //성공
        yield put(success(token));

    }catch (error) {
        if (axios.isAxiosError(error)){
            console.error('에러메세지 : ', error?.response?.data?.error)
            yield put(
                fail(new Error(error?.response?.data?.error || "모르는 에러"))
            )
        }else{
            console.error("더모르는에러",error)
            return "모르겠는 에러가 났습니다...."
        }
    }
}

function * logoutSaga(){
    try {
        yield put(pending())

        //localStorage 에서 토큰 get
        const token:string = yield select((state) => state.auth.token)
        yield call(UserService.logout, token)
    }catch (error){
    }finally {
        //토큰 삭제
        TokenService.remove();
        yield put(success(null));
    }
}

export function * authSagas(){
    yield takeEvery(`${options.prefix}/LOGIN`, loginSaga);
    yield takeEvery(`${options.prefix}/LOGOUT`, logoutSaga);
}

