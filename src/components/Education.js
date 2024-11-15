import React from 'react';
import { Helmet } from 'react-helmet';

const Education = () => {
  return (
    <div className="container mt-3 education-background">
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
  );
}

export default Education;
