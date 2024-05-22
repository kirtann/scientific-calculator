import React from "react";
import { btnValues } from "../constants/button";

const Buttons = ({ handleClick, theme }) => {
  return (
    <>
      <div className="w-full hidden md:grid h-[80%] grid-cols-10 grid-flow-rows gap-1 ">
        {btnValues.map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(value.val)}
              className={`flex justify-center ${
                value.val === "0" ? "col-span-2" : ""
              } items-center ${value.col} ${
                theme ? "text-white" : "text-black"
              } text-xl cursor-pointer hover:bg-emerald-500`}
            >
              {value.val}
            </div>
          );
        })}
      </div>
      <div className="w-full md:hidden grid h-[80%] grid-cols-4 grid-flow-rows gap-1 ">
        {btnValues
          .filter((value) => value.mobile === true)
          .map((value, index) => {
            return (
              <div
                onClick={() => handleClick(value.val)}
                className={`flex justify-center ${
                  value.val === "0" ? "col-span-2" : ""
                } items-center ${value.col} ${
                  theme ? "text-white" : "text-black"
                } text-xl cursor-pointer hover:bg-emerald-500`}
                key={index}
              >
                {value.val}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Buttons;
