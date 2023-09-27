import { useState } from 'react'

function App() {

  return (
    <>
      <nav>
        <div className="logo"><span>Weather</span></div>
      </nav>

      <main>
        <div className="search">
          <input type="Search" placeholder="Type area.."/>
            <button>Search</button>
        </div>

        <div className="grid">
          <div className="item">1</div>
          {/* <div className="item">2</div> */}
          {/* <div className="item">3</div> */}
          {/* <div className="item">4</div> */}
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
