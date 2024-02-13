import { useContext } from "react";
import { AddIcon } from "../../../assets/icons";
import { FlyOutContext } from "./FlyOut";

export const FlyOutToggle = () => {
  const { open, toggle } = useContext(FlyOutContext);
  return (
    <div onClick={() => toggle(!open)}>
      <AddIcon fill="#fff" height={10} width={10} />
    </div>
  );
};
