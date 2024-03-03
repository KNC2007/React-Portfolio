import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Main from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<Navbar/>
<Main/>



    </>
  )
}

export default App
