/* eslint-disable react/prop-types */

const Stats = ({ items }) => {
  let totalItems = items.length;
  let packedItems = items.filter((item) => item.packed === true).length;
  let percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <div className="flex items-center justify-center text-xl lg:text-4xl font-semibold italic tracking-wider text-[#dad7cd] py-[1rem]  lg:py-[3rem] bg-[#3a5a40]">
      {totalItems === 0 && (
        <p>Start adding some items to your packing list 🚀</p>
      )}

      {totalItems !== 0 && percentage !== 100 && (
        <em>
          💼{" "}
          {`You have ${totalItems} items on your list, and you already packed
          ${packedItems} (${percentage}%)`}
        </em>
      )}

      {totalItems !== 0 && percentage === 100 && (
        <em>You got everything! Ready to go ✈️</em>
      )}
    </div>
  );
};

export default Stats;
