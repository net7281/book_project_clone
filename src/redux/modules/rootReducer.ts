// Reducer는 상황에 따라 여러 개를 가지게 될 텐데, 이는 한 군데에 모아 (= combine) 내보내주는 역할을 할 파일이 필요

import {combineReducers} from "redux";
import auth, {AuthState} from "./auth";
import books, { BooksState } from './books';

export interface RootState{
    auth : AuthState;
    books : BooksState;
}

const rootReducer = combineReducers({
    auth,
    books
})
export default rootReducer;
