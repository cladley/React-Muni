import React from "react";
import "./routemap.css";

export default function RouteMap({ stops, onHover, onStopSelected }) {
  return (
    <div className="route-map-container">
      <div className="route-map-track-holder">
        <div className="route-track" />
        <ul className="route-map">
          {stops.map(s => {
            return (
              <li
                key={s.stopId}
                className="route-map__item"
                onMouseEnter={() => onHover(s)}
                onClick={() => onStopSelected(s)}
              >
                <span>{s.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
