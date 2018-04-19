import React from 'react';

const TeamMember = (props) => (
  <div className="member-info">
    <img src={props.person.photo} alt={props.person.first_name + ' ' + props.person.last_name}></img>
    <ul>
      <li><a href="#">{props.person.first_name + ' ' + props.person.last_name}</a></li>
      <li>{props.person.title}</li>
    </ul>
  </div>
)

export default TeamMember;
