import NumButton from "../NumButton/NumButton";
import "./NumPad.scss";

type NumPadProps = {
  updateDisplay: (valueToAdd: string) => void;
};

const NumPad = ({ updateDisplay }: NumPadProps) => {
  const placeholderFunc = () => {
    console.log("Function");
  };

  return (
    <div className="num-pad">
      <NumButton value="C" action={updateDisplay} />
      <NumButton value="+-" action={placeholderFunc} />
      <NumButton value="%" action={placeholderFunc} />
      <NumButton value="/" action={placeholderFunc} />
      <NumButton value="7" action={placeholderFunc} />
      <NumButton value="8" action={placeholderFunc} />
      <NumButton value="9" action={placeholderFunc} />
      <NumButton value="*" action={placeholderFunc} />
      <NumButton value="4" action={placeholderFunc} />
      <NumButton value="5" action={placeholderFunc} />
      <NumButton value="6" action={placeholderFunc} />
      <NumButton value="-" action={placeholderFunc} />
      <NumButton value="1" action={updateDisplay} />
      <NumButton value="2" action={placeholderFunc} />
      <NumButton value="3" action={placeholderFunc} />
      <NumButton value="+" action={updateDisplay} />
      <NumButton value="0" action={placeholderFunc} />
      <NumButton value="." action={placeholderFunc} />
      <NumButton value="=" action={placeholderFunc} />
    </div>
  );
};

export default NumPad;
