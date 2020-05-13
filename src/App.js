import React, {useEffect} from 'react';
import LoginForm from "./components/interface/loginForm/LoginForm";
import PlayerHeader from "./components/interface/playerHeader/PlayerHeader"
import GamesList from "./components/interface/gameList/GamesList";
import Board from './components/TTT/Board';
import Square from './components/TTT/Square';

const states = {
    login:"login",
    homePage: "homePage",
    inGame: "inGame"
}

function App() {

    const [userData,setUserData] = React.useState()
    const [pageState,setPageState] = React.useState(states.login)



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
            <Board />
            { <LoginForm onLogin={getUser}/> }
        </div>

    if(pageState === states.homePage)
     return <div>
            {userData && <PlayerHeader userName={userData.name} playerImage={userData.image} size="large" />}
            {/*delete the button*/}
            <button onClick={()=>setPageState(states.inGame)} style={{width:"100px" ,height:"100px", position:"fixed",left:"0",bottom:"0"}}/>
         <GamesList />
    </div>;

    if(pageState === states.inGame)
        return <div>
            {userData && <PlayerHeader userName={userData.name} playerImage={userData.image} size="small" />}
            {/*delete the button*/}
            <button onClick={()=>setPageState(states.homePage)} style={{width:"100px" ,height:"100px", position:"fixed",left:"0",bottom:"0"}}/>

            <GamesList />
        </div>;


    return <div>
      state not found
    </div>;


}

export default App;
