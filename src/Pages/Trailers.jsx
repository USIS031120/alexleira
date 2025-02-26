
import React from 'react'

export const Trailers = () => {
  return (
    <div className="trailers animate__animated animate__fadeIn w-full m-auto px-5 max-w-[1000px]">
      <h1 className='mediano:text-5xl text-[32px] mediano:py-28 py-[50px] text-center font-bold'>TRAILERS</h1>

      <div className="trailer mb-[50px] mediano:mb-20">
        <h2 className='text-[32px] pb-[30px] mediano:pb-[40px] font-normal text-center'>LA MUERTE ME ENAMORA</h2>
        <iframe className='mb-7 w-full' width="500" height="500" src="https://www.youtube.com/embed/-uFb-4iQCp0?si=7cOPAXhxW2HhEeg3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe  className='w-full' width="560" height="500" src="https://www.youtube.com/embed/xxAfWBAEmzU?si=5oIXFoH3gIghKVnr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      {/* <div className="trailer mb-20">
        <h2 className='text-[30px] pb-[40px] font-normal text-center'>LA MUERTE ME ENAMORA</h2>
      </div> */}
    </div>
  )
}
