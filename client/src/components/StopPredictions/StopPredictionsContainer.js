import React, { Component } from 'react';
import RouteStop from '../TransitRoute/RouteStop';

export class StopPredictionsContainer extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.stopRouteTitle}</h2>
        <h3>{this.props.stopTitle}</h3>
        <ul>
          {this.props.predictions.map(pred => (
            <li key={pred.vehicle}>{pred.minutes} minute(s)</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StopPredictionsContainer;