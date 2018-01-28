import React from 'react';
import RoutesListContainer from '../RoutesList/RoutesListContainer';
import SearchBar from '../SearchBar/SearchBar';
import './sidebar.css';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <SearchBar />
      </header>
      <RoutesListContainer />

      <footer className="sidebar-footer">

      </footer>
    </div>
  );
}

export default Sidebar;
