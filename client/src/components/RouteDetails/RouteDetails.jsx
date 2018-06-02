import React, { Component } from "react";
import DirectionSwitcher from "./DirectionSwitcher";
import RouteMap from "./RouteMap";

export default class RouteDetails extends Component {
  constructStops(directionStops) {
    return directionStops.map(stop => {
      return this.props.route.stopsMap[stop.tag];
    });
  }

  render() {
    const { route, direction, onDirectionChange, close } = this.props;

    if (route) {
      const directionDetails = route.direction.find(
        dir => dir.tag === direction
      );
      const stops = this.constructStops(directionDetails.stop);

      return (
        <div className="route-details-container">
          <button onClick={close}>X</button>
          <DirectionSwitcher {...route} onDirectionClick={onDirectionChange} />
          <RouteMap stops={stops} onHover={this.props.onStopHovered} onStopSelected={this.props.onStopSelected} />
        </div>
      );
    }

    return null;
  }
}
