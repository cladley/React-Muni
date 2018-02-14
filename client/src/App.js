import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Map from './components/Map/Map';
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
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className="map-container" />}
            mapElement={<div style={{ height: `100%` }} />}>
          </Map>
        </div>
      </Provider>
    );
  }
}

export default App;
