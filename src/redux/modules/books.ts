import {BookReqType, BookResType} from "../../types";
import {createActions, handleActions} from "redux-actions";
import {call, put, select} from "redux-saga/effects";
import {BookService} from "../../services/BookService";
import axios from "axios";
import {AnyAction} from "redux";

export interface BooksState {
    books: BookResType[] | null;
    loading:boolean;
    error: Error |null;
}

const options = {prefix:"mybook/books"}

export const {pending, success, fail} = createActions(
    {SUCCESS : (books) => books},
    'PENDING',
    'FAIL',
    options
)

const initialState:BooksState ={
    books:null,
    loading:false,
    error:null
}

const reducer = handleActions<BooksState, BookResType[]>({
        PENDING: (state, action)=>({
            ...state,
            loading:true,
            error:null
        }),
        FAIL:(state,action:any)=>({
            ...state,
            loading:false,
            error:action.payload
        }),
    },
    initialState,
    options
)
export default reducer;

// saga
export const {getBooks, addBook, deleteBook, editBook} = createActions(
    {
        ADD_BOOK:(book:BookReqType) => book,
        DELETE_BOOK:(bookId:string) => bookId,
        EDIT_BOOK:(bookId:string, book:BookReqType)=>({bookId, book})
    },
    'GET_BOOKS',
    options
)

function * getBookSaga(){
    try {
        yield put(pending());
        const token : string = yield select((state)=> state.auth.token)
        const books : BookResType[] =yield call(BookService.getBook, token)
        yield put(success(books))
    }catch (error){
        if(axios.isAxiosError(error)){
            console.error('에러메세지', error?.response?.data?.error)
            yield put(fail(new Error(error?.response?.data?.error || '모르는오류')))
        }else{
            console.error('더모르는 에러: ', error);
            return '더 모르는 에러..';
        }
    }
}


interface AddBookSagaAction extends AnyAction{
    payload :BookReqType
}

function * addBookSaga(action:AddBookSagaAction){
    try {
        yield put(pending())
        const token : string = yield select((state)=> state.auth.token)
        const book : BookReqType = yield call(
            BookService.addBook,
            token,
            action.payload
        )
        const books: BookResType[] = yield select((state)=>state.books.books)
        yield put(success([...books,book]))
    }catch (error){
        if(axios.isAxiosError(error)){
            console.error('에러메세지', error?.response?.data?.error)
            yield put(fail(new Error(error?.response?.data?.error || '모르는오류')))
        }else{
            console.error('더모르는 에러: ', error);
            return '더 모르는 에러..';
        }
    }
}

interface DeleteBookSagaAction extends AnyAction {
    bookId: number;
}

