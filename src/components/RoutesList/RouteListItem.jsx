import React, {Component} from 'react';

class RouteListItem extends Component {
  render() {
    const {tag, title, color} = this.props;

    return (
      <div className="route-list-item" onClick={() => this.props.onRouteClick(tag)}>
        <span className="route-list-item__tag">{tag}</span>
        <span className="route-list-item__title">{title}</span>
      </div>
    );
  }
}

export default RouteListItem;
