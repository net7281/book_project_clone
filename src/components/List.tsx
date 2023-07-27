import {BookResType} from "../types";
import {useEffect} from "react";
import { Button, PageHeader, Table } from 'antd';

interface BooksProps{
    books : BookResType[] | null;
    loading : boolean;
    error : Error | null;
    getBooks : () => void;
    logout: () => void;
    goAdd: () => void;
    goEdit: (bookId:number) => void;
    deleteBook: (bookId:number) => void;
}

const List =({
    books,
    loading,
    getBooks,
    error,
    logout,
    goAdd,
    goEdit,
    deleteBook
}: BooksProps)=>{
    useEffect(()=>{
        getBooks();
    }, [getBooks])

    useEffect(()=>{
        if (error){
            logout();
        }
    },[error])

    return(
        <Layout>
            <PageHeader
                title={
                    <div>
                        <BookOutLined/>
                    </div>
                }
                subTitle='나만의 책장'
                extra={[
                    <Button key>
                ]}
            />
        </Layout>
    )
}

