import React from 'react';
import "./results.scss"
const Results = (props) => {
  return (
    <div className="results">
      <p className='home'>{props.home}</p>
      <p className='away'>{props.away}</p>
    </div>
  );
};

export default Results;