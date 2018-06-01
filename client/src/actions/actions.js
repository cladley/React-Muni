import {getAllRoutes, getRoute, getVehicleLocations} from '../api/muni';

const getRoutes = () => {
  return async dispatch => {
    dispatch({
      type: 'GET_ROUTES',
    });

    try {
      const routes = await getAllRoutes();
      dispatch({
        type: 'GET_ROUTES_SUCCESS',
        routes
      })
    } catch(error) {
      dispatch({
        type: 'GET_ROUTES_FAILURE'
      })
    }
  };
};

const getRouteByTag = (tag) => {
  return async dispatch => {
    dispatch({
      type: 'GET_ROUTE',
      tag
    });

    try {
      const route = await getRoute(tag);
      dispatch({
        type: 'GET_ROUTE_SUCCESS',
        route,
        tag
      })
    } catch (error) {
      dispatch({
        type: 'GET_ROUTE_FAILURE'
      });
    }
  };
};

const getRouteVehicleLocations = (tag, timeSinceLast = 0) => {
  return async dispatch => {
    dispatch({
      type: 'GET_VEHICLES',
      tag
    });

    try {
      const vehicles = await getVehicleLocations(tag, 0);
      delete vehicles.copyright;

      dispatch({
        type: 'GET_VEHICLES_SUCCESS',
        vehicles,
        tag
      })
    } catch (error) {

    }
  };
};

const closeRoute = (tag) => {
  return {
    type: 'CLOSE_ROUTE',
    tag
  };
};

const activateDirection = (tag) => {
  return {
    type: 'ACTIVATE_DIRECTION',
    tag
  };
};

const stopHovered = (stopId) => {
  return {
    type: 'STOP_HOVERED',
    stopId
  };
};

const updateSearchTerm = (term) => {
  return {
    type: 'SEARCH_TERM',
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
  updateSearchTerm
};
