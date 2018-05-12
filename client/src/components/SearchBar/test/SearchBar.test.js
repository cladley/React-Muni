import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from '../SearchBar';

describe('<SearchBar />', () => {
  let wrapper;
  let onSearch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchBar onSearch={onSearch} />);
    onSearch.mockClear();
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should not display the close button', () => {
    expect(wrapper.find('.search-close').length).toBe(0);
  });

  describe('user populates search field', () => {
    let userText = 'test';

    beforeEach(() => {
      wrapper = shallow(<SearchBar onSearch={onSearch} searchTerm="test" />);
      // const searchInput = wrapper.find('.search-input').first();
      // searchInput.simulate('change', {
        // target: {value: userText}
      // });
    });

    it('should display the close button', () => {
      expect(wrapper.find('.search-close').length).toBe(1);
    });

    xdescribe('user clicks close button', () => {
      beforeEach(() => {
        const closeButton = wrapper.find('.search-close').first();
        closeButton.simulate('click');
      });

      it("should clear state property 'searchText'", () => {
        expect(wrapper.state().searchText).toEqual('');
      });

      it('should hide the close button', () => {
        expect(wrapper.find('.search-close').length).toBe(0);
      });
    });
  });
});
