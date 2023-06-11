import React from 'react';
import projectData from './components/ProjectData';
import './style.css';

const Projects = () => {
  return (
    <div className="project-container">
      {projectData.map((project) => (
        <div key={project.title} className="card shadow">
          <img src={project.screenshot} className="card-img-top" alt={project.title} />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
            <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
