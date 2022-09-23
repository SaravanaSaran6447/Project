import React, { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

// import { useState } from "react";


function Login() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(true);
  const [name,setName] =useState("");
  const dispatch = useDispatch();
  const handleClick = (e)=>{
    e.preventDefault();
    // dispatch(login({
    //   name:name,
    //   loggedIn:true,
    // }))
  }
console.log(name)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const myFun = (d) => {
    alert(
      "Welcome to MHLC\n\n Your Application Number is: " +
        d.applicationNumber +
        "\n Login OTP is " +
        d.oTp
    );
    setLoggedIn(!loggedIn);
    router.push("./components/main");
    if (loggedIn) {
      history.pushState(null, location.href);
      window.onpopstate = function (_event) {
        history.go(1);
      };
    }
    dispatch(login({
        name:name,
        loggedIn:true,
    }))
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Head>
        <title>MHLC Login</title>
      </Head>
      <div className="font-Fira text-center flex flex-col items-center justify-center h-max md:text-[15px] tab:text-[20px] lg:text-[25px] xl:text-[30px]">
        <label className="md:text-[10px] tab:text-[15px] lg:text-[20px] xl:text-[25px]">
          <b>Enter !</b> Your Application Number
        </label>
        <div className="h-full text-center font-Fira">
          <div className="h-full m-auto mt-5 pt-3">
            <form onSubmit={handleSubmit(myFun)}>
              <div className="card-body">
                <div className="form-group pb-5">
                  <div>
                    <input
                      type="text"
                      className="form-control border-2 border-green rounded-md text-center tab:text-[10px] md:text-[15px] lg:text-[20px] xl:text-[25px]"
                      placeholder="M H L C 1 2 3 4 5 6 7"
                      pattern="[a-zA-Z0-9]{1,15}"
                      title="Enter Application Number is should be digits (0 to 9) or alphabets (a to z) or alphabets (A to Z)."
                      {...register("applicationNumber", {
                        required: true,
                        minLength: 10,
                      })}
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                    {errors.applicationNumber &&
                      errors.applicationNumber.type == "required" && (
                        <p className="pt-2 text-red tab:text-[5px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                          Enter the Appliaction Number
                        </p>
                      )}
                    {errors.applicationNumber &&
                      errors.applicationNumber.type == "minLength" && (
                        <p className="pt-2 text-orange tab:text-[5px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                          Application number is Minimum 10
                        </p>
                      )}
                  </div>
                </div>
                <div className="form-group pt-3 space-y-2">
                  <label
                    htmlFor="oTp"
                    className="form-label md:text-[10px] tab:text-[15px] lg:text-[20px] xl:text-[25px]"
                  >
                    OTP!
                  </label>
                  <div className="text-center">
                    <input
                      className="form-control border-2 border-green rounded-md text-center tab:text-[10px] md:text-[15px] lg:text-[20px] xl:text-[25px]"
                      placeholder="Type the OTP"
                      pattern="[0-9]{1,15}"
                      title="OTP is should be numbers only"
                      {...register("oTp", { required: true, minLength: 6 })}
                    />
                    {errors.oTp && errors.oTp.type == "required" && (
                      <p className="pt-2 text-red tab:text-[5px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                        Enter the OTP
                      </p>
                    )}
                    {errors.oTp && errors.oTp.type == "minLength" && (
                      <p className="pt-2 text-orange tab:text-[5px] md:text-[10px] lg:text-[15px] xl:text-[20px]">
                        OTP in Minimum 6 Digit of numbers
                      </p>
                    )}
                  </div>
                </div>
                <div className="form-group pt-10">
                  <button
                    type="submit"
                    className="bg-green px-4 py-1 rounded-md text-white tab:text-[5px] md:text-[10px] lg:text-[15px] xl:text-[20px] submit_btn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
export function getServerSideProps() {
  return { props: {} };
}
