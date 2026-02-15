import { DrawerContext } from "@/context/drawer";
import { useContext } from "react";

const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawer must be used inside DrawerProvider");
  }

  return context;
};

export default useDrawer;
