import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,  Switch,  Route, Link} from 'react-router-dom';
import SiteHeader from './components/SiteHeader/SiteHeader';
import HomeView from './views/HomeView';
import StopView from './views/StopView';
import store from './store/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SiteHeader />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/route/:routeTag/stop/:stopId" component={({match}) => {
                return <StopView stopId={match.params.stopId} routeTag={match.params.routeTag}/>;
              }} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
