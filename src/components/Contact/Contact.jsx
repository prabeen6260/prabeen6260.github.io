import React from "react";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <h3 className={styles.title}>Contact</h3>
        <a className={styles.gmail} href="mailto:prabingiri922@gmail.com">
          prabingiri922@gmail.com
        </a>
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
      </div>
      <div className={styles.rightContainer}>
        <form className={styles.formBox}>
          <input
            className={styles.name}
            type="text"
            placeholder="Your Name"
            required
          ></input>
          <input
            className={styles.email}
            type="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            className={styles.textBox}
            placeholder="Your Message...."
            required
          ></textarea>
          <button className={styles.submitBtn} type="submit" onClick={() => {}}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
