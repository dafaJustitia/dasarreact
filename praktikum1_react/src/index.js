import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import First from './pages/first';
//import Alert from './component/alert';
//import Second from './pages/second';
//import Third from './pages/third';
//import Fourth from './pages/fourth';
//import Fifth from './pages/fifth';
import Sixth from './pages/sixth';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


ReactDOM.render(
  <React.StrictMode>
    <Sixth />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();