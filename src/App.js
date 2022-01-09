import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/NavBar/Navbar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="n">
      <Navbar   />
      <Banner   />
      <RowPost  />
    </div>
  );
}

export default App;
