import React, { Component } from "react";
import { Marker } from "react-google-maps/lib/components/Marker";
import RoutePath from "./RoutePath";
import RouteStops from "./RouteStops";
import RouteLiveVehicles from "./RouteLiveVehicles";

export default class TransitRoute extends Component {
  constructStops(directionStops) {
    return directionStops.map(stop => {
      return this.props.route.stopsMap[stop.tag];
    });
  }

  extractDirectionVehicles(vehicles, direction) {
    if (!vehicles) return [];

    return vehicles.vehicle.filter(v => {
      return v.dirTag === direction;
    });
  }

  render() {
    if (this.props.route) {
      const { path, color, stop } = this.props.route;

      const directionDetails = this.props.route.direction.find(
        dir => dir.tag === this.props.direction
      );
      const stops = this.constructStops(directionDetails.stop);
      const vehicles = this.extractDirectionVehicles(this.props.vehicles, this.props.direction);

      return (
        <React.Fragment>
          <RoutePath path={path} color={color} />
          <RouteStops stops={stops} hoveredStop={this.props.hoveredStop} />
          <RouteLiveVehicles vehicles={vehicles} />
        </React.Fragment>
      );
    }
    return null;
  }
}
