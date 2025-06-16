import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ieeeLogo from '/Users/manraisingh/Downloads/WIE-DAY-IEEE-main/WIEDAY-IEEE/src/images/IEEE logo1.png'; // Adjust the path as necessary
import wieLogo from '/Users/manraisingh/Downloads/WIE-DAY-IEEE-main/WIEDAY-IEEE/src/images/WIE.png';  // Adjust the path as necessary
 // Adjust the path as necessary
const sponsors = [
  { name: 'Sponsor 1', },
  { name: 'Sponsor 2', },
  { name: 'Sponsor 3', },
  { name: 'Sponsor 4', },
  { name: 'Sponsor 5', },
  { name: 'Sponsor 6', }
];
const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="header">
        <div className="logos">
          <img src={ieeeLogo} alt="IEEE Logo" className="logo-img" />
          <img src={wieLogo} alt="WIE Logo" className="logo-img" />
        </div>
        <div className="title-container">
        <h1 className="title">WIE WEEK</h1>
        <h1 className="subtitle">CRYPTIC HUNT</h1>
        </div>
      </div>

      {/*  */}
    </div>

   <div className="sponsor-container">
      <h2 className="sponsor-heading">Sponsors</h2>
      <div className="sponsor-slider">
        <div className="sponsor-track">
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <div className="sponsor-card" key={index}> 
              <p>{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

   <div className="brief-container">
      <h2>GAME BRIEF</h2>
      <p>
        Players are recruited as agents by a secret women-led underground organization called <strong>The Aegis</strong> to stop a rogue AI, <strong>Nemora</strong>, from initiating a devastating cyberwar.
      </p>
      <p>
        The game is structured as a <strong>multi-level cryptic hunt</strong>, where each level increases in difficulty, mirroring the growing complexity of the mission.
      </p>
      <p>
        An AI assistant named <strong>ECHO</strong> acts as a guide throughout the game:
      </p>
      <ul>
        <li>Presents riddles/clues as pop-up messages</li>
        <li>Gives hints after 3 wrong attempts</li>
        <li>Offers storyline continuity and immersive interaction</li>
      </ul>
      <div className="link-container">
        <Link to="/level1" className="level-link">
          START GAME
        </Link>
      </div>
    </div>

    </>
  );
};

export default Home;
