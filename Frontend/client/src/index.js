
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store/index'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react'



  // const domain = process.env.AUTH0_DOMAIN
  // const clientId = process.env.AUTH0_CLIENT_ID



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Auth0Provider domain='dev-e9bycb99.us.auth0.com' clientId='V7GpOMzLkQmgA1FZzyMrQaZGq6yzdd4L' redirectUri={'http://localhost:3000'}> */}
    {/* redirectUri={'https://foodify-ten.vercel.app/'} */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
