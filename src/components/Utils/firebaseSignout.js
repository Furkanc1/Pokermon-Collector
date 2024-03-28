// import { signOut } from 'firebase/auth';
// import { auth } from '../../firebase';
// import { State } from "../../App";
// import { useContext, useState } from "react";


// export const firebaseSignout = (logoutLinkClickEvent) => {
//     let { user, setUser } = useContext(State);

//     signOut(auth).then(() => {
//         console.log(`User Signed Out`, logoutLinkClickEvent);
//         localStorage.removeItem(`user`);
//         setUser(undefined);
//     }).catch((error) => {
//         console.log(`Sign Out Error`, error);
//     });
// }