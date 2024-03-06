import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div className="App">
        <Navbar />
          <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default App
