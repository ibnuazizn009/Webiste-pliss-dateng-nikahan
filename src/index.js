import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './containers/Home/Home';
import Portofolio from './containers/Portofolio/Portofolio';
import Themes from './containers/Themes/Themes';
import Price from './containers/Price/Price'
import Login from './containers/Login/Login'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portofolio' element={<Portofolio />} />
      <Route path='/themes' element={<Themes />} />
      <Route path='/price' element={<Price />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>,
  // <React.StrictMode>
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
