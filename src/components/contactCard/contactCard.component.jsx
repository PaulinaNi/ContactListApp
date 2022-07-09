import "./constactCard.style.css"
import Button from "../button/button.component"

export default function ContactCard(props) {
 const { name, phone, email, company, id } = props

 function editButtonHandler(id) {
  // finish editing and add deleting 
  console.log("start editing", id)
 }
 return (
  <div className="contactCardHolder">
   <ul className="contactCard">{name}
    <li>
     <strong>Phone:</strong> {phone}
    </li>
    <li>
     <strong>Email:</strong> {email}
    </li>
    <li>
     <strong>Company:</strong> {company}
    </li>
   </ul>
   <Button onClick={() => editButtonHandler(id)} text="Edit" />
  </div>
 )
}