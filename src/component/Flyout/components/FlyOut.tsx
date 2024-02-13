import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type FlyOutContextType = {
  open: boolean;
  toggle: React.Dispatch<SetStateAction<boolean>>;
};

type FlyOutProps = {
  children: ReactNode;
};

export const FlyOutContext = createContext({
  open: false,
  toggle: () => {},
} as FlyOutContextType);

export const FlyOut = ({ children }: FlyOutProps) => {
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
};
