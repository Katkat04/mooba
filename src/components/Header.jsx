import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronDown, faLocationDot, faSearch, faBars, faTimes} from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [showCityNotification, setShowCityNotification] = useState(false)
  const [currentCity, setCurrentCity] = useState("Barranquilla")

  useEffect(() => {
    const isDesktop = window.innerWidth >= 640
    if (isDesktop) {
      setShowCityNotification(true)
    }
  }, [])

  const handleCityChange = (city) => {
    setCurrentCity(city)
    setShowLocationModal(false)
    setShowCityNotification(false)
  }

  return (
    <nav className="text-black">
      {/* Modal de selección de ciudad */}
        {showLocationModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={() => setShowLocationModal(false)} className="text-[#2352ad] hover:text-gray-700">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                        Selecciona tu ubicación para mostrarte los productos disponibles en tu ciudad.
                    </p>
                    <div className="space-y-2">
                    {['Barranquilla', 'Bogotá', 'Bucaramanga', 'Cartagena', 'Santa Marta', 'Sincelejo'].map((city) => (
                        <button
                        key={city}
                        onClick={() => handleCityChange(city)}
                        className={`w-full text-left px-4 py-2 rounded-md ${
                            currentCity === city ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                        }`}>
                        {city}
                        </button>
                    ))}
                    </div>
                </div>
            </div>
        )}
        <div className="w-full">
            <div className="h-10 w-full bg-[radial-gradient(circle_at_center,_#328fff_0%,_#2352ad_100%)]"></div>
            {/* Contenedor principal */}
            <div className="bg-white container px-4 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-3">
                    <div className="w-full sm:w-auto flex justify-between items-center">
                        <img src="./src/assets/logo.png" alt="Logo" className="w-32 sm:w-48 h-auto" />
                        <div className="flex sm:hidden items-center gap-4">
                            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                <img width="24" height="22" src="https://img.icons8.com/windows/32/gender-neutral-user.png" alt="gender-neutral-user" className="filter grayscale brightness-0 opacity-60"/>
                            </button>
                            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                <img width="22" height="22" src="https://img.icons8.com/forma-regular/24/price-tag.png" alt="price-tag" className="filter grayscale brightness-0 opacity-60"/>
                            </button>
                            <div className="relative">
                                <button className="hover:text-blue-600">
                                    <img width="26" height="26" src="https://img.icons8.com/windows/32/shopping-cart.png" alt="shopping-cart" className="filter grayscale brightness-0 opacity-60"/>
                                </button>
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1 rounded-full">1</span>
                            </div>
                        </div>
                    </div>
                    
                {/* Barra de búsqueda desktop*/}
                <div className="hidden sm:block flex-1 max-w-xl mx-4 relative">
                    <input type="text" placeholder="Buscar por productos, marcas y más..." className="w-full px-4 py-2  bg-gray-100 rounded-lg text-gray-800 focus:outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-3 text-gray-800" />
                </div>
                    
                {/* Acciones de usuario desktop */}
                <div className="hidden sm:flex items-center gap-6 text-gray-600">
                    <div className="relative">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600" onClick={() => setShowLocationModal(true)}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/>
                            <span>{currentCity}</span>
                        </div>

                        {/* Notificación desktop*/}
                        {showCityNotification && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 z-10 border border-gray-200">
                                <p className="text-sm font-medium font-black text-black mb-2">¿En qué ciudad quieres comprar?</p>
                                <p className="text-xs text-black mb-3">
                                    Te mostramos los productos que se envían a <span className="font-bold">{currentCity}</span>. Selecciona tu ubicación para mostrarte los productos disponibles en tu ciudad.
                                </p>
                                <div className="flex justify-center gap-2">
                                    <button onClick={() => setShowCityNotification(false)} className="px-3 py-1 text-sm text-[#2352ad] bg-white rounded rounded-full border border-[#2352ad] hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                                        Continuar
                                    </button>
                                    <button onClick={() => {
                                        setShowCityNotification(false)
                                        setShowLocationModal(true)}} className="px-3 py-1 text-sm text-white bg-[#2352ad] rounded rounded-full hover:bg-blue-500">
                                        Cambiar ciudad
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                        <img width="24" height="22" src="https://img.icons8.com/windows/32/gender-neutral-user.png" alt="gender-neutral-user" className="filter grayscale brightness-0 opacity-60"/>  <span>Edgardo</span>  <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                        <img width="22" height="22" src="https://img.icons8.com/forma-regular/24/price-tag.png" alt="price-tag" className="filter grayscale brightness-0 opacity-60"/> Cupones
                    </button>
                    <div className="relative">
                        <button className="hover:text-blue-600">
                            <img width="26" height="26" src="https://img.icons8.com/windows/32/shopping-cart.png" alt="shopping-cart" className="filter grayscale brightness-0 opacity-60"/>
                        </button>
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1 rounded-full">1</span>
                    </div>
                </div>
            </div>
        </div>
        {/* Menú de categorías */}
        <div className="hidden text-white sm:flex justify-start px-0 pl-12 gap-2 bg-[#2352ad]">
            {['Medicamentos', 'Botiquín', 'Salud y belleza', 'Cuidado del bebé', 'Alimentos y bebidas', 'Varios'].map((item) => (
            <a key={item} href="#" className="text-white flex flex-row items-center text-sm gap-1 hover:underline px-3 py-3">
                {item} <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
            </a>
            ))}
        </div>
        
        {/* segunda row en móvil */}
        <div className="sm:hidden flex items-center gap-3 px-4 mt-2">
            <button className="text-[#2352ad]">
                <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <div className="relative flex-1">
                <input
                type="text"
                placeholder="Buscar por productos, marcas y más..."
                className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg text-gray-800 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-500" />
            </div>
        </div>

        {/* Ubicación en móvil */}
        <div className="sm:hidden flex items-center mt-3 gap-2 bg-[#ecf4fc] text-gray-700 px-4 py-2">
            <img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" style={{ filter: "invert(26%) sepia(89%) saturate(1822%) hue-rotate(209deg) brightness(91%) contrast(91%)",}}/>
            <span className="text-[#2352ad]">{currentCity}</span>
        </div>

        {/* Notificación en móvil */}
        {showCityNotification && (
          <div className="sm:hidden bg-[#2352ad] text-white p-3">
            <p className="text-sm mb-2">
              Te mostramos los productos que se envían a {currentCity}. Selecciona tu ubicación para ver mostrarte los productos disponibles en tu ciudad.
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowCityNotification(false)} className="px-3 py-1 text-sm bg-[#2352ad] text-white rounded rounded-full border border-white hover:bg-blue-200">
                    Continuar
              </button>
              <button
                    onClick={() => {
                    setShowCityNotification(false)
                    setShowLocationModal(true)}}
                    className="px-3 py-1 text-sm bg-white text-[#2352ad] rounded rounded-full border border-[#2352ad] hover:bg-blue-700">
                    Cambiar ciudad
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Header