import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TeamMemberList from '../client/src/components/TeamMemberList.jsx';
import TeamMember from '../client/src/components/TeamMember.jsx';


Enzyme.configure({ adapter: new Adapter() });

describe('TeamMember Component', () => {

  test(`TeamMemberList component should exist`, () => {
    const sampleData = [
      {
        "first_name": "Bob",
        "last_name": "Barker",
        "title": "Announcer",
        "_id": 1,
        "company": 'CBS',
        "photo_url": "https://s3-us-west-1.amazonaws.com/crunchly-team/11.jpg",
      }
    ];
    const wrapper = shallow(<TeamMemberList people={sampleData}/>);
    expect(TeamMemberList).toBeDefined();
  });

  test(`renders four <TeamMember /> components`, () => {
    const sampleData = [
      {
        "first_name": "Bob",
        "last_name": "Barker",
        "title": "Announcer",
        "_id": 1,
        "company": 'CBS',
        "photo_url": "https://s3-us-west-1.amazonaws.com/crunchly-team/11.jpg",
      }
    ];
    const wrapper = shallow(<TeamMemberList people={sampleData}/>);
    expect(wrapper.find(TeamMember)).toHaveLength(1);
  });

});