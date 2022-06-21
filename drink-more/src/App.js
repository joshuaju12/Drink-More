import React from 'react';
import {useState} from 'react';
import './App.css';
import Welcome from './welcome/Welcome.jsx';


function App() {

  const [name, setName] = useState('welcome');



  if (name === 'welcome') {
    return (
      <Welcome setName={setName} />
    )
  }


}

export default App;
