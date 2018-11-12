import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import NotFoundPage404 from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('NotFoundPage404', () => {
  it('should render a div', () => {
    const component = mount(<NotFoundPage404 />);
    expect(component.find('div')).toBeDefined();
  });
});
