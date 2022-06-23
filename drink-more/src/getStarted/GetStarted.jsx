import React from 'react';
import {useState} from 'react';
import plant1 from '../assets/plant1stage1.png';
import plant2 from '../assets/plant2stage1.png';
import plant3 from '../assets/plant3stage1.png';
import axios from 'axios';


const GetStarted = ({setName}) => {


  const [selectedSeed, setSelectedSeed] = useState('none');
  const [data, setData] = useState({
    username: '',
    plantType: '',
    plantName: '',
    weight: '',
    age: '',
    plantStage: 0,
    waterIntake: 0,
    daysWithoutWater: 0,
    daysWithWater: 0
  });

  const selected = {"backgroundColor": "#8EFFF8"};

  const handleBackClick = () => {
    setName('welcome');
  };

  const handlePlantClick = (e) => {
    setSelectedSeed(e.target.getAttribute('value'))
    setData({...data, plantType: Number(e.target.getAttribute('value'))});
  };

  const handleUserChange = (e) => {
    setData({...data, username: e.target.value});
  };

  const handlePlantChange = (e) => {
    setData({...data, plantName: e.target.value});
  };

  const handleWeightChange = (e) => {
    setData({...data, weight: e.target.value});
  };

  const handleAgeChange = (e) => {
    setData({...data, age: e.target.value});
  };

  const checkForm = (form) => {
    if (form.username === '' || form.plantName === '') {
      return ('noString');
    }
    if (form.plantType === '') {
      return ('noPlant');
    }
    if (form.weight === '' || form.age === '') {
      return ('noString');
    }
    if (isNaN(Number(form.weight)) || isNaN(Number(form.age))) {
      return ('noNumber')
    }
    return ('pass');
  };


  const handleStartClick = (e) => {
    const check = checkForm(data);

    if (check === 'noString') {
      alert('please fill in all fields');
    } else if (check === 'noPlant') {
      alert('please pick a plant');
    } else if (check === 'noNumber') {
      alert('Weight and Age must be a number');
    } else {
      axios.post('http://localhost:8080/users', {...data,
      dateCreated: new Date().toISOString(),
      currentDate: new Date().toISOString(),
      weight: Number(data.weight),
      age: Number(data.age)
      })
        .then((res) => {
          console.log('added');
          setName("main");
        })
        .catch((err) => {
          console.log('error posting');
        });
    }
  };


  return (
    <>
      <h2>Getting Started</h2>
      <h2>Your water intake will water your plant</h2>
      <h2>Neglect your plant for too long and it'll die</h2>
      <form>
        <div className="user">
          <label className="userLabel">Pick a username :</label>
          <input type="text"
            value={data.username}
            onChange={handleUserChange} >
          </input>
        </div>
        <div className="plantContainer">
          <div>
            <label>Pick a plant</label>
          </div>
          <img
            className="seeds"
            src={plant1}
            alt="logo"
            value="1"
            style={selectedSeed === '1' ? selected : null}
            onClick={handlePlantClick}
          />
          <img
            className="seeds"
            src={plant2}
            alt="logo"
            value="2"
            style={selectedSeed === '2' ? selected : null}
            onClick={handlePlantClick}
          />
          <img
            className="seeds"
            src={plant3}
            alt="logo"
            value="3"
            style={selectedSeed === '3' ? selected : null}
            onClick={handlePlantClick}
          />
        </div>
        <div>
          <label className="plantLabel">Name your plant! :</label>
          <input type="text" value={data.plantName} onChange={handlePlantChange}></input>
        </div>
        <div className="weightAge">
          <label>
            Calculate water intake
          </label>
          <div className="requirement">
            <label className="requirementLabel">Weight :</label>
            <input type="text"
              className="weightInput"
              value={data.weight}
              onChange={handleWeightChange}>
            </input>
            <label className="requirementLabel">Age :</label>
            <input type="text"
              value={data.age}
              onChange={handleAgeChange}>
            </input>
          </div>
        </div>
      </form>
      <div className="buttons">
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleStartClick}>Start Tracking!
        </button>
      </div>
    </>
  )
}

export default GetStarted;