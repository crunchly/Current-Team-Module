import React from 'react';

const TeamTotal = (props) => (
  <div className="team-total-container">
    <div className="team-total">
      <h3>Number of Current Team <span>Members</span> <a href="#">{props.total}</a></h3>
    </div>
  </div>
);

export default TeamTotal;
