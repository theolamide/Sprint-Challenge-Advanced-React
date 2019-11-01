import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FetchPlayers from "./Components/FetchPlayers";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <FetchPlayers />     
    </>
  );
}

export default App;
