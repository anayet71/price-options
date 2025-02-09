import DaisyNav from "./Components/DaisyNav/DaisyNav"
import Navbar from "./Components/Navbar/Navbar"
import PriceOptions from "./Components/PriceOptions/PriceOptions"

function App() {


  return (
    <>
    <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
     <h1 className="text-7xl bg-red-600">Price option</h1>
     <PriceOptions></PriceOptions>
    </>
  )
}

export default App
