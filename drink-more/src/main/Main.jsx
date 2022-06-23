import React from 'react';
import RenderPlant from './RenderPlant.jsx';


const Main = ({setName, userData, setUserData}) => {

  const waterRequired = (data) => {
    let result = data.weight / 2.2;
    if (data.age < 30) {
      result = result * 40;
    }
    if (data.age > 30 && data.age < 55) {
      result = result * 35;
    }
    if (data.age > 55) {
      result = result * 30;
    }
    result = result / 28.3;
    return Math.round(result);
  }




  const handleBackClick = (e) => {
    setName("welcome")
  }



  return (
    <>
      <div className="infoBar">
        <div className="username">Hi {userData.username}</div>
        <div>Keep {userData.plantName} watered!</div>
        <div className="days">Day </div>
      </div>
      <RenderPlant data={userData} waterRequired={waterRequired(userData)} />
      <div className="buttons">
        <button onClick={handleBackClick}>Back</button>
      </div>
    </>
  )
};

export default Main;