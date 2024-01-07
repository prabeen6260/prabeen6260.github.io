import React from "react";
import { getUrl } from "../../utils";
import styles from "./experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experiece = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.topTitle}>Experience</h2>
      <div className={styles.containerBox}>
        <div className={styles.skillsContainer}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skillsMapContainer}>
                <div className={styles.skillsImg}>
                  <img src={getUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.historyContainer}>
          {history.map((history, id) => {
            return (
              <li key={id} className={styles.historyMapContainer}>
                {/* <img
                  className={styles.historyImg}
                  src={getUrl(history.imageSrc)}
                  alt={`${history.imageSrc} logo`}
                /> */}
                <div className={styles.historyDescriptionContainer}>
                  <h3>{`${history.role}, ${history.organisation}`}</h3>
                  <p>{history.school}</p>
                  <p>{`${history.startDate}-${history.endDate}`}</p>
                  <ul>
                    {history.experiences.map((items, id) => {
                      return (
                        <li className={styles.historyWorkList} key={id}>
                          {items}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
