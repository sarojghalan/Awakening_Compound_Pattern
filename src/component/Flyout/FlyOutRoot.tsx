import { FlyOutContext, FlyOut, FlyOutContextType } from "./components/FlyOut";
import { FlyOutItem, FlyOutList } from "./components/FlyOutList";
import { FlyOutToggle } from "./components/Toggle";

export const Context = FlyOutContext;
export const Root = FlyOut;
export type ContextProps = FlyOutContextType;

export const Toggle = FlyOutToggle;

export const Item = FlyOutItem;
export const List = FlyOutList;
