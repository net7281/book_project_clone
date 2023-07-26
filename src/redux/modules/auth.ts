import { TokenSerivce } from './../../services/TokenService';
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
        })
    }
)