import React from 'react';
import LoginForm from "./components/interface/LoginForm";
import PlayerHeader from "./components/interface/PlayerHeader"
import ResultPopup from './components/interface/ResultPopup';


function App() {

  return (
    <div>
      {/*if user is not logged in*/}
      {/* <LoginForm /> */}
    <PlayerHeader />
      
    {/*if user is logged in*/}

      <LoginForm />
      <ResultPopup />
    </div>
  );
}

export default App;
