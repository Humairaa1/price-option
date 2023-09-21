import './App.css'
import Navbar from './components/Navbar'
import PriceOptions from './components/PriceOptions'

function App() {


  return (
    <>

      <h1 className='text-4xl text-red-600 text-center font-bold mb-10'>Price Option</h1>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>

    </>
  )
}

export default App
