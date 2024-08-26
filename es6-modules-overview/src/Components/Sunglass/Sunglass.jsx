import { add, multiply, devideFirstNumberBySecondNumber as divide } from '../Utils/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css'

const Sunglass = () => {
  const first = 10;
  const second = 20;
  const sum = add(first, second);
  const mult = multiply(first, second);
  const vaag = divide(first, second);

  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;