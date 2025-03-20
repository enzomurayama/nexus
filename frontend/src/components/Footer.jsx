import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 w-full px-10 lg:px-20">
      <div className="w-full text-[#D4D4D4]">
        <div className="grid lg:grid-cols-[25%_40%_35%] md:grid-cols-[35%_65%]">
          <div className="text-center text-left">
            <h1 className="text-3xl text-white font-bold mb-4">Nexus</h1>

            <div className='flex flex-col justify-between xs:flex-row md:flex-col'>
                <p className="text-md font-inter mb-4">nexus@gmail.com</p>
                <p className="text-md font-inter mb-4">55+ 17 99132-3055</p>
            </div>
          </div>

          <div className="hidden lg:block text-center lg:text-left mx-6">
            <h3 className="text-2xl text-white font-bold mb-5">Acesso rápido</h3>
            <ul className="grid grid-cols-[25%_25%_25%] gap-4">
              <li><a href="/" className="font-inter hover:text-[#FFF]">Home</a></li>
              <li><a href="/sobre" className="font-inter hover:text-[#FFF]">Sobre</a></li>
              <li><a href="/mural" className="font-inter hover:text-[#FFF]">Pedidos</a></li>
              <li><a href="#mapa" className="font-inter hover:text-[#FFF]">Mapa</a></li>
              <li><a href="#contato" className="font-inter hover:text-[#FFF]">Contato</a></li>
              <li><a href="#contato" className="font-inter hover:text-[#FFF]">Perguntas</a></li>
            </ul>
          </div>

          <div className="text-left mb-4 mt-6 md:mt-0">
            <h3 className="text-2xl font-semibold mb-6 text-white">Receber novidades</h3>

            <form action="#" method="POST" className="flex">
              <input type="email"
                className="text-nowrap text-white font-inter bg-black w-full rounded-l-md border-2 border-[#D4D4D4] ps-3"
                placeholder="Seu e-mail" required />
                
              <button type="submit"
                className="bg-white font-inter text-nowrap text-black p-3 rounded-r-md hover:bg-[#D4D4D4] transition duration-300">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 text-center">
        <div className="border-t-2 border-[#D4D4D4] w-full"></div>

        <div className="flex flex-col justify-between items-center mt-6 sm:flex-row">
          <div className="flex gap-3 sm:mr-4">
            <a href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6 text-black" />
            </a>

            <a href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 text-black" />
            </a>

            <a href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-black" />
            </a>
          </div>

          <p className="text-sm font-inter text-center text-gray-400 mt-6 sm:text-right sm:mt-0">© 2024 Nexus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
