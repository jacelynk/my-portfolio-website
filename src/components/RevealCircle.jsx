import React, { useState } from 'react';
import '../styles/RevealCircle.css';
import profileImg from '../assets/img/unnamed.jpg';

const RevealCircle = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="reveal-circle-container">
      <div className="circle-frame">
        <img src={profileImg} alt="Profile" className="circle-img" />
        <div
          className={`circle-lid${revealed ? ' lid-off' : ''}`}
          onClick={() => setRevealed(true)}
        >
          { !revealed && <span className="lid-text">Click to Reveal</span> }
        </div>
      </div>
    </div>
  );
};

export default RevealCircle; 