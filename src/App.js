import React, {lazy, Suspense} from "react";
import LoginForm from "./components/interface/loginForm/loginForm";
import PlayerHeader from "./components/interface/playerHeader/PlayerHeader";
import GamesList from "./components/interface/gameList/gamesList";
import gameData from "./util/gameData.json";
import GameBoard from "./components/interface/gameBoard/gameBoard"
import fetchUserDate from "./util/fetchUserData";
import Footer from "./components/interface/Footer/footer";

const states = {
    login: "login",
    homePage: "homePage",
    inGame: "inGame",
};

function App() {

    const [userData, setUserData] = React.useState()
    const [pageState, setPageState] = React.useState(states.login)
    const [selectedGamePath, setSelectedGamePath] = React.useState()


    //load the game tag for the selected game
    function lazyLoadComponent({startPageTitle,componentPath:path}) {
        let Component =  lazy(()=>import(`${path}`))
        return <Component title={startPageTitle}/>

    }

    //load the user date
    const getUser = (username) => {
        fetchUserDate(username,({name,html_url,avatar_url})=>{
            setPageState(states.homePage)
            setUserData({
                name: name ? name : username,
                html_url,
                image: avatar_url })

        })

    }

    //if the user hasn't logged in
    if (pageState === states.login)
        return <div>
            <LoginForm onLogin={getUser} />
        </div>

    //if the user logged in - show the available games
    if (pageState === states.homePage)
        return <div>
            {/*show header*/}
            {userData && <PlayerHeader userName={userData.name} playerImage={userData.image} size="large" />}

            {/*show the list of games*/}
            <GamesList data={gameData} onClick={(gameData) => {
                setSelectedGamePath(gameData)
                setPageState(states.inGame)
            }} />

            <Footer >
                <button onClick={() => {
                    setUserData(null)
                    setPageState(states.login)
                }}
                        className="logoutBtn" >
                    logOut
                </button>

            </Footer>
        </div>;

    //if the user enters a game
    if (pageState === states.inGame)
        return <div>
            {/*show header*/}
            {userData && <PlayerHeader userName={userData.name} playerImage={userData.image} size="small" />}

            {/*load the game*/}
            <GameBoard>
                <Suspense fallback={<div>loading...</div>}>
                    {selectedGamePath &&lazyLoadComponent(selectedGamePath)}
                </Suspense>
            </GameBoard>


            <Footer >
                <button onClick={() => {
                    setUserData(null)
                    setPageState(states.login)
                }}
                       className="logoutBtn" >
                    logOut
                </button>

                <button onClick={() => setPageState(states.homePage)} className="backBtn"  >
                    back
                </button>

            </Footer>
        </div>;


    //any other unaccounted for state ( no such state exists )
    return <div>
        state not found
    </div>;


}

export default App;
