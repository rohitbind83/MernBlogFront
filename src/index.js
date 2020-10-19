import React from "react";
import ReactDOM from "react-dom";
import NextApp from './NextApp';
import register from './serviceWorker';

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(<Component/>,document.getElementById('root'));
};

// Do this once
register();

// Render once
render(NextApp);

// // Webpack Hot Module Replacement API
// if(module.hot) {
//   module.hot.accept('./NextApp', () => {
//     render(NextApp);
//   });
// }
