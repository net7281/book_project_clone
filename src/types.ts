// Login 요청에 대한 응답
export interface LoginReqType {
    email: string;
    password: string;
}

// Book 응답
export interface BookResType {
    bookId: number;
    title: string;
    author: string;
    createdAt: string;
    url: string;
    message: string;
}

// Book 요청
export interface BookReqType {
    title: string;
    author: string;
    message: string;
    url: string;
}
