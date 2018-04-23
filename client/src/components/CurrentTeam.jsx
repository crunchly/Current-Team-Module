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

  componentWillMount() {
    this.fetchTeam();
  }

  fetchTeam() {
    axios.get('/people/Facebook') //pass :org as a prop and do ${this.props.org}
      .then((team) => {
        this.setState({
          people: team.data, 
          currentView: team.data.slice(0,8),
          total: team.data.length,
        });
      })
      .catch( error => console.error('Error fetching team: ', error));
  }

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