import React from 'react';


const Main = ({setName, userData, setUserData}) => {

  const handleBackClick = (e) => {
    setName("welcome")
  }

  return (
    <>
      <div>hello {userData.username}</div>
      <div className="buttons">
        <button onClick={handleBackClick}>Back</button>
      </div>
    </>
  )
};

export default Main;