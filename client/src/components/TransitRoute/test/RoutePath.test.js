import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RoutePath from '../RoutePath';
import renderer from 'react-test-renderer';
import dummyPath from './dummyRoute';

Enzyme.configure({adapter: new Adapter()});


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
