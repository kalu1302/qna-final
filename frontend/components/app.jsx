import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import DashContainer from './dash/dash_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const App = ({children}) => {

  return (
    <div>
      <NavBarContainer />
        { children }
    </div>
  );
};

export default App;
