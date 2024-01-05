import React from "react";
import { getUrl } from "../../utils";
import styles from "./mainPage.module.css";

export const MainPage=()=>{
    return(
        <section className={styles.container}>
            <div className={styles.description}>
            <h2 className={styles.title}>Hello! I am Prabeen</h2>
            <p className={styles.text}> I'm a full-stack developer and a sophmore
                computer science student.
            </p>
            <a target="_blank" href="https://drive.google.com/file/d/19JzJ01Koby9OFpt_83Do1HkOTC5YM1zX/view?usp=sharing" className={styles.resume}>
                Download Resume
           </a>
            </div>
            <img className={styles.img1} src={getUrl("main/img1.png")}/>
            <div className={styles.blurOne}/>
            <div className={styles.blurTwo}/>
        </section>
    )
}