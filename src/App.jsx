
import BarChart from "./Components/LineChart/BarChart/BarChart"
import LineChart from "./Components/LineChart/LineChart"
import Navbar from "./Components/Navbar/Navbar"
import PriceOptions from "./Components/PriceOptions/PriceOptions"

function App() {


  return (
    <>
    <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
     <h1 className="text-7xl bg-red-600">Price option</h1>
     <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <BarChart></BarChart>
    </>
  )
}

export default App
