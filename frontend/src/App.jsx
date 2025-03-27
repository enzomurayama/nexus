import { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Mural from "./pages/Mural";
import CriarPedido from "./pages/CriarPedido";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mural" element={<Mural />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/criar-pedido" element={<CriarPedido />} />
              {/* Outras rotas protegidas aqui */}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
