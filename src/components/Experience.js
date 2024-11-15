import React from 'react';
import { Helmet } from 'react-helmet';

const Experience = () => {
  return (
    <><div className="container mt-3 experience-background">
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

export default Experience;
