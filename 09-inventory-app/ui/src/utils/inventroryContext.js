import { createContext } from "react";
import viewData from "../utils/inventory.json";

const InventoryContext = createContext([...viewData]);

export default InventoryContext;
