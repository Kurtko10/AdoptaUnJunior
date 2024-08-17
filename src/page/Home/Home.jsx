import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profileImage from "../../assets/Angel.jpg";
import projectImage from "../../assets/18697.jpg";
import whyImage from "../../assets/why-2028047_640.png"
import Button from 'react-bootstrap/Button';
import "./Home.css";
import Card from "../../components/Card/Card";

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'projects':
        return <Card 
        imageSrc={projectImage}
        title="Proyectos"
        
        content="Pmmmmmmmmmmmmmmmmmmmmmm."
      />
      case 'why':
        return <Card 
        imageSrc={whyImage}
        title="¿Por qué?"
        
        content="Deseo formar parte de los grupos de trabajo porque creo que es una gran oportunidad de ganar experiencia en proyectos reales. 
        Como Junior, participar en un proyecto conjuntamente con otros compañeros, compartiendo opiniones y desarrollando soluciones reales, genera una gran motivación de formar parte, y además nos ayuda a conocer como se trabajen el sector.
        Considero que formar parte de los grupos de trabajos de #AdoptaUnJunior puede ser lo que me ayude a saltar el muro de la 'falta de experiencia' y conseguir encontrar mi primer empleo en el sector
        "
      />
      case 'contact':
        return <p>Contacto: Aquí puedes contactarme.</p>;
      default:
        return (
          <>
            <Card 
        imageSrc={profileImage}
        title="Ángel Fernández Bravo"
        subtitle="Sobre mí"
        content="Hace dos años decidí iniciarme en el mundo de la programación. Como primer contacto con la programación realicé un curso de desarrollo web en .Net, después realicé una formación en la cual aprendí el lenguaje PHP.
        Al final de 2023, comencé un BootCamp de Desarrollo Full Stack en GeeksHubs Academy. En el que adquirí profundos conocimientos de HTML, CSS, JavaScript, TypeScript o React.
        Ahora mismo estoy a la espera de tener mi primera oportunidad en el sector para demostrar todo lo aprendido"
      />
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

