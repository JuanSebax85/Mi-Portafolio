import React from 'react';
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <><div className="container mt-3 projects-background">
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
    
    <div>
        <footer class="bg-dark text-white text-center py-3 mt-5">
          <p>Desarrollado por Juan Sebastián Barragan</p>
          <p>sebastianbarragan03@gmail.com</p>
          <ul className='ListaFinal'>
            Este sitio fue elaborado con
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
          <p>&copy; 2024. Todos los derechos reservados.</p>
        </footer>
      </div></>
  );
}

export default Projects;
