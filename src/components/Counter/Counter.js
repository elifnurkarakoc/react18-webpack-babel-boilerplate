import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/slices/counterSlice";

export const Counter = () => {
  const counterValue = useSelector((state) => state?.counter?.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <div>{counterValue}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
