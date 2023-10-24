import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AboutSlide1 } from "../assets";

const TeamSlider = () => {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="myContainer"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    <div className="flex items-center justify-center w-full max-w-[800px] gap-x-32 mt-10">
        <img src={AboutSlide1} className='w-[200px] h-[200px] rounded-full border-[7px] border-[#f7c503]' alt="" />
        <span>
            <p className="w-full max-w-[450px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum ipsum blanditiis, exercitationem quaerat praesentium non deleniti eaque assumenda laboriosam tenetur saepe explicabo minima voluptate asperiores provident modi quo voluptatibus.</p>
            <ul className="flex items-center gap-x-1 my-4">
                <li><img src="" className="w-5 h-5" alt="" /></li>
                <li><img src="" className="w-5 h-5" alt="" /></li>
                <li><img src="" className="w-5 h-5" alt="" /></li>
                <li><img src="" className="w-5 h-5" alt="" /></li>
                <li><img src="" className="w-5 h-5" alt="" /></li>
            </ul>
            <h6 className="font-bold text-[20px]">William Gibson</h6>
            <p>CEO, Traders Corp</p>
        </span>
    </div>
  </Carousel>
  )
}

export default TeamSlider