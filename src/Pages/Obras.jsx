
import React from 'react'
import { obras } from '../utils/Obras'; 


export const Obras = () => {
  return (
    <div className="container animate__animated animate__fadeIn m-auto w-full max-w-[1000px]">
        <h1 className='mediano:text-5xl text-[32px] font-bold text-center py-[50px] mediano:py-28'>OBRAS</h1>
        <table className='bg-gray w-full rounded-[30px] mb-28 text-center p-[30px]'>
            <thead>
                <tr className='bg-white'>
                    <th className='p-[20px]'>Título</th>
                    <th className='p-[20px]'>Tipo</th>
                    <th className='p-[20px]'>Fecha</th>
                </tr>
            </thead>
            <tbody>
                    {
                        obras.map( (obra, index) => {
                            return (

                            <tr className='border-[1px] even:bg-white last:border-0 border-white' key={index}>
                                <td className='p-[20px]'>{ obra.titulo }</td>
                                <td className='p-[20px]'>{ obra.tipo }</td>
                                <td className='p-[20px]'>{ obra.fecha }</td>

                            </tr>

                            )
                        } )
                    }
            </tbody>
        </table>
    </div>
  )
}
