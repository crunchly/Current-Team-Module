import React from 'react';

const TeamTotal = (props) => (
  <div className="team-total-container">
    <div className="team-total">
      <h3>Number of Current Team <span>Members</span> <span>{' ' + props.total}</span></h3>
    </div>
  </div>
);

export default TeamTotal;
