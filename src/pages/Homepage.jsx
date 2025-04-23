import {PrincipalLayout} from "../layouts/PrincipalLayout"
import {GenericCarousel} from "../pages/components/CarrouselG"
import { BannerCarousel } from "./components/BannerCarrousel"
import { homeData } from "../utils/Data"
import { CircleCarousel } from "./components/CicleCarrousel"
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import antiD from '../assets/antibioticosD.png'
import antiM from '../assets/antibioticosM.png'
import BannerCSV from '../assets/bannerCVS.png'
import BannerCSVM from '../assets/bannerCVSM.png'


function Homepage() {
    return(
        <PrincipalLayout>
            <BannerCarousel banners={homeData.banners}/>
            <section className="relative ">
                <div className="flex overflow-x-auto md:justify-center scrollbar-hide py-2 px-4 md:gap-8">
                    <div className="flex flex-nowrap gap-4">
                        <div className="flex flex-col justify-center items-center min-w-[80px]">
                            <img src={p1} className="w-16 h-16 md:w-20 md:h-20"/>
                            <p className="text-sm text-center">Productos Estrella</p>
                        </div>
                    
                        <div className="flex flex-col justify-center items-center min-w-[80px]">
                            <img src={p2} className="w-16 h-16 md:w-20 md:h-20"/>
                            <p className="text-sm text-center">Dermocosmética</p>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center min-w-[80px]">
                            <img src={p3} className="w-16 h-16 md:w-20 md:h-20"/>
                            <p className="text-sm text-center">Antigripales</p>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center min-w-[80px]">
                            <img src={p4} className="w-16 h-16 md:w-20 md:h-20"/>
                            <p className="text-sm text-center">Snacks</p>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center min-w-[80px]">
                            <img src={p5} className="w-16 h-16 md:w-20 md:h-20"/>
                            <p className="text-sm text-center">Mejores Ofertas</p>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center min-w-[80px]">
                            <img src={p6} className="w-16 h-16 md:w-20 md:h-20"/>
                            <p className="text-sm text-center text-gray-300">Día de Salud y Bienestar</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative mx-4 md:mx-10 ">
                <div className="hidden md:block">
                    <img src={antiD} className="rounded-lg"/>
                </div>
                <div className="block md:hidden rounded-lg">
                    <img src={antiM}/>
                </div>
            </section>
            <div className="container mx-4 md:mx-10 space-y-12 py-8">
                <GenericCarousel title="Las mejores ofertas 🚨"
                products={homeData.products.specialOffers}/>
            </div>
            <section className="flex flex-col md:flex-row gap-4 justify-between mx-4 md:mx-10">
                <div class="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-1">
                        Botiquín <span>💊</span>
                    </h2>
                    <p class="text-black mb-6">La selección ideal de productos para tu cuidado en todo momento.</p>

                    <div class="grid grid-cols-3 gap-4">
                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                <img src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/es_CO/dolex-products/forte-new/Forte_408x300.png?auto=format" alt="Dolex" class="h-16 object-contain" />
                            </div>
                            <p class="text-sm font-medium mt-2">Cabeza y general</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                <img src="https://i.ebayimg.com/images/g/E~gAAOSw8OBk7wGl/s-l1200.jpg" alt="VapoCool" class="h-16 object-contain" />
                            </div>
                            <p class="text-sm font-medium mt-2">Tos</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                <img src="https://lh3.googleusercontent.com/AkZezFhAiYGODdQzBJIxnNfteP0QAQFSaai56gT_YhM23vYYSFLutfIVhLqkojE2Z_QxZUoqMaFWefD9YobRHluc7LZCDw2kjGY" alt="Kipcal" class="h-16 object-contain" />
                            </div>
                            <p class="text-sm font-medium mt-2">Multivitamínicos</p>
                        </div>
                    </div>
                </div>
                 {/*SEgunda CARD */}
                 <div class="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-1">
                        Cuidado del bebé <span>🍼</span>
                    </h2>
                    <p class="text-black mb-6">Todo un mundo de productos para los consentidos de la casa.</p>

                    <div class="grid grid-cols-3 gap-4">
                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                <img src="https://copservir.vtexassets.com/arquivos/ids/1579151-800-auto?v=638795461972200000&width=800&height=auto&aspect=true" alt="Dolex" class="h-16 object-contain" />
                            </div>
                            <p class="text-sm font-medium mt-2">Pañales</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                <img src="https://lh3.googleusercontent.com/OzkAPZCzjgrSn5ABMnb2Tfdsh1viYXiYz0aLEMrBZhcCjlAiHIJ6d_Fejoy2KD8sOwiGbOzb_3WiCpzVMAh7Wem-ooaQAib_5hUQb2LhZ502zIU=s360" alt="VapoCool" class="h-16 object-contain" />
                            </div>
                            <p class="text-sm md:whitespace-nowrap text-center font-medium mt-2">Leches infantiles</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3B2YyXStJenmazEZFk2s4ARj8V88epc_mqQ&s" alt="Kipcal" class="h-16 object-contain" />
                            </div>
                            <p class="text-sm md:whitespace-nowrap text-center font-medium mt-2 ">Pañitos húmedos</p>
                        </div>
                    </div>
                </div>
                {/*tercera Card */}
                <div class="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-1">
                        Salud y Belleza <span>💅</span>
                    </h2>
                    <p class="text-black mb-6">Encuentra aquí las marcas destacadas para cuidar de ti y tu familia.</p>

                    <div class="grid grid-cols-3 gap-4">
                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                <img src="https://static.beautytocare.com/media/catalog/product/n/e/neutrogena-hydro-boost-cleanser-water-gel-200ml_2.jpg" alt="Dolex" class="h-16 object-contain" />
                            </div>
                            <p class="text-sm font-medium mt-2">Tratamiento</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                <img src="https://olimpica.vtexassets.com/arquivos/ids/1430803/7500435159258_1.jpg?v=638521111709370000" alt="VapoCool" class="h-16 object-contain" />
                            </div>
                            <p class="text-sm text-center font-medium mt-2">Shampoo y acondicionador</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                <img src="https://mercaldas.vtexassets.com/arquivos/ids/1298476/Crema-LUBRIDERM-UV15-x400-ml_116767.jpg?v=638041145662170000" alt="Kipcal" class="h-16 object-contain" />
                            </div>
                            <p class="text-sm text-center font-medium mt-2">Tratamiento corporal</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4 space-y-12 py-8">
                <GenericCarousel title="Lo más buscado 🤩 "
                products={homeData.products.bestSearched}/>
            </div>

            <CircleCarousel
                title="Inspirados en tu bienestar 🤗"
                products={[
                    { image: 'https://medicam.ec/wp-content/uploads/2022/11/logo15-e1667669047891.png', label: 'Genéricos' },
                    { image: 'https://images.ctfassets.net/j0994xxhz671/41d8AqlPrCJJ53VIvEctbH/f61a50574d40649d0a53b2f1086d5872/VapoRub_50g_jar.Final_Color_Output.0003_840.png', label: 'Descongestionantes tópicos' },
                    { image: 'https://habibdroguerias.vtexassets.com/arquivos/ids/160155-800-auto?v=638460280470530000&width=800&height=auto&aspect=true', label: 'Diarrea' },
                    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-8HZSDuANAF0T7dLB8W6Eaw8uY_Zw2uujQ&s', label: 'Desodorantes' },
                    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZ-Qb1lzodZl21EmkGSQxi3ZUx9tiPzYlVA&s', label: 'Suplemento nutricional' },
                    { image: 'https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center-relaunch/global/colgate-total-active-prevention/mouthwash/thumb-1-colgate-total-mw.jpg', label: 'Enjuagues' },
                    { image: 'https://copservir.vtexassets.com/arquivos/ids/1566171-800-auto?v=638787994227770000&width=800&height=auto&aspect=true', label: 'Garganta' }
                ]}
            />

            <section className="relative mx-4 my-4 md:mx-10 ">
                <div className="hidden md:block">
                    <img src={BannerCSV} className="rounded-lg"/>
                </div>
                <div className="block md:hidden rounded-lg">
                    <img src={BannerCSVM}/>
                </div>
            </section>

            <CircleCarousel
                title="Marcas destacadas 🌟"
                products={[
                    { image: 'https://mir-s3-cdn-cf.behance.net/projects/404/79c2e878628787.Y3JvcCw5MjAsNzIwLDE4MCww.jpeg'},
                    { image: 'https://medicam.ec/wp-content/uploads/2022/11/logo15-e1667669047891.png' },
                    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBthChPZNLlVn-3uQBICNTWVuYo52H_ClGCg&s'},
                    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSELmwQzN8OrnPSwUMuycjw_b4_oiN2b9fcg&s'},
                    { image: 'https://http2.mlstatic.com/D_NQ_NP_944650-MLA44585497142_012021-O.webp' },
                    { image: 'https://images.squarespace-cdn.com/content/v1/60cd8e58fc052677e3cee385/4ca232c0-ce9c-4e06-a77c-a19f7a6e6bb3/electrolit.png' },
                    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8t_dQoz006vudC8_vZJ9l09rGvxFzMo6ww&s' }
                ]}
            />
        </PrincipalLayout>
    )
}
export default Homepage