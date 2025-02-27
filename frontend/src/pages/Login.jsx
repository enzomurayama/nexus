import React from 'react';

const Login = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Imagem à esquerda */}
      <div 
        className="w-1/2 bg-cover bg-center md:block hidden"
        style={{ backgroundImage: "url('/login-bg.png')" }}
      />

      {/* Formulário à direita */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded">
          {/* Botão para voltar */}
          <a href="../index.html">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <rect 
                x="24" 
                y="24" 
                width="24" 
                height="24" 
                transform="rotate(180 24 24)" 
                fill="url(#pattern0_23_81)" 
              />
              <defs>
                <pattern 
                  id="pattern0_23_81" 
                  patternContentUnits="objectBoundingBox" 
                  width="1" 
                  height="1"
                >
                  <use 
                    xlinkHref="#image0_23_81" 
                    transform="scale(0.0104167)" 
                  />
                </pattern>
                <image 
                  id="image0_23_81" 
                  width="96" 
                  height="96" 
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO3cMW4CMRAF0KmtXGlOTZs0XIkDmIb0gLL5Zv2eND3+3ysWIU0VAAAAAAAAAG8ajyFgVNV3VV2r6ksDmfDnY5QQDH8qIR/+VEI+/KmEY12eCP93frwd/b2uqtsLJfhiPoASFtCehLxWQl4rIa+VkNdKyGsl5LUS8loJea2EvFZCXishTwkLUMIClLAAJSzgI0p49sPtMtf/LiF94Ll7CenDzt1LSB907l5C+pBz4VFAnTx8T0Blw1dAZcM/u/6EH2Jn1cLPEX6Q8IOEHyT8IOELf0/tVVP4W2o3X/hbajdf+FtqN1/4W2o3X/jburzwT5ZlHQcY1tXkDQub8oaVZXnD0r68YW1l3rCaDAAAAAAAAKh93QFg+C15LMEAdwAAAABJRU5ErkJggg==" 
                />
              </defs>
            </svg>
          </a>

          <h2 className="text-3xl font-bold text-[#1E1E1E] mt-6 mb-2">Entrar</h2>
          <p className="text-lg text-[#525560] mb-6">Bem-vindo! Selecione um método para entrar</p>

          <form>
            {/* Campo de Login */}
            <div className="mb-4">
              <label htmlFor="login" className="block text-gray-700 font-medium mb-2">
                Login
              </label>
              <input
                type="text"
                id="login"
                placeholder="Digite seu login"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Campo de Senha */}
            <div className="mb-6">
              <label htmlFor="senha" className="block text-gray-700 font-medium mb-2">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="text-right mb-6">
              <a 
                href="#esqueci-minha-senha" 
                className="text-[#1FA4E4] text-sm font-medium hover:underline"
              >
                Esqueci minha senha
              </a>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
            >
              Entrar
            </button>

            <div className="flex w-full items-center my-4">
              <div className="border-t-2 border-[#D4D4D4] w-full"></div>
              <p className="text-md text-[#D4D4D4] mx-3">ou</p>
              <div className="border-t-2 border-[#D4D4D4] w-full"></div>
            </div>
          </form>

          {/* Botão Entrar com o Google */}
          <button
            className="w-full rounded-lg border border-[#525560] text-[#525560] py-3 flex items-center justify-center rounded hover:bg-gray-100 transition duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30" 
              height="30" 
              viewBox="0 0 48 48"
            >
              <path 
                fill="#FFC107" 
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path 
                fill="#FF3D00" 
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path 
                fill="#4CAF50" 
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z fullest"
              />
              <path 
                fill="#1976D2" 
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span className="font-medium text-gray-700 ms-6">Entrar com o Google</span>
          </button>

          <div className="text-center mt-4">
            <span className="text-[#D4D4D4]">
              Não possui conta?
              <a 
                href="#esqueci-minha-senha" 
                className="text-[#1FA4E4] ms-1 text-sm font-medium hover:underline"
              >
                Criar agora
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;