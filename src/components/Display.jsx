import React from "react";

const Display = ({ output, input, theme }) => {
  return (
    <div className="w-full h-[20%] flex justify-end items-center">
      {output === "" ? (
        <h1
          className={` ${theme ? "text-white" : "text-black"} text-6xl  me-2`}
        >
          {input}
        </h1>
      ) : (
        <div className="flex flex-col justify-end items-end me-2">
          <h1 className={` ${theme ? "text-white" : "text-black"} text-2xl `}>
            {input}
          </h1>
          <h1 className={` ${theme ? "text-white" : "text-black"} text-6xl `}>
            {output}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Display;
