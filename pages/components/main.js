import React from "react";
import Head from "next/head";
import Image from "next/image";
import Process from "./process";
import Doc from "./Fileupload";
import logo from "./Resoures/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
// import { Router } from "next/router";
import { useRouter } from "next/router";

function index() {
const router= useRouter()
const dispatch =useDispatch();
const user = useSelector(selectUser);

console.log(user.user);
  return (
    <div className="h-screen bg-gradient-to-bl from-white via-[#1bbb45]/[15%] to-white">
      <Head>
        <title>Application Tracking</title>
      </Head>
      <section className="">
        <div className="pt-8 text-center">
          <h1 className="text-[15px] md:text-[20px] xl:text-[20px] 2xl:text-[20px] font-Fira">
            Your Application Number is
          </h1>
          <div className="text-center pt-3 pb-16">
            <div className="text-center text-[18px] w-max mx-auto px-5 border-2 border-green rounded-md font-Fira bg-transparent font-medium py-1 md:text-[25px] xl:text-[25px] 2xl:text-[25px]">{user.user?.name}</div>
          </div>
          <div className="pt-10">
            <Process />
          </div>
          <div className="text-sm md:text-2xl lg:text-2xl xl:text-3xl font-Fira relative flex items-center justify-center lg:space-x-10 lg:pl-10">
            <div className="hidden lg:block w-max">
              <Image className="" src={logo} />
            </div>
            <div className="w-max px-10  justify-center items-center">
              <h1 className="text-base tab:text-xl lg:text-3xl">
                <b>Additinoal Documents</b>
                <span className="border-b-2 border-b-green"> Required!</span>
              </h1>
              <div className="pt-5 text-xs md:text-sm tab:px-5 space-y-5 lg:text-base 2xl:w-[100%]">
                <div className="text-start text-xs md:text-sm lg:text-base w-full">
                  <label>*Type of Documents Required</label>
                  <div className="pt-3 lg:pt-4 w-full">
                    <Doc label={"adUpload"} placeholder={"Mother Documents"} />
                  </div>
                </div>
                <div className="text-start text-xs md:text-sm lg:text-base w-full">
                  <label>*Type of Documents Required</label>
                  <div className="pt-3 lg:pt-4 w-full">
                    <Doc
                      label="panUpload"
                      placeholder={"Sas bill of current home"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5  font-Fira">
            <div className="pt-16 px-5 -space-x-2 flex items-center justify-center md:px-5 md:-space-x-3">
              <input type={"checkbox"} className="" />
              <p className="text-xs md:text-sm tab:text-sm px-5">
                submitting your information, you certify as that you agree to
                the terms and conditions of Wealth Mind Creation Private Limited
              </p>
            </div>
            <div>
              <button className="px-3 py-2  bg-green text-white lg:text-sm rounded-md hover:bg-lime-600" onClick={(e)=>dispatch(logout())}>
                Submit
              </button>
              <div className="h-full pb-8"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default index;
