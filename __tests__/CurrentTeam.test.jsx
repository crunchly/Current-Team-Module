import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import CurrentTeam from '../client/src/components/CurrentTeam.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('CurrentTeam Component', () => {

  test('CurrentTeam component should exist', () => {
    const wrapper = shallow(<CurrentTeam />);

    expect(CurrentTeam).toBeDefined();
  });

});
