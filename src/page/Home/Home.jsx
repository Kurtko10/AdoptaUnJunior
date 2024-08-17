import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profileImage from "../../assets/Angel.jpg";
import projectImage from "../../assets/18697.jpg";
import whyImage from "../../assets/why-2028047_640.png";
import MasterMindImage from "../../assets/mastermind.jpg";
import GameBoyImage from "../../assets/gameboy.jpg";
import TattoImage from "../../assets/Tattoo.jpg";
import TallerImage from "../../assets/Taller.jpg";
import ContactoImage from "../../assets/smartphone-564155_1280.jpg";
import LinkdinImage from "../../assets/linkedin-2815918_1280.jpg";
import GitHubImage from "../../assets/github.png";
import EmailImage from "../../assets/spider-monkey-637060_1280.jpg";
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
        content={
          <>
            <p>Aquí están algunos de mis proyectos en GitHub:</p>
            <div className="project-links">
              <a href="https://github.com/tu-usuario/proyecto-1" target="_blank" rel="noopener noreferrer">
                <img src={GameBoyImage} alt="Proyecto 1" className="project-image" />
              </a>
              <a href="https://github.com/tu-usuario/proyecto-2" target="_blank" rel="noopener noreferrer">
                <img src={MasterMindImage} alt="Proyecto 2" className="project-image" />
              </a>
              <a href="https://github.com/tu-usuario/proyecto-3" target="_blank" rel="noopener noreferrer">
                <img src={TattoImage} alt="Proyecto 3" className="project-image" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={TallerImage} alt="Proyecto 4" className="project-image" />
              </a>
              
            </div>
          </>
        }
      />
      
      case 'why':
        return <Card 
        imageSrc={whyImage}
        title="¿Por qué?"
        
        content=
        {
          <div dangerouslySetInnerHTML={{ __html: `Deseo formar parte de los grupos de trabajo porque creo que es una gran oportunidad de ganar experiencia en proyectos reales. <br/>
        Como Junior, participar en un proyecto conjuntamente con otros compañeros, compartiendo opiniones y desarrollando soluciones reales, genera una gran motivación de formar parte, y además nos ayuda a conocer como se trabajen el sector. <br/>
        Considero que formar parte de los grupos de trabajos de #AdoptaUnJunior puede ser lo que me ayude a saltar el muro de la 'falta de experiencia' y conseguir encontrar mi primer empleo en el sector. <br/>
        ¡¡¡Espero ser elegido para el FrontEnd!!!

        ` }} />
        }
      />
      case 'contact':
        return <Card 
        imageSrc={ContactoImage}
        title="Aquí puedes contactar conmigo"
        content={
          <>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={LinkdinImage} alt="Proyecto 1" className="project-image" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={GitHubImage} alt="Proyecto 2" className="project-image" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={EmailImage} alt="Proyecto 3" className="project-image" />
              </a>
              
            </div>
          </>
        }
      />
      default:
        return (
          <>
            <Card 
        imageSrc={profileImage}
        title="Ángel Fernández Bravo"
        subtitle="Sobre mí"
        content={
    <div dangerouslySetInnerHTML={{ __html: `Hace dos años decidí iniciarme en el mundo de la programación.<br/>Como primer contacto en este mundo, realicé un curso de desarrollo web en .Net, seguido de una formación en la cual aprendí el lenguaje PHP.<br/>Al final de 2023, comencé un BootCamp de Desarrollo Full Stack en GeeksHubs Academy, en el que adquirí profundos conocimientos de HTML, CSS, JavaScript, TypeScript o React entre otras herramientas.<br/>Ahora mismo estoy a la espera de tener mi primera oportunidad en el sector para demostrar todo lo aprendido.` }} />
  }
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

