import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Signin from "../components/Signin";
import {RootState} from "../redux/modules/rootReducer";
import {LoginReqType} from "../types";
import { login as loginSagaStart } from '../redux/modules/auth';

const SigninContainer= ()=>{
    const error = useSelector<RootState, Error | null>(
        (state) => state.auth.error
    )

    const loading = useSelector<RootState, boolean>(
        (state) => state.auth.loading
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = useCallback(
        (reqData : LoginReqType) =>{
            dispatch(loginSagaStart(reqData))
            if(localStorage.getItem('token')){
                navigate('/')
            }
        },[dispatch,navigate]
    )

    return <Signin login={login} error={error} loading={loading} />
}

export default SigninContainer;