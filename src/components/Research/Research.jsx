import React from "react";
import styles from "./research.module.css";
import researchData from "../../data/research.json";
import { Link } from "react-router-dom";

export const Research = () => {
  return (
    <section className={styles.container} id="research">
      <h2 className={styles.title}>Research</h2>
      <div className={styles.content}>
        {researchData.map((item, id) => {
          return (
            <Link key={id} to={`/research/${item.id}`} className={styles.researchItemLink}>
              <div className={styles.researchItem}>
                <h3 className={styles.researchTitle}>{item.title}</h3>
                <p className={styles.researchDescription}>{item.description}</p>
                <ul className={styles.skillsList}>
                  {item.skills.map((skill, key) => (
                    <li key={key} className={styles.skillItem}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
