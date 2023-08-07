import {BookReqType, BookResType} from "../types";
import {useEffect, useRef} from "react";
import {message as messageDialog, Input, PageHeader, Button} from "antd";
import TextArea from "antd/lib/input/TextArea";
import Layout from "./Layout";
import * as S from './Add.styles';

interface AddProps{
    books: BookResType[] | null;
    loading:boolean;
    back: ()=>void;
    logout:()=>void;
    add:(book:BookReqType)=>void;
    error:Error | null;
    getBooks:()=>void;
}

const Add=({
    books,
    loading,
    back,
    logout,
    add,
    error,
    getBooks
}:AddProps) =>{
    const titleRef = useRef<Input>(null);
    const messageRef = useRef<TextArea>(null);
    const authorRef = useRef<Input>(null);
    const urlRef = useRef<Input>(null);

    useEffect(()=>{
        getBooks();
    },[getBooks])

    useEffect(()=>{
        if(error){
            logout()
        }
    },[error,logout])

    const AddClick=()=>{
        const title = titleRef.current!.state.value;
        const message = messageRef.current!.state.value;
        const author = authorRef.current!.state.value;
        const url = urlRef.current!.state.value;
        // !를 쓰는이유 = 값이 없을때를 (null) 을 고려하지 X

        // 값이 없을때 막아주기 위함
        if (
            title === undefined || message === undefined || author === undefined || url === undefined
        ){
            messageDialog.info('작성칸을 채워주세요!');
            return;
        }
        add({ title, message, author, url });
    }

    if (books === null) {
        return null;
    }

    return(
        <Layout>
            <PageHeader 
                title='나만의 책장'
                subTitle='리스트를 추가해보세요'
                onBack={back}
                extra={[
                    <Button key='1' ghost={false} onClick={logout}>로그아웃</Button>
                ]}
            />

            <S.Add>
                <S.InputTitle>
                    제목
                    <S.Required> *</S.Required>
                </S.InputTitle>
                <S.InputArea>
                    <S.AntdInput ref={titleRef} placeholder='제목을 입력해주세요.' />
                </S.InputArea>
                <S.InputComment>
                    내용
                    <S.Required> *</S.Required>
                </S.InputComment>
                <S.InputArea>
                    <S.AntdTextArea
                        ref={messageRef}
                        rows={8}
                        placeholder='내용을 입력해주세요.'
                    />
                </S.InputArea>
                <S.InputAuthor>
                    작성자
                    <S.Required> *</S.Required>
                </S.InputAuthor>
                <S.InputArea>
                    <S.AntdInput ref={authorRef} placeholder='작성자를 입력해주세요.' />
                </S.InputArea>
                <S.InputUrl>
                    URL
                    <S.Required> *</S.Required>
                </S.InputUrl>
                <S.InputArea>
                    <S.AntdInput ref={urlRef} placeholder='URL주소를 입력해주세요.' />
                </S.InputArea>
                <S.ButtonArea>
                    <S.AtndButton
                        size='large'
                        type='primary'
                        loading={loading}
                        onClick={AddClick}
                    >
                        추가하기
                    </S.AtndButton>
                </S.ButtonArea>
            </S.Add>
        </Layout>
    )
}

export default Add;