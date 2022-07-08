import "./contactsSection.style.css"
import ContactCard from "../contactCard/contactCard.component"
import { useState } from "react"

export default function ContactsSection() {
 const list = [{
  name: "Paulina",
  phone: "111111111",
  email: "blablalba@wp.pl",
  company: "Paulina Niedzielska Web Development",
  id: 1
 },
 {
  name: "Paulina",
  phone: "111111111",
  email: "blablalba@wp.pl",
  company: "Paulina Niedzielska Web Development",
  id: 2
 }
 ]
 const [contactList, setContactList] = useState(list)
 return (
  <div>
   <h2>Your contact list</h2>
   {contactList.map(contact =>
    <ContactCard key={contact.id} name={contact.name} phone={contact.phone} email={contact.email} company={contact.company} id={contact.id} />
   )}

  </div>
 )
}