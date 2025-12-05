import { useState } from 'react'
import './App.css'
import Counter from './assets/Components/Counter';
import Todo from './assets/Components/Todo';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter />
      <Todo />
    </div>
  )
}

export default App
