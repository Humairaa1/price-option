import './App.css'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'
import Navbar from './components/Navbar'
import PriceOptions from './components/PriceOptions'

function App() {


  return (
    <>

      <h1 className='text-4xl text-red-600 text-center font-bold mb-10'>Price Option</h1>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChart></BarChart>
    </>
  )
}

export default App
