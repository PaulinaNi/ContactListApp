import "./nameChangeForm.style.css"
import { useState } from "react"

export default function NameChangeForm() {

 const [newName, setNewName] = useState('')

 const newNameInputChangeHandler = (e) => setNewName(e.target.value)
 const nameChangeSubmit = () => localStorage.setItem('myUserName', newName)

 return (
  <form className="nameChangeForm" onSubmit={() => { nameChangeSubmit() }}>
   <input type="text" id="name" placeholder="Type your name" onChange={(e) => newNameInputChangeHandler(e)} required />
   <input type="submit" value="Submit" />
  </form>
 )
}