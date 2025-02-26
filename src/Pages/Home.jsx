
import React from 'react'
import { Principal } from '../components/Principal'
import { Carrusel } from '../components/Carrusel'
import { Nuevo } from '../components/Nuevo'
import { Cita } from '../components/Cita'
import { Contacto } from '../components/Contacto'

export const Home = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
        <Principal />
        <Carrusel />
        <Nuevo />
        <Cita />
        <Contacto />
    </div>
  )
}
