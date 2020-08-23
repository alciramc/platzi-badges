import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BadgeNew from "../pages/badgeNew";
import Badges from "../pages/badges";
import Layout from "../components/layout";
import NotFound from "../pages/notFound";
import Home from "../pages/home";
// Se utiliza function en lugar de clase cuando solo necesitamos una funcion o no se utiliza el state.

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
