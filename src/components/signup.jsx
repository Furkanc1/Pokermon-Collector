import React from "react";
import '../components/style.css';
import { authTypes } from "../App";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Sign Up Component
const Signup = () => {

    const firebaseSignUp = (email, password, displayName, type) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const firebaseUser = userCredential.user;
            console.log(`Firebase User ${type}`, firebaseUser);
            // if display name is provided and also is not an empty string
            if (displayName && displayName.trim() !== '') {
                //the nupdate users profile with display name
                return updateProfile(firebaseUser, { displayName: displayName });
            }
        })
        .then(() => {
            console.log('displayName set Succesfully');
            window.location.href = `/login`;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Firebase ${type} Error`, {
                errorCode,
                errorMessage,
            })
        });
    }

    const authFormSubmit = (type, formSubmitEvent) => {
        formSubmitEvent.preventDefault();
        
        let email = formSubmitEvent.target.signupEmail.value;
        let password = formSubmitEvent.target.signupPassword.value;
        let displayName = formSubmitEvent.target.displayName.value
        firebaseSignUp(email, password, displayName, type);
    }

    return(
        <>
        <div className="authFormPageContainer">
            <div className="welcomeText">
                Welcome! Sign-up Below:
            </div>
            <form className="authForm signupForm" onSubmit={(formSubmitEvent) => authFormSubmit(authTypes.signUp, formSubmitEvent)}>
                <input type="username" id="username" name="displayName" placeholder="Enter Username..."/>
                <input type="email" required={true} id="email" name="signupEmail" placeholder="Enter Email..."/>
                <input type="password" required={true} id="password" name="signupPassword" placeholder="Enter Password..."/>
                
                <button type="submit" id="signup" className="formBtn">Sign Up</button>
            </form>
        </div>
        </>
    )
}

export default Signup;