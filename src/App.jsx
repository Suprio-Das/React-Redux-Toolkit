import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const count = useSelector((state) => state.counter.value);

  function handleIncrement() {

  }
  function handleDecrement() {

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
