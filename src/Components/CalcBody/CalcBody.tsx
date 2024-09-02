import NumPad from "../NumPad/NumPad";
import NumDisplay from "../NumDisplay/NumDisplay";
import "./CalcBody.scss";
import { useState } from "react";

const CalcBody = () => {
  const [currentValue, setCurrentValue] = useState<string>("0");

  const updateDisplay = (valueToAdd: string) => {
    if (currentValue == "0") {
      console.log(
        "Current value is " +
          currentValue +
          ". The value coming in is " +
          valueToAdd
      );
      setCurrentValue(valueToAdd);
      console.log("Value is 0, changing value. New value is " + currentValue);
    } else {
      console.log(
        "Current value is " +
          currentValue +
          ". The value coming in is " +
          valueToAdd
      );
      setCurrentValue(currentValue + valueToAdd);
      console.log(
        "Value is not 0, appending value. New value is " + currentValue
      );
    }
  };

  return (
    <div>
      <label>
        Use the below calculator to solve all your mathmatical equations:
      </label>
      <NumDisplay toDisplay={currentValue} />
      <NumPad updateDisplay={updateDisplay} />
    </div>
  );
};

export default CalcBody;
