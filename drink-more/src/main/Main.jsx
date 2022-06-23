import React from 'react';


const Main = ({setName}) => {

  const handleBackClick = (e) => {
    setName("getStarted")
  }

  return (
    <>
      <div className="buttons">
        <button onClick={handleBackClick}>Back</button>
      </div>
    </>
  )
};

export default Main;