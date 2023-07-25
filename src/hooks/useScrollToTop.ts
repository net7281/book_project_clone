
// 훅이 몰까...
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


// 페이지 이동시 가장 상단으로>??
//export default = 이 파일에는 하나의 함수만 있고, {} 로 이름을 지정하지 않아도 된다.
export default function useScrollToTop(){
    const { pathname } = useLocation();

    // useEffect 를 사용하여 마운트/언마운트/업데이트시 할 작업 설정
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

    return null;
}