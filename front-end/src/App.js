import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import landing from "./pages/landing";
import placeholder from "./pages/placeholder";
import home from "./pages/home";
import guest from "./pages/guest";
import { Notifications } from 'react-push-notification';

const App = () => {
  return (
    <Router>
      <div>
        <Notifications />
        <Switch>
          <Route exact path="/" component={landing} />
          <Route exact path="/placeholder" component={placeholder} />
          <Route exact path="/home" component={home} />
          <Route exact path="/guest" component={guest} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
