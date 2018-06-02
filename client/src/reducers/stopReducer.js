const initialState = {
  hoveredStop: null,
  selectedStop: null
};

export default function (state = initialState, action) {
  switch(action.type) {
    case 'STOP_HOVERED': 
      return Object.assign({}, state, {
        hoveredStop: action.stopId
      });
    case 'STOP_SELECTED':
      return Object.assign({}, state, {
        selectedStop: action.stopId
      });
    default: 
      return state;
  }
}