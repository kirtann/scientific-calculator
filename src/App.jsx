import { random, round } from "mathjs";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import ToggleButton from "./components/ToggleButton";
import { calFact, checkBracketBalanced } from "./utils/features.js";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [theme, setTheme] = useState(true);
  const [isExploding, setIsExploding] = useState(false);

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
    return input ** (1 / 3);
  }
  function inv(input) {
    return input ** -1;
  }
  const fact = calFact;

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
        inputHandler("**2");
        break;
      case "x\u00B3":
        inputHandler("**3");
        break;
      case "\u221Ax":
        inputHandler("sqrt(");
        break;
      case "\u221Bx":
        inputHandler("cbrt(");
        break;
      case "10\u02E3":
        setInput(`10**${input}`);
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
        if (input.includes("4") && input.includes("3")) {
          setIsExploding(true);
          setTimeout(() => {
            setIsExploding(false);
          }, 3000);
        }
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
        setInput(input + random().toFixed(2));
        break;
      case "x\u02B8":
        inputHandler("**");
        break;
      case "2\u207F\u1D48":
        break;
      case "EE":
        break;
      default:
        inputHandler(val);
        break;
    }
  };

  return (
    <>
      <div
        className={`h-screen w-screen flex justify-center items-center ${
          theme ? " border border-black" : "bg-gray-900"
        }`}
      >
        <ToggleButton theme={theme} toggleTheme={toggleTheme} />
        <div
          className={` h-[70vh] w-[70vw] ${
            theme ? "bg-gray-700" : "bg-white border border-white"
          }`}
        >
          <Display output={output} input={input} theme={theme} />
          <Buttons handleClick={handleClick} theme={theme} />
        </div>
      </div>

      {isExploding && (
        <div className=" absolute top-0 left-0 flex justify-center items-center h-full w-full">
          <ConfettiExplosion
            force={0.8}
            duration={3000}
            particleCount={250}
            width={1600}
          />
        </div>
      )}
    </>
  );
}

export default App;
