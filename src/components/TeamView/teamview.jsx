import React from 'react';
import * as NBAIcons from 'react-nba-logos'
const Teamview = (teamData) => {
  // want to credit drewjspivey on gitHub for this:
  const Icon = NBAIcons[teamData.team];
  // ^^
  return (
  <>
  <Icon></Icon>
  <h1>{teamData.team}</h1>
  </>
  );
};

export default Teamview;