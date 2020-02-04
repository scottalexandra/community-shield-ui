import React, { PropTypes } from 'react';

// import FlashMessages from './common/FlashMessages';

import './App.css';

const App = ({ children }) => {
  return (
    <div className="app">
      <div className="app_container">
        { children }
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
