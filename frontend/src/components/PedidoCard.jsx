import React from 'react';

const PedidoCard = ({ imagem, titulo, local, pessoas, icone }) => {
  return (
    <div
      style={{
        height: '400px',
        backgroundImage: `url(${imagem})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="bg-[#F3FBFF] rounded-lg flex flex-col justify-end"
    >
      <div className="flex gap-3 px-8 items-stretch">
        <div className="bg-white rounded-lg shadow-md p-4 w-3/4 z-10 mb-12">
          <h3 className="text-lg font-semibold truncate">{titulo}</h3>
          <p className="text-sm text-gray-600 truncate">{local}</p>
          <p className="text-sm text-gray-600">{pessoas} pessoas</p>
        </div>
        <div className="rounded-lg flex mb-12 z-10">
          <img src={icone} alt="Ícone" />
        </div>
      </div>
    </div>
  );
};

export default PedidoCard;