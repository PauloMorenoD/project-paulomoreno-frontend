import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from './context/userContext';
import { CompanieProvider } from './context/companieProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <CompanieProvider>
      <App /> 
      </CompanieProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
