import React from "react";
import '../components/style.css';

const Signup = () => {
    return(
        <>
        <div className="authFormPageContainer">
            <div className="welcomeText">
                Welcome! Sign-up Below:
            </div>
            <form className="authForm signupForm">
            <input type="username" id="username" name="username" placeholder="Enter Username..."/>
            <input type="email" required={true} id="email" name="signupEmail" placeholder="Enter Email..."/>
            <input type="password" required={true} id="password" name="signupPassword" placeholder="Enter Password..."/>
            
            <button type="submit" id="signup" className="formBtn">Search</button>
        </form>
        </div>
        </>
    )
}

export default Signup;