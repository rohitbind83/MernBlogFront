import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from './main';
import SinglePost from './Contents/SinglePost';
const HomePage = ({match}) => {
  console.log('match',match);
  return (
      <div>
      <Switch>
        <Route exact path={`${match.url}`} component={Main}/>
        <Route exact path={`${match.url}/slug`} component={SinglePost}/> 
      </Switch>
    </div>
  );
}

export default HomePage;