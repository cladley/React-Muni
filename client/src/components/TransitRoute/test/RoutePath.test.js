import React from 'react';
import {shallow} from 'enzyme';
import RoutePath from '../RoutePath';
import renderer from 'react-test-renderer';
import dummyPath from './dummyRoute';

xdescribe('<RoutePath />', () => {

  const props = {
    color: 'cc6600',
    path: dummyPath
  };

  it('should render correctly', () => {
    const wrapper = renderer.create(<RoutePath {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
