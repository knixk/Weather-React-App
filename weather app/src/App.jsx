import { useState, useEffect } from 'react'

const url = "https://api.open-meteo.com/v1/forecast?latitude=22.7179&longitude=75.8333&hourly=temperature_2m"


function App() {

  const [data, setData] = useState("Indore")

  useEffect(() => {

    const fetchAPI = async () => {

      // fetch(url).then(res => res.json()).then(data => console.log(data));

      const req = await fetch(url);
      const data = await req.json();
      console.log(data)

    }

    fetchAPI()

  }, [])

  return (
    <>
      <nav>
        <div className="logo"><span>Sunny</span></div>
      </nav>

      <main>
        <div className="search">
          <input value={data} type="Search" placeholder="Type area.."/>
            <button>Search</button>
        </div>

        <div className="grid">
          <div className="item">1</div>
          {/* <div className="item">2</div> */}
          {/* <div className="item">3</div> */}
          {/* <div className="item">4</div> */}
        </div>
      </main>
{/* 
      <footer>

        <p>Weather</p>

        <span>Copyright 2023</span>

      </footer> */}
    </>
  )
}

export default App
