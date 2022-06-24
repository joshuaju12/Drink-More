import React from 'react';
import plant1Stage1 from '../assets/plant1stage1.png';
import plant1Stage2 from '../assets/plant1stage2.png';
import plant1Stage3 from '../assets/plant1stage3.png';
import plant2Stage1 from '../assets/plant2stage1.png';
import plant2Stage2 from '../assets/plant2stage2.png';
import plant2Stage3 from '../assets/plant2stage3.png';
import plant3Stage1 from '../assets/plant3stage1.png';
import plant3Stage2 from '../assets/plant3stage2.png';
import plant3Stage3 from '../assets/plant3stage3.png';





const RenderPlant = ({data, waterRequired, waterLevel}) => {


  if (data.daysWithoutWater > 2) {
    return (
      <div>Dead</div>
    )
  }

  if (data.plantType === 1) {
    if (data.plantStage === 1) {
      return (
        <div className="plantContainer">
          <img src={plant1Stage1} alt="logo" />
        </div>
      )
    }
    if (data.plantStage === 2) {
      return (
        <div className="plantContainer">
          <img src={plant1Stage2} alt="logo" />
        </div>
      )
    }
    if (data.plantStage === 3) {
      return (
        <div className="plantContainer">
          <img src={plant1Stage3} alt="logo" />
        </div>
      )
    }
  }

  if (data.plantType === 2) {
    if (data.plantStage === 1) {
      return (
        <div className="plantContainer">
          <img src={plant2Stage1} alt="logo" />
        </div>
      )
    }
    if (data.plantStage === 2) {
      return (
        <div className="plantContainer">
          <img src={plant2Stage2} alt="logo" />
        </div>
      )
    }
    if (data.plantStage === 3) {
      return (
        <div className="plantContainer">
          <img src={plant2Stage3} alt="logo" />
        </div>
      )
    }
  }

  if (data.plantType === 3) {
    if (data.plantStage === 1) {
      return (
        <div className="plantContainer">
          <img src={plant3Stage1} alt="logo" />
        </div>
      )
    }
    if (data.plantStage === 2) {
      return (
        <div className="plantContainer">
          <img src={plant3Stage2} alt="logo" />
        </div>
      )
    }
    if (data.plantStage === 3) {
      return (
        <div className="plantContainer">
          <img src={plant3Stage3} alt="logo" />
        </div>
      )
    }
  }
}


export default RenderPlant;