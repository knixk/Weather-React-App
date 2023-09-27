import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div classname="logo"><span>Weather</span></div>
      </nav>

      <main>
        <div classname="search">
          <input type="Search" placeholder="Type area.."/>
            <button>Search</button>
        </div>

        <div classname="grid">
          <div classname="item">1</div>
          <div classname="item">2</div>
          <div classname="item">3</div>
          <div classname="item">4</div>
        </div>
      </main>

      <footer>

        <p>Weather</p>

        <span>Copyright 2023</span>

      </footer>
    </>
  )
}

export default App
