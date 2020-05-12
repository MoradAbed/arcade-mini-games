import React from 'react';
import LoginForm from "./components/interface/LoginForm";
import ResultPopup from './components/interface/ResultPopup';


function App() {

  return (
    <div>
      {/*if user is not logged in*/}
      <LoginForm />
      <ResultPopup />
    </div>
  );
}

export default App;
