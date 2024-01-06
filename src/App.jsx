import React from 'react';
import styles from "./styles.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import { MainPage } from './components/MainPage/MainPage';
import { About } from './components/About/About';
import { Experiece } from './components/Experience/Experience';

function App() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <MainPage/>
      <About/>
      <Experiece/>
    </div>
  )
}

export default App
