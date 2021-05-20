import React from "react";
import { Home, AddEvents, Dashboard } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/addevent" component={AddEvents} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;
