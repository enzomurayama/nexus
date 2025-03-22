import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPaperPlane, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <section className="relative w-full h-[20rem] mb-8 bg-[url('/header-bg.png')] bg-center bg-cover lg:mb-16 md:h-[25rem] lg:h-[40rem]">
        <div className="flex flex-col justify-between w-full h-full px-10 lg:px-20">
          <div className="my-auto space-y-16">
            <h2 className="font-inter text-white font-bold text-3xl/[1.3] sm:text-4xl/[1.3] md:text-5xl/[1.3] lg:text-7xl/[1.3]">
              Criamos união em <br />
              momentos de necessidade
            </h2>
          </div>

          <div className="flex w-full items-center mb-8">
            <p className="w-48 text-white text-md text-start">238 pessoas impactadas</p>

            <div className="flex-1 border-t-2 border-white mx-2"></div>

            <p className="w-42 text-white text-md text-end">58 doações recebidas</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-12 sm:py-16 lg:px-20">
        <div className="lg:w-[55%]">
          <div className="flex items-center">
            <h3 className="font-inter text-md tracking-wider text-nowrap text-[#1FA4E4]">
              CONHEÇA NOSSO PROPÓSITO
            </h3>
            
            <div className="border-t-2 border-[#1FA4E4]/40 w-full ml-8"></div>
          </div>

          <h2 className="font-inter text-4xl/[1.4] font-bold mt-8">
            QUEREMOS SER A SUA ESPERANÇA
          </h2>

          <p className="font-inter text-lg/[1.8] text-textc text-justify my-8">
            Em um mundo onde desastres naturais podem abalar nossas vidas, o
            Nexus surge como um farol de esperança. Somos uma plataforma criada
            para conectar aqueles que precisam de ajuda com aqueles que querem
            ajudar.
          </p>

          <p className="font-inter text-lg/[1.8] text-textc text-justify mb-16">
            Nossa missão é construir pontes de solidariedade, facilitando a
            comunicação entre vítimas e voluntários.
          </p>

          <a href="/sobre" className="bg-primary font-inter text-white font-bold py-4 px-10 rounded hover:bg-[#006BB1] transition duration-300">Saiba mais</a>
        </div>

        <div className="w-[450px] items-center hidden lg:flex lg:ms-24">
          <img
            src="/img-sobre.png"
            alt="Dois idosos se abraçando"
            className="lg:w-full lg:h-auto mx-auto w-1/2 h-1/2 object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-12 sm:py-16 lg:px-20">
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <h3 className="font-inter text-md tracking-wider text-nowrap text-[#1FA4E4]">
              COMO PEDIR AJUDA
            </h3>

            <div className="border-t-2 border-[#1FA4E4]/40 w-full ml-8"/>
          </div>

          <h2 className="font-inter text-4xl/[1.4] font-bold mt-8">PRECISO DE APOIO</h2>

          <p className="text-lg/[1.8] text-textc text-justify my-8 lg:w-[55%]">
            Se você é vítima de um desastre natural e precisa de ajuda, nós
            podemos te ajudar. Neste caso, basta criar um post especificando
            suas condições e necessidades.
          </p>

          <div className="flex flex-col mt-8 gap-x-8 gap-y-6 xl:gap-x-16 lg:flex-row">
            <div className="w-full h-[260px] flex flex-col bg-blue-50 justify-center items-center p-8 rounded-lg border border-primary 
                            transition duration-300 transform hover:scale-102 hover:shadow-md lg:w-1/3 lg:h-[320px]">
              <FontAwesomeIcon icon={faUser} className="text-[#1FA4E4] text-5xl"/>

              <h4 className="font-inter text-xl font-bold my-6">Crie sua conta</h4>

              <p className="font-inter text-center text-md text-textc">
                Registre-se para conseguir criar novas publicações e solicitar ajuda.
              </p>
            </div>

            <div className="w-full h-[260px] flex flex-col bg-blue-50 justify-center items-center p-8 rounded-lg border border-primary 
                            transition duration-300 transform hover:scale-102 hover:shadow-md lg:w-1/3 lg:h-[320px]">
              <FontAwesomeIcon icon={faPaperPlane} className="text-[#1FA4E4] text-5xl"/>

              <h4 className="font-inter text-xl text-center font-bold my-6">Publique seu pedido</h4>

              <p className="font-inter text-center text-md text-textc">
                Deixe os voluntários sabendo que você está precisando de ajuda.
              </p>
            </div>

            <div className="w-full h-[260px] flex flex-col bg-blue-50 justify-center items-center p-8 rounded-lg border border-primary 
                            transition duration-300 transform hover:scale-102 hover:shadow-md lg:w-1/3 lg:h-[320px]">
              <FontAwesomeIcon icon={faHandsHelping} className="text-[#1FA4E4] text-5xl"/>

              <h4 className="font-inter text-xl font-bold my-6">Receba ajuda</h4>

              <p className="font-inter text-center text-md text-textc">
                Assim que um voluntário estiver pronto para ajudar, você será notificado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between mb-24 px-10 py-12 sm:py-16 lg:px-20">
        <div className="lg:w-[55%]">
          <div className="flex items-center">
            <h3 className="font-inter text-md tracking-wider text-nowrap text-[#1FA4E4]">
              COMO CONTRIBUIR
            </h3>

            <div className="border-t-2 border-[#1FA4E4]/40 w-full ml-8"></div>
          </div>

          <h2 className="font-inter text-4xl/[1.4] font-bold mt-8">
            SEJA NOSSO PARCEIRO
          </h2>

          <p className="font-inter text-lg/[1.8] text-textc text-justify mt-8 mb-16">
            Junte-se a nós e faça a diferença na vida de milhares de pessoas. O
            Nexus te convida a ser parte de uma rede global de solidariedade.
            Seja voluntário e ajude a reconstruir comunidades afetadas por
            desastres naturais. Basta criar uma conta de voluntário e você pode
            começar a ajudar as pessoas. O mapa te ajuda a verificar quem está
            próximo de você.
          </p>

          <a className="bg-primary font-inter text-white font-bold py-4 px-10 rounded hover:bg-[#006BB1] transition duration-300" href="/register">Ser voluntário</a>
        </div>

        <div className="w-[450px] items-center hidden lg:flex lg:ms-24">
          <img
            src="/partner-img.png"
            alt="Voluntários organizando copos"
            className="lg:w-full lg:h-auto mx-auto w-1/2 h-1/2 object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
