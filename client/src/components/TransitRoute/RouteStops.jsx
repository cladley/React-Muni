import React from "react";
import { Circle } from "react-google-maps";

const RouteStops = ({ stops, hoveredStop }) => {
  let radius = 30;

  return stops.map(s => {
    const options = {
      fillColor: "f3f3f3",
      fillOpacity: 1,
      strokeColor: "f3f3f3"
    };

    if (hoveredStop) {
      if (s.stopId === hoveredStop) {
        radius = 150;
      } else {
        radius = 30;
      }
    }

    return (
      <Circle
        key={s.tag}
        center={{
          lat: Number.parseFloat(s.lat),
          lng: Number.parseFloat(s.lon)
        }}
        radius={radius}
        options={options}
      />
    );
  });
};

export default RouteStops;
