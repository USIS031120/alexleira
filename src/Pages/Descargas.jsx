
import React from 'react'

import { obras } from '../utils/Obras'

export const Descargas = () => {
  return (
    <div className="descargas animate__animated animate__fadeIn w-full max-w-[1000px] m-auto">
      <h1 className='mediano:text-5xl text-[30px] font-bold mediano:py-28 py-[50px] text-center'>DESCARGAS</h1>

      <div className="libros justify-center flex flex-wrap">

      {
        obras.map( (obra, index) => {
          let archivo = obra.titulo + ".pdf";
          return (
            <div key={index} className="libro mediano:w-1/4 w-full text-center p-5 mb-10">
              <img className='mediano:w-44 w-full m-auto mb-4' src={obra.src} alt="" />
              <div className="content">
                <h2 className='mediano:text-xl'>{ obra.titulo }</h2>
                <a href={ obra.url } download={archivo} className='text-blue-900 underline'>Primer capítulo de { obra.titulo }</a>
              </div>
            </div>
          )
        })
      }
    </div>
      </div>
  )
}
