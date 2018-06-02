import {xmlToJson, createObjectFromArray} from '../utilities/helpers';

const BASE_URL = 'http://webservices.nextbus.com/service/publicXMLFeed?a=sf-muni&command=';
const ALL_ROUTES_URL = '/allroutes';
const GET_ROUTE = `${BASE_URL}routeConfig&r=`;
const GET_STOP_PREDICTIONS_FOR_STOP = `${BASE_URL}predictions&s={stopTag}`;
const GET_STOP_PREDICTIONS_FOR_ROUTE = `${BASE_URL}predictions&r={routeTag}&s={stopTag}`;
const GET_VEHICLE_LOCATIONS = `${BASE_URL}vehicleLocations&r={routeTag}&t={time}`;

async function makeRequest(url) {
  let oDom;
  try {
    const response = await fetch(url);
    const xmlText = await response.text();
    const parser = new DOMParser();
    oDom = parser.parseFromString(xmlText, "text/xml");
  } catch (error) {
    throw error;
  }
  return xmlToJson(oDom);
}

export async function getAllRoutes() {
  const data = await makeRequest(ALL_ROUTES_URL);
  return data.body.route;
}

export async function getRoute(routeTag) {
  const url = `${GET_ROUTE}${routeTag}`;
  const data = await makeRequest(url);
  data.body.route.stopsMap = createObjectFromArray(data.body.route.stop, 'tag');
  return data.body.route;
}

export async function getAllStops() {
  const url = '/stops';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getStopPredictions(routeTag, stopTag) {
  const url = GET_STOP_PREDICTIONS_FOR_ROUTE
      .replace('{routeTag}', routeTag)
      .replace('{stopTag}', stopTag);
  const data = await makeRequest(url);

  return data.body.predictions;
}

export async function getAllPredictionsForStop(stopId) {
  const url = GET_STOP_PREDICTIONS_FOR_STOP
      .replace('{stopId}', stopId);
  const data = await makeRequest(url);
  return data;
}

export async function getVehicleLocations(routeTag, timeSinceLast = 0) {
  const url = GET_VEHICLE_LOCATIONS.replace('{routeTag}', routeTag)
      .replace('{time}', timeSinceLast);
  const data = await makeRequest(url);
  return data.body;
}

export function createStopsViewUrl(routeTag, stopId) {
  return `/route/${routeTag}/stop/${stopId}`;
}
