import '../components/style.css';
import { auth } from "../firebase";
import { State, authTypes } from "../App";
import React, { useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    let { setUser } = useContext(State);

    const firebaseSignIn = (email, password, type) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const firebaseUser = userCredential.user;
            if (firebaseUser) {
                console.log(`Firebase User ${type}`, firebaseUser);
                localStorage.setItem(`user`, JSON.stringify(firebaseUser));
                setUser(firebaseUser);
            }
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
        
        let email = formSubmitEvent.target.loginEmail.value;
        let password = formSubmitEvent.target.loginPassword.value;

        firebaseSignIn(email, password, type);
    }

    return (
        <>
        <div className="authFormPageContainer">
            <div className="welcomeText">
                Hello Trainer! Login Below:
            </div>
            <form className="authForm signupForm" onSubmit={(formSubmitEvent) => authFormSubmit(authTypes.signIn, formSubmitEvent)}>
                <input type="email" required={true} id="email" name="loginEmail" placeholder="Enter Email..."/>
                <input type="password" required={true} id="password" name="loginPassword" placeholder="Enter Password..."/>
                
                <button type="submit" id="login" className="formBtn">Login</button>
            </form>
        </div>
        </>
    )
}

export default Login;