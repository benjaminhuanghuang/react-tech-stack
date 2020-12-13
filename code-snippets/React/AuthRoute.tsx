
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "./context-auth/context-auth";


// Check the user object in AppCountext
// remove component to Component
function AuthRoute({ component: Component, ...rest }: any) {
  const { user } = useContext(AuthContext);

  return <Route {...rest} render={(props) => (user ? <Redirect to="/" /> : <Component {...props} />)} />;
}

export default AuthRoute;
