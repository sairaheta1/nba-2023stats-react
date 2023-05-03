import React from 'react';
import classes from "./footer.scss"
import * as NBAIcons from 'react-nba-logos'
import Teamview from '../TeamView/teamview';

const Footer = () => {
  return (
    <footer>
      <div className="credits">
        <h3 className="name">Samantha Iraheta </h3>
        <a href="https://github.com/sairaheta1"> GitHub</a>
      </div>
      <p>Created using React and Vite</p>
    </footer>
  );
};

export default Footer;