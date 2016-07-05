import './entry.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect,
  hashHistory, applyRouterMiddleware } from 'react-router';
import useScroll from 'react-router-scroll';
import RootContainer from './components/RootContainer';
import MemberContainer from './components/member/MemberContainer';
import StoreContainer from './components/member/store/StoreContainer';
import ConnectedStoreRegister from './components/member/store/ConnectedStoreRegister';
import ConnectedStoreDetail from './components/member/store/ConnectedStoreDetail';
import ClientContainer from './components/member/client/ClientContainer';
import ConnectedClientRegister from './components/member/client/ConnectedClientRegister';
import ConnectedClientList from './components/member/client/ConnectedClientList';
import ConnectedClientDetail from './components/member/client/ConnectedClientDetail';
import ConnectedStoreList from './components/member/store/ConnectedStoreList';
import NoticeContainer from './components/member/notice/NoticeContainer';
import ConnectedNoticeRegister from './components/member/notice/ConnectedNoticeRegister';
import ConnectedLogin from './components/ConnectedLogin';
import ConnectedNoticeList from './components/member/notice/ConnectedNoticeList';
import ConnectedNoticeDetail from './components/member/notice/ConnectedNoticeDetail';
import ExtrafeeContainer from './components/member/extrafee/ExtrafeeContainer';
import ConnectedExtrafeeList from './components/member/extrafee/ConnectedExtrafeeList';
import ConnectedExtrafeeRegister from './components/member/extrafee/ConnectedExtrafeeRegister';
import ConnectedExtrafeeDetail from './components/member/extrafee/ConnectedExtrafeeDetail';
import ConnectedSignup from './components/ConnectedSignup';
import ConnectedPassword from './components/ConnectedPassword';

import AccountingContainer from './components/member/accounting/AccountingContainer';
import ConnectedReportList from './components/member/accounting/ConnectedReportList';
import InvoiceContainer from './components/member/accounting/InvoiceContainer';
import ConnectedInvoiceList from './components/member/accounting/ConnectedInvoiceList';
import ConnectedInvoiceExport from './components/member/accounting/ConnectedInvoiceExport';
import ConnectedInvoiceDetail from './components/member/accounting/ConnectedInvoiceDetail';

import LiveContainer from './components/live/LiveContainer';
import DeliveryContainer from './components/live/delivery/DeliveryContainer';
import ConnectedDeliveryList from './components/live/delivery/ConnectedDeliveryList';
import ConnectedDeliveryDetail from './components/live/delivery/ConnectedDeliveryDetail';

import { success } from 'redux-modules/modules/login';

// Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from 'redux-modules/Reducers';


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
      store.dispatch(success());
    }
  };

  ReactDOM.render(
    <div>
      Hello World!
    </div>
  , document.getElementById('app'));
}
