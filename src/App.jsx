import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Redux/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
