import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';

class Map extends Component {
  constructor(props) {
    super(props);
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

export default withScriptjs(withGoogleMap(Map));
