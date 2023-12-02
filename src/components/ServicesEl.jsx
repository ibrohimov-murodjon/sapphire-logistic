const ServicesEl = ({ data }) => {
  return (
    <div className="flex items-start justify-around mt-9 h-[400px] overflow-y-hidden gap-x-8 mobileMax:flex-col mobileMax:items-center mobileMax:h-fit">
      <span className="text-center flex flex-col items-center">
        <h3 className="font-bold text-[55px]  w-full max-w-[850px] mb-8 leading-tight maxSm:text-[30px] mobileMax:text-center">
          {data.title}
        </h3>
        <p className="w-full max-w-[950px] text-[30px] tracking-wide text-[#fff] maxSm:text-[15px] mobileMax:text-center">
          {data.text}
        </p>
      </span>
    </div>
  );
};

export default ServicesEl;
