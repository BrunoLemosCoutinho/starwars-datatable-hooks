import React from 'react';
import r2d2 from '../images/rd2d.png';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="banner">
        <img src={ r2d2 } alt="R2d2 Robot from StarWars series" />
        <h1>Star Wars Data Table</h1>
        <p>Bruno Lemos Coutinho</p>
      </div>
      <div className="author_info">
        <a
          href="https://www.linkedin.com/in/brunolemoscoutinho/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/BrunoLemosCoutinho"
          target="_blank"
        >
          Github
        </a>
        <a
          href="mailto:brunolemos.ssa@gmail.com"
          target="_blank"
        >
          Email
        </a>
      </div>
    </header>
  );
}

export default Header;
