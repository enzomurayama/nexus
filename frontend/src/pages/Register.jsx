import React, { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import "react-toastify/dist/ReactToastify.css";

const registerSchema = z
  .object({
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    confirmPassword: z.string(),
    telefone: z
      .string()
      .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
    endereco: z
      .string()
      .min(5, { message: "Endereço deve ter pelo menos 5 caracteres" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export default function Register() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    telefone: "",
    endereco: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const openModal = async () => {
    try {
      // Validate data before sending
      registerSchema.parse(formData);
      await axios.post("http://localhost:8000/register", {
        email: formData.email,
        password: formData.password,
        telefone: formData.telefone,
        endereco: formData.endereco,
      });

      // Show success toast
      toast.success("Cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => navigate("/login"), // Redirect after toast closes
      });

      setError("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("Erro ao cadastrar. Login ou email já existem.");
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center sm:bg-[url('/register-bg.png')] bg-cover bg-center xl:pr-40 xl:justify-end">
      <div className="w-full px-2 py-8 flex flex-col items-center justify-center bg-white rounded-xl sm:w-[510px]">

        {/* Tab 1 */}
        <div className={`tab-content w-full max-w-md p-8 pb-6 ${currentTab !== 1 && "hidden"}`}>
          <h2 className="text-3xl font-bold mb-2">
            Nova conta
          </h2>

          <p className="text-md text-textc mb-6">
            Faça parte dessa comunidade
          </p>

          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@gmail.com"
                className="w-full p-3 text-textc border border-[#dcdcdc] rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Senha</label>

              <div className="w-full flex justify-between items-center pr-4 gap-2 border border-[#dcdcdc] rounded">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Insira sua senha"
                  className="grow max-w-[90%] p-3 text-textc focus:outline-none"
                />

                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FiEye className="text-neutral-400 transition duration-300 ease-in-out" size={16} />
                  ) : (
                    <FiEyeOff className="text-neutral-400 transition duration-300 ease-in-out" size={16} />
                  )}
                </button>
              </div>
            </div>

            <div className="mb-10">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirmar Senha</label>

              <div className="w-full flex justify-between items-center pr-4 gap-2 border border-[#dcdcdc] rounded">
                <input
                  type={showCPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirme sua senha"
                  className="grow max-w-[90%] p-3 text-textc focus:outline-none"
                />

                <button type="button" onClick={() => setShowCPassword(!showCPassword)}>
                  {showCPassword ? (
                    <FiEye className="text-neutral-400 transition duration-300 ease-in-out" size={16} />
                  ) : (
                    <FiEyeOff className="text-neutral-400 transition duration-300 ease-in-out" size={16} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-primary text-white font-bold py-3.5 transition duration-300 hover:bg-[#006BB1]"
              onClick={() => setCurrentTab(2)}
            >
              Próximo
            </button>
          </form>
        </div>

        {/* Tab 2 */}
        <div className={`tab-content w-full max-w-md p-8 pb-6 ${currentTab !== 2 && "hidden"}`}>
          <h2 className="text-3xl font-bold mb-2">
            Mais informações
          </h2>

          <p className="text-md text-textc mb-6">
            Importante para contato e localização
          </p>

          <form>
            <div className="mb-6">
              <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">
                Telefone
              </label>

              <input
                type="text"
                id="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="+55 (xx) xxxxx-xxxx"
                className="w-full p-3 text-textc border border-[#dcdcdc] rounded focus:outline-none"
              />
            </div>

            <div className="mb-10">
              <label htmlFor="endereco" className="block text-gray-700 font-medium mb-2">
                Endereço
              </label>

              <input
                type="text"
                id="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                placeholder="Insira seu endereço"
                className="w-full p-3 text-textc border border-[#dcdcdc] rounded focus:outline-none"
              />
            </div>
            
            <div className="flex gap-4">
              <button
                type="button"
                className="w-[25%] rounded-lg bg-white text-primary border font-bold py-3.5 transition duration-300"
                onClick={() => setCurrentTab(1)}
              >
                Voltar
              </button>

              <button
                type="submit"
                className="grow rounded-lg bg-primary text-white font-bold py-3.5 transition duration-300 hover:bg-[#006BB1]"
                onClick={openModal}
              >
                Concluir
              </button>
            </div>
          </form>
        </div>

        <div className="flex text-center mb-6 justify-center gap-1">
          <p className="text-textc text-sm">
            Já possui uma conta?
          </p>

          <a href="/login" className="text-textc text-sm underline">
            Entrar agora
          </a>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
              <h3 className="text-xl font-bold text-black mb-4">
                Email de confirmação enviado
              </h3>

              <p className="text-[#525560] mb-6">
                Acabamos de enviar um email de confirmação para{" "}
                <span className="text-[#1FA4E4]">{formData.email}</span>
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

                <button className="px-4 py-2 text-white rounded hover:bg-blue-600 transition duration-300 bg-[#1FA4E4]">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
