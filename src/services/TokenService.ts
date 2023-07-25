const LOCAL_STORAGE_TOKEN_KEY_NAME = 'token';

//로그인 토큰 관련

export const TokenService = {

    //localStorage > key / value 로 사용자 pc로 저장, 쿠키랑 다르게 서버에 다시 보낼 필요x

    set(token:string): void{
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY_NAME,token);
    },

    get() : string | null {
        return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY_NAME)
    },

    remove() : void{
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY_NAME)
    }
}