import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Sobre from './pages/Sobre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
          <Header />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </main>
         <Footer />
    </>
  )
}

export default App
