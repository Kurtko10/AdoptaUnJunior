import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profileImage from "../../assets/Angel.jpg";
import Button from 'react-bootstrap/Button';
import "./Home.css";

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'projects':
        return <p>Proyectos: Aquí están mis proyectos.</p>;
      case 'why':
        return <p>¿Por qué?: Creo que debo ser elegido para los grupos de trabajo por....</p>;
      case 'contact':
        return <p>Contacto: Aquí puedes contactarme.</p>;
      default:
        return (
          <>
            <img src={profileImage} className="name-image" alt="Profile" />
            <h1>Ángel Fernández Bravo</h1>
            <h3>Proyecto inicial AuJ</h3>
            <h6>Proyecto para optar a formar parte de los grupos de trabajo AuJ.</h6>
            <p>Creo que es una gran oportunidad para poder formar parte de proyectos reales y así mejorar mi perfil en el sector</p>
            <p>Este es el texto principal debajo de la foto.</p>
          </>
        );
    }
  };

  return (
    <div className="main-content">
      {renderContent()}
      <div className="buttons">
        <Button
          variant="outline-info"
          onClick={() => setActiveSection('home')}
          className={`icon-button ${activeSection === '/' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faUser} /> <span className="button-text">Sobre mí</span>
        </Button>
        <Button
          variant="outline-info"
          onClick={() => setActiveSection('projects')}
          className={`icon-button ${activeSection === 'projects' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faProjectDiagram} /> <span className="button-text">Proyectos</span>
        </Button>
        <Button
          variant="outline-info"
          onClick={() => setActiveSection('why')}
          className={`icon-button ${activeSection === 'why' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faTools} /> <span className="button-text">¿Por qué?</span>
        </Button>
        <Button
          variant="outline-info"
          onClick={() => setActiveSection('contact')}
          className={`icon-button ${activeSection === 'contact' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faEnvelope} /> <span className="button-text">Contacto</span>
        </Button>
      </div>
    </div>
  );
};

export default Home;

