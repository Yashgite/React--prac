import { useState } from 'react'
import Game from './Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Game/>
      {/* <h1 className='text-red-400 text-4xl'>hello</h1> */}
    </>
  )
}

export default App
