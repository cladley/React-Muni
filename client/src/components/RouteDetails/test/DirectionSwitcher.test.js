import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import DirectionSwitcher from '../DirectionSwitcher';

describe('<DirectionSwitcher />', () => {
  let wrapper;
  const props = {
    title: '1 California',
    direction: [
      {tag: 'tag_1', title: 'Inbound to Drumm + Clay'},
      {tag: 'tag_2', title: 'Outbound to Geary + 33rd Avenue'},
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<DirectionSwitcher {...props} />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = renderer.create(<DirectionSwitcher {...props} />);
    expect(tree).toMatchSnapshot();
  });

  describe('user clicks a direction', () => {
    let onDirectionClick = jest.fn();

    beforeEach(() => {
      onDirectionClick.mockClear();
      wrapper = shallow(<DirectionSwitcher {...props} onDirectionClick={onDirectionClick} />);
      const direction = wrapper.find('li').first();
      direction.simulate('click');
    });

    it('should call onDirectionClick()', () => {
      expect(onDirectionClick.mock.calls.length).toBe(1);
    });

    it('should call onDirectionClick() with correct tag', () => {
      expect(onDirectionClick.mock.calls[0][0]).toBe('tag_1');
    });
  });
});
