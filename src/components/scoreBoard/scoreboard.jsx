import React from 'react';
import Teamview from '../TeamView/teamview';
import Results from '../Results/results';
import "./scoreboard.scss"
import ScoreboardGrid from '../grid/ScoreboardGrid';

const Scoreboard = (game) => {
  return (
    <>
    <ScoreboardGrid></ScoreboardGrid>
    </>
  );
};

export default Scoreboard;