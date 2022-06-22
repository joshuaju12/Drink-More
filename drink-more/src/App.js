import React from 'react';
import {useState} from 'react';
import './style.css';
import Welcome from './welcome/Welcome.jsx';
import GetStarted from './getStarted/GetStarted.jsx';
import Login from './login/Login.jsx';


function App() {

  const [name, setName] = useState('welcome');



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
        <GetStarted setName={setName} />
      </div>
    )
  }

  if (name === 'login') {
    return (
      <div className="app">
        <h1>Drink More</h1>
        <Login setName={setName} />
      </div>
    )
  }


}

export default App;
