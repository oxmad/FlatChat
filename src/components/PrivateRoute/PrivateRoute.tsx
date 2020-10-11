import React from "react";
import { useSelector } from "react-redux";
import { RouteProps, Redirect, Route } from "react-router-dom";
import { userSelector } from "../../selectors/user.selectors";

// interface PrivateRouteProps extends RouteProps {
//   condition: boolean;
// }

export const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const isLogged = useSelector(userSelector) !== null;
  if (isLogged) {
    return <Route {...rest} />;
  }

  return <Redirect to="/login" />;
};
