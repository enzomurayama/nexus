import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <section
        className="relative w-full h-[30rem] bg-center bg-cover md:h-[45rem]"
        style={{"background-image": "url('/header-bg.png')"}}
      >
        <div className="relative px-20 z-10 flex flex-col justify-between w-full h-full lg:text-start text-center text-white">
          <div className="my-auto">
            <h2 className="font-inter text-4xl font-bold mb-16 md:text-5xl lg:text-7xl/[1.2]">
              Criamos união em <br />
              momentos de necessidade
            </h2>

            <a
              href="/mural"
              className="bg-white text-[#1E1E1E] font-semibold py-4 px-10 rounded hover:bg-[#D9D9D9] transition duration-300"
            >
              Quero ajudar
            </a>
          </div>

          <div className="flex w-full items-center mt-10 mb-8">
            <p className="lg:text-lg text-sm">238 pessoas ajudadas</p>

            <div className="border-t-2 border-white w-full mx-8"></div>

            <p className="lg:text-lg text-md">58 doações recebidas</p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex flex-col lg:flex-row items-center justify-between px-20 py-12 bg-white"
      >
        <div className="lg:w-1/2">
          <div className="flex items-center mt-10 lg:mt-0">
            <h3 className="text-md tracking-wider w-auto text-nowrap text-[#1FA4E4]">
              CONHEÇA NOSSO PROPÓSITO
            </h3>
            <div className="border-t-2 border-[#1FA4E4]/40 w-full ml-8 mr-4"></div>
          </div>

          <h2 className="text-4xl font-bold mb-4 mt-10">
            QUEREMOS SER A SUA ESPERANÇA
          </h2>

          <p
            className="text-lg text-[#525560] md:text-start text-justify my-8"
            style={{"line-height": '1.8'}}
            >
            Em um mundo onde desastres naturais podem abalar nossas vidas, o
            Nexus surge como um farol de esperança. Somos uma plataforma criada
            para conectar aqueles que precisam de ajuda com aqueles que querem
            ajudar.
          </p>

          <p className="text-[#525560] text-lg mb-12" style={{"line-height": '1.8'}}
          >
            Nossa missão é construir pontes de solidariedade, facilitando a
            comunicação entre vítimas e voluntários.
          </p>

          <a href="/sobre" className="bg-[#1FA4E4] text-white font-semibold py-4 px-10 rounded hover:bg-[#006BB1]">Saiba mais</a>

        </div>

        <div style={{"width": '450px', 'height': '600px'}} className="lg:block hidden">
          <img
            src="/img-sobre.png"
            alt="Dois idosos se abraçando"
            className="lg:w-full ms-6 lg:h-auto mx-auto mt-6 w-1/2 h-1/2 self-center object-cover rounded-lg"
          />
        </div>
      </section>

      <section
        id="tutorial"
        className="flex flex-col lg:flex-row items-center justify-between px-20 py-12 bg-white"
      >
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <h3 className="w-auto tracking-wider text-nowrap text-md text-[#1FA4E4]">
              COMO PEDIR AJUDA
            </h3>
            <div className="border-t-2 border-[#1FA4E4]/40 w-full mx-8"></div>
          </div>

          <h2 className="text-4xl font-bold mb-4 mt-10">PRECISO DE APOIO</h2>

          <p className="text-lg text-[#525560] md:text-start text-justify mb-4">
            Se você é vítima de um desastre natural e precisa de ajuda, nós
            podemos te ajudar. Neste caso, basta criar um post especificando
            suas condições e necessidades.
          </p>

          <div className="flex md:flex-row flex-col mt-10 gap-x-6 gap-y-6">
            <div
              style={{"height": ' 400px'}}
              className="flex flex-col justify-center lg:items-start items-center bg-#[F3FBFF] py-6 lg:px-16 px-4 rounded-lg border-2 border-[#1FA4E4] md:w-1/3 w-full"
            >
              <svg
                className="h-12 w-12 text-[#1FA4E4] mb-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>

              <h4 className="text-xl font-bold mb-2">Crie sua conta</h4>

              <p className="text-left text-sm text-[#1E1E1E]">
                Registre-se para conseguir criar novas publicações e solicitar
                ajuda para voluntários
              </p>
            </div>

            <div
              style={{"height": ' 400px'}}
              className="flex flex-col justify-center lg:items-start items-center bg-#[F3FBFF] py-6 lg:px-16 px-4 rounded-lg border-2 border-[#1FA4E4] md:w-1/3 w-full"
            >
              <svg
                className="h-12 w-12 text-[#1FA4E4] mb-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>

              <h4 className="text-xl font-bold mb-2">Publiique seu pedido</h4>

              <p className="text-left text-sm text-[#1E1E1E]">
                Deixe os voluntários sabendo que você está precisando de ajuda
              </p>
            </div>

            <div
              style={{"height": ' 400px'}}
              className="flex flex-col justify-center lg:items-start items-center bg-#[F3FBFF] py-6 lg:px-16 px-4 rounded-lg border-2 border-[#1FA4E4] md:w-1/3 w-full"
            >
              <svg
                className="h-12 w-12 text-[#1FA4E4] mb-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>

              <h4 className="text-xl font-bold mb-2">Receba ajuda</h4>

              <p className="text-left text-sm text-[#1E1E1E]">
                Assim que um voluntário estiver pronto para ajudar, você será
                notificado
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="partner"
        className="flex flex-col lg:flex-row items-center justify-between px-20 py-12 bg-white"
      >
        <div className="lg:w-1/2 w-full mb-12">
          <div className="flex lg:flex-row items-center">
            <h3 className="text-md tracking-wider w-auto text-nowrap text-[#1FA4E4]">
              COMO CONTRIBUIR
            </h3>
            <div className="border-t-2 border-[#1FA4E4]/40 w-full ml-8 mr-4"></div>
          </div>

          <h2 className="text-4xl font-bold mb-4 mt-10">SEJA NOSSO PARCEIRO</h2>

          <p
            className="text-lg text-[#525560] md:text-start text-justify mt-8 mb-12"
            style={{"line-height": '1.8'}}
          >
            Junte-se a nós e faça a diferença na vida de milhares de pessoas. O
            Nexus te convida a ser parte de uma rede global de solidariedade.
            Seja voluntário e ajude a reconstruir comunidades afetadas por
            desastres naturais. Basta criar uma conta de voluntário e você pode
            começar a ajudar as pessoas. O mapa te ajuda a verificar quem está
            próximo de você.
          </p>

          <a className="bg-[#1FA4E4] text-white font-bold py-4 px-8 rounded hover:bg-[#006BB1]" href="/register">Ser voluntário</a>

        </div>

        <div style={{"width": '450px', 'height': '600px'}} className="lg:block hidden">
          <img
            src="/partner-img.png"
            alt="Voluntários organizando copos"
            className="lg:w-full ms-6 lg:h-auto mx-auto mt-6 w-1/2 h-1/2 self-center object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
