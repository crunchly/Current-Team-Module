import React from 'react';
import axios from 'axios';
import '../../dist/styles.css'
import ModuleBar from './ModuleBar.jsx';
import TeamTotal from './TeamTotal.jsx';
import TeamMember from './TeamMember.jsx';


class CurrentTeam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    this.fetchTeam();
  }

  fetchTeam() {
    axios.get(`http://localhost:3004/people/${this.props.org}`)
      .then((team) => {
        this.setState({
          people: team.data, 
        });
      })
      .catch( error => console.error('Error fetching team: ', error));
  }

  render() {
    return(
      <div className="team">
        <ModuleBar />
        
        {this.state.people.length ? <TeamTotal total={this.state.people.length}/> : null}
        
        <div className="team-container">
          {this.state.people.length > 0 ? this.state.people.slice(0,8).map(person => 
            <TeamMember person={person} key={person._id}/>) : null}
        </div>
      </div>
    )
  }
}

export default CurrentTeam;