import React from 'react'
import './App.css';
import {actions,Orginals,Thriller,Mystery,Adventure,Comedy,Crime,Fantasy,Horror,Science_Fiction,TV_Movie} from './constants/url'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/NavBar/Navbar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="n">
      <Navbar   />
      <Banner   />
      <RowPost url={Orginals} title="Netflix Orginals" />
      <RowPost url={actions}  title="Action" isSmall />
      <RowPost url={Science_Fiction}  title="Science Fiction" isSmall />
      <RowPost url={Crime}  title="Crime" isSmall />
      <RowPost url={Comedy}  title="Comedy" isSmall />
      <RowPost url={Mystery}  title="Mystery" isSmall />
      <RowPost url={Adventure}  title="Adventure" isSmall />
      <RowPost url={Thriller}  title="Thriller" isSmall />
      <RowPost url={Fantasy}  title="Fantasy" isSmall />
      <RowPost url={Horror}  title="Horror" isSmall />
      <RowPost url={TV_Movie}  title="TV Movie" isSmall />
    </div>
  );
}

export default App;
