import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TeamTotal from '../client/src/components/TeamTotal.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('TeamTotal Component', () => {

  test('TeamTotal component should exist', () => {
    const wrapper = shallow(<TeamTotal />);

    expect(TeamTotal).toBeDefined();
  });

});
