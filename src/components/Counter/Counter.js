import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../../store/reducers/selector/getCounterValue/getCounterValue';
import { decremented, incremented } from '../../store/reducers/counterReducer';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(incremented());
  };

  const onDecrement = () => {
    dispatch(decremented());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{value}</h1>
      <button data-testid='increment-btn' onClick={onIncrement}>
        increment
      </button>
      <button data-testid='decrement-btn' onClick={onDecrement}>
        decrement
      </button>
    </div>
  );
};

export default Counter;
