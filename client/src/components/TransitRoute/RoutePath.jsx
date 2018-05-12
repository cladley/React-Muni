import React from "react";
import { Polyline } from "react-google-maps";

const RoutePath = ({ path, color }) => {
  const lines = [];

  path.forEach((subPath, index) => {
    const points = subPath.point.map(p => {
      return { lat: Number.parseFloat(p.lat), lng: Number.parseFloat(p.lon) };
    });

    lines.push(
      <Polyline
        key={index}
        path={points}
        options={{ strokeColor: `#${color}` }}
      />
    );
  });

  return lines;
};

export default RoutePath;
