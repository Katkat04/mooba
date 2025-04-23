import {PrincipalLayout} from "../layouts/PrincipalLayout"
import {GenericCarousel} from "../pages/components/CarrouselG"
import { BannerCarousel } from "./components/BannerCarrousel"
import { homeData } from "../utils/Data"
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'



function Homepage() {
    return(
        <PrincipalLayout>
            <BannerCarousel banners={homeData.banners}/>
            <section className="relative ">
                <div className="flex overflow-x-auto md:justify-center scrollbar-hide py-2 px-4 gap-4">
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
            <div className="container mx-auto px-4 space-y-12 py-8">
                <GenericCarousel title="Ofertas Especiales"
                products={homeData.products.specialOffers}/>
                <GenericCarousel title="Los más vendidos"
                products={homeData.products.bestSellers}/>
            </div>
        </PrincipalLayout>
    )
}
export default Homepage