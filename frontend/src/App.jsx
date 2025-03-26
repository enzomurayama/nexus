import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import MuralDePedidos from './pages/MuralDePedidos'
import CriarPedido from './pages/CriarPedido'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mural" element={<MuralDePedidos />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/criar-pedido" element={<CriarPedido />} />
                  {/* Outras rotas protegidas aqui */}
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <Footer />
         </div>
    </>
  )
}

export default App
