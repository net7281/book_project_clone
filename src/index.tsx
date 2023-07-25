

import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
// antd-css 적용
import 'antd/dist/antd.css';
// redux-store
import create from './redux/create';
// provider 전달
import { Provider } from 'react-redux';

const store = create(); //스토어 생성

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);

reportWebVitals(console.log);
