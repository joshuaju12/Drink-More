import React from 'react';
import './Welcome.css';
import plant1 from '../assets/plant1stage3.png';
import plant2 from '../assets/plant2stage3.png';
import plant3 from '../assets/plant3stage3.png';

const Welcome = ({setName}) => {


  const handleStartedClick = () => {
    setName('getStarted');
  };

  const handleLoginClick = () => {
    setName('login');
  }


  return (
    <>
      <h2>Drink More is an app designed to keep you hydrated, with a playful feature of nurturing a plant!</h2>
      <div className="plantContainer">
        <img src={plant1} alt="logo" />
        <img src={plant2} alt="logo" />
        <img src={plant3} alt="logo" />
      </div>
      <div className="buttons">
        <button onClick={handleStartedClick}>Get Started</button>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </>
  )
}

export default Welcome;