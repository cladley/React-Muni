import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import './map.css';

class StopMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap defaultZoom={20} ref={(map) => this.mapInstance = map}
      defaultCenter={this.props.center}>
      {this.props.children}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(StopMap));