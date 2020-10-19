import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./HomePage/index";

const AllComponents = ({match}) => (
  <div>
    <Switch>
      <Route path={`${match.url}`} component={HomePage}/>
    </Switch>
  </div>
);

export default AllComponents;