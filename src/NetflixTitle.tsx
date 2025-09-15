// src/NetflixTitle.tsx
import React, { useEffect, useState, useMemo } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3'; // Ensure this mp3 is in the same 'src' folder
import { useNavigate } from 'react-router-dom';
// --- FIX: Corrected the image path ---
import logoImage from './images/logo.png'; 

const NetflixTitle: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  // --- OPTIMIZATION: Memoize the Audio object to prevent re-creation on re-renders ---
  const audio = useMemo(() => new Audio(netflixSound), []);

  const handleClick = () => {
    // Prevent multiple clicks from playing the sound again
    if (isClicked) return;

    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); // Starts animation after clicking
  };

  useEffect(() => {
    if (isClicked) {
      // Navigate after the animation and sound have had time to play
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000); 

      // Cleanup function to prevent navigation if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    // Use the new handleClick function
    <div className="netflix-container" onClick={handleClick}>
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        // Apply the animation class when clicked
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      />
    </div>
  );
};

export default NetflixTitle;