import React from 'react';
import axios from 'axios';
import ModuleBar from './ModuleBar.jsx';
import TeamTotal from './TeamTotal.jsx';
import TeamMember from './TeamMember.jsx'


class CurrentTeam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      currentView: null,
      total: null
    }
  }

  componentDidMount() {
    this.fetchTeam();
  }

  fetchTeam() {
    axios.get(`/people/${this.props.org}`)
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
        
        {this.state.total ? <TeamTotal total={this.state.total}/> : null}
        
        <div className="team-container">
          {this.state.total > 0 ? this.state.currentView.map(person => 
            <TeamMember person={person} key={person._id}/>) : null}
        </div>
      </div>
    )
  }
}

export default CurrentTeam;