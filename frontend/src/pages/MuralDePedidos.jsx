import React, { useEffect } from 'react';
import PedidoCard from '../components/PedidoCard';
import Filtros from '../components/Filtros';
import axios from 'axios';
import { useState } from 'react';


const MuralDePedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/pedidos");
        setPedidos(res.data); // Definindo apenas os dados da resposta
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold px-20 my-10">Pedidos abertos</h2>
      <Filtros />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 2xl:gap-16 mt-16 px-20 mb-16">
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
    </div>
  );
};

export default MuralDePedidos;