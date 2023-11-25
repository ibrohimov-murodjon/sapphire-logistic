import { Button, FaqQuestions } from "../components";

const faqData = [
  {
    id: 1,
    question: "What is the per LBS weight cost of goods transportation?",
    responce:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi similique qui cumque aliquam.",
  },
  {
    id: 2,
    question: "What is the per LBS weight cost of goods transportation?",
    responce:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi similique qui cumque aliquam.",
  },
  {
    id: 3,
    question: "What is the per LBS weight cost of goods transportation?",
    responce:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi similique qui cumque aliquam.",
  },
  {
    id: 4,
    question: "What is the per LBS weight cost of goods transportation?",
    responce:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi similique qui cumque aliquam.",
  },
];
const FAQs = () => {
  return (
    <div className="lightBlue  py-24" id="faq">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-start justify-around maxSm:flex-col maxSm:gap-y-6 maxSm:items-center">
        <div className="flex flex-col">
          <h2 className="text-[40px] text-black w-full max-w-[400px] mb-3 maxSm:text-center maxSm:max-w-[600px]">
            What mostly people ask us about
          </h2>
          <small className="FAQs h-[200px] w-full max-w-[300px] rounded-lg flex items-start justify-center flex-col pl-8 mobileMax:p-0 maxSm:max-w-[600px] maxSm:h-[300px] maxSm:text-center maxSm:items-center">
            <h5 className=" font-bold text-[18px] mb-2 maxSm:text-[30px]">
              Have more questions?
            </h5>
            <p className="text-[14px] mb-2">
              24/7 customer support is always ready to answer all your questions
            </p>
            <Button title="Ask Here" bgColor="#3E4095" />
          </small>
        </div>
        <div>
          <ul className="flex flex-col gap-y-3">
            {faqData.map((element) => {
              return (
                <>
                  <FaqQuestions
                    question={element.question}
                    response={element.responce}
                  />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
