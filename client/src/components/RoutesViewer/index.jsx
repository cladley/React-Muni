import React, { Component } from "react";
import { connect } from "react-redux";
import TransitRoute from "../TransitRoute";

class RoutesViewer extends Component {
  render() {
    return (
      <TransitRoute
        route={this.props.activeRoute}
        direction={this.props.activeDirection}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    activeDirection: state.routes.currentActiveDirection,
    activeRoute: state.routes.routes.byTag[state.routes.currentActiveRoute]
  };
};

export default connect(mapStateToProps)(RoutesViewer);
