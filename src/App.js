
import './App.css';
import { useState } from 'react';

import LoginPage from './Login/LoginPage';
import NavBar from './NavBar';

function App() {
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState("");

  const [userType, setUserType] = useState("");

  const handleUpdateUser = ({ username, usertype }) => {


    if (username !== "") {
      Promise.resolve()
        .then(() => setUserName(username))
        .then(() => setUserType(usertype))
        .then(() => setUser(true))
        .catch(error => console.error("Error:", error));
    }

  }




  return (
    <div className="App">

      {(user === false) ? <LoginPage user={user} onUpdateUser={handleUpdateUser} /> : <NavBar username={userName} userType={userType} />}
    </div>
  );
}

export default App;
