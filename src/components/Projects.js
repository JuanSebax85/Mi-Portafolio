import React from 'react';
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <div className="container mt-3 projects-background">
      <Helmet>
      <title>Proyectos</title>
      </Helmet>
      <h2>Mis Proyectos</h2>
      <br></br>
      <ul>
        <li>Proyecto 1: Aplicacion web para gestionar tareas</li>
        <li>Proyecto 2: Portafolio personal</li>
      </ul>
    </div>
  );
}

export default Projects;
