import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
