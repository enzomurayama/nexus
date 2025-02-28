import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 w-full ">
      <div className="w-full px-20 text-[#D4D4D4] ">
        <div className="grid lg:grid-cols-[25%_40%_35%] md:grid-cols-[35%_65%]">
          <div className="text-center text-left">
            <h1 className="text-3xl text-white font-bold mb-4">Nexus</h1>

            <div className='flex justify-between md:flex-col'>
                <p className="text-md text-[#] mb-4">nexus@gmail.com</p>
                <p className="text-md text-[#] mb-4">55+ 17 99132-3055</p>
            </div>
          </div>

          <div className="hidden lg:block text-center md:text-left mx-6">
            <h3 className="text-2xl text-white font-bold mb-5">Acesso rápido</h3>
            <ul className="grid grid-cols-[30%_30%_30%] gap-4">
              <li><a href="/" className="hover:text-[#1FA4E4]">Home</a></li>
              <li><a href="/sobre" className="hover:text-[#1FA4E4]">Sobre</a></li>
              <li><a href="/mural" className="hover:text-[#1FA4E4]">Pedidos</a></li>
              <li><a href="#mapa" className="hover:text-[#1FA4E4]">Mapa</a></li>
              <li><a href="#contato" className="hover:text-[#1FA4E4]">Contato</a></li>
            </ul>
          </div>

          <div className="text-left mb-4 mt-6 md:mt-0">
            <h3 className="hidden xl:block text-2xl font-semibold mb-5 text-white">Receba nossas novidades</h3>
            <h3 className="block xl:hidden text-2xl font-semibold mb-5 text-white">Inscreva-se</h3>

            <form action="#" method="POST" className="flex">
              <input type="email"
                className="border-2 border-[#D4D4D4] ps-3 bg-black w-full text-nowrap text-white rounded-l-md"
                placeholder="Seu e-mail" required />
              <button type="submit"
                className="bg-white text-nowrap text-black p-3 rounded-r-md hover:bg-[#D4D4D4] transition duration-300">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 text-center px-20">
        <div className="border-t-2 border-[#D4D4D4] w-full"></div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-3">
            <a href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6 text-black" />
            </a>

            <a href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-black" />
            </a>

            <a href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-black" />
            </a>
          </div>

          <p className="text-sm text-right text-gray-400">© 2024 Nexus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
