import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import MainPage from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('NotFoundPage404', () => {
  it('should render a div', () => {
    const component = mount(<MainPage />);
    expect(component.find('Header')).toBeDefined();
    expect(component.find('div')).toBeDefined();
  });
});
