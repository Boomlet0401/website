import React from 'react';
import './App.css';
import logo from'./pic/boomlogin.png';

function App() {
  return (
    <div class="background">
    <div class="box1">
      <img class="logo"src={logo}/>

    <p class="line">Dear User,login to access the master panel</p><br/><br/>
    <div class="form">
      <div >
          <label class="usernme">Username</label><br/>
          <input type="text"/><br/><br/>
      </div>
      <div >
          <label class="psswrd">Password</label><br/>
          <input type="password"/><br/><br/><br/><br/>
      </div>
      <button class="b1">login</button>
    </div></div>
    </div>
  );
}

export default App;
