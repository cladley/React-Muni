export const getStopLocation = (routeTag, stopTag, routes) => {
  if (routeTag && stopTag) {
    const stopDetails = routes[routeTag]['stopsMap'][stopTag];
    return {
      lat: Number.parseFloat(stopDetails.lat),
      lng: Number.parseFloat(stopDetails.lon)
    };
  }

  return null; 
};

export const getStopTitle = (selectedStop) => {
  return selectedStop.title;
};

export const getPredictions = (selectedStop) => {
  return selectedStop.predictions || [];
};

export const getStopRoute = (routeTag, routes) => {
  if (routes[routeTag]) {
    return routes[routeTag].title;
  }
};
