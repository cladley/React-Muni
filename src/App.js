import React, { Component } from 'react';
import {Provider} from 'react-redux';
import SiteHeader from './components/SiteHeader/SiteHeader';
import Sidebar from './components/Sidebar/Sidebar';
import store from './store/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SiteHeader />
          <Sidebar />
        </div>
      </Provider>
    );
  }
}

export default App;
