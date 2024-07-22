import { useState } from "react"

function App() {
  const [color, setColor] = useState("red")

  return(
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center" style={{backgroundColor:color}}>
          <div className="w-9/12 h-15 py-4 px-2 flex shrink-0 flex-wrap gap-5  items-center justify-evenly bottom-8 rounded-full fixed bg-white text-white">
              <button className="px-4 py-2 rounded-full" style={{backgroundColor:"Red"}} onClick={()=>setColor("Red")}>Red</button>
              <button className="px-4 py-2  rounded-full" style={{backgroundColor:"Green"}} onClick={()=>setColor("Green")}>Green</button>
              <button className="px-4 py-2 rounded-full" style={{backgroundColor:"Blue"}} onClick={()=>setColor("Blue")}>Blue</button>
              <button className="px-4 py-2 rounded-full text-black" style={{backgroundColor:"Yellow"}} onClick={()=>setColor("Yellow")}>Yellow</button>
              <button className="px-4 py-2 rounded-full text-black"  style={{backgroundColor:"Orange"}} onClick={()=>setColor("Orange")}>Orange</button>
              <button className="px-4 py-2 rounded-full text-black" style={{backgroundColor:"Pink"}} onClick={()=>setColor("Pink")}>Pink</button>
              <button className="px-4 py-2 rounded-full" style={{backgroundColor:"chocolate"}} onClick={()=>setColor("chocolate")}>chocolate</button>
              <button className="px-4 py-2  rounded-full" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
          </div>
      </div>
    </>
  )
}

export default App
