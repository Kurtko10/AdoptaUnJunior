import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";
import "./Home.css";

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <p>Sobre mí: Información sobre mí.</p>;
      case 'projects':
        return <p>Proyectos: Aquí están mis proyectos.</p>;
      case 'skills':
        return <p>Habilidades: Estas son mis habilidades.</p>;
      case 'contact':
        return <p>Contacto: Aquí puedes contactarme.</p>;
      default:
        return (
          <>
            {/* <img src="path-to-your-image.jpg" alt="Principal" className="main-image" /> */}
             <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
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
        <button onClick={() => setActiveSection('/')}>Sobre mí</button>
        <button onClick={() => setActiveSection('projects')}>Proyectos</button>
        <button onClick={() => setActiveSection('skills')}>Habilidades</button>
        <button onClick={() => setActiveSection('contact')}>Contacto</button>
      </div>
    </div>
  );
};

export default Home;

