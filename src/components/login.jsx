import React from "react";
import '../components/style.css';

const Login = () => {
    return(
        <>
        <div className="authFormPageContainer">
            <div className="welcomeText">
                Hello Trainer! Login Below:
            </div>
            <form className="authForm signupForm">
            <input type="email" required={true} id="email" name="loginEmail" placeholder="Enter Email..."/>
            <input type="password" required={true} id="password" name="signupPassword" placeholder="Enter Password..."/>
            
            <button type="submit" id="login" className="formBtn">Login</button>
        </form>
        </div>
        </>
    )
}

export default Login;