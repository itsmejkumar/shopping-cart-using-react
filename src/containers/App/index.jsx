/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../../components";
import { Cart } from "../Cart";
import { Products } from "../Products";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </Layout>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
