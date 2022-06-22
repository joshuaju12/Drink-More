import React from 'react';
import {useState} from 'react';
import plant1 from '../assets/plant1stage1.png';
import plant2 from '../assets/plant2stage1.png';
import plant3 from '../assets/plant3stage1.png';


const GetStarted = ({setName}) => {


  const [selectedSeed, setSelectedSeed] = useState('none');
  const [data, setData] = useState({
    username: '',
    plantType: '',
    plantName: '',
    plantStage: 0,
    // dateCreated: new Date(), add these at submit
    // currentDate: new Date(),
    waterIntake: 0,
    waterRequired: 0,
    daysWithoutWater: 0,
    daysWithWater: 0
  });

  const selected = {"backgroundColor": "#8EFFF8"}

  const handleBackClick = () => {
    setName('welcome');
  }

  const handlePlantClick = (e) => {
    setSelectedSeed(e.target.getAttribute('value'))
    setData({...data, plantType: e.target.getAttribute('value')});
  }


  return (
    <>
      <h2>Getting Started</h2>
      <h2>Your water intake will water your plant</h2>
      <h2>Neglect your plant for too long and it'll die</h2>
      <form>
        <label>Pick a username
          <input type="text"></input>
        </label>
          <div className="plantContainer">
            <div>
              <label>Pick a seed
            </label>
            </div>
            <img
              src={plant1}
              alt="logo"
              value="1"
              style={selectedSeed === '1' ? selected : null}
              onClick={handlePlantClick}
            />
            <img
              src={plant2}
              alt="logo"
              value="2"
              style={selectedSeed === '2' ? selected : null}
              onClick={handlePlantClick}
            />
            <img
              src={plant3}
              alt="logo"
              value="3"
              style={selectedSeed === '3' ? selected : null}
              onClick={handlePlantClick}
            />
          </div>
          <div>
            <label>Name your plant!</label>
            <input type="text"></input>
          </div>
          <label>
            Calculate water intake
          </label>
          <div className="requirement">
            <label>Weight</label>
            <input type="text"></input>
            <label>Age</label>
            <input type="text"></input>
          </div>
      </form>
      <div className="buttons">
        <button onClick={handleBackClick}>Back</button>
        <button>Start Tracking!
        </button>
      </div>
    </>
  )
}

export default GetStarted;