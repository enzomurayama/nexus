export default function Footer()
{
    return (
        <footer className="bg-black text-white py-14 w-full ">
            <div className="w-full px-20 text-[#D4D4D4] ">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl text-white font-bold mb-4">Nexus</h1>
                        <p className="text-md text-[#] mb-4">nexus@gmail.com</p>
                        <p className="text-md text-[#] mb-4">55+ 17 99132-3055</p>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl text-white font-bold mb-4">Acesso rápido</h3>
                        <ul className="grid grid-cols-3 gap-4">
                            <li><a href="/src/index.html" className="hover:text-[#1FA4E4]">Home</a></li>
                            <li><a href="/src/pages/sobre.html" className="hover:text-[#1FA4E4]">Sobre</a></li>
                            <li><a href="/src/pages/mural.html" className="hover:text-[#1FA4E4]">Pedidos</a></li>
                            <li><a href="#mapa" className="hover:text-[#1FA4E4]">Mapa</a></li>
                            <li><a href="#contato" className="hover:text-[#1FA4E4]">Contato</a></li>
                        </ul>
                    </div>

                    <div className="text-left mb-6 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Inscreva-se para novidades</h3>
                        <form action="#" method="POST" className="flex">
                            <input type="email"
                                className="border-2 border-[#D4D4D4] ps-2 bg-black w-full text-nowrap text-white rounded-l-md"
                                placeholder="Seu e-mail" required />
                            <button type="submit"
                                className="bg-white text-nowrap text-black p-3 rounded-r-md hover:bg-[#D4D4D4] transition duration-300">
                                Inscrever-se
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full mt-8 text-center lg:px-20">
                <div className="border-t-2 border-[#D4D4D4] w-full"></div>

                <div className="flex justify-between mt-4 items-center">
                    <div className="flex gap-3 px-4">
                        <a href="#"
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                className="w-6 h-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v12h4V14h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
                            </svg>
                        </a>

                        <a href="#"
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                className="w-6 h-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M23 3a10.91 10.91 0 0 1-3.142.86A5.507 5.507 0 0 0 22.5 1.57a10.945 10.945 0 0 1-3.49 1.332A5.502 5.502 0 0 0 16.62 5a5.522 5.522 0 0 0-.103.73A15.585 15.585 0 0 1 1.671 2.65a5.505 5.505 0 0 0 1.708 7.347 5.477 5.477 0 0 1-2.48-.686v.069a5.507 5.507 0 0 0 4.415 5.381A5.506 5.506 0 0 1 2 13.33a5.486 5.486 0 0 0 4.767 3.539c-3.58 2.8-7.928 2.658-11.438.745A15.592 15.592 0 0 0 8 19.2C13.77 19.2 17.5 12 17.5 5.5c0-.079-.004-.157-.01-.235.01-.04.01-.08.01-.12 0-1.184-.324-2.258-.875-3.18z" />
                            </svg>
                        </a>

                        <a href="#"
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                className="w-6 h-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 2.16c3.182 0 3.56 0 4.8.07 1.15.07 2.18.4 3.03 1.08.86.68 1.52 1.64 1.88 2.75.57 1.7.57 3.73.57 7.07 0 3.34 0 5.37-.57 7.07-.36 1.11-1.02 2.07-1.88 2.75-.85.68-1.88 1.01-3.03 1.08-1.24.07-1.6.07-4.8.07s-3.56 0-4.8-.07c-1.15-.07-2.18-.4-3.03-1.08-.86-.68-1.52-1.64-1.88-2.75-.57-1.7-.57-3.73-.57-7.07 0-3.34 0-5.37.57-7.07.36-1.11 1.02-2.07 1.88-2.75.85-.68 1.88-1.01 3.03-1.08 1.24-.07 1.6-.07 4.8-.07zm0 1.6c-3.08 0-3.44 0-4.64.07-1.09.07-2.03.34-2.8.87-.77.53-1.4 1.3-1.86 2.26-.44 1.07-.75 2.27-.75 4.12s.31 3.05.75 4.12c.46.96 1.09 1.73 1.86 2.26.77.53 1.71.8 2.8.87 1.2.07 1.56.07 4.64.07s3.44 0 4.64-.07c1.09-.07 2.03-.34 2.8-.87.77-.53 1.4-1.3 1.86-2.26.44-1.07.75-2.27.75-4.12s-.31-3.05-.75-4.12c-.46-.96-1.09-1.73-1.86-2.26-.77-.53-1.71-.8-2.8-.87-1.2-.07-1.56-.07-4.64-.07zm0 6.96a2.52 2.52 0 1 1 0 5.04 2.52 2.52 0 0 1 0-5.04z" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-sm text-right text-gray-400 mt-4">© 2024 Nexus. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}