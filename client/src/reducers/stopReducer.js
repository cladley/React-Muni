import { STOP_HOVERED, STOP_SELECTED, GET_STOP_PREDICTIONS_SUCCESS } from '../actions/actionTypes'

const initialState = {
  hoveredStop: null,
  selectedStop: {}
};

export default function (state = initialState, action) {
  switch(action.type) {
    case STOP_HOVERED: 
      return Object.assign({}, state, {
        hoveredStop: action.stopTag
      });
    case STOP_SELECTED:
      return Object.assign({}, state, {
        selectedStop: {tag: action.stopTag}
      });
    case GET_STOP_PREDICTIONS_SUCCESS:
      return Object.assign({}, state, {
        selectedStop: {
          tag: action.stopTag,
          title: action.stopTitle,
          predictions: action.predictions
        }
      });
    default: 
      return state;
  }
}