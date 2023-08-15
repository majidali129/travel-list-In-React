/* eslint-disable react/prop-types */

const Button = ({ type = "button", onclick, children }) => {
  return (
    <button
      className="py-2 lg:py-4  px-[4rem]  rounded-full cursor-pointer text-[#dadfcd] text-2xl tracking-wider bg-[#344e41]"
      type={type}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
