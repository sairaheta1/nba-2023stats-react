import React from 'react';
import Teamview from '../TeamView/teamview';
import Results from '../Results/results';
import "./scoreboard.scss"

const Scoreboard = () => {
  return (
    <>
    <div className="match">
      <div className="teams">
        <Teamview team="SAC"></Teamview>
        <Teamview team="BOS"></Teamview>
      </div>
      <Results home="1" away="2"></Results>
    </div>

    {/* Result: actual scores of game */}
    {/* Game Status: whether the team is playing or not */}

    </>
  );
};

export default Scoreboard;