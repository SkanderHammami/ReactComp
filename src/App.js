import React from "react";
import logo from './logo.svg';
import './App.css';
import MyProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FullName/>
        <MyProfilePhoto/>
        <Address/>
      </header>
    </div>
  );
}

export default App;
