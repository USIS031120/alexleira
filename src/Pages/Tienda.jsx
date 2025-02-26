
import React from 'react'

import { obras } from '../utils/Obras'


export const Tienda = () => {
  return (
    <div className="tienda animate__animated animate__fadeIn m-auto mb-28 px-5 w-full max-w-[1200px]">
      <h1 className='mediano:text-5xl text-[32px] mediano:py-28 py-[50px] text-center font-bold'>TIENDA</h1>
      <div className="obras">
        { 
          obras.map( (obra, index) => {
            return (
            <div key={index} className="obra mb-[50px] flex mediano:flex-nowrap flex-wrap">
              <div className="img w-full mx-[10px] mediano:mx-0 mb-5 mediano:mb-0 mediano:w-2/5">
                <img className='rounded-[20px] w-full' src={obra.src} alt="" />
              </div>
              <div className="content items-start flex flex-col mediano:ml-[40px] w-full mediano:w-[70%]">
                <div className="titulo mediano:text-[32px] text-2xl mb-[20px] w-full mediano:mb-[30px]">
                  <h2 className='text-center mediano:text-left'>{ obra.titulo }</h2>
                </div>
                <div className="descripcion mb-[30px]">
                  <p className='mediano:text-xl text-justify whitespace-pre-wrap'>
                    { obra.descripcion }
                  </p>
                </div>
                <div className="detalles mediano:text-xl flex">
                  <div className="atr text-[#16162E] mr-10">
                    <p className='mb-[30px]'>Autor:</p>
                    <p className='mb-[30px]'>Núm. de páginas:</p>
                    <p className='mb-[30px]'>Año:</p>
                  </div>
                  <div className="des">
                    <p className='mb-[30px]'>{ obra.autor }</p>
                    <p className='mb-[30px]'>{ obra.paginas }</p>
                    <p className='mb-[30px]'>{ obra.year }</p>
                  </div>
                </div>
                <a href={obra.tienda} className="btn hover:bg-green transition-colors duration-500 w-full mediano:w-auto mt-auto bg-[#313066] mediano:text-xl rounded-[10px] text-center px-[30px] text-white py-5">Comprar online</a>
                
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}
