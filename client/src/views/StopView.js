import React from 'react';

export default function({routeTag, stopId}) {
  return (
    <div>
      <h1>{routeTag}</h1>
      <h5>{stopId}</h5>
    </div>
  );
}