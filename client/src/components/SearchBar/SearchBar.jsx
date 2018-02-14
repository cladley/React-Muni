import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSearchTerm} from '../../actions/actions';
import './searchbar.css';

class SearchBar extends Component {
  state = {
    isActive: false,
  };

  getCloseButton() {
    if (this.props.searchTerm.length > 0) {
      return (
        <button className="search-close" onClick={this.onCloseSearch}>
          <svg className="close-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      );
    }

    return null;
  }

  onCloseSearch = () => {
    this.setState({
      isActive: false,
    });

    this.props.dispatch(updateSearchTerm(''));
  };

  onInputChange = (e) => {
    const trimmedSearchTerm = e.target.value.trim().toLowerCase();
    this.props.dispatch(updateSearchTerm(trimmedSearchTerm));
  };

  onInputFocus = () => {
    this.setState({
      isActive: true
    });

    this.searchInput.addEventListener('keydown', this.onKeyDown);
  };

  onInputBlur = () => {
    this.searchInput.removeEventListener('keydown', this.onKeyDown);
  };

  onKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.onCloseSearch();
    }
  };

  render() {
    return (
      <div className="search-bar">
        <button className="search-open">
          <svg className="search-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>

        <input className="search-input" type="text"
            value={this.props.searchTerm}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            onChange={this.onInputChange}
            ref={searchInput => this.searchInput = searchInput}
            placeholder="Search for a route"/>

        {this.getCloseButton()}
      </div>
    );
  }
}

const mapStateToProps = (state => {
  return {
    searchTerm: state.routes.searchTerm
  };
});

export {
  SearchBar
};

export default connect(mapStateToProps)(SearchBar);
