import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Validation schema remains the same
const registerSchema = z.object({
  login: z.string().min(3, { message: "Login deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  confirmarSenha: z.string(),
  telefone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  endereco: z.string().min(5, { message: "Endereço deve ter pelo menos 5 caracteres" }),
  tipo_conta: z.enum(['usuario_comum', 'voluntario'])
}).refine(data => data.password === data.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"]
});

const Register = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
    confirmarSenha: '',
    telefone: '',
    endereco: '',
    tipo_conta: 'usuario_comum',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const showTab = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  const openModal = async () => {
    try {
      // Validate data before sending
      registerSchema.parse(formData);
      await axios.post('http://localhost:8000/register', {
        login: formData.login,
        email: formData.email,
        password: formData.password,
        telefone: formData.telefone,
        endereco: formData.endereco,
        tipo_conta: formData.tipo_conta,
      });
      
      // Show success toast
      toast.success('Cadastrado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => navigate("/login") // Redirect after toast closes
      });
      
      setError('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError('Erro ao cadastrar. Login ou email já existem.');
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <div 
        className="w-1/2 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/login-bg.png')" }}
      />
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gray-100">
        <div className="tab-nav flex items-center mb-6">
          {[1, 2, 3].map(tab => (
            <button
              key={tab}
              className={`w-4 h-4 ${currentTab === tab ? 'bg-blue-500' : 'bg-gray-400'} rounded-full mx-2 focus:outline-none`}
              onClick={() => showTab(tab)}
            />
          ))}
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Tab content remains the same */}
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
                value={formData.login}
                onChange={handleInputChange}
                placeholder="Insira seu login"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Insira seu email"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Senha</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Insira sua senha"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmarSenha" className="block text-gray-700 font-medium mb-2">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleInputChange}
                placeholder="Confirme sua senha"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-lg bg-blue-500 text-white py-3 hover:bg-blue-600 transition duration-300 cursor-pointer"
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
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="+55 11 972010692"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="endereco" className="block text-gray-700 font-medium mb-2">Endereço</label>
              <input
                type="text"
                id="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                placeholder="Insira seu endereço"
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-lg bg-blue-500 text-white py-3 hover:bg-blue-600 transition duration-300 cursor-pointer"
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
            <div className="mb-6">
              <label htmlFor="tipo_conta" className="block text-gray-700 font-medium mb-2">Tipo de Conta</label>
              <select
                id="tipo_conta"
                value={formData.tipo_conta}
                onChange={handleInputChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="usuario_comum">Usuário Comum</option>
                <option value="voluntario">Voluntário</option>
              </select>
            </div>
            <button
              type="button"
              className="w-full rounded-lg bg-blue-500 text-white py-3 hover:bg-blue-600 transition duration-300 cursor-pointer"
              onClick={openModal}
            >
              Concluir
            </button>
          </form>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
              <h3 className="text-xl font-bold text-black mb-4">Email de confirmação enviado</h3>
              <p className="text-[#525560] mb-6">
                Acabamos de enviar um email de confirmação para <span className="text-[#1FA4E4]">{formData.email}</span>
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
      {/* Add ToastContainer at the end */}
      <ToastContainer />
    </div>
  );
};

export default Register;