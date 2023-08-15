/* eslint-disable react/prop-types */

import { useState } from "react";

import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";

const Form = ({ addNewItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [itemName, setItemName] = useState("");

  function handleItemChange(e) {
    setItemName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleSubmission(e) {
    e.preventDefault();
    let newItem = {
      name: itemName,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };
    addNewItem(newItem);
    setItemName("");
  }

  return (
    <form
      onSubmit={handleSubmission}
      className="add-form flex flex-col gap-y-4 md:flex-row  items-center justify-center gap-x-8  py-[2.5rem] px-[8rem] bg-[#a3b181]"
    >
      <h3 className="text-xl font-bold tracking-wide text-[#344e41] ">
        What do you need for your 😸 trip !!!
      </h3>
      <div className="flex gap-x-6">
        <select
          value={quantity}
          className="py-3 px-10 rounded-full outline-none border-none text-lg bg-[#dadfcd]"
          onChange={handleQuantityChange}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return (
              <option
                value={num}
                key={num}
                className="py-2 px-10 rounded-full border-none outline-none"
              >
                {num}
              </option>
            );
          })}
          {/* <option value="2">2</option> */}
        </select>
        <Input type="text " onchange={handleItemChange} value={itemName} />
      </div>

      <Button type="submit">Add</Button>
    </form>
  );
};

export default Form;
