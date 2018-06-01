import React, { Component } from 'react';
import { Circle } from "react-google-maps";

const RouteLiveVehicles = ({vehicles}) => {
  return vehicles.map(v => {
    const options = {
      fillColor: "f3f3f3",
      fillOpacity: 1,
      strokeColor: "f3f3f3"
    };

    return (
      <Circle
        key={v.tag}
        center={{
          lat: Number.parseFloat(v.lat),
          lng: Number.parseFloat(v.lon)
        }}
        radius={80}
        options={options}
      />
    );
  });
};

export default RouteLiveVehicles;
