import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { APP_TITLE } from "../utils/appConfigs";
import InventoryContext from "../utils/inventroryContext";

const View = () => {
  const inventory = useContext(InventoryContext);
  return (
    <div>
      <h1 className="p-2 my-4 text-3xl font-bold uppercase">
        {APP_TITLE} TABLE
      </h1>
      <div>
        <ul className="border-2">
          <li className="flex justify-between p-2 items-center bg-green-900 cursor-pointer border-b-2">
            <span className="w-2/5 uppercase">Name</span>
            <span className="w-1/5 uppercase">Type</span>
            <span className="w-1/5 uppercase">Quantity</span>
            <span className="w-1/5 uppercase">Status</span>
          </li>
          {inventory.map(
            ({ id, name, type, quantity, status, item_details }, index) => (
              <li
                key={id}
                className={
                  "flex justify-between p-2 cursor-pointer" +
                  (index % 2 === 0 && " bg-slate-700")
                }
              >
                <span className={"w-2/5"}>
                  {name} {":-"} <span className="text-sm">{item_details}</span>
                </span>
                <span className="w-1/5">{type}</span>
                <span className="w-1/5">{quantity}</span>
                <span className="w-1/5 flex justify-between">
                  {status ? "Active" : "Non-active"}
                  <Link
                    to={`/edite/${id}`}
                    className="bg-gray-300 border-2 px-4 rounded-sm text-black"
                  >
                    Edite
                  </Link>
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default View;
