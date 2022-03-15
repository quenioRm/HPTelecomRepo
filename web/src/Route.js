import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Layout
import { MainLayout } from "./components/layout/MainLayout";
//

// Pages
import { Home } from "./components/pages/home/Home";
import { Plans } from "./components/pages/plans/Plans";
import { About } from "./components/pages/about/About";

export default () => {
  return (
  <Router>
    <Route>
      <MainLayout>
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/Plans' exact component={Plans} />
          <Route exact path='/About' exact component={About} />
          <Route exact path='*' exact component={Home} />
        </Switch>
      </MainLayout>
    </Route>
  </Router>
  )
} 