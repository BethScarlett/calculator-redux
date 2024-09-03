import NumPad from "../NumPad/NumPad";
import NumDisplay from "../NumDisplay/NumDisplay";
import "./CalcBody.scss";
import { useState } from "react";
import { handleCalc } from "../../Utils/NumUtils";
// import { handleCalc } from "../../Utils/NumUtils";

const CalcBody = () => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [currentOp, setCurrentOp] = useState<string>("");
  const [numOne, setNumOne] = useState<number>(0);
  //const [numTwo, setNumTwo] = useState<number>(0);
  const [isFirstNum, setIsFirstNum] = useState<boolean>(true);

  const handleDetermineFunction = (valueToAdd: string | number) => {
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
      //BUG - Changing operators mid equation keeps the previous one, needs more testing
      case "/":
      case "*":
      case "-":
      case "+": {
        if (isFirstNum) {
          setIsFirstNum(false);
          setNumOne(currentValue);
          setCurrentValue(0);
          setCurrentOp(valueToAdd);
        } else {
          setNumOne(handleCalc(currentOp, numOne, currentValue));
          setCurrentValue(0);
          //setCurrentValue(numOne + currentValue);
        }
        break;
      }
      case ".": {
        break;
      }
      case "=": {
        setCurrentValue(handleCalc(currentOp, numOne, currentValue));
        setIsFirstNum(true);
        break;
      }
      default: {
        if (typeof valueToAdd == "number") {
          updateDisplay(valueToAdd);
        }
        break;
      }
    }
  };

  const updateDisplay = (valueToAdd: number) => {
    if (currentValue == 0) {
      setCurrentValue(valueToAdd);
    } else {
      setCurrentValue(currentValue * 10 + valueToAdd);
    }
  };

  const clearDisplay = () => {
    setCurrentValue(0);
    setCurrentOp("");
    setIsFirstNum(true);
    setNumOne(0);
    //setNumTwo(0);
  };

  return (
    <div>
      <label>
        Use the below calculator to solve all your mathmatical equations:
      </label>
      <NumDisplay toDisplay={currentValue} />
      <NumPad funcToRun={handleDetermineFunction} />
    </div>
  );
};

export default CalcBody;
