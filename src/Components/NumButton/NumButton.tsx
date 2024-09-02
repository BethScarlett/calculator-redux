import "./NumButton.scss";

type NumButtonProps = {
  value: string;
  action: () => void;
};

const NumButton = ({ value, action }: NumButtonProps) => {
  return <button onClick={action}>{value}</button>;
};

export default NumButton;
