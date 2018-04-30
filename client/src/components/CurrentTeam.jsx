import React from 'react';
import axios from 'axios';
import ModuleBar from './ModuleBar.jsx';
import TeamTotal from './TeamTotal.jsx';
import TeamMemberList from './TeamMemberList.jsx';


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
        
        <TeamMemberList people={this.state.people} />
      </div>
    )
  }
}

export default CurrentTeam;