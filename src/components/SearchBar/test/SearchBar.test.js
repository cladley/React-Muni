import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../SearchBar';

Enzyme.configure({adapter: new Adapter()});

describe('<SearchBar />', () => {
  let wrapper;
  let onSearch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchBar onSearch={onSearch}/>);
    onSearch.mockClear();
  });

  it('should not display the close button', () => {
    expect(wrapper.find('.search-close').length).toBe(0);
  });

  describe('user populates search field', () => {
    let userText = 'test';

    beforeEach(() => {
      const searchInput = wrapper.find('.search-input').first();
      searchInput.simulate('change', {
        target: {value: userText}
      });
    });

    it('should display the close button', () => {
      expect(wrapper.find('.search-close').length).toBe(1);
    });

    it("should update state property 'searchText'", () => {
      expect(wrapper.state().searchText).toEqual(userText);
    });

    it('should call onSearch with value', () => {
      const arg = onSearch.mock.calls[0];
      expect(arg[0]).toEqual(userText);
    });


    describe('user clicks close button', () => {
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
