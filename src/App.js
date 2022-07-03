import './App.css';
import NameChangeForm from './components/nameChangeForm/nameChangeForm.component';

function App() {

  const nameFromLocalStorage = localStorage.getItem('myUserName')
  let userName = nameFromLocalStorage || "User"

  return (
    <div>
      <h1>Hi there, {userName} !</h1>
      {/* sort button  */}
      {userName !== "User" && <button onClick={() => localStorage.setItem('myUserName', "User")}>Change Name</button>}
      {userName === "User" && <NameChangeForm />}

    </div>
  );
}

export default App;
