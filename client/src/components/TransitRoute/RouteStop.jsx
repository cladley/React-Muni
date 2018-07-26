import React, { Component } from 'react';
import { Circle } from 'react-google-maps';

export default class RouteStop extends Component {
  static defaultProps = {
    fillColor: "f3f3f3",
    fillOpacity: 1,
    strokeColor: "f3f3f3"
  };

  render() {
    const options = {
      fillColor: this.props.fillColor,
      fillOpacity: this.props.fillOpacity,
      strokeColor: this.props.strokeColor
    };

    return (
      <Circle
        key={this.props.tag}
        center={{
          lat: Number.parseFloat(this.props.lat),
          lng: Number.parseFloat(this.props.lng)
        }}
        radius={this.props.radius}
        options={options}
      />

    );
  }
}