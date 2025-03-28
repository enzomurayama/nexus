import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/token', {
        username: login,
        password: password,
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
    <div className="min-h-screen flex items-center justify-center sm:bg-[url('/login-bg.png')] bg-cover bg-center xl:pr-40 xl:justify-end ">
      <div className="w-full h-[570px] px-2 flex items-center justify-center bg-white rounded-xl sm:w-[510px]">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-2">
            Entrar
          </h2>

          <p className="text-md text-textc mb-6">Bem-vindo de volta!</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="login" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="email@gmail.com"
                className="w-full p-3 text-textc border border-[#dcdcdc] rounded focus:outline-none"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="senha" className="block text-gray-700 font-medium mb-2">Senha</label>

              <div className="w-full flex justify-between items-center pr-4 gap-2 border border-[#dcdcdc] rounded">
                <input
                  type={showPassword ? "text" : "password"}
                  id="senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Insira sua senha"
                  className="grow max-w-[90%] p-3 text-textc focus:outline-none"
                />

                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FiEye className="text-neutral-400 transition duration-300 ease-in-out" size={16} />
                  ) : (
                    <FiEyeOff className="text-neutral-400 transition duration-300 ease-in-out" size={16} />
                  )}
                </button>
              </div>
            </div>

            <div className="text-right mb-6">
              <a href="#esqueci-minha-senha" className="text-primary text-sm font-medium hover:underline">
                Esqueci minha senha
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary text-white font-bold py-3.5 transition duration-300 hover:bg-[#006BB1]"
            >
              Entrar
            </button>

            <div className="flex text-center mt-6 justify-center gap-1">
              <p className="text-textc text-sm">
                Não possui uma conta?
              </p>

              <a href="/register" className="text-textc text-sm underline">
                Criar agora
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};