import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import { PUBLIC_ROUTE } from "./route.constants";
import Loader from "@iso/components/utility/loader";

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import("@iso/tgtb_containers/Home/Home")),
  },
  {
    path: PUBLIC_ROUTE.PAGE_404,
    component: lazy(() => import("@iso/containers/Pages/404/404")),
  },
  {
    path: PUBLIC_ROUTE.PAGE_500,
    component: lazy(() => import("@iso/containers/Pages/500/500")),
  },
];

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
