import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TeamMember from '../client/src/components/TeamMember.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('TeamMember Component', () => {

  test('TeamMember component should exist', () => {
    const wrapper = shallow(<TeamMember />);

    expect(TeamMember).toBeDefined();
  });

});
