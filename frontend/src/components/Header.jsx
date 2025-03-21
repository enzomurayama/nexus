import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <nav className="sticky top-0 left-0 w-full h-20 z-50 flex flex-wrap items-center justify-between bg-white shadow-sm px-10 lg:px-20">
        <div className="flex items-center lg:w-auto w-1/2 flex-shrink-0 text-white">
          <img className="h-5" src="/Nexus.svg" alt="Nexus Logo"/>
        </div>

        <div className="flex flex-row items-center space-x-6 lg:hidden">
          <button
            id="menu-button"
            onClick={toggleMenu}
            className="h-full flex items-center text-primary"
          >
            <svg
              className={`fill-current h-6 w-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {isMenuOpen ? (
                // Ícone de X
                <path d="M4.3 4.3L15.7 15.7M15.7 4.3L4.3 15.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                // Ícone de hambúrguer
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              )}
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-12">
          <a href="/" className="font-inter font-medium text-[#333] hover:text-primary">Início</a>
          <a href="/sobre" className="font-inter font-medium text-[#333] hover:text-primary">Sobre</a>
          <a href="/mural" className="font-inter font-medium text-[#333] hover:text-primary">Mural de pedidos</a>
          <a href="#" className="font-inter font-medium text-[#333] hover:text-primary">Mapa</a>
        </div>

        <div className="flex space-x-4 my-auto lg:block hidden">
          {isLoggedIn ? (
            <a onClick={handleLogout} href="/login" className="bg-primary text-white font-bold py-2 px-7 rounded hover:bg-[#006BB1]cursor-pointer">Sair</a>
          ) : (
            <div className="flex gap-3">
              <a href="/register" className="bg-white text-primary font-bold py-2 px-7 rounded border border-primary hover:bg-blue-50 cursor-pointer">Criar conta</a>
              <a href="/login" className="bg-primary text-white font-bold py-2 px-7 rounded hover:bg-[#006BB1]cursor-pointer">Entrar</a>
            </div>
          )}
        </div>
      </nav>

      <div
        id="menu-modal"
        onClick={toggleMenu}
        className={`fixed inset-0 mt-20 flex justify-end bg-black/30 z-50 lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div
          id="modal-content"
          onClick={(e) => e.stopPropagation()}
          className={`bg-white w-full h-62 px-10 pb-8 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col space-y-6">
            <a href="/" className="font-inter font-medium text-[#333] hover:text-primary">Início</a>
            <a href="/sobre" className="font-inter font-medium text-[#333] hover:text-primary">Sobre</a>
            <a href="/mural" className="font-inter font-medium text-[#333] hover:text-primary">Mural de pedidos</a>
            <a href="#mapa" className="font-inter font-medium text-[#333] hover:text-primary">Mapa</a>
            {isLoggedIn ? (
              <a onClick={handleLogout} href="/login" className="font-inter text-primary font-medium hover:text-[#0371a6]">Sair</a>
            ) : (
              <a href="/login" className="font-inter text-[#333] font-bold hover:text-primary">Entrar</a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
