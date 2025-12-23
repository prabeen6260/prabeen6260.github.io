import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./researchDetails.module.css";
import researchData from "../../data/research.json";
import { getUrl } from "../../utils";

export const ResearchDetails = () => {
  const { id } = useParams();
  const project = researchData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className={styles.container}>Project not found</div>;
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        ← Back to Home
      </Link>
      <div className={styles.content}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <div className={styles.skills}>
            {project.skills.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className={styles.descriptionSection}>
          <h2>Overview</h2>
          <p className={styles.description}>{project.longDescription}</p>
          
          <p className={styles.description}>
            {project.description}
          </p>
        </div>

        {project.pdf && (
          <div className={styles.pdfSection}>
            <h2>Research Paper</h2>
            <div className={styles.pdfContainer}>
              <iframe
                src={`/${project.pdf}`}
                title={project.title}
                className={styles.pdfFrame}
              />
            </div>
            <a 
              href={`/${project.pdf}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              Open PDF in New Tab
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

