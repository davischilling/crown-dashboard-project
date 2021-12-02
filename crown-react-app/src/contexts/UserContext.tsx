import {
  createContext,
  ReactNode,
  useState,
} from "react";
import { RouteComponentProps } from "react-router-dom";

interface User {
  name: string | undefined | null;
  email: string | undefined | null;
  password: string | undefined | null;
  token: string | undefined | null;
  role: string | undefined | null;
}

interface ReactRouter {
  location: RouteComponentProps["location"];
  history: RouteComponentProps["history"];
  match: RouteComponentProps["match"];
}

interface AuthValues {
  email: string;
  password: string;
}

interface UserContextData {
  isLogged: boolean;
  user: User;
  login: (user: AuthValues) => void;
  signup: (user: AuthValues) => void;
  logout: () => void;
  onPageLoadAuthVerify: (location: ReactRouter["location"], routes: any, history: ReactRouter["history"]) => void;
  redirectTo: (path: string) => void;
  history: ReactRouter["history"] | undefined;
  location: ReactRouter["location"] | undefined;
}

interface UserProviderProps {
  children: ReactNode;
}


export const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {

  const [history, setHistory]:
    [
      ReactRouter["history"] | undefined, 
      any
    ] = useState(undefined)

  const [location, setLocation]:
    [
      ReactRouter["location"] | undefined, 
      any
    ] = useState(undefined)

  const [isLogged, setIsLogged] = useState(true);
  const [user, setUser]: any = useState({
    name: undefined,
    email: undefined,
    password: undefined,
    token: undefined,
    role: "User"
  })

  function login(user: AuthValues) {
    setUser(user)
    setIsLogged(true)
  }

  function signup(user: AuthValues) {
    setUser(user)
    setIsLogged(true)
  }

  function logout() {
    setIsLogged(true)
  }

  function redirectTo(path: string){
    if (history) {
      history.push(path)
    }
  }

  function onPageLoadAuthVerify(location: ReactRouter["location"], routes: any, history: ReactRouter["history"]) {
    setHistory(history)
    setLocation(location)
    if (isLogged && routes.notLogged.some(({link}: any) => link === location.pathname)) {
      redirectTo("/")
    } else if (!isLogged && routes.isLogged.some(({link}: any) => link === location.pathname)) {
      redirectTo("/login")
    }
  }

  return (
    <UserContext.Provider
      value={{
        isLogged,
        user,
        login,
        signup,
        logout,
        onPageLoadAuthVerify,
        history,
        location,
        redirectTo
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
