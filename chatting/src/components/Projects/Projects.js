import React from 'react';
import './Projects.css';
import speechify from "../../assets/speechify.png";
import taskManagement from "../../assets/taskManagement.png"
import faceRecognition from "../../assets/faceRecognition.png"
import portfolio from "../../assets/Portfolio.png"
const Projects = () => {
  const projectList = [
    {
      title: 'Speechify',
      description: 'Implemented high-accuracy speech-to-text, multi-language text translation, audio-to-text, and text-to-speech capabilities',
      image: speechify,
      videoLink: `https://drive.google.com/file/d/1KDqhnO_R8TClXI9FloGVtbgeAG7bZI4G/view?usp=sharing`,
      liveLink: `https://ashy-pond-07114da10.5.azurestaticapps.net/`
    },
    {
      title: 'Task Management',
      description: 'task management system with comprehensive CRUD features, empowering users to streamline worklow processes with email facilities',
      image: taskManagement,
      videoLink: `https://drive.google.com/file/d/1k5T-gZU20RTr6goO__nmx5glk6It9p98/view`,
      liveLink: `https://task-management-web-application-with-email-reminders-lm64.vercel.app/`
    },
    {
      title: 'Face recognition',
      description: 'automatic attendance tracking through facial recognition, ensuring face detection accuracy achieving an impressive accuracy range of 89% to 95%.',
      image: faceRecognition,
      videoLink: `https://github.com/Pratik9113/Pythonic-pioneers.git`,
      liveLink: `https://github.com/Pratik9113/Pythonic-pioneers.git`
    },
    {
      title: 'PortFolio',
      description: 'Implemented an intuitive and visually appealing user interface to enhance user experience and engagement',
      image: portfolio,
      videoLink: `https://github.com/Pratik9113/PortfolioPratik.git`,
      liveLink:  `https://portfolio-pratik-chi.vercel.app/`
    },
  ];

  return (
    <div className='projects-container'>
      {projectList.map((project, index) => (
        <div key={index} className="card">
          <img src={project.image} className="card-img-top" alt="project logo" />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} className="btn btn-primary">Live</a>
              <a href={project.videoLink} className="btn btn-danger">Video</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;