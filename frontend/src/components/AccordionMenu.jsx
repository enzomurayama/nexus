import React, { useState } from "react";

export default function AccordionMenu() {
  const [openIndex, setOpenIndex] = useState(null);

  const Questions = [
    {
      title: "A plataforma é segura?",
      content: `Sim. A segurança dos dados e a privacidade dos usuários são prioridades para o Nexus.
                Utilizamos protocolos de criptografia e medidas de segurança atualizadas para proteger
                todas as informações compartilhadas na plataforma.`
    },
    {
      title: "Existe algum custo para usar o Nexus?",
      content: `Não. O Nexus é totalmente gratuito, tanto para quem solicita ajuda quanto para os voluntários que desejam contribuir.`
    },
    {
      title: "Quais tipos de desastres naturais são atendidos pelo Nexus?",
      content: `O Nexus atende a diversos tipos de desastres naturais, como enchentes, terremotos, incêndios, deslizamentos e
                outros eventos emergenciais. A ideia é oferecer suporte a qualquer situação de risco que afete comunidades e indivíduos.`
    },
    {
      title: "Como posso verificar a autenticidade dos pedidos de ajuda?",
      content: `A plataforma conta com um sistema de verificação que analisa os pedidos e, além disso, 
                permite que outros usuários avaliem a veracidade e a qualidade das informações. Dessa forma, 
                buscamos manter a confiabilidade e a segurança na comunicação entre os usuários.`
    }
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {Questions.map((item, index) => (
        <div 
          key={index} 
          onClick={() => toggleItem(index)}
          className={`flex flex-col py-2 mb-4 border border-[#dcdcdc] rounded-lg transition duration-200 ${openIndex !== index ? "hover:bg-primary hover:text-white" : "text-primary bg-secondary border-primary"}`}>
          <button
            className="w-full flex items-center justify-center px-6 py-4 focus:outline-none sm:justify-between"
          >
            <p className="text-md font-medium">{item.title}</p>
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""} hidden sm:block`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`transition-all duration-300 ${
              openIndex === index ? "max-h-64 block" : "max-h-0 hidden"
            }`}
          >
            <div className="px-6 pb-4 text-[#333] text-center sm:text-start">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}