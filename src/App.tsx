import React from "react";
import * as FlyOut from "./component/Flyout/FlyOutRoot";
import { FlyOutItem } from "./component/Flyout/components/FlyOutList";
const App: React.FunctionComponent = () => {
  return (
    <FlyOut.Root>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOutItem>Edit</FlyOutItem>
        <FlyOutItem>Delete</FlyOutItem>
      </FlyOut.List>
    </FlyOut.Root>
  );
};

export default App;
