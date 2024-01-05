import React,{ useState } from 'react';
import styles from "./styles.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import { MainPage } from './components/MainPage/MainPage';
import { About } from './components/About/About';

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className={styles.container}>
      <Navbar/>
      <MainPage/>
    </div>
  )
}

export default App
