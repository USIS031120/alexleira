import dragonRey from "../assets/EL NACIMIENTO DEL REY ESTANDAR.jpg";
import monstruoAzul from '../assets/EL MONSTRUO DEL PIJAMA AZUL ESTANDAR.jpg'
import dragonLago from '../assets/EL LAGO DE LOS INTERFECTOS ESTANDAR.jpg'

import desNiebla from "../assets/DESDE LA NIEBLA ESTANDAR.jpg";
import laMuerte from "../assets/LA MUERTE ME ENAMORA ESTANDAR.jpg";
import interfectos from "../assets/SINIESTRO ANOCHECER ESTANDAR.jpg";
import encantamientos from "../assets/ELESCRITORDEENCANTAMIENTOS.jpeg";



import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from "swiper/modules";
import { useRef } from "react";

export const Carrusel = ({ imgs }) => {
  

  const next = useRef(null);
  const prev = useRef(null);

  return (
    <div className=" bg-whiteYe py-20 justify-center">
      
          <div className="w-3/4 m-auto swiper-container">
            

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            navigation
            breakpoints={
              {
                920: {
                  slidesPerView: 3
                },
                768: {
                  slidesPerView: 2
                }
              }
            }
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide>
              <div className="">
                <img src={monstruoAzul} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img src={laMuerte} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={desNiebla} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={dragonRey} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={dragonLago} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={interfectos} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={encantamientos} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          
          </div>
          {/* <div className="flex">
            <img src={dragonRey} />
            <img src={monstruoAzul} />
            <img src={dragonLago} />


          </div> */}
    </div>
  );
};
