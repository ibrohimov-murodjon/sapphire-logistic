const Button = ({ bgColor, title, color, hover, textClr, padding }) => {
  return (
    <button
      style={{ backgroundColor: `${bgColor}` }}
      className={`text-${color}  ${
        bgColor === "transparent" ? "border-[2px] border-[#ED3237]" : ""
      } btn-grad text-${textClr} cursor-pointer w-full max-w-[250px] py-3 px-6 text-center font-krub tracking-wide block font-bold  z-[10] hover:scale-[1.03] active:scale-[0.99]`}
    >
      {title}
    </button>
  );
};

export default Button;
