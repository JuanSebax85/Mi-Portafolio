import React from 'react';
import './Experience.css';
import { Helmet } from 'react-helmet';

const Experience = () => {
  return (
    <><div className="container mt-3 experience-background">
      <Helmet>
        <title>Experiencia</title>
      </Helmet>
      <h2>Experiencia</h2>
      <br></br>
      <ul className='ListaExperiencia'>
        <li>Freelance en diseño y edición de imagenes 2018-2022</li>
        <img
          src="/Photoshop.png"
          alt="Photoshop"
          className="img-fluid rounded col-1 col-md-1 m-1"
          draggable="false" />
        <img
          src="/Illustrator.png"
          alt="Illustrator"
          className="img-fluid rounded col-1 col-md-1 m-1"
          draggable="false" />
        <li>Freelance en edición de videos 2018-2022</li>
        <img
          src="/PremierePro.png"
          alt="PremierePro"
          className="img-fluid rounded col-1 col-md-1 m-1"
          draggable="false" />
        <li>Desarrollador Junior en RGC Activa 2023-2024</li>
        <img
          src="/JS.png"
          alt="Javascript"
          className="img-fluid rounded col-1 col-md-1 m-1"
          draggable="false" />

        <img
          src="/CSharp.png"
          alt="CSharp"
          className="img-fluid rounded col-1 col-md-1 m-1"
          draggable="false" />

        <img
          src="/react.png"
          alt="React"
          className="img-fluid rounded col-1 col-md-1 m-1"
          draggable="false" />

        <img
          src="/SQL.png"
          alt="SQL"
          className="img-fluid rounded col-1 col-md-1 m-1"
          draggable="false" />
      </ul>
      
    </div>
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 col-lg-6">
      <h2 className="text-center HojaVida">Hoja de vida</h2>
      <embed
        src="/HV Juan Sebastian Barragan.pdf"
        type="application/pdf"
        className="w-100"
        style={{ height: '80vh' }}
      />
    </div>
  </div>
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
