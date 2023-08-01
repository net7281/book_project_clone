
//리액트 라우터 : 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지 출력

import { BrowserRouter, Routes, Route } from 'react-router-dom'; //라우터 라이브러리
import { ErrorBoundary } from 'react-error-boundary'; //에러처리 라이브러리

// router page
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import Error from './pages/Error';

//hooks
import ScrollToTop from './hooks/useScrollToTop';

function Router(){
    return(
        <ErrorBoundary FallbackComponent={Error}>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    {/*  패스와 컴포넌트 연결~ 아마 위에서 아래로?? 작동하는듯 */}
                    <Route path='/' element={<Home />} />
                    <Route path='/signin' element={<Signin />} />

                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default Router;