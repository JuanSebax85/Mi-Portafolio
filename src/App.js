import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid d-flex align-items-center">
            <Link className="navbar-brand" to="/about"> 
              <span className="letter" style={{ color: '#ff0000' }}>M</span>
              <span className="letter" style={{ color: '#ffee00' }}>i</span>
              <span className="letter" style={{ color: '#000000' }}> </span> 
              <span className="letter" style={{ color: '#ffee00' }}>P</span>
              <span className="letter" style={{ color: '#005da8' }}>o</span>
              <span className="letter" style={{ color: '#ff0000' }}>r</span>
              <span className="letter" style={{ color: '#00a82a' }}>t</span>
              <span className="letter" style={{ color: '#ffee00' }}>a</span>
              <span className="letter" style={{ color: '#005da8' }}>f</span>
              <span className="letter" style={{ color: '#ff0000' }}>o</span>
              <span className="letter" style={{ color: '#00a82a' }}>l</span>
              <span className="letter" style={{ color: '#ffee00' }}>i</span>
              <span className="letter" style={{ color: '#005da8' }}>o</span>
            </Link>

            {/* Botón hamburguesa para dispositivos pequeños */}
            <button 
              className="navbar-toggler menu" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded={isOpen ? 'true' : 'false'} 
              aria-label="Toggle navigation"
              onClick={toggleMenu} 
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Contenedor colapsable con la clase show */}
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav ms-auto"> 
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={closeMenu}>Acerca de mí</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experience" onClick={closeMenu}>Experiencia</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education" onClick={closeMenu}>Estudios</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects" onClick={closeMenu}>Proyectos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
