import { getUrl } from "../../utils";
import styles from "./projectCard.module.css";

export const ProjectCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getUrl(data.imageSrc)}
        alt={`${data.title}`}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
        <ul className={styles.skills}>
          {data.skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          {data.demo && (
            <a href={data.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Demo
            </a>
          )}
          <a href={data.source} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkOutline}`}>
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
