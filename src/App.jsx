import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [hideGreeting, setHideGreeting] = useState(false);
  const greetings = ["Hola", "Hello", "Hallo", "Bon dia", "Bonjour"];

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= greetings.length) {
        clearInterval(interval);
        setShowLoader(false);
        setTimeout(() => setHideGreeting(true), 500); 
      } else {
        const greetingElement = document.getElementById('greeting');
        if (greetingElement) {
          greetingElement.innerText = greetings[counter];
          greetingElement.style.top = `${Math.random() * 80 + 10}%`;
          greetingElement.style.left = `${Math.random() * 80 + 10}%`;
        }
        counter++;
      }
    }, 800);

    return () => clearInterval(interval); 
  }, [greetings]);

  return (
    <>
      {!hideGreeting && (
        <div id="greeting" style={{ position: 'absolute', transition: 'opacity 0.5s ease', opacity: showLoader ? 1 : 0 }}></div>
      )}
      {!showLoader && (
        <div>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h1>Ángel Fernández Bravo</h1>
          <h3>Proyecto inicial AuJ</h3>
          <h6>Proyecto para optar a formar parte de los grupos de trabajo AuJ.  </h6>
          <p>Creo que es una gran oportunidad para poder formar parte de proyectos reales y así mejorar mi perfil en el sector</p>
        </div>
      )}
    </>
  );
}

export default App;

