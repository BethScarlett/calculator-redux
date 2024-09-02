import NumPad from "../NumPad/NumPad";
import NumDisplay from "../NumDisplay/NumDisplay";
import "./CalcBody.scss";

const CalcBody = () => {
  return (
    <div>
      <NumDisplay />
      <NumPad />
    </div>
  );
};

export default CalcBody;
