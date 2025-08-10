import './App.css'

function App() {
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
