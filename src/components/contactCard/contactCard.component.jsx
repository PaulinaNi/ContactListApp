import "./constactCard.style.css"

export default function ContactCard(props) {
 const { name, phone, email, company } = props
 return (
  <div>
   <ul>
    <li>Name: {name}</li>
    <li>Phone: {phone}</li>
    <li>Email: {email}</li>
    <li>Company: {company}</li>
   </ul>
  </div>
 )
}