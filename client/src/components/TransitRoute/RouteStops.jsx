import React from "react";
import RouteStop from './RouteStop';

const RouteStops = ({ stops, hoveredStop }) => {
  let radius = 30;

  return stops.map(s => {
    if (hoveredStop) {
      if (s.tag === hoveredStop) {
        radius = 150;
      } else {
        radius = 30;
      }
    }

    return (
      <RouteStop key={s.tag}
        lat={s.lat}
        lng={s.lon}
        radius={radius} />
    );
  });
};

export default RouteStops;
