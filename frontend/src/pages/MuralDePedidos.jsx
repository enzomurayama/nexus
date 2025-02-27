import React from 'react';
import PedidoCard from '../components/PedidoCard';
import Filtros from '../components/Filtros';

const MuralDePedidos = () => {
  const pedidos = [
    {
      imagem: '/mural-1.png',
      titulo: 'Estamos sem água',
      local: 'Karachi, Sindh, Pakistan',
      pessoas: 27,
      icone: '/sobre-water-icon.png',
    },
    {
      imagem: '/mural-2.png',
      titulo: 'Sem abrigo',
      local: '1450 1ST AVE NEW YORK NY',
      pessoas: 9,
      icone: '/mural-house-icon.png',
    },
    {
      imagem: '/mural-3.png',
      titulo: 'Falta de alimentos',
      local: 'Rua Salomão, 316 - São Paulo, SP - Brasil',
      pessoas: 12,
      icone: '/mural-fork-icon.png',
    },
    // Adicione mais pedidos conforme necessário
  ];

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