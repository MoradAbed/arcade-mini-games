import React, {useState} from 'react';
import "../../../index.css";
import "./LoginForm.css";
import Loading from "../loading/loading";



function LoginForm({onLogin}) {

    const [username,setUsername]= useState("")
    const [islLading,setIsLoading]= useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()
        if(islLading)
            return false;

        setIsLoading(true)
        onLogin && onLogin(username)
    };


    if(islLading)
        return  <div className="formContainer">
            <div className="loginForm">
                <Loading/>
            </div>
        </div>

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


