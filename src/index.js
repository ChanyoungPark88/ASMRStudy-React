import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <logo>logo.svg</logo>
      <title>Study with nature sound</title>
    </Helmet>
    <main>
      <h1 className='title'>Study with me?</h1>
      <p className='description'>Let's study with natural sounds</p>
      <App />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
