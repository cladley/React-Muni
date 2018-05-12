import React from "react";
import "./routemap.css";

export default function RouteMap({ stops }) {
  return (
    <div className="route-map-container">
      <div className="route-map-track-holder">
        <div className="route-track"></div>
        <ul className="route-map">
          {stops.map(s => {
            return <li className="route-map__item"><span>{s.title}</span></li>;
          })}
        </ul>
      </div>
    </div>
  );
}
