import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Sobre() {
  return (
    <>
      <section 
        id="sobre-nos" 
        className="flex flex-col items-center justify-between mt-12 mb-24"
      >
        <div className="flex flex-col items-center px-20">
          <h3 className="text-md w-auto whitespace-nowrap text-[#1FA4E4]">
            SOBRE NÓS
          </h3>

          <h2 className="md:text-5xl text-center text-4xl font-bold my-6">
            Juntos somos mais fortes
          </h2>

          <p 
            className="text-lg text-justify mt-2 text-[#525560] md:text-center lg:w-[60%]"
            style={{ lineHeight: 1.8 }}
          >
            Começamos como uma pequena iniciativa, mas com o tempo, vimos nossa comunidade crescer e nossa missão se
            fortalecer. Hoje, o Nexus é um movimento que mobiliza milhares de pessoas em todo o mundo.
          </p>
        </div>
      </section>

      <section 
        className="relative w-full bg-cover bg-center mb-28 h-[640px]"
        style={{ backgroundImage: "url('/sobre-img.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-between w-full h-full px-16 lg:text-start text-center text-white">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            className="mySwiper w-full h-full items-start"
          >
            <SwiperSlide>
              <div 
                className="backdrop-blur-lg backdrop-brightness-150 flex flex-col justify-center items-center bg-[#C3C3C3]/20 py-6 px-12 rounded-lg border-2 border-[#1FA4E4] h-[400px]"
              >
                <h4 className="text-7xl xl:text-8xl font-bold text-white mb-4">230</h4>
                <p className="text-white text-center text-xl xl:text-2xl">
                  Pessoas já foram impactadas por nossa ajuda
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div 
                className="backdrop-blur-md backdrop-brightness-150 flex flex-col justify-center items-center bg-[#C3C3C3]/20 py-6 lg:px-12 px-4 rounded-lg border-2 border-[#1FA4E4] h-[400px]"
              >
                <h4 className="text-7xl xl:text-8xl font-bold text-white mb-4">58</h4>
                <p className="text-white text-center text-xl xl:text-2xl">
                  Doações recebidas e contribuiram com a causa
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div 
                className="backdrop-blur-md backdrop-brightness-150 flex flex-col justify-center items-center bg-[#C3C3C3]/20 py-6 lg:px-12 px-4 rounded-lg border-2 border-[#1FA4E4] h-[400px]"
              >
                <h4 className="text-7xl xl:text-8xl font-bold text-white mb-4">1379</h4>
                <p className="text-white text-center text-xl xl:text-2xl">
                  Voluntários já fazem parte da nossa equipe
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section 
        id="nossa-historia" 
        className="flex flex-col items-center justify-between mt-20"
      >
        <div className="flex flex-col items-center lg:w-[65%] xl:w-[50%] px-20">
          <h3 className="text-md w-auto whitespace-nowrap text-[#1FA4E4]">
            NOSSA HISTÓRIA
          </h3>

          <h2 className="text-5xl font-bold mt-5 mb-10">
            Nosso começo
          </h2>

          <p 
            className="text-lg text-justify mb-4 text-[#525560]"
            style={{ lineHeight: 1.8 }}
          >
            A história do Nexus começou com um grupo de amigos que se uniu para ajudar as vítimas de um terremoto
            devastador. Eles perceberam que a falta de comunicação e coordenação dificultava o acesso da ajuda às
            pessoas que mais precisavam. A partir dessa experiência, decidiram criar uma plataforma que permitisse
            que voluntários e organizações se conectassem diretamente com as comunidades afetadas.
          </p>

          {/* Rest of the paragraphs with similar styling */}
          <p 
            className="text-lg text-justify mb-4 text-[#525560]"
            style={{ lineHeight: 1.8 }}
          >
            O Nexus rapidamente se tornou um ponto de encontro para
            pessoas de todo o mundo que queriam fazer a diferença. Voluntários de diferentes origens e habilidades
            se inscreveram para oferecer sua ajuda, enquanto comunidades afetadas por desastres encontraram apoio e
            recursos para se reconstruir.
          </p>

          <p 
            className="text-lg text-justify mb-4 text-[#525560]"
            style={{ lineHeight: 1.8 }}
          >
            A plataforma cresceu rapidamente, expandindo sua atuação
            para outros tipos de desastres e abrangendo uma área geográfica cada vez maior. Hoje, o Nexus é uma
            comunidade global de mais de 1000 voluntários e 27 organizações parceiras, que juntos têm ajudado a
            reconstruir comunidades em mais de 10 países.
          </p>

          <p 
            className="text-lg text-justify mb-4 text-[#525560]"
            style={{ lineHeight: 1.8 }}
          >
            A história do Nexus é uma história de esperança,
            solidariedade e impacto. É a história de pessoas comuns que se uniram para fazer a diferença, mostrando
            que mesmo diante da adversidade, é possível construir um mundo melhor.
          </p>
        </div>
      </section>

      <section 
        id="valores" 
        className="flex flex-col items-center justify-between mt-20 mb-28"
      >
        <div className="flex flex-col items-center w-[80%] 2xl:w-1/2 px-4">
          <h3 className="text-md w-auto whitespace-nowrap text-[#1FA4E4]">
            VALORES
          </h3>

          <h2 className="md:text-5xl text-4xl text-center font-bold my-6 px-12">
            Uma grande equipe com um objetivo muito maior
          </h2>

          <div className="flex md:flex-row flex-col items-center gap-10 mt-12">
            <div className="flex gap-4 w-[70%] md:w-1/3">
              <div>
                <h3 className="text-lg text-center md:text-start text-[#1FA4E4] font-bold mb-2">
                  Solidariedade
                </h3>
                <p className="text-[#525560] text-center md:text-start">
                  No Nexus, acreditamos que a solidariedade é a base de uma sociedade mais justa e igualitária
                </p>
              </div>
            </div>

            {/* Rest of the value items with similar styling */}
            <div className="flex gap-4 w-[70%] md:w-1/3">
              <div>
                <h3 className="text-lg text-center md:text-start text-[#1FA4E4] font-bold mb-2">
                  Esperança
                </h3>
                <p className="text-[#525560] text-center md:text-start">
                  Procuramos oferecer esperança aos que mais precisam, mostrando que é possível superar desafios
                </p>
              </div>
            </div>

            <div className="flex gap-4 w-[70%] md:w-1/3">
              <div>
                <h3 className="text-lg text-center md:text-start text-[#1FA4E4] font-bold mb-2">
                  Empatia
                </h3>
                <p className="text-[#525560] text-center md:text-start">
                  A empatia é a chave para entender as necessidades das pessoas afetadas por desastres
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center gap-10 mt-10">
            <div className="flex gap-4 w-[70%] md:w-1/3">
              <div>
                <h3 className="text-lg text-center md:text-start text-[#1FA4E4] font-bold mb-2">
                  Resiliência
                </h3>
                <p className="text-[#525560] text-center md:text-start">
                  No Nexus, celebramos a força e a determinação das pessoas que enfrentam situações difíceis
                </p>
              </div>
            </div>

            <div className="flex gap-4 w-[70%] md:w-1/3">
              <div>
                <h3 className="text-lg text-center md:text-start text-[#1FA4E4] font-bold mb-2">
                  Cooperação
                </h3>
                <p className="text-[#525560] text-center md:text-start">
                  A cooperação é fundamental para alcançarmos resultados significativos
                </p>
              </div>
            </div>

            <div className="flex gap-4 w-[70%] md:w-1/3">
              <div>
                <h3 className="text-lg text-center md:text-start text-[#1FA4E4] font-bold mb-2">
                  Inovação
                </h3>
                <p className="text-[#525560] text-center md:text-start">
                  Buscamos por novas tecnologias para atender às necessidades das comunidades afetadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}