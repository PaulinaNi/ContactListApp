import "./button.style.css"

export default function Button(props) {
 const { onClick, text } = props

 return (
  <button className="defaultButton" onClick={onClick}>{text}</button>
 )

}