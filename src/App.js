import React from 'react';
import "./assets/css/app.css"

const App = ({ children }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default App;