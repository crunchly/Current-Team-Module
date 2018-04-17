import React from 'react';
import axios from 'axios'; //install axio dependency

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
    axios.get('/people/organization') //not correct endpoint
      .then( (team) => {
        //set state
        //this.setState({people: team})
      })
      .catch( error => console.error('Error fetching team: ', error));
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