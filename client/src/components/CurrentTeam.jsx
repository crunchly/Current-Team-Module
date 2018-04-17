import React from 'react';
import axios from 'axios';

class CurrentTeam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      currentView: people.slice(0, 8),
      totalPeople: people.length,
    }
  }

  componentDidMount() {
    
  }

  fetchTeam() {
    //use axios call to server
    //then set state with response
  }

  //module only shows 8 at most, at a time
  render() {
    return(
      <div className="flex-container">
        {this.state.currentView.map( person => 
          <TeamMember person={person} key={person.member_id}/>
        )}
      </div>
    )
  }
}

export default CurrentTeam;