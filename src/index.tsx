import React from 'react';
import ReactDOM from 'react-dom/client';
import Carrinho from './pages/Carrinho';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Carrinho />
  </React.StrictMode>
);

