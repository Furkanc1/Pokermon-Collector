import React from "react";
import '../components/style.css';
import { authTypes } from "../App";

const Signup = () => {

    const authFormSubmit = (type, formSubmitEvent) => {
        formSubmitEvent.preventDefault();
        
        let email = formSubmitEvent.target.signupEmail.value;
        let password = formSubmitEvent.target.signupPassword.value;
        
        let userToUse = {
            email,
            password
        }

        console.log(`${type} Parameters`, {type, userToStore: userToUse});
    }

    return(
        <>
        <div className="authFormPageContainer">
            <div className="welcomeText">
                Welcome! Sign-up Below:
            </div>
            <form className="authForm signupForm" onSubmit={(formSubmitEvent) => authFormSubmit(authTypes.signUp, formSubmitEvent)}>
                <input type="username" id="username" name="username" placeholder="Enter Username..."/>
                <input type="email" required={true} id="email" name="signupEmail" placeholder="Enter Email..."/>
                <input type="password" required={true} id="password" name="signupPassword" placeholder="Enter Password..."/>
                
                <button type="submit" id="signup" className="formBtn">Sign Up</button>
            </form>
        </div>
        </>
    )
}

export default Signup;