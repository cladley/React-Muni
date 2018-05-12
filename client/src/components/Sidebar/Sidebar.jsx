import React, { Component } from 'react';
import RoutesListContainer from '../RoutesList/RoutesListContainer';
import RouteDetailsContainer from '../RouteDetails/RouteDetailsContainer';
import SearchBar from '../SearchBar/SearchBar';
import './sidebar.css';

function SidebarHeader({children}) {
  return (
    <header className="sidebar-header">
      {children}
    </header>
  );
}

function SidebarContent({children}) {
  return (
    <div className="sidebar-content">
      {children}
    </div>
  );
}

class Sidebar extends Component {
  static Header = SidebarHeader;
  static Content = SidebarContent;

  render() {
    return (
      <div className="sidebar">
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;
