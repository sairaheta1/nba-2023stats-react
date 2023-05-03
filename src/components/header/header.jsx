import React from 'react';
import "./header.scss"

const Header = () => {
  return (
    <header>
      <img className="logo" src="../../public/nba-logo.svg" alt="Official NBA Logo"/>
      <h1 className="heading">NBA Stats 2022-2023 Season</h1>
    </header>
  );
};

export default Header