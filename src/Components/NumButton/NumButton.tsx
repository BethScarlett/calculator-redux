import "./NumButton.scss";

type NumButtonProps = {
  value: string | number;
  action: (valueToAdd: string | number) => void;
};

const NumButton = ({ value, action }: NumButtonProps) => {
  const handleDecision = () => {
    action(value);
  };

  return <button onClick={handleDecision}>{value}</button>;
};

export default NumButton;
