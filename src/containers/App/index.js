import React from 'react';
import {Route, Switch} from "react-router-dom";
import MainApp from './mainApp'

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path='/' component={MainApp}/>
      </Switch>
    </>
  );
}

export default App;
