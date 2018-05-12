import React from "react";
import { Circle } from "react-google-maps";

const RouteStops = ({ stops }) => {
  return stops.map(s => {
    const options = {
      fillColor: "f3f3f3",
      fillOpacity: 1,
      strokeColor: "f3f3f3"
    };

    return (
      <Circle
        key={s.tag}
        center={{
          lat: Number.parseFloat(s.lat),
          lng: Number.parseFloat(s.lon)
        }}
        radius={30}
        options={options}
      />
    );
  });
};

export default RouteStops;
