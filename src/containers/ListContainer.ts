import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/modules/rootReducer";
import {BookResType} from "../types";
import List from '../components/List';
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

import {getBooks as getBooksSaga, deleteBook as deleteBookSaga} from '../redux/modules/books';
import { logout as logoutSaga } from '../redux/modules/auth';
export const ListContainer =()=>{

    //state 를 조회하기 위한 useSelector 를 사용할 수 있다.
    //action 을 발생시키기 위한 useDispatch 를 사용할 수 있다.

    const books = useSelector<RootState, BookResType[] | null>(
        (state) => state.books.books
    );
    const loading = useSelector<RootState, boolean>(
        (state)=> state.books.loading
    )
    const error = useSelector<RootState, Error|null>(
        (state)=> state.books.error
    )

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const getBooks = useCallback(()=>{
        dispatch(getBooksSaga())
    }, [dispatch] );

    const logout = useCallback(() => {
        dispatch(logoutSaga());
    }, [dispatch]);

    const goAdd = useCallback((bookId:number) =>{
        navigate(`/edit/${bookId}`)
    },[navigate])

    const goEdit = useCallback(
        (bookId: number) => {
            navigate(`/edit/${bookId}`);
        },
        [navigate]
    );

    const deleteBook = useCallback(
        (bookId: number) => {
            dispatch(deleteBookSaga(bookId));
        },
        [dispatch]
    );

    return(
        <List/>
    )

}

