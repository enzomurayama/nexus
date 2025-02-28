import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/token', {
        username: login,
        password: senha,
      }, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      localStorage.setItem('token', response.data.access_token);
      // Redirecionar ou atualizar estado após login bem-sucedido
      window.location.href = '/'; 
    } catch (err) {
      setError('Login ou senha incorretos');
    }
  };

  return (
    <div className="flex min-h-screen">
      <div 
        className="w-1/2 bg-cover bg-center md:block hidden"
        style={{ backgroundImage: "url('/login-bg.png')" }}
      />
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded">
          <h2 className="text-3xl font-bold text-[#1E1E1E] mt-6 mb-2">Entrar</h2>
          <p className="text-lg text-[#525560] mb-6">Bem-vindo! Selecione um método para entrar</p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="login" className="block text-gray-700 font-medium mb-2">Login</label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Digite seu login"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="senha" className="block text-gray-700 font-medium mb-2">Senha</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="text-right mb-6">
              <a href="#esqueci-minha-senha" className="text-[#1FA4E4] text-sm font-medium hover:underline">
                Esqueci minha senha
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
            >
              Entrar
            </button>
          </form>
          {/* Botão Google e outras partes permanecem iguais */}
        </div>
      </div>
    </div>
  );
};

export default Login;