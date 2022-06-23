import React from 'react';
import {useState} from 'react';
import './style.css';
import Welcome from './welcome/Welcome.jsx';
import GetStarted from './getStarted/GetStarted.jsx';
import Login from './login/Login.jsx';
import Main from './main/Main.jsx';


function App() {

  const [name, setName] = useState('welcome');
  const [userData, setUserData] = useState({});



  if (name === 'welcome') {
    return (
      <div className="app">
        <h1>Drink More</h1>
        <Welcome setName={setName} />
      </div>
    )
  }

  if (name === 'getStarted') {
    return (
      <div className="app">
        <h1>Drink More</h1>
        <GetStarted
          setName={setName}
          setUserData={setUserData}
        />
      </div>
    )
  }

  if (name === 'login') {
    return (
      <div className="app">
        <h1>Drink More</h1>
        <Login
          setName={setName}
          setUserData={setUserData}
        />
      </div>
    )
  }

  if (name === 'main') {
    return (
      <div className="app">
        <h1>DrinkMore</h1>
        <Main
          setName={setName}
          userData={userData}
          setUserData={setUserData}
        />
      </div>
    )
  }


}

export default App;
