const initialState = {
  routes: {
    byTag: {

    },
    allTags: []
  },
  currentActiveRoute: '',
  currentActiveDirection: '',
  getRoutesPending: false,
  getRoutesSuccess: false,
  getRouteFailure: false,
  searchTerm: ''
};

export default function (state = initialState, action) {
  switch(action.type) {
    case 'CLOSE_ROUTE':
      return Object.assign({}, state, {
        currentActiveRoute: null
      });
    case 'GET_ROUTES':
      return Object.assign({}, state, {getRoutesPending: true});
    case 'GET_ROUTES_SUCCESS':
      return Object.assign({}, state, {
        routes: {'byTag': constructRoutes(action.routes)},
        getRoutesPending: false,
        getRoutesSuccess: true
      });
    case 'GET_ROUTES_FAILURE':
      return Object.assign({}, state, {getRouteFailure: true});
    case 'GET_ROUTE':
      return state;
    case 'GET_ROUTE_SUCCESS':
      return Object.assign({}, state, {
        currentActiveRoute: action.tag,
        currentActiveDirection: action.route.direction[0].tag,
        routes: addRoute(state.routes, action.route)
      });
    case 'GET_ROUTE_FAILURE':
      return state;
    case 'ACTIVATE_DIRECTION':
      return Object.assign({}, state, {
        currentActiveDirection: action.tag
      });
    case 'SEARCH_TERM':
      return Object.assign({}, state, {searchTerm: action.searchTerm});
    default:
      return state;
  }
}

function addRoute(routes, currentRoute) {
  return {
    byTag: {
      ...routes.byTag,
      [currentRoute.tag]: currentRoute
    },
    allTags: []
  };
}

function constructRoutes(routes) {
  const routeByTagObject = {};

  routes.forEach(routeItem => {
    routeByTagObject[routeItem.tag] = {
      'tag': routeItem.tag,
      'title': routeItem.title,
      'color': routeItem.color,
      'oppositeColor': routeItem.oppositeColor
    };
  });

  return routeByTagObject;
}
