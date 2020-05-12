import React, {useState} from 'react';
import "../../index.css";
import "./LoginForm.css";


function LoginForm({onLogin}) {

    const [username,setUsername]= useState("")

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(username)

        onLogin && onLogin(username)
    };

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