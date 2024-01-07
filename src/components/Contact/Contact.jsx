import React from "react";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <section>
      <h3>Contact</h3>
      <a href="mailto:prabingiri922@gmail.com">prabingiri922@gmail.com</a>
      <div className={styles.socialIcons}>
        <a>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a>
          <i className="fa-brands fa-github"></i>
        </a>
        <a>
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a>
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </section>
  );
};
