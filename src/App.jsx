
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

const coffes = useLoaderData();
  return (
    <div className='m-20'>
      <h1 className='text-6xl my-20 text-center text-purple-600'>Hot Hot Cold Coffee: {coffes.length}</h1>
  <div className='grid md:grid-cols-2 gap-4'>
  {
      coffes.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
      ></CoffeeCard>)
    }
  </div>
    </div>
  )
}

export default App
