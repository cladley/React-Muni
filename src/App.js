import React, { Component } from 'react';
import SiteHeader from './components/SiteHeader/SiteHeader';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <Sidebar />
      </div>
    );
  }
}

export default App;
