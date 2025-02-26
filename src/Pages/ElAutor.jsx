
import React from 'react'

import autor from '../assets/autor.jpeg'

export const ElAutor = () => {
  return (
    <div className="w-full animate__animated animate__fadeIn max-w-[1000px] mediano:py-28 py-[50px] px-5 mediano:px-0 mediano:p-0 m-auto autor">
        <h2 className='mediano:text-5xl text-[32px] mediano:mb-20 mb-[50px] text-center font-bold'>El AUTOR</h2>

        <div className="mediano:mb-28 mb-[50px] content">
            <img className='mr-10 mb-8 rounded-[20px] float-left w-full mediano:w-[30%]' src={autor} alt="" />
            <p className='text-justify mediano:text-xl leading-[28px]'>
            Alex Leira, es un escritor con un trasfondo diverso y creativo. Su viaje creativo abarca desde ser maestro de inglés hasta explorar el mundo como músico en grupos y orquestas. A lo largo de los años, ha encontrado su voz a través de la escritura, que le ha llevado a explorar diversos géneros literarios.
            <br />
            Su pluma se mueve entre la poesía, los cuentos para niños y jóvenes, las intrigas románticas y las historias escalofriantes del género de terror. También se aventuró en la creación de sagas que exploran mundos imaginarios y personajes inolvidables.
            <br />
            Antes de dedicarse completamente a la escritura, capturó momentos como fotógrafo profesional y narró historias visuales como camarógrafo de televisión. Estos diversos roles han enriquecido su perspectiva y han influenciado su narrativa, agregando profundidad y autenticidad a sus historias.
            <br />
            <br />
            Desde joven, Alex Leira se dedicó a escribir letras de canciones y poemas, pero con el pasar del tiempo perdió esa habilidad. Sin embargo, durante la pandemia aprovechó el tiempo de encierro y comenzó a escribir novelas y cuentos. Ahora, tiene en proyecto una novela erótica, una saga de diez libros que ya están en borrador esperando el tiempo para dar inicio con su creación, y un segundo libro de novela romántica ya iniciado. Además, está trabajando en un segundo libro de terror con un toque de thriller y suspenso. También tiene un libro de poemas iniciado con un avance de 17 poemas con múltiples temáticas.
            <br /> 
            <br />
            En proyecto, tiene traducir al inglés cada uno de sus libros y está en espera de colaboradores que deseen ser parte de este proyecto en su traducción. Además, tiene en mente un par de libros de superación y uno religioso que está plasmado solamente en una idea casi concretada. Siempre que puede, él mismo diseña las portadas de sus libros, así como el maquetado, con ayuda de algunos de sus familiares cercanos. Pronto espera terminar la tercera parte de la trilogía "El dragón del rey".
             <br />
            También ha escrito un par de frases o pensamientos cortos. Como es el sueño de todo escritor, le encantaría que una de sus novelas fuera tomada en cuenta para ser llevada a la pantalla grande o pantalla chica. Este anhelo es una de las fuerzas que impulsan su dedicación y pasión por la escritura.
             <br />
            <br />
            Te invitamos a explorar su mundo a través de las páginas de sus libros, donde la imaginación y la emoción se entrelazan para ofrecerte una experiencia única. ¡Bienvenido a su universo literario!
            </p>
        </div>
        
    </div>

  )
}
