import React, { useState } from 'react';

const Register = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showTab = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Imagem à esquerda */}
      <div 
        className="w-1/2 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/login-bg.png')" }}
      />

      {/* Formulário com abas */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gray-100">
        {/* Controle de abas (bolinhas) */}
        <div className="tab-nav flex items-center mb-6">
          <button 
            className={`w-4 h-4 ${currentTab === 1 ? 'bg-blue-500' : 'bg-gray-400'} rounded-full mx-2 focus:outline-none`}
            onClick={() => showTab(1)}
          />
          <button 
            className={`w-4 h-4 ${currentTab === 2 ? 'bg-blue-500' : 'bg-gray-400'} rounded-full mx-2 focus:outline-none`}
            onClick={() => showTab(2)}
          />
          <button 
            className={`w-4 h-4 ${currentTab === 3 ? 'bg-blue-500' : 'bg-gray-400'} rounded-full mx-2 focus:outline-none`}
            onClick={() => showTab(3)}
          />
        </div>

        {/* Tab 1 */}
        <div className={`tab-content w-full max-w-md p-8 bg-white shadow-lg rounded ${currentTab !== 1 && 'hidden'}`}>
          <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">Crie uma nova conta</h2>
          <p className="text-lg text-[#525560] mb-6">Faça parte dessa comunidade</p>
          <form>
            <div className="mb-4">
              <label htmlFor="login" className="block text-gray-700 font-medium mb-2">Login</label>
              <input 
                type="text" 
                id="login" 
                placeholder="Insira seu login"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Insira seu email"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="senha" className="block text-gray-700 font-medium mb-2">Senha</label>
              <input 
                type="password" 
                id="senha" 
                placeholder="Insira sua senha"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmar-senha" className="block text-gray-700 font-medium mb-2">Senha</label>
              <input 
                type="password" 
                id="confirmar-senha" 
                placeholder="Confirme sua senha"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <button 
              type="button"
              className="w-full rounded-lg bg-blue-500 text-white py-3 hover:bg-blue-600 transition duration-300"
              onClick={() => showTab(2)}
            >
              Próximo
            </button>
          </form>
        </div>

        {/* Tab 2 */}
        <div className={`tab-content w-full max-w-md p-8 bg-white shadow-lg rounded ${currentTab !== 2 && 'hidden'}`}>
          <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">Mais informações</h2>
          <p className="text-lg text-[#525560] mb-6">Essas informações são importantes para contato e localização</p>
          <form>
            <div className="mb-4">
              <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">Telefone</label>
              <input 
                type="text" 
                id="telefone" 
                placeholder="+55 11 972010692"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="endereço" className="block text-gray-700 font-medium mb-2">Endereço</label>
              <input 
                type="text" 
                id="endereço" 
                placeholder="Insira seu endereço"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <button 
              type="button"
              className="w-full rounded-lg bg-blue-500 text-white py-3 hover:bg-blue-600 transition duration-300"
              onClick={() => showTab(3)}
            >
              Próximo
            </button>
          </form>
        </div>

        {/* Tab 3 */}
        <div className={`tab-content w-full max-w-md p-8 bg-white shadow-lg rounded ${currentTab !== 3 && 'hidden'}`}>
          <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">Tipo de conta</h2>
          <p className="text-lg text-[#525560] mb-6">Aqui você pode escolher entre uma conta de usuário comum ou voluntário</p>
          <form>
            <a className="text-[#1FA4E4]">Usuário comum</a>
            <div className="mb-6 mt-4">
              <input 
                type="text" 
                id="voluntario" 
                placeholder="Voluntário"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <button 
              type="button"
              className="w-full rounded-lg bg-blue-500 text-white py-3 hover:bg-blue-600 transition duration-300"
              onClick={openModal}
            >
              Concluir
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
            <h3 className="text-xl font-bold text-black mb-4">Email de confirmação enviado</h3>
            <p className="text-[#525560] mb-6">
              Acabamos de enviar um email de confirmação para <span className="text-[#1FA4E4]">user@gmail.com</span>
            </p>
            <input 
              type="text" 
              placeholder="Código de confirmação"
              className="w-full p-3 mb-4 border border-[#D4D4D4] rounded focus:outline-none focus:ring focus:ring-blue-300" 
            />
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-white border border-[#1FA4E4] text-[#1FA4E4] rounded hover:bg-blue-50 transition duration-300 mr-2"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 text-white rounded hover:bg-blue-600 transition duration-300 bg-[#1FA4E4]"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;