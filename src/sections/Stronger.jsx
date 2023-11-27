import { Box, Money, Truck } from "../assets";
import StackImg from "../assets/stack-img.png";

const data = [
  {
    img: Money,
    title: "Rapid Deliveries Across USA & Canada",
    desc: "Streamline your expedited truck shipment with Sapphire Transportation all over the USA and Canada to ensure your packages reach their destination in the shortest possible time. ",
  },
  {
    img: Box,
    title: "Fast and reliable delivery.",
    desc: "Sapphire Transportation ensures fast and reliable delivery of your goods - we understand the importance of time sensitive shipments and prioritize efficiency.  Experience hassle-free expedited truck shipment. ",
  },
  {
    img: Truck,
    title: "Real-time tracking and updates.",
    desc: "With Sapphire Transportation - track your shipments in real-time and receive regular updates on their status. Stay informed every step of the way. ",
  },
  {
    img: Truck,
    title: "Dedicated customer support",
    desc: "Customer satisfaction is prioritized - customer support team is available 24/7 to assist you with any queries or concerns with regard to your expedited shipment.",
  },
];

const Stronger = () => {
  return (
    <div className="advantages" id="about">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-start justify-between pt-20 pb-16 gap-12 tabletMax:flex-col tabletMax:items-center">
        <div className="flex flex-col ">
          <span className=" border-[1px] mb-2  border-[#fff] bg-transparent px-5 w-full max-w-[280px] text-center py-1 rounded-3xl text-[10px] text-[#fff] font-bold uppercase mobileLg:text-[17px]">
            Why choose sapphire
          </span>
          <h1 className="text-[40px] text-white font-bold w-full max-w-[500px] leading-normal mb-6 mobileLg:text-[35px] mobileMd:text-center">
            Transportation Services Like No Other
          </h1>
          <ul className="flex flex-wrap justify-between gap-y-12 mt-4 mx-6">
            {data.map((item, index) => (
              <li
                className="flex items-start gap-x-5 max-w-[450px]"
                key={index}
              >
                <img
                  src={item.img}
                  className="w-14 h-14 p-3 bg-[#ED3237] rounded-full mobileLg:w-12 mobileLg:h-12"
                  alt=""
                />
                <span>
                  <h3 className="text-[25px] font-bold capitalize text-white mobileLg:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="w-full max-w-[450px] pt-2 text-[#fff]">
                    {item.desc}
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stronger;
