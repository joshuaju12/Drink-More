import React from 'react';
import {useState} from 'react';

const Login = ({setName}) => {

  const [user, setUser] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  }

  const handleBackClick = (e) => {
    setName("welcome");
  }

  const handleLoginClick = (e) => {
    setName("main");
  }

  return (
    <>
      <h2>Login</h2>
      <form className="loginForm">
        <label className="userLabel">Enter username :</label>
        <input type="text" value={user} onChange={handleUserChange}></input>
      </form>
      <div className="buttons">
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </>
  )
}


export default Login;