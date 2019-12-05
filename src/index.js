import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import App from "./App";

import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';
import Contact from "./pages/contact";
import Store from "./pages/store"
import Media from "./pages/media"
import INeedJesus from "./pages/ineedjesus"

render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/media" exact component={Media} />
        <Route path="/ineedjesus" exact component={INeedJesus} />
        <Route path="/store" exact component={Store} />
        <Route path="/" component={NotFound}/>
      </Switch>
    </App>
    
  </Router>,
  document.getElementById("root")
);
