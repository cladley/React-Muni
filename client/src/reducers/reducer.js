import {combineReducers} from 'redux';
import routes from './routesReducer';
import stops from './stopReducer';

export default combineReducers({
  routes,
  stops
});
