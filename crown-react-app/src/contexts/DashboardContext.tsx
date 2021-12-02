import {
  createContext,
  ReactNode,
  useState,
} from "react";

interface DashboardContextData {
  isSidebarOpened: boolean
  toggleSidebar: () => void
}

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardContext = createContext({} as DashboardContextData);

export const DashboardProvider = ({ children }: DashboardProviderProps) => {

  const [isSidebarOpened, setIsSidebarOpened] = useState(false)

  function toggleSidebar(){
    setIsSidebarOpened(!isSidebarOpened)
  }

  return (
    <DashboardContext.Provider
      value={{
        isSidebarOpened,
        toggleSidebar
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
