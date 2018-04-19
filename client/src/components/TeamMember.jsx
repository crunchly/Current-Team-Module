import React from 'react';

const TeamMember = (props) => (
  <div class="member-info">
    <span>image</span>
    <ul>
      <li><a href="#">{props.person.first_name + ' '}{props.person.last_name}</a></li>
      <li>{props.person.title}</li>
    </ul>
  </div>
)

export default TeamMember;