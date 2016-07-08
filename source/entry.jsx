import './entry.scss';

// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory, applyRouterMiddleware } from 'react-router';
import useScroll from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from 'redux-modules/reducer';

// app components
import AppContainer from './components/AppContainer';

// material ui
// import {cyan500} from 'material-ui/styles/colors';
import customTheme from 'library/customTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// IE Check
function msieversion() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');
  // If Internet Explorer, return version number
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    return 1;
  }
  return -1;
}
// Info text for IEs
if (msieversion() > 0) {
  window.document.write('<p> 현재 Internet Explorer 는 지원하지 않습니다. Chrome을 사용해주세요! </p>');
} else {
  const store = createStore(
    rootReducer, compose(applyMiddleware(thunk))
  );
  const history = syncHistoryWithStore(hashHistory, store);





  ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
      <Provider store={store}>
        <Router history={history} render={applyRouterMiddleware(useScroll())}>
          <Route path="/" component={AppContainer}>
          {/*
            <Route path="live" component={LiveContainer} onEnter={requireAuth}>
              <IndexRedirect to="/live/deliveries" />
              <Route path="deliveries" component={DeliveryContainer}>
                <IndexRoute component={ConnectedDeliveryList} />
                <Route path=":deliveryId" component={ConnectedDeliveryDetail} />
              </Route>
            </Route>
          */}
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  , document.getElementById('app'));
}
