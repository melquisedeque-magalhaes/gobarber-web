import React from 'react';
import {
  RouteProps as ReactRouterDOMProps,
  Route as RouterDOM,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

interface RouterProps extends ReactRouterDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouterProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <RouterDOM
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        );
      }}
    />
  );
};

export default Route;
