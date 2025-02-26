
import React from 'react'

import portada from '../assets/ELESCRITORDEENCANTAMIENTOS.jpeg'
import baner from '../assets/PORTADA-EL-ESCRITOR-DE-ENCANTAMIENTOS.jpeg'
import { Menu } from './Menu'

export const Nuevo = () => {
  return (
    <div className='mb-28'>
      <div className="px-5 tall:px-0 mx-auto max-w-full w-[1000px]">
        <h2 className='mediano:text-5xl text-[32px] text-center py-[50px] medium:py-28 font-bold'>NUEVO LANZAMIENTO</h2>
        <a href="https://www.amazon.com/-/es/ALEX-LEIRA/dp/B0DTJ95JD5/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.vhQNvj8q-_eHaUr6eSgSBCkBAzOdlEUOmFAAcxI6JKHcDiBO2Eul2qIAaefW9DQKsjRzNmgauw7g8wB977I0JSI_C_jj7MjE3C1xZp1d1NY.tAxgB6eU6hlnYllsos8oNFdh0YN9j2OLIzvoqJlsBQY&dib_tag=se&keywords=el+escritor+de+encantamientos&qid=1737511819&sr=8-1"><img className='w-full mb-[30px]' src={baner} alt="" /></a>
        <p className='text-justify meiano:text-xl leading-7'>
          
          <br />
          <br />
          <span className='font-bold text-xl'>Sinopsis:</span>
          <br />
          En la tranquila biblioteca de su pueblo, una lectora apasionada descubre un libro que parece escrito para ella: un romance entre un mago y un hada que desafía el tiempo y el espacio. Pero lo que comienza como una historia fascinante pronto se transforma en algo mucho más personal. Entre sus páginas, secretos enigmáticos se entrelazan con su propia vida.
          Mientras desvela pistas ocultas, se adentra en una aventura donde magia y realidad se funden, enfrentando los misterios del amor, el destino y los secretos que podrían cambiarlo todo.
          <br/>
          Romántica, misteriosa y llena de magia, "El Escritor de Encantamientos" es una historia para quienes creen que el amor verdadero puede encontrarse en los lugares más insospechados, y que seguir las huellas del corazón siempre lleva a un destino inesperado.
        </p>
        <a href="https://www.amazon.com/-/es/ALEX-LEIRA/dp/B0DTJ95JD5/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.vhQNvj8q-_eHaUr6eSgSBCkBAzOdlEUOmFAAcxI6JKHcDiBO2Eul2qIAaefW9DQKsjRzNmgauw7g8wB977I0JSI_C_jj7MjE3C1xZp1d1NY.tAxgB6eU6hlnYllsos8oNFdh0YN9j2OLIzvoqJlsBQY&dib_tag=se&keywords=el+escritor+de+encantamientos&qid=1737511819&sr=8-1"><img src={portada} className='mt-[30px] m-auto w-1/2' alt="" /></a>
      </div>
    </div>
  )
}
