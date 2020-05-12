import React, {useEffect} from 'react';
import LoginForm from "./components/interface/LoginForm";
import PlayerHeader from "./components/interface/PlayerHeader"
import ResultPopup from './components/interface/ResultPopup';
import GamesList from "./components/interface/GamesList";

const states = {
    login:"login",
    homePage: "homePage",
    inGame: "inGame"
}

function App() {

    const [userData,setUserData] = React.useState()
    const [pageState,setPageState] = React.useState(states.login)


    useEffect(()=>{
        console.log(pageState)}

        )


    const getUser = (username)=>{


        fetch(`https://api.github.com/users/${encodeURI(username)}?access_token=${process.env["REACT_APP_GITHUB_TOKEN"]}`)
            .then(res=> res.json())
            .then(data=>{
                setPageState(states.homePage)
                let {name,html_url,avatar_url} = data
                setUserData({name:name?name:username ,html_url,image:avatar_url})
            })
            .catch(err => {
                throw new Error(`fetch getUserData failed ${err}`);
            });


    }


    if(pageState === states.login)
        return  <div>
            { <LoginForm onLogin={getUser}/> }
        </div>

    if(pageState === states.homePage)
     return <div>
            {userData && <PlayerHeader userName={userData.name} playerImage={userData.image} size="large" />}
         <GamesList />
    </div>;



    return <div>
      page not found
    </div>;


}

export default App;
