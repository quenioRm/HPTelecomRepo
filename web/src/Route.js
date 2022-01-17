import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Layout
import { MainLayout } from "./components/layout/MainLayout";
//

// Pages
import { Home } from "./components/pages/home/Home";

export default () => {
  return (
  <Router>
    <Route>
      <MainLayout>
        <Switch>
          <Route exact path='/' exact component={Home} />
        </Switch>
      </MainLayout>
    </Route>
  </Router>
  )
} 