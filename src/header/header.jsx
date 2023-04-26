import React from 'react';
import "./header.module.scss"

const Header = () => {
  return (
    <header>
      <img className="logo" src="../../public/nba-logo.svg" alt="Official NBA Logo"/>
      <h1 className="heading">NBA Standings</h1>
    </header>
  );
};

export default Header