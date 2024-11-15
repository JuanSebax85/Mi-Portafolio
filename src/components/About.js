import React from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="container mt-3 about-background">
      <Helmet>
      <title>Acerca de mi</title>
      </Helmet>
      <h2>Acerca de mi</h2>
      <br></br>
      <p>Hola, soy Sebastian, un desarrollador junior con experiencia en tecnologias como JavaScript, Python, React y mas...</p>
    </div>
  );
}

export default About;