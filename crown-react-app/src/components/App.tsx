import React, { useContext, useEffect } from 'react';
import Routing from '../hooks/routing'
import routes from '../routes/routes'
import { UserContext } from "../contexts/UserContext";
import { DashboardTheme, AuthTheme } from "../themes"
import { useLocation, useHistory } from 'react-router';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { DashboardProvider } from '../contexts/DashboardContext'

function App() {
  
  const { isLogged, onPageLoadAuthVerify, redirectTo, user } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    onPageLoadAuthVerify(location, routes, history)
  }, [onPageLoadAuthVerify, location, history]);


  function handleRedirect(path: string){
    redirectTo(path)
  }

  return (
    isLogged ?
        (
          <DashboardProvider>
            <DashboardTheme handleRedirect={handleRedirect} currentPath={location.pathname}>
              <ErrorBoundary>
                <Routing routes={routes.isLogged} user={user} />
              </ErrorBoundary>
            </DashboardTheme>
          </DashboardProvider>
        )
      :
        (
          <AuthTheme handleRedirect={handleRedirect} currentPath={location.pathname}>
            <ErrorBoundary>
              <Routing routes={routes.notLogged} user={false} />
            </ErrorBoundary>
          </AuthTheme>
        )
  );
}

export default App;
