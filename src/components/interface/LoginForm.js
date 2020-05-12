import React from 'react';
import "../../index.css";
import "./LoginForm.css";


function LoginForm(props) {
    return (
        <div className="formContainer">
            <form className="loginForm">
                <label htmlFor="username">Enter your github username</label>
                <input name="username" type="text"/>
                <input type="submit" name="submit" value="log in"/>
            </form>
        </div>

    );
}



export default LoginForm;