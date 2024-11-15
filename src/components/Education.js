import React from 'react';
import { Helmet } from 'react-helmet';

const Education = () => {
  return (
    <><div className="container mt-3 education-background">
      <Helmet>
        <title>Estudios</title>
      </Helmet>
      <h2>Mis Estudios</h2>
      <br></br>
      <ul>
        <li>Ingenieria de Sistemas y Ciencias de la Computacion - Universidad Central</li>
        <li>Tecnico en Programacion de Software - SENA</li>
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

export default Education;
