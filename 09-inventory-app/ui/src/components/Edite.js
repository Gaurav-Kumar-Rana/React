import React, { useContext, useEffect, useRef, useState } from "react";
import InventoryContext from "../utils/inventroryContext";
import { APP_TITLE } from "../utils/appConfigs";
import { useParams, useNavigate } from "react-router-dom";

const Edite = () => {
  const navigate = useNavigate();
  const global_inventory = useContext(InventoryContext);
  const [count, setCount] = useState(0);
  const emtyInventory = {
    id: (global_inventory.length + 1).toLocaleString(),
    name: "",
    type: "",
    quantity: 0,
    status: true,
    item_details: "",
    addded_date: +new Date(),
    updat_by: "Admin",
  };
  const inventory = useRef([emtyInventory]);
  const { id } = useParams();

  useEffect(() => {
    for (let i = 0; i < global_inventory.length; i++) {
      if (global_inventory[i].id === `${id}`) {
        inventory.current = [global_inventory[i]];
        break;
      }
    }
    setCount(count + 1);
  }, []);

  const saveAllInventory = () => {
    for (let i = 0; i < global_inventory.length; i++) {
      if (global_inventory[i].id === `${id}`) {
        global_inventory[i].name = inventory.current[0].name;
        global_inventory[i].type = inventory.current[0].type;
        global_inventory[i].quantity = inventory.current[0].quantity;
        break;
      }
    }
    navigate("/inventory");
  };

  console.log(inventory, global_inventory);

  return (
    <div>
      <h1 className="p-2 my-4 text-3xl font-bold uppercase">
        EDITE {APP_TITLE}
      </h1>
      <div>
        <ul className="border-2 text-white">
          <li className="flex justify-between p-2 items-center bg-green-900 cursor-pointer border-b-2">
            <span className="w-2/4 uppercase">Name</span>
            <span className="w-1/4 uppercase">Type</span>
            <span className="w-1/4 uppercase">Quantity</span>
          </li>
          {inventory.current.map(
            ({ id, name, type, quantity, status, item_details }, index) => (
              <li
                key={index}
                className={
                  "flex justify-between p-2 cursor-pointer text-black bg-slate-700"
                }
              >
                <span className="w-2/5 mr-1">
                  <input
                    type="text"
                    className="p-2 w-full"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      const name = e.target.value;
                      inventory.current[index] = {
                        ...inventory.current[index],
                        name: name,
                      };
                      setCount(count + 1);
                    }}
                  />
                </span>
                <span className="w-1/5 mr-1">
                  <input
                    type="text"
                    className="p-2 w-full"
                    name="type"
                    value={type}
                    onChange={(e) => {
                      const type = e.target.value;
                      inventory.current[index] = {
                        ...inventory.current[index],
                        type: type,
                      };
                      setCount(count + 1);
                    }}
                  />
                </span>
                <span className="w-1/5 mr-1">
                  <input
                    type="number"
                    className="p-2 w-full"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => {
                      const quantity = e.target.value;
                      inventory.current[index] = {
                        ...inventory.current[index],
                        quantity: quantity,
                      };
                      setCount(count + 1);
                    }}
                  />
                </span>
              </li>
            )
          )}
          <li className={"flex justify-between p-2 cursor-pointer border-t-2"}>
            <span className="w-4/5 flex justify-start items-center">
              Save all edited inventory
            </span>
            <button
              className="w-1/5 bg-gray-300 font-bold p-2 rounded-sm text-black justify-start"
              onClick={() => {
                saveAllInventory();
              }}
            >
              Save
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Edite;
