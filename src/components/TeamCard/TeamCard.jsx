import React from 'react';
import * as NBAIcons from 'react-nba-logos'
import '../TeamView/teamview.scss';

const TeamCard = (team) => {
  const Icon = NBAIcons[team.abbreviation];
  return (
    <div className="team-solo-component">
    <Icon size={60}></Icon>
    <h1 className='team-name'>{team.full_name}</h1>
    </div>
  );
};

export default TeamCard;