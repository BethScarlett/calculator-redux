import NumPad from "../NumPad/NumPad";
import NumDisplay from "../NumDisplay/NumDisplay";
import "./CalcBody.scss";
import { useState } from "react";
// import { handleCalc } from "../../Utils/NumUtils";

const CalcBody = () => {
  const [currentValue, setCurrentValue] = useState<string>("0");
  // const [currentOp, setCurrentOp] = useState<string>("");
  // const [numOne, setNumOne] = useState<number>(0);
  // const [numTwo, setNumTwo] = useState<number>(0);
  // const [isFirstNum, setIsFirstNum] = useState<boolean>(true);

  const handleDetermineFunction = (valueToAdd: string) => {
    switch (valueToAdd) {
      case "C": {
        clearDisplay();
        break;
      }
      case "+-": {
        break;
      }
      case "%": {
        break;
      }
      case "/": {
        break;
      }
      case "*": {
        break;
      }
      case "-": {
        break;
      }
      case "+": {
        break;
      }
      case ".": {
        break;
      }
      case "=": {
        break;
      }
      default: {
        updateDisplay(valueToAdd);
        break;
      }
    }
  };

  const updateDisplay = (valueToAdd: string) => {
    if (currentValue == "0") {
      setCurrentValue(valueToAdd);
    } else {
      setCurrentValue(currentValue + valueToAdd);
    }
  };

  const clearDisplay = () => {
    setCurrentValue("0");
    // setCurrentOp("");
    // setNumOne(0);
    // setNumTwo(0);
  };

  return (
    <div>
      <label>
        Use the below calculator to solve all your mathmatical equations:
      </label>
      <NumDisplay toDisplay={currentValue} />
      <NumPad updateDisplay={handleDetermineFunction} />
    </div>
  );
};

export default CalcBody;
