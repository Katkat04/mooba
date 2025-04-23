import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.jpg'
export const homeData = {
  banners: [
    {
      image: banner1,
      alt: "Oferta 20%",
      link: "/",
    },
    {
      image: banner3,
      alt: "Club vida",
      link: "/",
    },
    {
      image: banner2, 
      alt: "Oferta festival vallenatp",
      link:'/',

    },
  ],
  products: {
    specialOffers: [
      {
        id: 1,
        brand: "POND'S",
        name: "Crema Pond's Clarant B3",
        price: 10250,
        originalPrice: 21550,
        discount: 20,
        image: "/products/ponds-cream.jpg",
        badge: "Exclusivo Web",
        timer: "00:00m o 03:00"
      },
    ],
    bestSellers: [
      {
        id: 101,
        brand: "NIVEA",
        name: "Crema Hidratante 200ml",
        price: 12500,
        image: "/products/nivea-cream.jpg",
        badge: "Más vendido",
        badgeClass: "bg-green-600"
      },
    ],
    
    newArrivals: [
      {
        id: 201,
        brand: "L'ORÉAL",
        name: "Shampoo Reparador 400ml",
        price: 18500,
        originalPrice: 22000,
        discount: 16,
        image: "/products/loreal-shampoo.jpg",
        badge: "Nuevo",
        badgeClass: "bg-blue-600"
      },
    ]
  }
}