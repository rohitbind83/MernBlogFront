import React from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {Route, Switch,useRouteMatch,useLocation,useHistory} from "react-router-dom";
import App from "./containers/App/index";
import configureStore, { history } from './appRedux/store';
 
const store = configureStore(/* provide initial state if any */);

const NextApp = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </ConnectedRouter>  
  </Provider>;

export default NextApp;
