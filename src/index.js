import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ResultPopup from './components/interface/ResultPopup';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ResultPopup />
  </React.StrictMode>,
  document.getElementById('root')
);

