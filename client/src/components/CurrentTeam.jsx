import React from 'react';
// import axios from 'axios'; //install axio dependency
import TeamMember from './TeamMember.jsx'
import TeamTotal from './TeamTotal.jsx';

class CurrentTeam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: this.props.test,
      currentView: this.props.test.slice(0, 8),
      total: this.props.test.length,
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

  render() {
    return(
      <div className="team">
        <div className="team-bar">
          <div className="team-icon">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
              <path d="m 16.368,10.914001 a 3.2760002,3.2760002 0 1 0 -3.276,-3.2759998 3.2640002,3.2640002 0 0 0 3.276,3.2759998 z m -8.7240006,0 A 3.2760002,3.2760002 0 1 0 4.3679992,7.6380012 3.2640002,3.2640002 0 0 0 7.6319994,10.914001 Z m 0,2.184 c -2.5440001,0 -7.64400035367437,1.272 -7.64400035367437,3.816 l 0,2.724 15.27600095367437,0 0,-2.724 c 0,-2.544 -5.1,-3.816 -7.6440006,-3.816 z m 8.7240006,0 c -0.312,0 -0.672,0 -1.056,0 a 4.6080003,4.6080003 0 0 1 2.148,3.768 l 0,2.772 6.540001,0 0,-2.724 c 0,-2.544 -5.100001,-3.816 -7.632001,-3.816 z"></path>
            </svg>
          </div>
          <div className="team-title">Current Team</div>
        </div>
        
        <TeamTotal total={this.state.total}/>
        
        <div className="team-container">
          {this.state.currentView.map(person => 
            <TeamMember person={person} key={person._id}/>
          )}
        </div>
      </div>
    )
  }
}

export default CurrentTeam;