import React from 'react';
import '../App.css';
import './About.css';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <><div className="container mt-3 about-background">
      <Helmet>
        <title>Juan Sebastian</title>
      </Helmet>
      <h2>Acerca de mi</h2>
      <div className="row align-items-center"> 
        
        <div className="col-7 col-md-2"> 
          <img
            src="/MARIO.png"
            alt="MarioBros"
            className="img-fluid rounded"
            draggable="false" />
        </div>

        <div className="col-12 col-md-8 prueba">
        <p>
          <strong>
            Hola, soy Juan Sebastián Barragan, un desarrollador junior con experiencia en tecnologías como JavaScript, Python, React, Bootstrap, C#, Angular y más.
            Complementariamente, poseo habilidades en diseño, ya que manejo a gran nivel las herramientas de la suite de Adobe, como Photoshop, Illustrator y Premiere Pro, además de Figma.
            <br /><br />
            Actualmente soy estudiante de Ingeniería de Sistemas de la Universidad Central de Bogotá, Colombia.
          </strong>
        </p>

        </div>
        <h2 className='Subtitulos'>Mi inicio</h2>
        <p>
          Desde mi corta edad, mi pasión por la tecnología me llevó a adentrarme en este fabuloso mundo. La curiosidad por saber cómo funcionan las cosas y el querer aprender y mejorar día tras día son algunas de mis grandes cualidades.
        </p>
        <p>
          Empecé desde muy joven arreglando celulares por medio de tutoriales en YouTube, algo que me parecía muy simple de seguir, pero que siempre veía que a la gente de mi alrededor se le complicaba. En cambio
          yo lograba entender a cabalidad las necesidades de cada persona, lo que me permitía transformar sus problemas en soluciones rápidas y eficaces. Así fui ganando fama por medio de mi familia, quien fue parte fundamental de mi desarrollo como persona,
          quienes se encargaban de comentarle mi talento a los vecinos de mi barrio, los cuales me buscaban ocasionalmente para que arreglara no solo sus celulares, sino también sus computadores.
        </p>
        <p>
          Mi límite no paró ahí, e impulsado por los videojuegos y el arte digital, me adentré en el mundo del diseño. De igual manera que con los arreglos de celulares y computadores, empecé a seguir tutoriales de YouTube, pero ahora con programas de la suite de Adobe como Photoshop, Illustrator y Premiere Pro,
          tanto que me llevaron a dominarlos a un gran nivel. Estos me permitieron realizar trabajos de diseño básicos al principio, pero con los cuales logré ganar mis primeros ahorros.
        </p>
        <h2 className='Subtitulos'>Colegio, vida laboral y Universitaria</h2>
        <p>
          Todo esto lo pude realizar en corto tiempo y a la vez que cursaba mis años de colegio, siendo responsable y organizado. Es por esto que sabía que mi camino iba a ser largo y estaría constantemente marcado por retos y, sobre todo, por mucho aprendizaje.
        </p>
        <p>
          Mis ganas y mi entusiasmo por capacitarme y aprender me llevaron al mundo de la programación, en donde, siguiendo cursos en línea, pude obtener mis primeras bases, las cuales me llevarían a conocer tecnologías fascinantes.
          <br />
          Empecé aprendiendo lo más básico de HTML, CSS y JavaScript, y al tener bases previas en diseño, se me facilitó realizar páginas simples pero estructuradas con elementos visualmente agradables. 
          <br/>
          Adicionalmente tuve el inmenso placer de hacer parte de un startup de IBM sobre ciberseguridad, pensamiento del diseño,
          inteligencia artificial y blockchain, el cual me sirvio para planificar mis objetivos a corto, mediano y largo plazo.
        </p>
        <p>
          Poder complementar dos cosas que me apasionan, como lo son el diseño y la programación, me dio un impulso en mi vida, el cual me guió para saber lo que quería en ella. Esa es la razón por la cual, una vez que me gradué del colegio, empecé a estudiar formalmente un técnico en programación de software, lo cual me permitió conocer otros lenguajes de programación como PHP, C#, Python y frameworks y bibliotecas como React, Angular, Bootstrap, ASP.NET Core, Node.js, etc., así como también aprendí a trabajar con bases de datos relacionales y no relacionales, y de esta manera pude adentrarme en el mundo del backend y complementar aún más mis habilidades en frontend haciendo uso de herramientas como Figma.
        </p>
        <p>
          Tengo claro que aún me faltan muchas cosas por aprender pero tengo confianza en mis objetivos para seguir formándome de cara al futuro. Es por eso que, una vez terminada mi formación técnica, realicé mis prácticas en una gran empresa como lo es RGC Activa, trabajando principalmente con C# y ASP.NET Core, y bases de datos relacionales como MySQL, aparte de apoyar tareas con los servicios de la nube de AWS.
          <br />
          Una vez finalizadas mis prácticas laborales aquí, no me detuve y quise seguir formándome profesionalmente.
        </p>
        <p>
          Empecé a cursar mi carrera universitaria de Ingeniería de Sistemas en la Universidad Central de Bogotá, Colombia, carrera que curso actualmente y en la cual tengo mis objetivos trazados de lo que quiero laboral y personalmente.
        </p>
      </div>
      <div>
        <h2 className='Habilidades'>Habilidades de programacion</h2>
        <img
          src="/JS.png"
          alt="Javascript"
          className="img-fluid rounded col-2 col-md-1 m-1"
          draggable="false" />

        <img
          src="/CSharp.png"
          alt="CSharp"
          className="img-fluid rounded col-2 col-md-1 m-1"
          draggable="false" />

        <img
          src="/react.png"
          alt="React"
          className="img-fluid rounded col-2 col-md-1 m-1"
          draggable="false" />

        <img
          src="/Angular.png"
          alt="Angular"
          className="img-fluid rounded col-2 col-md-1 m-1"
          draggable="false" />

        <img
          src="/Bootstrap.png"
          alt="Bootstrap"
          className="img-fluid rounded col-2 col-md-1 m-1"
          draggable="false" />

        <img
          src="/SQL.png"
          alt="SQL"
          className="img-fluid rounded col-2 col-md-1 m-1"
          draggable="false" />
      </div>
      <div>
        <h2 className='Habilidades'>Habilidades visuales:</h2>
        <img
          src="/Photoshop.png"
          alt="Photoshop"
          className="img-fluid rounded col-2 col-md-1 m-1"
          draggable="false" />

        <img
          src="/Illustrator.png"
          alt="Illustrator"
          className="img-fluid rounded col-2 col-md-1 m-1"
          draggable="false" />

        <img
          src="/PremierePro.png"
          alt="PremierePro"
          className="img-fluid rounded col-2 col-md-1 m-1"
          draggable="false" />

        <img
          src="/Figma.png"
          alt="Figma"
          className="img-fluid rounded col-2 col-md-1 m-1 Figma"
          draggable="false" />
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

export default About;
