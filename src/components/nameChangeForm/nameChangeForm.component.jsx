import "./nameChangeForm.style.css"
import { useState } from "react"

export default function NameChangeForm() {

 const [newName, setNewName] = useState('')

 const newNameInputChangeHandler = (e) => setNewName(e.target.value)
 const nameChangeSubmit = () => localStorage.setItem('myUserName', newName)

 return (
  <form onSubmit={() => { nameChangeSubmit() }}>
   <label htmlFor='name'>
    Type your name
    <input type="text" id="name" onChange={(e) => newNameInputChangeHandler(e)} />
   </label>
   <input type="submit" value="Submit" />
  </form>
 )
}