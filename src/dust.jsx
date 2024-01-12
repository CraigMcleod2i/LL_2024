// src/components/DustMotes.js
import { useEffect } from 'react';
import './DustMotes.css';

const DustMotes = () => {
  useEffect(() => {
    const container = document.getElementById('dust-container');

    const createDustMote = () => {
      const mote = document.createElement('div');
      mote.className = 'dust-mote';
      mote.style.left = `${Math.random() * 100}vw`;
      mote.style.animationDuration = `${Math.random() * 4 + 10}s`;

      container.appendChild(mote);

      mote.addEventListener('animationend', () => {
        container.removeChild(mote);
      });
    };

    setInterval(createDustMote, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  return <div id="dust-container"></div>;
};

export default DustMotes;
