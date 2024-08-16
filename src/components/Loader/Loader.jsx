import React, { useEffect } from "react";
import "./Loader.css";

const Loader = ({ greetings, colors, setShowLoader }) => {
  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= greetings.length) {
        clearInterval(interval);
        setTimeout(() => setShowLoader(false), 500);
      } else {
        const greetingElement = document.getElementById('greeting');
        if (greetingElement) {
          greetingElement.innerText = greetings[counter];
          greetingElement.style.color = colors[counter % colors.length]; 
          greetingElement.style.backgroundColor = colors[(counter + 1) % colors.length]; 
          greetingElement.style.top = `${Math.random() * 80 + 10}%`;
          greetingElement.style.left = `${Math.random() * 80 + 10}%`;
        }
        counter++;
      }
    }, 800);

    return () => clearInterval(interval);
  }, [greetings, colors, setShowLoader]);

  return <div id="greeting" className="greeting visible"></div>;
};

export default Loader;
