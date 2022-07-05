import './App.css';
import Welcome from './components/welcome/welcome.component';
import ContactCard from './components/contactCard/contactCard.component';

function App() {
  return (
    <div>
      <Welcome />
      <h2>Your contact list</h2>
      {/* search imput */}
      {/* contact list component*/}
      <ContactCard name="Paulina" phone="111111111" email="blablalba@wp.pl" company="Paulina Niedzielska Web Development" />
    </div>
  )
}

export default App;
