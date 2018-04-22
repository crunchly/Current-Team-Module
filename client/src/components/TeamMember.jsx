import React from 'react';

const TeamMember = (props) => (
  <div className="team-member">
    <img src={props.person.photo_url} alt={props.person.first_name + ' ' + props.person.last_name}></img>
    <div className="team-member-info">
      <ul>
        <li><a className="member-link" href="#">{props.person.first_name + ' ' + props.person.last_name}</a></li>
        <li>{props.person.title}</li>
      </ul>
    </div>
  </div>
)

export default TeamMember;
