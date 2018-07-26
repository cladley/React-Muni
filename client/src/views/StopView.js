import React, { Component } from "react";
import { connect } from 'react-redux';
import StopMap from "../components/Map/StopMap";
import StopPredictionsContainer from "../components/StopPredictions/StopPredictionsContainer";
import RouteStop from '../components/TransitRoute/RouteStop';
import { stopSelected, getPredictionsForStop } from '../actions/actions';
import { getStopLocation, getStopTitle, getStopRoute, getPredictions } from './selectors';
import { getStopPredictions } from "../api/muni";

export class StopView extends Component {
  componentDidMount() {
    const {routeTag, stopTag} = this.props;
    this.props.dispatch(stopSelected(stopTag));
    this.props.dispatch(getPredictionsForStop(routeTag, stopTag));
  }

  render() {
    const {routeTag, stopTag, stopLocation, stopTitle, stopRouteTitle, predictions} = this.props;

    if (!stopLocation) return null;

    return (
      <div className="stop-view">
        {<StopPredictionsContainer stopTitle={stopTitle} stopRouteTitle={stopRouteTitle} predictions={predictions}  stopTag={stopTag} />}
        <StopMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className="stop-map-container" />}
          mapElement={<div style={{ height: `100%` }} />}
          center={stopLocation}>
          <RouteStop radius={2} lat={stopLocation.lat} lng={stopLocation.lng}/>
        </StopMap>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stopLocation: getStopLocation(state.routes.currentActiveRoute,  state.stops.selectedStop.tag,  state.routes.routes.byTag),
    stopTitle: getStopTitle(state.stops.selectedStop),
    stopRouteTitle: getStopRoute(state.routes.currentActiveRoute, state.routes.routes.byTag), 
    predictions: getPredictions(state.stops.selectedStop)
  };
};

export default connect(mapStateToProps)(StopView);