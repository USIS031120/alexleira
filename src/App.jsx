import { useState } from 'react'
import './App.css'


import { Header } from './components/Header'
import { Principal } from './components/Principal'
import { Carrusel } from './components/Carrusel'
import { Nuevo } from './components/Nuevo'
import { Cita } from './components/Cita'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { AppRouter } from './Router/AppRouter'

function App() {

  return (
    <>
      <Header />
      <div className='mt-[68px] mediano:mt-[120px]'></div>
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
