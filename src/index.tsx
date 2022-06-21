import { GlobalStyle } from 'components/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Router from './routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
    <GlobalStyle/>
  </React.StrictMode>
);

