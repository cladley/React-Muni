import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import SearchBar from "../components/SearchBar/SearchBar";
import RoutesListContainer from "../components/RoutesList/RoutesListContainer";
import RouteDetailsContainer from "../components/RouteDetails/RouteDetailsContainer";
import RoutesViewer from "../components/RoutesViewer";
import Map from "../components/Map/Map";

export default function() {
  return (
    <React.Fragment>
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
        mapElement={<div style={{ height: `100%` }} />}
      >
      <RoutesViewer />
      </Map>
    </React.Fragment>
  );
}
