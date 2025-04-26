import { useState } from 'react'
import './App.css'
import emma from './assets/emma.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Heading">
          <h1>Routine</h1>
      </div>
      <div className="image">
          <section>
          <img src={emma} height="844" width="563" />
          <figcaption>Emma Watson</figcaption>
          </section>
      </div>
      <div className="button-position">
          <button className="button">Next</button>
      </div>
    </>
  )
}

export default App
