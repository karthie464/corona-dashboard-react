import * as React from 'react';
import { shallow } from 'enzyme';
import Districtwise from './districtwise';

describe('<Districtwise />', () => {
  test('renders', () => {
    const wrapper = shallow(<Districtwise />);
    expect(wrapper).toMatchSnapshot();
  });
});
  