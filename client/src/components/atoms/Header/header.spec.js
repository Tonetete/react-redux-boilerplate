import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Header from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should render a div tag', () => {
    const component = mount(<Header />);
    expect(component.find('div')).toBeDefined();
  });
});
