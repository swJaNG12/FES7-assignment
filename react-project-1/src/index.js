import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

// 20230919 리액트쿼리, axios
// import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
// const queryClient = new QueryClient();


// 20230920 복습 내용
// 그외 주석 처리는 api 통신에 관한내용이다.
// 20230920study 컴포넌트
import Memoization from './20230920study/Memoization';
import UseMemo from './20230920study/UseMemo';
import ContextComponent from './20230920study/ContextComponent';


// 20230920recoil 컴포넌트
import AppRecoil from './20230920recoil/AppRecoil';


// 20230925 복습컴포넌트
import App20230925 from './App20230925';
import App20230925_2 from './App20230925_2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <QueryClientProvider client={queryClient}>
  //   <App />
  // </QueryClientProvider>

  // recoli 저장소 범위 지정
  // <RecoilRoot>
  //   <AppRecoil />
  // </RecoilRoot>

  // 20230925 복습컴포넌트
  <App20230925_2 />
);
