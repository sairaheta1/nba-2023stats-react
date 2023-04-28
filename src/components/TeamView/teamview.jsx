import React from 'react';
import * as NBAIcons from 'react-nba-logos'
import './teamview.scss'
const Teamview = (teamData) => {
  // want to credit drewjspivey on gitHub for this:
  const Icon = NBAIcons[teamData.team];
  // ^^
  return (
  <div className="team-component">
    <Icon size={60}></Icon>
    <h1 className="team-name">{teamData.team}</h1>
  </div>
  );
};

export default Teamview;