import React from 'react';
import TeamMember from './TeamMember.jsx'


const TeamMemberList = (props) => (
  <div className="team-container">
    {props.people.length > 0 ? props.people.slice(0,8).map(person => 
      <TeamMember person={person} key={person._id}/>) : null}
  </div>

)

export default TeamMemberList;