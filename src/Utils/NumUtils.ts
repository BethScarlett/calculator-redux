export const handleCalc = (symbol: string, num1: number, num2: number) => {
  switch (symbol) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    case "%":
      return (num1 / 100) * num2;
  }
  return 0;
};
