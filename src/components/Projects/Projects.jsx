import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import projectData from "../../data/projects.json";
import styles from "./projects.module.css";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 3;
  const totalProjects = projectData.length;
  const totalSlides = Math.ceil(totalProjects / projectsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleProjects = () => {
    const startIndex = currentIndex * projectsPerView;
    return projectData.slice(startIndex, startIndex + projectsPerView);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      
      <div className={styles.sliderContainer}>
        <button 
          className={styles.navButton} 
          onClick={prevSlide}
          aria-label="Previous projects"
        >
          ‹
        </button>
        
        <div className={styles.containerBox}>
          {getVisibleProjects().map((data, id) => {
            return <ProjectCard key={id} data={data} />;
          })}
        </div>
        
        <button 
          className={styles.navButton} 
          onClick={nextSlide}
          aria-label="Next projects"
        >
          ›
        </button>
      </div>

      {totalSlides > 1 && (
        <div className={styles.dotsContainer}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
