import React, { useContext } from "react";
import "../components/style.css";
import { State } from "../App"
import { updateProfile, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { app } from "../firebase";

const Profile = () => {
  // Here we retrieve the user from the state set in app.js (current logged in user) (aka createContext then useContext)
  const { setUser } = useContext(State);
  // console.log("console just to use user in state: ",user)

  // Navigate function from react router dom
  const navigate = useNavigate()
  
  // trying to get rid of userInternal.getIdToken error:
  // getting auth from firebase to authorize current user
  const firebaseAuth = getAuth();


  const editProfileFormSubmit = (formSubmitEvent) => {
      formSubmitEvent.preventDefault();
      console.log("Updated username: ", formSubmitEvent.target.displayName.value)
      const newDisplayName = formSubmitEvent.target.displayName.value;
      const currentUser = firebaseAuth.currentUser

      updateProfile(currentUser, { displayName: newDisplayName}).then(() => {
        console.log("Username Updated!")

        // refresh the usersObject (updated version of currentUser after username edit) (essentially redeclaring object)
        const updatedUser = firebaseAuth.currentUser

        setUser(updatedUser)

        // here we are storing updatedUser in local storage to ensure that across page reloads the user stays the updated value and doesnt revert back to its old value
        localStorage.setItem("user", JSON.stringify(updatedUser))
        console.log("Current User Updated Object:", currentUser )
        navigate("/")
      }).catch((error) => {
        console.log("Error updating Profile:", error)
      })
  };

  return(
      <>
      <div className="authFormPageContainer">
          <div className="welcomeText">
              Hello Trainer! Edit Username Below:
          </div>
          <form className="authForm editProfileForm" onSubmit={(formSubmitEvent) => editProfileFormSubmit(formSubmitEvent)}>
              <input type="username" id="username" name="displayName" placeholder="Enter a new Username..."/>
              {/* <input type="email" required={true} id="email" name="signupEmail" placeholder="Enter Email..."/>
              <input type="password" required={true} id="password" name="signupPassword" placeholder="Enter Password..."/> */}
              
              <button type="submit" id="editProfile" className="formBtn">Update</button>
          </form>
      </div>
      </>
  )
}

export default Profile;
