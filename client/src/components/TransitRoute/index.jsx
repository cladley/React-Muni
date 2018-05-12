import React, { Component } from "react";
import { Marker } from "react-google-maps/lib/components/Marker";
import RoutePath from "./RoutePath";
import RouteStops from "./RouteStops";

export default class TransitRoute extends Component {
  constructStops(directionStops) {
    return directionStops.map(stop => {
      return this.props.route.stopsMap[stop.tag];
    });
  }

  render() {
    if (this.props.route) {
      const { path, color, stop } = this.props.route;

      const directionDetails = this.props.route.direction.find(
        dir => dir.tag == this.props.direction
      );
      const stops = this.constructStops(directionDetails.stop);

      return (
        <React.Fragment>
          <RoutePath path={path} color={color} />
          <RouteStops stops={stops} />
        </React.Fragment>
      );
    }
    return null;
  }
}
