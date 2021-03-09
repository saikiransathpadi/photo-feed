import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Imagefeed from './imagefeed'

ReactDOM.render(
  <React.StrictMode>
    
    <body>
    <h1 className='head'>Photo Book</h1>
   <Imagefeed/>
   </body>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
