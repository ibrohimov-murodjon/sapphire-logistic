import { AboutSlide1 } from "../assets";

const processData = [
  {
    id: 1,
    title: "Sending Goods",
    text: "Sapphire transportation service offers reliable door-to-door delivery with the added benefit of reduced fuel consumption",
    img: AboutSlide1,
  },
  {
    id: 2,
    title: "Documentation",
    text: "Sapphire transportation service offers reliable door-to-door delivery with the added benefit of reduced fuel consumption",
    img: AboutSlide1,
  },
  {
    id: 3,
    title: "Transportation",
    text: "Sapphire transportation service offers reliable door-to-door delivery with the added benefit of reduced fuel consumption",
    img: AboutSlide1,
  },
  {
    id: 4,
    title: "Receiving Goods",
    text: "Sapphire transportation service offers reliable door-to-door delivery with the added benefit of reduced fuel consumption",
    img: AboutSlide1,
  },
];
const Process = () => {
  return (
    <div className="w-full lightBlue py-20">
      <div className="myContainer mx-auto flex flex-col items-center">
        <h1 className="text-center  text-[40px] text-black font-bold w-full max-w-[600px] mb-10">
          Out Priority is to transport with care and responsibility
        </h1>
        <ul className="flex items-center flex-wrap justify-between gap-4">
          {processData.map((element) => {
            const { id, title, text, img } = element;
            return (
              <div
                className="relative flex items-center flex-col text-center w-full max-w-[250px]"
                key={id}
              >
                <img
                  src={img}
                  className="rounded-full w-[150px] h-[150px] border-[7px] border-[#fdeeb3]"
                  alt=""
                />
                <p className="absolute top-0 left-[50px] py-2 px-3 bg-[#ffdb53] rounded-full">
                  0{id}
                </p>
                <h3 className="mt-6 mb-3 font-bold capitalize text-[20px] text-black">
                  {title}
                </h3>
                <p className="text-gray-400 w-full">{text}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Process;
