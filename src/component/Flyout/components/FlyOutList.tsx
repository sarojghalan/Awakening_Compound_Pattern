import React from "react";
import { FlyOutContext } from "./FlyOut";

interface FlyOutListProps {
  children: React.ReactNode;
}

interface FlyOutItemProps {
  children: string;
}

const FlyOutList = ({ children }: FlyOutListProps) => {
  const { open } = React.useContext(FlyOutContext);
  return open && <ul>{children}</ul>;
};

const FlyOutItem = ({ children }: FlyOutItemProps) => {
  return <li>{children}</li>;
};

export { FlyOutItem, FlyOutList };
