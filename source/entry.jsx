import './entry.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect,
  hashHistory, applyRouterMiddleware } from 'react-router';
import useScroll from 'react-router-scroll';



import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from 'redux-modules/reducer';


// IE Check
function msieversion() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
  {
    return 1;
  }
  return -1;
}

// Info text for IEs
if (msieversion() > 0) {
  window.document.write('<p> 현재 Internet Explorer 는 지원하지 않습니다. Chrome을 사용해 주세요! </p>');
} else {
  const store = createStore(
    rootReducer, compose(applyMiddleware(thunk))
  );

  const history = syncHistoryWithStore(hashHistory, store);

  const requireAuth = (nextState, replace) => {
    if (!localStorage.getItem('authData')) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    } else {
      // store.dispatch(success());
    }
  };

  ReactDOM.render(
    <div>
      Hello World!
    </div>
  , document.getElementById('app'));
}
