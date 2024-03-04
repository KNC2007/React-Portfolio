import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
// import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
// The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      
<Navbar/>
<main className="mx-3">
  <Outlet/>
</main>

{/* <Footer/> */}



    </>
  )
}

export default App
