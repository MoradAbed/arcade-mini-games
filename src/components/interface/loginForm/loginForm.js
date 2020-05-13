import React, {useState} from 'react';
import "../../../index.css";
import "./loginForm.css";
import Loading from "../loading/loading";
import PropTypes from "prop-types";

LoginForm.propTypes = {
    onLogin: PropTypes.func
};


function LoginForm({onLogin}) {

    const [username,setUsername]= useState("")
    const [islLading,setIsLoading]= useState(false)

    //when the user hits the "login" button
    const onSubmit=(e)=>{
        e.preventDefault()
        if(islLading)
            return false;

        setIsLoading(true)
        onLogin && onLogin(username)
    };

    //if the user data is being fetched from an api - show a loading gif
    if(islLading)
        return  <div className="formContainer">
            <div className="loginForm">
                <Loading/>
            </div>
        </div>


    //display the login form
    return (
        <div className="formContainer">
            <form className="loginForm" onSubmit={onSubmit}>
                <label htmlFor="username">Enter your github username</label>
                <input name="username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input type="submit" name="submit" value="log in"/>
            </form>
        </div>
    );
}




export default LoginForm;


