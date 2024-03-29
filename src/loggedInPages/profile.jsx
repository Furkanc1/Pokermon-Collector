import React from "react";
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
import "../components/style.css";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../firebase";

const Profile = () => {

  const editProfileFormSubmit = (type, formSubmitEvent) => {
      formSubmitEvent.preventDefault();
      console.log(type,"event", formSubmitEvent)
      // let email = formSubmitEvent.target.signupEmail.value;
      // let password = formSubmitEvent.target.signupPassword.value;
      let displayName = formSubmitEvent.target.displayName.value
      updateProfile(displayName, type);
  }

  const auth = getAuth(app);
updateProfile(auth.currentUser, {
  displayName: "Jane Q. User"
}).then(() => {
  // Profile updated!
  console.log("profile updated")
}).catch((error) => {
  // An error occurred
  // ...
});

  return(
      <>
      <div className="authFormPageContainer">
          <div className="welcomeText">
              Hello Trainer! Profile Settings Below:
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
