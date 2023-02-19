import { useSelector, useDispatch } from 'react-redux'
import {
    increment, 
    decrement, 
    addByAmount,
    incrementAsync
} from "../features/counterSlice";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector( (state) => state.counter.value );
  const [Amount, setAmount] = useState('-5');

  return (
    <div className="Counter">
      <div className='container'>
        <Button
          className="btn-lg mx-2 fw-bolder fs-2"
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
          variant="danger"
        >
          -
        </Button>
        <span className='fs-2 px-2 mx-2 bg-gradient rounded' >{count}</span>
        <Button
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
          variant="success"
          className="btn-lg mx-2 fw-bolder fs-2"
        >
          +
        </Button>
      </div>
      <hr />
      <div className='container' >
        <div className='row mt-2'>
          <Button
            className="col btn-lg mx-2"
            aria-label="Decrement value"
            onClick={() => {
              dispatch(addByAmount(Number(Amount) || 0));
            }}
            variant="success"
          >
            Add from input
          </Button>
          <input
            type="text"
            className='col rounded mx-2 text-center fs-1 fw-bold'
            aria-label="Set amount"
            value={Amount}
            onChange={e => setAmount(e.target.value)}
          />
          <Button
            className="col btn-lg mx-2"
            aria-label="Decrement value"
            onClick={() => {
              dispatch( incrementAsync(Number(Amount) || 0));
            }}
            variant="danger"
          >
            Add async
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Counter;