import React from 'react';
import axios from 'axios';
import ModuleBar from './ModuleBar.jsx';
import TeamTotal from './TeamTotal.jsx';
import TeamMember from './TeamMember.jsx'


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
    // this.fetchTeam();
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
        <ModuleBar />
        
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