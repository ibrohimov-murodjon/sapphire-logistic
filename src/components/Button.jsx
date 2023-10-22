
const Button = ({bgColor, title, color}) => {
  return (
    <div style={{backgroundColor: `${bgColor}`}} className={`text-${color}  ${bgColor === 'transparent' ? 'border border-white' : ""} btn-grad  w-[250px] w-full max-w-[150px] py-2 text-center font-krub tracking-wide font-medium z-[10]`}>
        {title}
    </div>
  )
}

export default Button