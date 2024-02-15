import React from "react";
import { getUrl } from "../../utils";
import styles from "./mainPage.module.css";

export const MainPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <h2 className={styles.title}>Hello! I am Prabeen</h2>
        <p className={styles.text}>
          {" "}
          I'm a full-stack developer and a sophmore computer science student.
        </p>
        <div className={styles.socialIcons}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/prabeen-giri-2a8403203/"
          >
            <i id={styles.linkedin} className="fa-brands fa-linkedin-in"></i>
          </a>
          <a target="_blank" href="https://github.com/prabeen6260">
            <i id={styles.github} className="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/prabingiri92/">
            <i id={styles.instagram} className="fa-brands fa-instagram"></i>
          </a>
          <a target="_blank" href="https://twitter.com/prabeen_giri92">
            <i id={styles.twitter} className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1Hs71Rb4jDGXfqMgnhI2P0a8-x4H678xs/view"
          className={styles.resume}
        >
          Download Resume
        </a>
      </div>
      <img className={styles.img1} src={getUrl("main/img1.png")} />
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />
    </section>
  );
};
