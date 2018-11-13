import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({ adapter: new Adapter() });

describe('app Component', () => {
  let component;

  const mockProps = () => ({
    location: {
      pathname: '/app/offers'
    }
  });

  const setupComponent = (overrides = {}) => {
    const props = {
      ...mockProps(),
      ...overrides
    };

    component = shallow(<App {...props} />);
  };

  beforeEach(setupComponent);

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });
});
