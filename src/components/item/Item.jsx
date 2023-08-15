/* eslint-disable react/prop-types */

const Item = ({ item, onDelete, onToogle }) => {
  // console.log(item);
  return (
    <li className="flex items-center justify-center gap-x-14 md:gap-x-10  py-1 lg:py-2 text-center text-[2rem] ">
      <input
        type="checkbox"
        value={item.packed}
        className="accent-[#344e41e5]"
        onChange={() => onToogle(item.id)}
      />
      <p>
        <span className="font-bold text-[#dadfcd]">{item?.quantity}</span>{" "}
        <span className={` ${item.packed ? "line-through" : ""}`}>
          {item?.name}
        </span>
      </p>
      <button onClick={() => onDelete(item?.id)}>❌</button>
    </li>
  );
};

export default Item;
