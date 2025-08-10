import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <p>Count: </p>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default App
