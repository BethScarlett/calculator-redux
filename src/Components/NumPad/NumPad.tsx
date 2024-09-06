import NumButton from "../NumButton/NumButton";
import "./NumPad.scss";

type NumPadProps = {
  funcToRun: (valueToAdd: string | number) => void;
};

const NumPad = ({ funcToRun }: NumPadProps) => {
  return (
    <div className="num-pad">
      <NumButton value="C" action={funcToRun} />
      <NumButton value="+-" action={funcToRun} />
      <NumButton value="%" action={funcToRun} />
      <NumButton value="/" action={funcToRun} />
      <NumButton value="*" action={funcToRun} />
      <NumButton value="." action={funcToRun} />
      <NumButton value={7} action={funcToRun} />
      <NumButton value={8} action={funcToRun} />
      <NumButton value={9} action={funcToRun} />
      <NumButton value={4} action={funcToRun} />
      <NumButton value={5} action={funcToRun} />
      <NumButton value={6} action={funcToRun} />
      <NumButton value={1} action={funcToRun} />
      <NumButton value={2} action={funcToRun} />
      <NumButton value={3} action={funcToRun} />
      <NumButton value="+" action={funcToRun} />
      <NumButton value={0} action={funcToRun} />
      <NumButton value="-" action={funcToRun} />
      <NumButton value="=" action={funcToRun} />
    </div>
  );
};

export default NumPad;
