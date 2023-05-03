import React from 'react';
import data from './test.json'
import TeamCard from '../TeamCard/TeamCard';

// NOTES ON HOOKS:
  // hooks can only be used in function components, not class components

  //hooks must be executed in the same order and cannot be called conditionally 

  //useState(): want to pass in default state; always returns array with two values where first value is state and the second is a function that can update the state

  //useEffect(): everything inside function is re rendered
  // has a second parameter that is an array with values that whenever they change, the hook runs 

const ScoreboardGrid = () => {
  let teams = [];

  data.data.map((team) => {
    teams.push(<TeamCard full_name={team.full_name} abbreviation={team.abbreviation}></TeamCard>)
  });

  return(
    <div className='team-selection-component'>
    {teams}
    </div>
  )};

export default ScoreboardGrid;