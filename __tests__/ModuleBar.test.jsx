import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModuleBar from '../client/src/components/ModuleBar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ModuleBar Component', () => {

  test('ModuleBar component should exist', () => {
    const wrapper = shallow(<ModuleBar />);

    expect(ModuleBar).toBeDefined();
  });

});
