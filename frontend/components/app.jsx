import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import DashContainer from './dash/dash_container';

const App = ({children}) => {



  return (
    <div>
      <NavBarContainer />
      { children }
    </div>
  );
};

export default App;
