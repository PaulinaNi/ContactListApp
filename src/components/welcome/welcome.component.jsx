import "./welcome.style.css"
import { useState } from 'react';

import NameChangeForm from "../nameChangeForm/nameChangeForm.component"
import Button from "../button/button.component";

export default function Welcome() {

 const nameFromLocalStorage = localStorage.getItem('myUserName')
 const [userName, setUserName] = useState(nameFromLocalStorage || "User")

 const userNameChangeButton = () => {
  setUserName("User")
 }

 return (
  <div className="welcomeDiv">
   <h1>Hi there, {userName} !</h1>
   {/* sort button  */}
   {userName !== "User" && <Button onClick={userNameChangeButton} text="Change Name" />}
   {userName === "User" && <NameChangeForm />}

  </div>
 );
}