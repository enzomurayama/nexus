import React, { useState } from 'react';
import axios from 'axios'; // Para fazer requisições HTTP
import api from '../api';

const CriarPedido = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    id: '',
    titulo: '',
    local: '',
    pessoas: '',
    imagem: '',
    icone: '',
  });

  // Função para atualizar o estado quando os campos do formulário mudam
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar os dados do formulário para a API
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    const token = localStorage.getItem('token'); //pega o token de autenticação

    try {

      // Faz a requisição POST para a API
      const response = await api.post('/pedidos', formData, {});
      console.log('Pedido criado com sucesso:', response.data);

      // Limpa o formulário após o envio
      setFormData({
        id: '',
        titulo: '',
        local: '',
        pessoas: '',
        imagem: '',
        icone: '',
      });

      alert('Pedido criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      alert('Erro ao criar pedido. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Criar Novo Pedido</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">ID</label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Local</label>
          <input
            type="text"
            name="local"
            value={formData.local}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Número de Pessoas</label>
          <input
            type="number"
            name="pessoas"
            value={formData.pessoas}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">URL da Imagem</label>
          <input
            type="url"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">URL do Ícone</label>
          <input
            type="url"
            name="icone"
            value={formData.icone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Criar Pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default CriarPedido;