import React, {lazy, Suspense, useEffect} from "react";
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

    const setLocalStorage= ({name,avatar_url})=>{

        localStorage.setItem("user_name",name)
        localStorage.setItem("user_img",avatar_url)

    }
    const getLocalStorage= ()=>{

        let prevUserDate= {};
        if(localStorage)
            prevUserDate={
                name :localStorage.getItem("user_name"),
                image: localStorage.getItem("user_img"),
            }
        return prevUserDate;
    }
    const clearLocalStorage= ()=> {
        if (localStorage) {
            localStorage.removeItem("user_img")
            localStorage.removeItem("user_name")
        }
    }



    useEffect(()=>{


        if(pageState === "login")
        {
            let prevUserDate= getLocalStorage();

            if(prevUserDate.name)
            {
                setUserData(prevUserDate)
                setPageState(states.homePage)
            }
        }

    }, [pageState])


    //load the game tag for the selected game
    function lazyLoadComponent({startPageTitle,componentPath:path}) {
        let Component =  lazy(()=>import(`${path}`))
        return <Component title={startPageTitle}/>

    }

    //load the user date
    const getUser = (username) => {

        fetchUserDate(username,({name ,html_url,avatar_url})=>{
            let usedName = name?name:username
            setPageState(states.homePage)
            setLocalStorage({name:usedName,html_url,avatar_url})
            setUserData({name: usedName, image: avatar_url })

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
                    clearLocalStorage()
                    setPageState(states.login)
                }}
                        className="logoutBtn" >
                    Logout
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
                    clearLocalStorage()
                    setPageState(states.login)
                }}
                       className="logoutBtn" >
                    Logout
                </button>

                <button onClick={() => setPageState(states.homePage)} className="backBtn"  >
                    Back
                </button>

            </Footer>
        </div>;


    //any other unaccounted for state ( no such state exists )
    return <div>
        state not found
    </div>;


}

export default App;
