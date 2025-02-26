
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { ElAutor } from '../Pages/ElAutor'
import { Obras } from '../Pages/Obras'
import { Tienda } from '../Pages/Tienda'
import { Trailers } from '../Pages/Trailers'
import { Descargas } from '../Pages/Descargas'
import { useScrollRestoration } from '../components/useScrollRestoration'

export const AppRouter = () => {
  useScrollRestoration();
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/autor' element={<ElAutor/>} />
            <Route path='/obras' element={<Obras/>} />
            <Route path='/tienda' element={<Tienda/>} />
            <Route path='/trailers' element={<Trailers/>} />
            <Route path='/descargas' element={<Descargas/>} />
            
        </Routes>
    </>
  )
}
