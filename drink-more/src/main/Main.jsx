import React from 'react';
import {useState} from 'react';
import RenderPlant from './RenderPlant.jsx';


const Main = ({setName, userData, setUserData}) => {

  const [waterLevel, setWaterLevel] = useState(userData.waterIntake)
  const [waterAmount, setWaterAmount] = useState('');

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

  const totalDays = (data) => {
    const date1 = new Date(data.currentDate);
    const date2 = new Date(data.dateCreated);
    return Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  }




  const handleBackClick = (e) => {
    setName("welcome")
  }

  const handleWaterChange = (e) => {
    setWaterAmount(e.target.value);
  }

  const handleWaterClick = (e) => {
    if (waterAmount === '') {
      alert('Please select amount');
    } else if (isNaN(Number(waterAmount))) {
      alert('Amount must a number');
    } else {
      setWaterLevel(waterLevel + Number(waterAmount));
    }
  }


  return (
    <>
      <div className="infoBar">
        <div className="username">Hi {userData.username}</div>
        <div>Keep {userData.plantName} watered!</div>
        <div className="days">Day {totalDays(userData)}</div>
      </div>
      <div className="dailyQuota">{waterLevel} / {waterRequired(userData)} oz</div>
      <RenderPlant data={userData} waterRequired={waterRequired(userData)} />
      <form>
        <label className="waterLabel">Select Amount(oz) :</label>
        <input type="text" value={waterAmount} onChange={handleWaterChange} placeholder="ex: 10"></input>
      </form>
      <div className="buttons">
        <button onClick={handleBackClick}>Exit</button>
        <button onClick={handleWaterClick}>Water!</button>
      </div>
    </>
  )
};

export default Main;