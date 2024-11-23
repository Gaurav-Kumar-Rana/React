import React, { useState, useRef, useContext } from "react";
import { APP_TITLE } from "../utils/appConfigs";
import InventoryContext from "../utils/inventroryContext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const global_inventory = useContext(InventoryContext);
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
  const [count, setCount] = useState(0);
  const inventory = useRef([emtyInventory]);

  const handleInventoryDelete = (index) => {
    inventory.current.splice(index, 1);
    if (inventory.current == 0) {
      inventory.current.push({
        ...emtyInventory,
        addded_date: +new Date(),
        id: (global_inventory.length + 1).toLocaleString(),
      });
    }
    setCount(count + 1);
  };
  const handleInventoryAdd = () => {
    inventory.current.push({
      ...emtyInventory,
      addded_date: +new Date(),
      id: getInventoryId().toLocaleString(),
    });
    setCount(count + 1);
  };

  const saveAllInventory = () => {
    global_inventory.push(...inventory.current);
    navigate("/inventory");
  };

  const getInventoryId = () => {
    return +inventory.current[inventory.current.length - 1]?.id + 1;
  };

  return (
    <div>
      <h1 className="p-2 my-4 text-3xl font-bold uppercase">ADD {APP_TITLE}</h1>
      <div>
        <ul className="border-2 text-white">
          <li className="flex justify-between p-2 items-center bg-green-900 cursor-pointer border-b-2">
            <span className="w-2/5 uppercase">Name</span>
            <span className="w-1/5 uppercase">Type</span>
            <span className="w-1/5 uppercase">Quantity</span>
            <span className="w-1/5 uppercase">Action</span>
          </li>
          {inventory.current.map(
            ({ id, name, type, quantity, status, item_details }, index) => (
              <li
                key={index}
                className={
                  "flex justify-between p-2 cursor-pointer text-black" +
                  (index % 2 === 0 ? " bg-slate-700" : "")
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
                <span className="w-1/5 flex justify-start">
                  <button
                    className="bg-gray-300 font-bold p-2 rounded-sm text-black w-1/2"
                    onClick={() => {
                      handleInventoryDelete(index);
                    }}
                  >
                    -
                  </button>
                  {inventory.current.length == index + 1 && (
                    <button
                      className="bg-gray-300 font-bold ml-1 p-2 rounded-sm text-black w-1/2"
                      onClick={handleInventoryAdd}
                    >
                      +
                    </button>
                  )}
                </span>
              </li>
            )
          )}
          <li className={"flex justify-between p-2 cursor-pointer border-t-2"}>
            <span className="w-4/5 flex justify-start items-center">
              Save all added inventory
            </span>
            <button
              className="w-1/5 bg-gray-300 font-bold p-2 rounded-sm text-black justify-start"
              onClick={saveAllInventory}
            >
              Save
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Add;
