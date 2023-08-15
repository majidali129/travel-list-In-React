/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "../../ui/button/Button";
import Item from "../item/Item";

const ItemList = ({ items, onDelete, onToogle, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "status") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="p-5 lg:p-10 bg-[#344e41e5] min-h-[50vh] flex flex-col gap-10 lg:gap-20 relative">
      <ul className="py-3 overflow-y-auto flex-grow grid grid-cols-1 gap-3 md:grid-cols-3 lg:gap-10">
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              onDelete={onDelete}
              onToogle={onToogle}
              key={item.id}
            />
          );
        })}
      </ul>

      <div className="actions flex items-center justify-center gap-6 lg:gap-20 absolute bottom-0 lg:bottom-10 left-[50%] transform -translate-x-1/2">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="py-3 px-10 rounded-full outline-none border-none text-lg bg-[#dadfcd]"
        >
          <option
            value="input"
            className="py-2 px-10 rounded-full border-none outline-none"
          >
            sort by input order
          </option>
          <option
            value="description"
            className="py-2 px-10 rounded-full border-none outline-none"
          >
            sort by description
          </option>
          <option
            value="status"
            className="py-2 px-10 rounded-full border-none outline-none"
          >
            sort by packed status
          </option>
        </select>

        <Button onclick={onClearList}>clear list</Button>
      </div>
    </div>
  );
};

export default ItemList;
