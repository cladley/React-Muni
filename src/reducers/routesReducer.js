const initialState = {
  routes: {
    byTag: {

    },
    allTags: []
  },
  getRoutesPending: false,
  getRoutesSuccess: false,
  getRouteFailure: false,
  searchTerm: ''
};

export default function (state = initialState, action) {
  switch(action.type) {
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
    console.log(action);
      return state;
    case 'GET_ROUTE_FAILURE':
      return state;
    case 'SEARCH_TERM':
      return Object.assign({}, state, {searchTerm: action.searchTerm});
    default:
      return state;

  }
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
