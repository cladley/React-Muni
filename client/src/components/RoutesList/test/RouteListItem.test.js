import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RouteListItem from '../RouteListItem';
import renderer from 'react-test-renderer';

describe('<RouteListItem />', () => {
  const props = {
    tag: 'C',
    title: 'California',
    color: 'fffff'
  };

  it('should render correctly', () => {
    const wrapper = renderer.create(<RouteListItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('user clicks item', () => {
    let wrapper;
    let onClicked = jest.fn();

    beforeEach(() => {
      onClicked.mockClear();
      wrapper = shallow(<RouteListItem {...props} onRouteClick={onClicked} />);
      wrapper.simulate('click');
    });

    it('should call prop onRouteClick()', () => {
      expect(onClicked.mock.calls.length).toBe(1);
    });

    it('should call prop onRouteClick() with correct tag', () => {
      expect(onClicked.mock.calls[0][0]).toBe('C');
    });
  });
});
