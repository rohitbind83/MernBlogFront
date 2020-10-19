import React from "react";
import AllComponents from "../../routes/index"
import {useRouteMatch} from "react-router-dom";


const MainApp = () => {
  const match = useRouteMatch();
  return (
    <AllComponents match={match}/>
  )
};
export default MainApp;

