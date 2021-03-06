import React, {Component} from 'react';
import { connect } from "react-redux";
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import { ACTIVATE_DIRECTION } from '../../actions/actionTypes';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.activeRoute) {
      const {activeRoute} = this.props;
      const bounds = new window.google.maps.LatLngBounds(
        {
          lat: Number.parseFloat(activeRoute.latMin),
          lng: Number.parseFloat(activeRoute.lonMin)
        },
        {
          lat: Number.parseFloat(activeRoute.latMax),
          lng: Number.parseFloat(activeRoute.lonMax)
        });
    
      this.mapInstance.fitBounds(bounds);
    }
  }

  render() {
    return (
      <GoogleMap defaultZoom={12} ref={(map) => this.mapInstance = map}
        defaultCenter={{lat: 37.77, lng: -122.43}}>
        {this.props.children}
      </GoogleMap>
    );
  }
}


const mapStateToProps = state => {
  return {
    activeRoute: state.routes.routes.byTag[state.routes.currentActiveRoute],    
  };
};


export default connect(mapStateToProps)(withScriptjs(withGoogleMap(Map)));
