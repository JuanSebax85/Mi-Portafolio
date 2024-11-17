import React from 'react';
import './Education.css';
import { Helmet } from 'react-helmet';

const Education = () => {
  return (
    <><div className="container mt-3 education-background">
      <Helmet>
        <title>Estudios</title>
      </Helmet>
      <h2>Mis Estudios profesionales</h2>
      <br/>
      <ul>
        <li>Tecnico en Programacion de Software - SENA 2023</li>
        <div className="col-9 col-md-3 ">
          <img
            src="/TecnicoSena.png"
            alt="TecnicoSena"
            className="img-fluid my-3"
            draggable="false" />
        </div>
        <li>Ingenieria de Sistemas y Ciencias de la Computacion - Universidad Central 2024-ACTUALMENTE CURSANDO</li>
      </ul>
      <br/>
      <h2>Cursos complementarios</h2>
      <br/>
      <ul>
        <li>IBM Startup Challenge - IBM y Junior Achievement 2020</li>
        <div className="col-9 col-md-4 ">
          <img
            src="/CertificadoIBM.jpg"
            alt="CertificadoIBM"
            className="img-fluid my-3"
            draggable="false" />
        </div>
        <li>Curso de ingles - SENA 2021</li>
        <div className="col-9 col-md-4 ">
          <img
            src="/InglesSena.png"
            alt="InglesSena"
            className="img-fluid my-3"
            draggable="false" />
        </div>
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
