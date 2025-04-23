import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import logoMooba from '../assets/logoMooba.png'
import qr from '../assets/qr.png'
import logoE from '../assets/logo2.png'

function Footer() {
    return (
        <footer className="bg-white text-gray-800 border-t border-gray-200">
            <div className="w-full mx-2 px-2 py-8">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 w-full ">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-[70%]">
                        <div className="min-w-0">
                            <h3 className="text-lg font-black text-gray-700 mb-4 whitespace-nowrap">La empresa</h3>
                            <ul className="space-y-2">
                                <li>Quiénes Somos</li>
                                <li>Misión, Visión e Historia</li>
                                <li>Ética</li>
                                <li>Nuestras sucursales</li>
                            </ul>
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-lg font-black text-gray-700 mb-4 whitespace-nowrap">Información</h3>
                            <ul className="space-y-2">
                                <li>Avíso de Privacidad</li>
                                <li>Habeas Data</li>
                                <li>Términos y Condiciones de promociones</li>
                            </ul>
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-lg font-black text-gray-700 mb-4 whitespace-nowrap">Club Vida Sana</h3>
                            <ul className="space-y-2">
                                <li>Beneficios del Club</li>
                                <li>Actualiza tus datos</li>
                            </ul>
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-lg font-black text-gray-700 mb-4 whitespace-nowrap">Contacto</h3>
                            <ul className="space-y-2 mb-6">
                                <li>315 818 3477</li>
                                <li>Radicar PQRS</li>
                                <li className="min-w-0 break-all md:break-normal">
                                    <span className="md:block">servicioalcliente</span>
                                    <span className="md:block">@droguerialaeconomia.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* SEGUNDO DIV */}
                    <div className="w-full md:w-auto flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-700 mb-3 md:text-center hidden md:block ">¡Descarga gratis la App!</h3>
                            <div className="relative w-full max-w-xs mx-auto h-24 border border-gray-200 rounded-lg shadow-md overflow-hidden">
                                <div className="hidden md:block absolute inset-y-4 left-1/2 w-0.5 bg-gray-300 z-10"></div>
                                <div className="md:hidden flex h-full">
                                    <div className="w-[30%] flex items-center justify-center p-2 border-r border-gray-200 bg-gray-50">
                                        <img src={logoE} alt="Logo La Economía" className="max-h-full max-w-full object-contain rounded-lg "/>
                                    </div>
                                    <div className="w-[70%] flex items-center justify-center p-2">
                                        <p className="text-center text-xl font-black text-gray-600 px-2">
                                            Descarga gratis La Economía App
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="hidden md:block">
                                    <div className="absolute left-0 top-0 bottom-0 right-1/2 flex items-center justify-center p-2">
                                        <div className="bg-white p-1 border border-gray-200 rounded-md">
                                            <img src={qr} alt="Código QR" className="w-16 h-16 object-contain"/>
                                        </div>
                                    </div>
                                    <div className="absolute right-0 top-0 bottom-0 left-1/2 flex items-center justify-center p-2">
                                        <img src={logoE} alt="Logo La Economía" className="w-20 h-20 object-contain rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-700 mb-3">Síguenos en:</h3>
                                <div className="flex space-x-4 text-2xl text-gray-700">
                                    <FaFacebook />
                                    <FaInstagram />
                                    <FaTwitter />
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left w-full">
                    <div className=" flex flex-col md:flex-row items-center w-full md:w-auto gap-1 mb-4 md:mb-0">
                        <p className="break-words md:px-1 text-smd">©2023 Droguería La Economía. Todos los derechos reservados. v5.0 - </p>
                        <p className="underline whitespace-nowrap">Política de privacidad</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-row items-center justify-center ">
                        <p className="text-sm mt-2 mr-2">Powered by:</p> 
                        <img src={logoMooba} alt="Logo Mooba" className="h-6 w-auto"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer