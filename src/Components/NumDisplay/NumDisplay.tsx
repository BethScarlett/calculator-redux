import "./NumDisplay.scss";

type NumDisplayProps = {
  toDisplay: number;
};

const NumDisplay = ({ toDisplay }: NumDisplayProps) => {
  return (
    <div className="num-display">
      <div className="num-display__screen">{toDisplay}</div>
    </div>
  );
};

export default NumDisplay;
