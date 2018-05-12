import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Map from './components/Map/Map';
import RoutesViewer from './components/RoutesViewer';
import SiteHeader from './components/SiteHeader/SiteHeader';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBar from './components/SearchBar/SearchBar';
import RoutesListContainer from './components/RoutesList/RoutesListContainer';
import RouteDetailsContainer from './components/RouteDetails/RouteDetailsContainer';
import store from './store/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SiteHeader />
          <Sidebar>
            <Sidebar.Header>
              <SearchBar />
            </Sidebar.Header>
            <Sidebar.Content>
              <RouteDetailsContainer />
              <RoutesListContainer />
            </Sidebar.Content>
          </Sidebar>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className="map-container" />}
            mapElement={<div style={{ height: `100%` }} />}>
            <RoutesViewer />
          </Map>
        </div>
      </Provider>
    );
  }
}

export default App;
