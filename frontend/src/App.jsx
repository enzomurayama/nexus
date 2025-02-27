import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Sobre from './pages/Sobre'
import MuralDePedidos from './pages/MuralDePedidos'
import CriarPedido from './pages/CriarPedido'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/mural" element={<MuralDePedidos />} />
                <Route path="/criar-pedido" element={<CriarPedido />} />
              </Routes>
            </main>
            <Footer />
         </div>
    </>
  )
}

export default App
