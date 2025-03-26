import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping, faHeart, faPeopleCarry, faLightbulb } from "@fortawesome/free-solid-svg-icons"

export default function About() {
  return (
    <div>
      <section className="flex flex-col items-center mt-16">
        <div className="flex flex-col items-center px-10 md:w-[80%] lg:px-20 xl:w-[60%]">
          <h3 className="text-md tracking-wider text-primary mb-6">
            SOBRE NÓS
          </h3>

          <h2 className="text-4xl leading-[1.3] text-center font-bold mb-8">
            Como surgiu o Nexus?
          </h2>

          <p className="text-lg/[1.8] text-justify text-textc mb-4">
            A história do Nexus começou com um grupo de amigos que se uniu para ajudar as vítimas de um terremoto
            devastador. Eles perceberam que a falta de comunicação e coordenação dificultava o acesso da ajuda às
            pessoas que mais precisavam. A partir dessa experiência, decidiram criar uma plataforma que permitisse
            que voluntários e organizações se conectassem diretamente com as comunidades afetadas.
          </p>

          <img
            src="/about.png"
            alt="Voluntário entregando água"
            className="w-full h-100 mt-8 mb-12 object-cover rounded-lg lg:h-120"
          />

          <p className="text-lg/[1.8] text-justify text-textc mb-4">
            O Nexus rapidamente se tornou um ponto de encontro para
            pessoas de todo o mundo que queriam fazer a diferença. Voluntários de diferentes origens e habilidades
            se inscreveram para oferecer sua ajuda, enquanto comunidades afetadas por desastres encontraram apoio e
            recursos para se reconstruir.
          </p>

          <p className="text-lg/[1.8] text-justify text-textc mb-4">
            A plataforma cresceu rapidamente, expandindo sua atuação
            para outros tipos de desastres e abrangendo uma área geográfica cada vez maior. Hoje, o Nexus é uma
            comunidade global de mais de 1000 voluntários e 27 organizações parceiras, que juntos têm ajudado a
            reconstruir comunidades em mais de 10 países.
          </p>

          <p className="font-medium text-lg/[1.8] text-justify text-white mt-8 p-8 bg-primary rounded-lg">
            A história do Nexus é uma história de esperança,
            solidariedade e impacto. É a história de pessoas comuns que se uniram para fazer a diferença, mostrando
            que mesmo diante da adversidade, é possível construir um mundo melhor.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center mt-24">
        <div className="flex flex-col items-center px-10 md:w-[80%] lg:px-20 xl:w-[60%]">
          <h3 className="text-md tracking-wider text-primary mb-6">
            NOSSOS VALORES
          </h3>

          <h2 className="text-4xl leading-[1.3] text-center font-bold mb-12">
            Uma grande equipe com um objetivo muito maior
          </h2>

          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
            <div className="flex flex-col w-[80%] my-4 md:w-1/2 items-center">
                <FontAwesomeIcon icon={faHandsHelping} className="text-[#1FA4E4] text-3xl mb-6 p-4 bg-secondary rounded-md"/>

                <h3 className="text-lg text-center text-black font-semibold mb-2">
                  Solidariedade
                </h3>

                <p className="text-md leading-[1.8] text-textc text-center">
                  No Nexus, acreditamos que a solidariedade é a base de uma sociedade mais justa e igualitária
                </p>
            </div>

            <div className="flex flex-col w-[80%] my-4 md:w-1/2 items-center">
                <FontAwesomeIcon icon={faHeart} className="text-[#1FA4E4] text-3xl mb-6 p-4 bg-secondary rounded-md"/>

                <h3 className="text-lg text-center text-black font-semibold mb-2">
                  Empatia
                </h3>

                <p className="text-md leading-[1.8] text-textc text-center">
                  A empatia é a chave para entender as necessidades das pessoas afetadas por desastres
                </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-12 mt-12 md:flex-row md:items-start">
            <div className="flex flex-col w-[80%] my-4 md:w-1/2 items-center">
                <FontAwesomeIcon icon={faPeopleCarry} className="text-[#1FA4E4] text-3xl mb-6 p-4 bg-secondary rounded-md"/>

                <h3 className="text-lg text-center text-black font-semibold mb-2">
                  Cooperação
                </h3>

                <p className="text-md leading-[1.8] text-textc text-center">
                  A cooperação é fundamental para alcançarmos resultados significativos
                </p>
            </div>

            <div className="flex flex-col w-[80%] my-4 md:w-1/2 items-center">
                <FontAwesomeIcon icon={faLightbulb} className="text-[#1FA4E4] text-3xl mb-6 p-4 bg-secondary rounded-md"/>
                
                <h3 className="text-lg text-center text-black font-semibold mb-2">
                  Inovação
                </h3>

                <p className="text-md leading-[1.8] text-textc text-center">
                  Buscamos por novas tecnologias para atender às necessidades das comunidades afetadas
                </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-24 mb-32">
        <div className="flex flex-col items-center px-10 md:w-[80%] lg:px-20 xl:w-[60%]">
          <h3 className="text-md tracking-wider text-primary mb-6">
            PERGUNTAS FREQUENTES
          </h3>

          <h2 className="text-4xl leading-[1.3] text-center font-bold mb-12">
            Alguma dúvida até aqui?
          </h2>

          <div className="">

          </div>
        </div>
      </section>
    </div>
  );
}