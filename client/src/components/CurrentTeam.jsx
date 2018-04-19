import React from 'react';
// import axios from 'axios'; //install axio dependency
import TeamMember from './TeamMember.jsx'

class CurrentTeam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: this.props.test,
      currentView: this.props.test.slice(0, 8),
      totalPeople: this.props.test.length,
    }
  }

  // componentDidMount() {

  // }

  // fetchTeam() {
  //   //use axios call to server
  //   //then set state with response
  //   axios.get('/people/organization') //not correct endpoint
  //     .then( (team) => {
  //       //set state
  //       //this.setState({people: team})
  //     })
  //     .catch( error => console.error('Error fetching team: ', error));
  // }

  //module only shows 8 at most, at a time
  render() {
    return(
      <div className="flex-container">
        {this.state.currentView.map( person => 
          <TeamMember person={person} key={person._id}/>
        )}
      </div>
    )
  }
}

export default CurrentTeam;