import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

export default function RouteWrapper({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
