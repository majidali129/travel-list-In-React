/* eslint-disable react/prop-types */

const Input = ({ type = "text", onchange, value }) => {
  return (
    <input
      type={type}
      value={value}
      className="py-4 px-10 text-lg font-bold tracking-wide text-[#344e41] rounded-full"
      onChange={onchange}
    />
  );
};

export default Input;
