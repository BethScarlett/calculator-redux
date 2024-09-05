import NumPad from "../NumPad/NumPad";
import NumDisplay from "../NumDisplay/NumDisplay";
import "./CalcBody.scss";
import { useState } from "react";
import { handleCalc } from "../../Utils/NumUtils";

const CalcBody = () => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [currentOp, setCurrentOp] = useState<string>("");
  const [numOne, setNumOne] = useState<number>(0);
  const [numTwo, setNumTwo] = useState<number>(0);
  const [isFirstNum, setIsFirstNum] = useState<boolean>(true);
  const [isNextPoint, setIsNextPoint] = useState<boolean>(false);
  const [isFirstEquals, setIsFirstEquals] = useState<boolean>(true);

  //BUG - Clicking equals after doing a percentage calculation results in 0
  const handleDetermineFunction = (valueToAdd: string | number) => {
    switch (valueToAdd) {
      case "C": {
        clearDisplay();
        break;
      }
      case "+-": {
        setCurrentValue(currentValue * -1);
        break;
      }
      case "%": {
        setCurrentValue(currentValue / 100);
        break;
      }
      case "/":
      case "*":
      case "-":
      case "+": {
        if (isFirstNum) {
          setIsFirstNum(false);
          setNumOne(currentValue);
          setCurrentValue(0);
          setIsNextPoint(false);
        } else {
          setNumOne(handleCalc(currentOp, numOne, currentValue));
          setCurrentValue(0);
        }
        setCurrentOp(valueToAdd);
        break;
      }
      case ".": {
        setIsNextPoint(true);
        break;
      }
      case "=": {
        if (isFirstEquals) {
          setCurrentValue(handleCalc(currentOp, numOne, currentValue));
          setIsFirstNum(true);
          setIsFirstEquals(false);
        } else {
          setCurrentValue(handleCalc(currentOp, currentValue, numTwo));
        }
        break;
      }
      default: {
        if (typeof valueToAdd == "number") {
          if (!isFirstEquals) {
            setCurrentValue(valueToAdd);
            setIsFirstEquals(true);
          } else {
            updateDisplay(valueToAdd);
          }
        }
        break;
      }
    }
    if (typeof valueToAdd == "number") setNumTwo(valueToAdd);
  };

  const updateDisplay = (valueToAdd: number) => {
    if (isNextPoint) {
      setCurrentValue(currentValue + valueToAdd / 10);
    } else if (currentValue == 0) {
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
    setIsNextPoint(false);
    setIsFirstEquals(true);
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
