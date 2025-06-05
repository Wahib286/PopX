import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-[#F7F8F9]">
      <div>
        <p
          className="
            absolute 
            top-[549px] left-[20px] 
            w-[231px] h-[33px] 
            text-left 
            text-[28px] leading-[17px] font-medium 
            text-[#1D2226] opacity-100 font-[Rubik]
            
            lg:top-[36%] lg:left-[50%] lg:-translate-x-1/2
            ">
          Welcome to PopX
        </p>

        <p
          className="
        absolute 
        top-[592px] left-[20px] 
        w-[232px] h-[48px] 
        text-left text-[18px] leading-[26px] 
        font-normal text-[#1D2226] opacity-60 font-[Rubik]

        lg:top-[40%] lg:left-[50%] lg:-translate-x-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div>
        <button
          className="absolute top-[669px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] text-white font-normal
        lg:top-[48%] lg:left-[50%] lg:-translate-x-1/2">
          <p
            className="text-center text-[16px] leading-[17px] font-normal text-white font-[Rubik]"
            onClick={() => navigate("/register")}>
            Create Account
          </p>
        </button>

        <button className="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] opacity-100 rounded-md lg:top-[54%] lg:left-[50%] lg:-translate-x-1/2">
          <p
            className="text-center text-[16px] leading-[17px] font-normal text-[#1D2226] opacity-100 font-[Rubik]"
            onClick={() => navigate("/login")}>
            Already Registered? Login
          </p>
        </button>
      </div>
    </div>
  );
};
