import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../api';
import PedidoCard from '../components/PedidoCard';
import Filter from '../components/Filter';
import Header from "../components/Header";
import Footer from "../components/Footer";


const Mural = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const res = await api.get("/pedidos");
        setPedidos(res.data); // Definindo apenas os dados da resposta
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <h2 className="text-3xl sm:text-4xl font-bold mt-16 mb-8 px-10 lg:px-20">Pedidos abertos</h2>
      <Filter />
      <div className="flex-grow grid grid-cols-1 mt-16 mb-16 gap-8 px-10 lg:px-20 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-16">
        {pedidos.map((pedido, index) => (
          <PedidoCard
            key={index}
            imagem={pedido.imagem}
            titulo={pedido.titulo}
            local={pedido.local}
            pessoas={pedido.pessoas}
            icone={pedido.icone}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Mural;