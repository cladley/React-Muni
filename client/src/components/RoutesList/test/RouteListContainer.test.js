import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { RouteListContainer } from '../RoutesListContainer';
jest.unmock('../../../actions/actions');

describe('<RouteListContainer />', () => {
  let wrapper;
  const routes = {
    byTag: {
      '1': {tag: "1", title: "1-California", color: "cc6600", oppositeColor: "000000"},
      '2':  {tag: "2", title: "2-Clement", color: "000000", oppositeColor: "ffffff"}
    }
  };

  beforeEach(() => {
    wrapper = shallow(<RouteListContainer />, {disableLifecycleMethods: true});
  });

  test('on initial load, container should not be active', () => {
    expect(wrapper.state().isInitialLoad).toBe(false);
    expect(wrapper.find('.route-list-container').first().hasClass('is-active')).toBe(false);
    wrapper.setState({isInitialLoad: true});
    expect(wrapper.find('.route-list-container').first().hasClass('is-active')).toBe(true);
  });

  describe('When route data is available', () => {
    beforeEach(() => {
      wrapper = shallow(<RouteListContainer routes={routes} />, {disableLifecycleMethods: true});
      wrapper.setState({isInitialLoad: true});
    });

    it('should render a collection of <RouteListItem /> based on routes prop', () => {
      expect(wrapper.find('RouteListItem').length).toBe(2);
    });

    it('should filter routes based on search term', () => {
      const searchTerm = 'clement';
      wrapper.setProps({searchTerm});
      const item = wrapper.find('RouteListItem');
      expect(item.length).toBe(1);
      expect(item.first().props().title).toBe('2-Clement');

      wrapper.setProps({searchTerm: ''});
      expect(wrapper.find('RouteListItem').length).toBe(2);
      expect(wrapper.find('RouteListItem').first().props().title).toBe('1-California');
    });
  })

  describe('onRouteClicked is called', () => {
    let dispatch;
    let actions;

    beforeEach(() => {
      dispatch = jest.fn();
      actions = require.requireActual('../../../actions/actions');
      actions.getRouteByTag = jest.fn();
      wrapper = shallow(<RouteListContainer routes={routes} dispatch={dispatch} />, {disableLifecycleMethods: true});
    });

    it('should dipatch and action creator of getRouteByTag', () => {
      wrapper.instance().onRouteClicked('1');
      expect(dispatch.mock.calls.length).toBe(1);
      expect(actions.getRouteByTag.mock.calls.length).toBe(1);
      expect(actions.getRouteByTag.mock.calls[0][0]).toBe('1');
    });
  });
});
