import * as React from 'react';
import { shallow } from 'enzyme';
import Statewise from './statewise';

describe('<Statewise />', () => {
  test('renders', () => {
    const wrapper = shallow(<Statewise />);
    expect(wrapper).toMatchSnapshot();
  });
});
  