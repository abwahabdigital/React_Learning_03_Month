import './App.css'
import OutlinedCard from './card.jsx'

function App() {

  return (
    <>
    <div className="flex">
      <div className='w-64  h-full bg-purple-600 m-5 text-[#fff] p-10'>
        <ul>
          <li className='px-4 py-8 text-left'>People</li>
          <li className='px-4 py-8 text-left'>Payroll</li>
          <li className='px-4 py-8 text-left'>Attendance</li>
          <li className='px-4 py-8 text-left'>Request</li>
          <li className='px-4 py-8 text-left'>Assesment</li>
        </ul>
      </div>
      <div className='w-full h-full bg-purple-600 m-5 text-[#fff] p-10'>
        <OutlinedCard/>
      </div>
    </div>
    </>
  )
}

export default App
