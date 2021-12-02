import React from "react";
import { Switch, Route } from "react-router-dom";

interface User {
  name: string;
  email: string;
  password: string;
  token: string;
  role: string;
}

export default function RouteHook({ routes, user }: any) {
  const roleVerify = (roles: [string], user: User) => {
    return roles.some((role: string) => user.role === role)
  }

  return (
    <Switch>
      {
        routes.map(({id, link, component, exact, roles}: any) => {
          return user && exact && roleVerify(roles, user) ? (
            <Route key={id} path={link} exact>
              {component}
            </Route>
          ) : user && !exact && roleVerify(roles, user) ? (
            <Route key={id} path={link}>
              {component}
            </Route>
          ) : !user ? (
            <Route key={id} path={link}>
              {component}
            </Route>
          ) : null;
        })
      }
    </Switch>
  );
}
