
import {useEffect} from "react";
import { Button, PageHeader, Table } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { BookResType } from '../types';
import Layout from './Layout';
import Book from './Book';
import * as S from './List.styles';


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
    }, [getBooks]);

    // 에러 시 (data 가져올때)
    useEffect(()=>{
        if (error){
            logout();
        }
    },[error, logout]);

    return(
        <Layout>
            <PageHeader
                title={
                    <div>
                        <BookOutlined /> 나만의 책장
                    </div>
                }
                subTitle='나만의 책장'
                extra={[
                    <Button key="2" ghost type="primary" onClick={goAdd}>책추가</Button>,
                    <Button key="1" onClick={logout}>로그아웃</Button>
                ]}
            />

            <S.BgList src='/bg_book.jpg' alt='books' />
            <Table
                dataSource={books || []}
                columns={[
                    {
                        title : '나의 책 목록',
                        dataIndex : 'book',
                        key : 'book',
                        // ...record 는 dataSource 에 넣어준 값들을 펼쳐서 넣어줌
                        render: (_,record) =>(
                            <Book {...record} deleteBook={deleteBook} goEdit={goEdit} />
                        )
                    }
                ]}
                loading={books === null || loading}
                //상단 해더 부분
                showHeader={true}
                rowKey='bookId'
                pagination={false}
            />
        </Layout>
    )
}

export default List;