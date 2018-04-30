import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TeamMember from '../client/src/components/TeamMember.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('TeamMember Component', () => {

  beforeAll(() => {
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
    let person = sampleData[0];
    const wrapper = shallow(<TeamMember person={person} key={person._id}/>);
  });

  test(`TeamMember component should exist`, () => {
    expect(TeamMember).toBeDefined();
  });

});
