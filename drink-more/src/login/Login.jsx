import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const Login = ({setName, setUserData}) => {

  const [user, setUser] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  }

  const handleBackClick = (e) => {
    setName("welcome");
  }

  const handleLoginClick = (e) => {
    axios.get('http://localhost:8080/users', {params: {username: user}})
      .then((res) => {
        if (res.data.length === 0) {
          alert('user not found');
          setUser('');
        } else {
          const updatedData = {...res.data[0], currentDate: new Date().toISOString()}
          axios.put('http://localhost:8080/users', {username: updatedData.username, currentDate: updatedData.currentDate})
            .then((res) => {
              setUserData(res.data);
              setName("main");
            })
        }
      })
      .catch((err) => {
        console.log('error at login');
      })
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