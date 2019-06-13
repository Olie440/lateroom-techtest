import React from 'react';
import { shallow } from 'enzyme';
import HotelSearchScreen from './hotel-search.component';

it('renders correctly', () => {
  const component = shallow(<HotelSearchScreen />);
  expect(component).toMatchSnapshot();
});
