import { useSelector, useDispatch } from 'react-redux'
import {
    increment, 
    decrement, 
    incrementByAmount, 
    decrementByAmount
} from "../features/counterSlice";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector( (state) => state.counter.value );
  const [Amount, setAmount] = useState('5');

  return (
    <div className="Counter">
      <h2 className='text-success'>Value: {count}</h2>
      <hr />
      {/* <form className='form-inline'> */}
      <div className='container' >
        <div className='row' >
          <Button
            className="col btn-lg mx-2"
            aria-label="Decrement value"
            onClick={() => {
              dispatch(decrement());
            }}
            variant="danger"
          >
            -1
          </Button>

          <input
            type="text"
            className='col rounded mx-2'//mx-2'
            aria-label="Set amount"
            value={Amount}
            onChange={e => setAmount(e.target.value)}
          />

        <Button
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
          variant="success"
          className="col btn-lg mx-2"
        >
          +1
        </Button>
          
        </div>
        <div className='row mt-2'>
          <Button
            className="col btn-lg mx-2"
            aria-label="Decrement value"
            onClick={() => {
              dispatch(incrementByAmount(10));
            }}
            variant="success"
          >
            +10
          </Button>
          <Button
            className="col btn-lg mx-2"
            aria-label="Decrement value"
            onClick={() => {
              dispatch(decrementByAmount(10));
            }}
            variant="danger"
          >
            -10
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Counter;