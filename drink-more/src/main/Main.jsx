import React from 'react';
import {useState, useEffect} from 'react';
import RenderPlant from './RenderPlant.jsx';
import axios from 'axios';


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

  const plantEvolved = ({plantStage, daysWithWater}) => {
    if (plantStage === 1) {
      if (daysWithWater + 1 === 2) {
        return true;
      } else {
        return false;
      }
    }
    if (plantStage === 2) {
      if (daysWithWater + 1 === 3) {
        return true;
      } else {
        return false;
      }
    }
  }

  const handleWaterClick = (e) => {
    if (waterLevel === waterRequired(userData)) {
      alert('Done for the day!');
      setWaterAmount('');
      return;
    }
    if (waterAmount === '') {
      alert('Please select amount');
    } else if (isNaN(Number(waterAmount))) {
      alert('Amount must a number');
    } else {
      if ((waterLevel + Number(waterAmount)) >= waterRequired(userData)) {
        setWaterLevel(waterRequired(userData))
        const evolved = plantEvolved(userData);
        let stage = userData.plantStage;
        let wateredDays = userData.daysWithWater + 1;
        if (evolved) {
          stage = userData.plantStage + 1;
          wateredDays = 0;
        }
        axios.put('http://localhost:8080/users', {
          username: userData.username,
          waterIntake: waterLevel + Number(waterAmount),
          daysWithoutWater: 0,
          daysWithWater: wateredDays,
          plantStage: stage
        })
          .then(() => {
            axios.get('http://localhost:8080/users', {params: {username: userData.username}})
              .then((res) => {
                setUserData(res.data[0]);
                setWaterAmount('');
              })
          })
      } else {
        setWaterLevel(waterLevel + Number(waterAmount));
        axios.put('http://localhost:8080/users', {
          username: userData.username,
          waterIntake: waterLevel + Number(waterAmount),
        })
          .then(() => {
            axios.get('http://localhost:8080/users', {params: {username: userData.username}})
              .then((res) => {
                setUserData(res.data[0]);
                setWaterAmount('');
              })
          })
        setWaterAmount('');
      }
    }
  }

  const handleTestClick = (e) => {
    var newDate = new Date(userData.dateCreated);
    newDate.setDate(newDate.getDate()-1);
    axios.put('http://localhost:8080/users', {
      username: userData.username,
      dateCreated: newDate,
      waterIntake: 0
    })
    .then((res) => {
      setUserData(res.data);
      setWaterLevel(0);
      setWaterAmount('');
    });
  }

  useEffect(() => {
    console.log('useEffect');
    const date1 = new Date(userData.timer);
    const date2 = new Date(userData.currentDate);
    const difference = Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60));
    console.log(difference);
    if (difference >= 24) {
      console.log('this shows');
      const newDate = new Date(date1.getTime() + (difference * 60 * 60 * 1000)).toISOString();
      if (userData.waterIntake < waterRequired(userData)) {
        axios.put('http://localhost:8080/users', {
          username: userData.username,
          timer: newDate,
          daysWithoutWater: userData.daysWithoutWater + (Math.floor(difference / 24)),
          daysWithWater: 0,
          waterIntake: 0
        })
          .then(() => {
            axios.get('http://localhost:8080/users', {params: {username: userData.username}})
              .then((res) => {
                setUserData(res.data[0]);
              })
          })
      } else {
        axios.put('http://localhost:8080/users', {
          username: userData.username,
          timer: newDate,
          waterIntake: 0
        })
        .then(() => {
          axios.get('http://localhost:8080/users', {params: {username: userData.username}})
          .then((res) => {
            setUserData(res.data[0]);
          })
        })
      }
    }
  }, []);


  return (
    <>
      <div className="infoBar">
        <div className="username">Hi {userData.username}</div>
        <div>Keep {userData.plantName} watered!</div>
        <div className="days">Day {totalDays(userData)}</div>
      </div>
      <div className="dailyQuota">{waterLevel} / {waterRequired(userData)} oz</div>
      <RenderPlant data={userData} waterRequired={waterRequired(userData)} waterLevel={waterLevel} />
      <form>
        <label className="waterLabel">Select Amount(oz) :</label>
        <input type="text" value={waterAmount} onChange={handleWaterChange} placeholder="ex: 10"></input>
      </form>
      <div className="buttons">
        <button onClick={handleBackClick}>Exit</button>
        <button onClick={handleWaterClick}>Water!</button>
        <button onClick={handleTestClick}>Add Day</button>
      </div>
    </>
  )
};

export default Main;