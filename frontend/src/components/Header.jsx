import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionamento após logout

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Verifica se o usuário está logado
  const isLoggedIn = !!localStorage.getItem("token");

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token
    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 px-12 lg:px-20">
        <div className="flex items-center lg:w-auto w-1/2 flex-shrink-0 text-white mr-6">
          <img className="h-5" src="/Nexus.svg" alt="Nexus Logo" />
        </div>

        <div className="block lg:hidden">
          <button
            id="menu-button"
            onClick={toggleMenu}
            className="h-full flex items-center px-3 py-2 border rounded text-[#1FA4E4] border-[#1FA4E4] hover:text-teal-700 hover:border-teal-700"
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-10">
          <a href="/" className="text-[#1E1E1E] hover:text-[#1FA4E4]">
            Home
          </a>
          <a href="/sobre" className="text-[#1E1E1E] hover:text-[#1FA4E4]">
            Sobre
          </a>
          <a href="/mural" className="text-[#1E1E1E] hover:text-[#1FA4E4]">
            Mural de pedidos
          </a>
          <a href="#" className="text-[#1E1E1E] hover:text-[#1FA4E4]">
            Mapa
          </a>
        </div>

        <div className="flex space-x-4 my-auto lg:block hidden">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-white text-[#1FA4E4] font-bold py-2 px-10 rounded border border-[#1FA4E4] hover:bg-blue-50 cursor-pointer"
            >
              Sair
            </button>
          ) : (
            <div className="flex gap-3">
              <a href="/register" className="bg-white text-[#1FA4E4] font-bold py-2 px-7 rounded border border-[#1FA4E4] hover:bg-blue-50 cursor-pointer">Criar conta</a>
              <a href="/login" className="bg-[#1FA4E4] text-white font-bold py-2 px-7 rounded hover:bg-[#006BB1]cursor-pointer">Entrar</a>
            </div>
          )}
        </div>
      </nav>

      <div
        id="menu-modal"
        className={`fixed inset-0 flex justify-end bg-black/50 z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div
          id="modal-content"
          className={`bg-white w-64 h-full p-6 shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              id="close-menu"
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-5">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-white text-[#1FA4E4] font-bold py-2 rounded border border-[#1FA4E4] hover:bg-blue-50 cursor-pointer"
              >
                Sair
              </button>
            ) : (
              <div className="flex space-x-4 mb-6 my-auto">
                <a href="/register" className="bg-white text-[#1FA4E4] font-semibold py-2 px-3 rounded border border-[#1FA4E4] hover:bg-blue-50 cursor-pointer">Criar conta</a>
                <a href="/login" className="bg-[#1FA4E4] text-white font-semibold py-2 px-3 rounded hover:bg-[#006BB1] cursor-pointer">Entrar</a>
              </div>
            )}

            <a href="/" className="text-[#1E1E1E] hover:text-[#1FA4E4]">
              Home
            </a>
            <a href="/sobre" className="text-[#1E1E1E] hover:text-[#1FA4E4]">
              Sobre
            </a>
            <a href="/mural" className="text-[#1E1E1E] hover:text-[#1FA4E4]">
              Mural de pedidos
            </a>
            <a href="#mapa" className="text-[#1E1E1E] hover:text-[#1FA4E4]">
              Mapa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
