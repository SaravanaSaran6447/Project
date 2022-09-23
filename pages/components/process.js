import React from "react";
import Image from "next/dist/client/image";
import TickMark from "./Resoures/Path 15.svg";



function process() {
  let lengthOfstages = 6;

  let numberOfStagesFinished = 2;

  let singlePercentage = 100 / 6;
  let progressBarWidth = numberOfStagesFinished * singlePercentage;
  let finishedStages = lengthOfstages + numberOfStagesFinished;

  const stages = [
    {
      id: 0,
      title: "KYC Verified",
    },
    {
      id: 1,
      title: "Pre-qualified",
    },
    {
      id: 2,
      title: "Pre-legal Cleared",
    },
    {
      id: 3,
      title: "Qualified",
    },
    {
      id: 4,
      title: "Sanctioned",
    },
    {
      id: 5,
      title: "MOD",
    },
  ];

  console.log(progressBarWidth);
  return (
    <div className="font-Fira">
      <div className="">
        <div className="-mt-28 py-14 w-full xl:w-full text-center  mx-auto justify-between px-5 md:px-0 space-y-10">
          <div className=" relative w-[80%] md:w-[70%] lg:w-[60%] mx-auto bg-white rounded-xl border-2 border-[#4D4D4D] p-[2px]">
            <div
              style={{ width: progressBarWidth + "%" }}
              className={`top-0 bottom-0 my-auto  h-4 bg-green rounded-xl`}
            ></div>
          </div>
          <div className=" text-black text-[35px] py-4 bg-[#F2F2F2] pb-3">
            <h1 className="text-[15px] md:text-xl lg:text-2xl xl:text-3xl pb-2"><b>You are almost done!</b> Below stages are in progress.</h1>

            <div className=" w-full flex py-3 justify-end mx-auto flex-col md:flex-row">
              {stages.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index === stages.length - 1 ? "w-full" : " w-full"
                    } ${index === 0 ? "lg:ml-[8%]" : " "} ${
                      index === 0 ? "md:ml-[3%]" : " "
                    } w-full mx-auto bg-ros-400 flex md:flex-row justify-start item-center `}
                  >
                    <div
                      className={`${
                        index === stages.length - 1 ? "w-full" : " w-full"
                      } flex flex-col  md:flex-row items-cent mx-auto bg-sky-30`}
                    >
                      <div
                        className={`${
                          index !== 0 ? "hidden" : " hidden"
                        } rotate-90 md:rotate-0 w-max my-auto mx-auto `}
                      >
                        <i className=" fa-solid fa-ellipsis"></i>
                      </div>
                      <div className="w-24 flex-shrink-0 flex  flex-col  mx-auto md:mx-0  justify-start py-2">
                        <div
                          className={`${
                            index <= numberOfStagesFinished - 1
                              ? "bg-green"
                              : " bg-gray"
                          } w-max rounded-full aspect-square mx-auto`}
                        >
                          <Image src={TickMark} alt="tick" />
                        </div>
                        <div className="w-full  md:w-3/4 lg:w-full flex-wrap text-[40%] md:text-[14px] lg:text-[18px]  mx-auto pt-2">
                          {item.title}
                        </div>
                      </div>
                      <div
                        className={`${
                          index === stages.length - 1 ? "hidden" : "md:flex "
                        } rotate-90 md:justify-center md:rotate-0 w-full my-auto mx-auto md:mt-4`}
                      >
                        <i
                          className={`${
                            index <= numberOfStagesFinished - 1
                              ? "text-green"
                              : " text-gray"
                          } fa-solid fa-ellipsis`}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default process;
