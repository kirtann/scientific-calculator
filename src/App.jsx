import { useState } from "react";
import "./App.css";
import { evaluate, random, round } from "mathjs";
import { btnValues } from "./constants/button";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick("=");
    }
  });

  function sin(input) {
    return Math.sin(input);
  }
  function cos(input) {
    return Math.cos(input);
  }
  function tan(input) {
    return Math.tan(input);
  }
  function sinh(input) {
    return Math.sinh(input);
  }
  function cosh(input) {
    return Math.cosh(input);
  }
  function tanh(input) {
    return Math.tanh(input);
  }
  function ln(input) {
    return Math.log(input);
  }
  function log(input) {
    return Math.log10(input);
  }
  function sqrt(input) {
    return Math.sqrt(input);
  }
  function cbrt(input) {
    return input ^ (1 / 3);
  }
  function inv(input) {
    return input ^ -1;
  }

  const changePlusMinus = () => {
    if (output === "Invalid Input!!") return;
    else if (output !== "") {
      let ans = output.toString();
      if (ans.charAt(0) === "-") {
        let plus = "+";
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === "+") {
        let minus = "-";
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        let minus = "-";
        setInput(minus.concat(ans));
      }
      setOutput("");
    } else {
      if (input.charAt(0) === "-") {
        let plus = "+";
        setInput((prev) => plus.concat(prev.slice(1, prev.length)));
      } else if (input.charAt(0) === "+") {
        let minus = "-";
        setInput((prev) => minus.concat(prev.slice(1, prev.length)));
      } else {
        let minus = "-";
        setInput((prev) => minus.concat(prev));
      }
    }
  };

  const fact = (n) => {
    if (n === 0 || n === 1) return n;

    return n * fact(n - 1);
  };

  const checkBracketBalanced = (expr) => {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];
      if (x === "(") {
        stack.push(x);
        continue;
      }

      if (x === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  };

  const calcuate = () => {
    if (input === "") return;
    let finalexpression = input;
    while (finalexpression.includes("\u00D7")) {
      finalexpression = finalexpression.replace("\u00D7", "*");
    }
    while (finalexpression.includes("\u00F7")) {
      finalexpression = finalexpression.replace("\u00F7", "/");
    }
    let result = 0;
    try {
      if (!checkBracketBalanced(finalexpression)) {
        const errorMessage = { message: "Brackets are not balanced!" };
        throw errorMessage;
      }
      result = eval(finalexpression);
    } catch (error) {
      console.log(error);
      result =
        error.message === "Brackets are not balanced!"
          ? "Brackets not balanced!"
          : "Invalid Input!!";
    }

    isNaN(result)
      ? setOutput(result.toString())
      : setOutput(round(result, 3).toString());
  };

  const inputHandler = (val) => {
    if (output === "Invalid Input!!") return;

    let str = input + val;

    if (output !== "") {
      setInput(output + val);
      setOutput("");
    } else {
      setInput(str);
    }
  };

  const handleClick = (val) => {
    switch (val) {
      case "+/-":
        changePlusMinus();
        break;
      case "x!":
        inputHandler("fact(");
        break;
      case "C":
        setOutput("");
        setInput("");
        break;
      case "x\u00B2":
        inputHandler("^2");
        break;
      case "x\u00B3":
        inputHandler("^3");
        break;
      case "\u221Ax":
        inputHandler("sqrt(");
        break;
      case "\u221Bx":
        inputHandler("cbrt(");
        break;
      case "10\u02E3":
        setInput(`10^${input}`);
        break;
      case "e\u02E3":
        setInput(`${Math.E.toFixed(2)}^${input}`);
        break;
      case "e":
        setInput(input + Math.E.toFixed(2));
        break;
      case "log10":
        inputHandler("log(");
        break;
      case "ln":
        inputHandler("ln(");
        break;
      case "1/x":
        inputHandler("inv(");
        break;
      case "sin":
        inputHandler("sin(");
        break;
      case "cos":
        inputHandler("cos(");
        break;
      case "tan":
        inputHandler("tan(");
        break;
      case "sinh":
        inputHandler("sinh(");
        break;
      case "cosh":
        inputHandler("cosh");
        break;
      case "tanh":
        inputHandler("tanh(");
        break;
      case "\u03C0":
        setInput(input + Math.PI.toFixed(2));
        break;
      case "=":
        calcuate();
        break;
      case "Rad":
        break;
      case "mc":
        break;
      case "m+":
        break;
      case "m-":
        break;
      case "mr":
        break;
      case "Rand":
        setInput(input + random());
        break;
      default:
        inputHandler(val);
        break;
    }
  };

  return (
    <div
      className={`h-screen w-screen flex justify-center items-center ${
        theme ? " border border-black" : "bg-gray-900"
      }`}
    >
      <div className="absolute right-0 top-0 mt-6 mr-6">
        <label className="inline-flex items-center cursor-pointer">
          <span
            className={`me-3 text-sm font-medium ${
              theme ? "text-gray-900" : "text-white"
            }`}
          >
            light
          </span>
          <input
            type="checkbox"
            value=""
            onChange={() => {
              setTheme((prev) => !prev);
            }}
            className="sr-only peer"
            checked={theme}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span
            className={`ms-3 text-sm font-medium ${
              theme ? "text-gray-900" : "text-white"
            }`}
          >
            dark
          </span>
        </label>
      </div>
      <div
        className={` h-[70vh] w-[70vw] ${
          theme ? "bg-gray-700" : "bg-white border border-white"
        }`}
      >
        <div className="w-full h-[20%] flex justify-end items-center">
          {output === "" ? (
            <h1
              className={` ${
                theme ? "text-white" : "text-black"
              } text-6xl  me-2`}
            >
              {input}
            </h1>
          ) : (
            <div className="flex flex-col justify-end items-end me-2">
              <h1
                className={` ${theme ? "text-white" : "text-black"} text-2xl `}
              >
                {input}
              </h1>
              <h1
                className={` ${theme ? "text-white" : "text-black"} text-6xl `}
              >
                {output}
              </h1>
            </div>
          )}
        </div>
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
      </div>
    </div>
  );
}

export default App;
