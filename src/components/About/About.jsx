import React from "react";
import { getUrl } from "../../utils";
import styles from "./about.module.css";

export const About =()=>{
    return(
        <section className={styles.container} id="about">
            <h3 className={styles.title}>About</h3>
            <div className={styles.contentBox}>
            <img className={styles.img2} src={getUrl("about/img2.png")} alt="about img"/>
            <ul className={styles.content}>
          <li className={styles.list}>
            <img src={getUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.contentText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.list}>
            <img src={getUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.contentText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.list}>
            <img src={getUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.contentText}>
              <h3>Student</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
            </div>
        </section>
    )
}