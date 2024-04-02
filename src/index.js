import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

// 1. redux 설치
// 2. npx install redux react-redux
// 3. index.js에서 Provider 사용 store 변수 생성
// 4. src에서 store폴더 만든 후 사용
// 5. redux 폴더에서 reducer 만들기
