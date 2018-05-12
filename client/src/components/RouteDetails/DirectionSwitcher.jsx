import React from "react";

export default function DirectionSwitcher({title, direction, onDirectionClick}) {
  return (
    <div className="direction-switcher">
      <h1>{title}</h1>
      <ul>
        {direction.map(dir => {
          return (
            <li key={dir.tag} onClick={() => onDirectionClick(dir.tag)}>
              {dir.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
