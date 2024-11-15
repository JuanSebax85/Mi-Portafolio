import React from 'react';
import { Helmet } from 'react-helmet';

const Experience = () => {
  return (
    <div className="container mt-3 experience-background">
      <Helmet>
      <title>Experiencia</title>
      </Helmet>
      <h2>Mi Experiencia</h2>
      <br></br>
      <ul>
        <li>Desarrollador Junior en XYZ Company</li>
        <li>Freelance en proyectos de desarrollo web</li>
      </ul>
    </div>
  );
}

export default Experience;
