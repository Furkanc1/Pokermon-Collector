// const loggedInDropDown = () => {
// <>
//                         <li>
//                             <p>Welcome, {user?.email}</p> 
//                         </li>
//                         <div className='menuContainer'>
//                         <div className="dropdownTrigger" onClick={() => {setDropDwnOpen(!dropDwnOpen)}}>
//                             <button>dropdownbtn</button>
//                         </div>
//                     <div className={`dropdown ${dropDwnOpen? `active` : `inactive`}`}>
//                         <ul>
//                             <DropdownItem profile = {user} text = {"Profile"}/>
//                             <DropdownItem drpSettings = {user} settings = {"settings"}/>
//                             <DropdownItem drpInventory = {user} inventory = {"inventory"}/>
//                             <DropdownItem drpTeams = {user} teams = {"teams"}/>
//                             <li>
//                             <a role={`button`} href={`/`} rel={`noreferrer`} onClick={(logoutLinkClickEvent) => firebaseSignout(logoutLinkClickEvent)} className={`authLinks`}><button className='formBtn logoutBtn'>Log-Out</button></a>
//                             </li>
//                         </ul>
//                     </div>
//                     </div>
// </>

// }
// export default loggedInDropDown