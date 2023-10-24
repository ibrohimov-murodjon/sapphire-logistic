
const Button = ({bgColor, title, color}) => {
  return (
    <div style={{backgroundColor: `${bgColor}`}} className={`text-${color}  ${bgColor === 'transparent' ? 'border-[2px] border-[#87ead5]' : ""} btn-grad cursor-pointer w-[250px] w-full max-w-[150px] py-2 text-center font-krub tracking-wide font-bold  z-[10] hover:scale-[1.03] active:scale-[0.99]` }>
        {title}
    </div>
  )
}

export default Button