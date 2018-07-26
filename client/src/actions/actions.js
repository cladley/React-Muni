import {getAllRoutes, getRoute, getVehicleLocations} from '../api/muni';
import * as actionTypes from './actionTypes';


const getRoutes = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.GET_ROUTES,
    });

    try {
      const routes = await getAllRoutes();
      dispatch({
        type: actionTypes.GET_ROUTES_SUCCESS,
        routes
      })
    } catch(error) {
      dispatch({
        type: actionTypes.GET_ROUTES_FAILURE,
      })
    }
  };
};

const getRouteByTag = (tag) => {
  return async dispatch => {
    dispatch({
      type: actionTypes.GET_ROUTE,
      tag
    });

    try {
      const route = await getRoute(tag);
      dispatch({
        type: actionTypes.GET_ROUTE_SUCCESS,
        route,
        tag
      })
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ROUTE_FAILURE,
      });
    }
  };
};

const getRouteVehicleLocations = (tag, timeSinceLast = 0) => {
  return async dispatch => {
    dispatch({
      type: actionTypes.GET_VEHICLES,
      tag
    });

    try {
      const vehicles = await getVehicleLocations(tag, 0);
      delete vehicles.copyright;

      dispatch({
        type: actionTypes.GET_VEHICLES_SUCCESS,
        vehicles,
        tag
      })
    } catch (error) {

    }
  };
};

const closeRoute = (tag) => {
  return {
    type: actionTypes.CLOSE_ROUTE,
    tag
  };
};

const activateDirection = (tag) => {
  return {
    type: actionTypes.ACTIVATE_DIRECTION,
    tag
  };
};

const stopHovered = (stopId) => {
  return {
    type: actionTypes.STOP_HOVERED,
    stopId
  };
};

const stopSelected = (stopId) => {
  return {
    type: actionTypes.STOP_SELECTED,
    stopId
  };
};

const updateSearchTerm = (term) => {
  return {
    type: actionTypes.SEARCH_TERM,
    searchTerm: term
  };
};

export {
  activateDirection,
  closeRoute,
  getRoutes,
  getRouteByTag,
  getRouteVehicleLocations,
  stopHovered,
  stopSelected,
  updateSearchTerm
};
