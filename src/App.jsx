import { useState } from "react";
import "./App.css";

function App() {
  const btnValues = [
    { val: "(", col: "bg-gray-600", mobile: false },
    { val: ")", col: "bg-gray-600", mobile: false },
    { val: "mc", col: "bg-gray-600", mobile: false },
    { val: "m+", col: "bg-gray-600", mobile: false },
    { val: "m-", col: "bg-gray-600", mobile: false },
    { val: "mr", col: "bg-gray-600", mobile: false },
    { val: "C", col: "bg-gray-600", mobile: true },
    { val: "+/-", col: "bg-gray-600", mobile: true },
    { val: "%", col: "bg-gray-600", mobile: true },
    { val: "\u00F7", col: "bg-amber-500", mobile: true },
    { val: "2\u207F\u1D48", col: "bg-gray-600", mobile: false },
    { val: "x\u00B2", col: "bg-gray-600", mobile: false },
    { val: "x\u00B3", col: "bg-gray-600", mobile: false },
    { val: "x\u02B8", col: "bg-gray-600", mobile: false },
    { val: "e\u02E3", col: "bg-gray-600", mobile: false },
    { val: "10\u02E3", col: "bg-gray-600", mobile: false },
    { val: "7", col: "bg-stone-400", mobile: true },
    { val: "8", col: "bg-stone-400", mobile: true },
    { val: "9", col: "bg-stone-400", mobile: true },
    { val: "\u00D7", col: "bg-amber-500", mobile: true },
    { val: "1/x", col: "bg-gray-600", mobile: false },
    { val: "\u221Ax", col: "bg-gray-600", mobile: false },
    { val: "\u221Bx", col: "bg-gray-600", mobile: false },
    { val: "\u02B8\u221Ax", col: "bg-gray-600", mobile: false },
    { val: "ln", col: "bg-gray-600", mobile: false },
    { val: "log10", col: "bg-gray-600", mobile: false },
    { val: "4", col: "bg-stone-400", mobile: true },
    { val: "5", col: "bg-stone-400", mobile: true },
    { val: "6", col: "bg-stone-400", mobile: true },
    { val: "-", col: "bg-amber-500", mobile: true },
    { val: "x!", col: "bg-gray-600", mobile: false },
    { val: "sin", col: "bg-gray-600", mobile: false },
    { val: "cos", col: "bg-gray-600", mobile: false },
    { val: "tan", col: "bg-gray-600", mobile: false },
    { val: "e", col: "bg-gray-600", mobile: false },
    { val: "EE", col: "bg-gray-600", mobile: false },
    { val: "1", col: "bg-stone-400", mobile: true },
    { val: "2", col: "bg-stone-400", mobile: true },
    { val: "3", col: "bg-stone-400", mobile: true },
    { val: "+", col: "bg-amber-500", mobile: true },
    { val: "Rad", col: "bg-gray-600", mobile: false },
    { val: "sinh", col: "bg-gray-600", mobile: false },
    { val: "cosh", col: "bg-gray-600", mobile: false },
    { val: "tanh", col: "bg-gray-600", mobile: false },
    { val: "\u03C0", col: "bg-gray-600", mobile: false },
    { val: "Rand", col: "bg-gray-600", mobile: false },
    { val: "0", col: "bg-stone-400", mobile: true },
    { val: ".", col: "bg-stone-400", mobile: true },
    { val: "=", col: "bg-amber-500", mobile: true },
  ];

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (val) => {
    console.log(val);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className=" h-[70vh] w-[70vw] bg-gray-700">
        <div className="w-full h-[20%] flex justify-end items-center">
          <h1 className="text-white font-bold text-6xl me-3">{input}</h1>
        </div>
        <div className="w-full hidden md:grid h-[80%] grid-cols-10 grid-flow-rows gap-1 ">
          {btnValues.map((value, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClick(value.val)}
                className={`flex justify-center ${
                  value.val === "0" ? "col-span-2" : ""
                } items-center ${
                  value.col
                } text-white text-xl cursor-pointer hover:bg-emerald-500`}
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
                  className={`flex justify-center ${
                    value.val === "0" ? "col-span-2" : ""
                  } items-center ${
                    value.col
                  } text-white text-xl cursor-pointer hover:bg-emerald-500`}
                  key={index}
                >
                  {value.val}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
