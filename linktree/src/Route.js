import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Layout
import { MainLayout } from "./components/layout/mainLayout";
//

// Pages
import { HomePage } from "./components/home/homePage";
import { ComentPage } from "./components/coments/comentPage";
import { AboutPage } from "./components/about/aboutPage";
import { PlansPage } from "./components/plans/plansPage";
import { DiscountClubPage } from "./components/discount/discountClubPage";

export default () => {
  return (
  <Router>
    <Route>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Coments' component={ComentPage} />
          <Route exact path='/About' component={AboutPage} />
          <Route exact path='/Plans' component={PlansPage} />
          <Route exact path='/DiscountClub' component={DiscountClubPage} />
          <Route exact path='*' component={HomePage} />
        </Switch>
      </MainLayout>
    </Route>
  </Router>
  )
} 