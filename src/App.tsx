import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import "./App.css";

type FlyOutContextType = {
  open: boolean;
  toggle: React.Dispatch<SetStateAction<boolean>>;
};

type AppProps = {
  children: ReactNode;
};

const FlyOutContext = createContext({
  open: false,
  toggle: () => {},
} as FlyOutContextType);

function App({ children }: AppProps) {
  const [open, toggle] = useState<boolean>(false);
  const contextValue: FlyOutContextType = {
    open,
    toggle,
  };

  return (
    <FlyOutContext.Provider value={contextValue}>
      {children}
    </FlyOutContext.Provider>
  );
}

export default App;
