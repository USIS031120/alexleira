
import React, { forwardRef } from 'react'

import { NavLink } from 'react-router-dom'

export const Menu = forwardRef(({ onclick }, ref) => {
  return (
    <ul ref={ref} className="menu1 fixed transition-all h-full duration-300 z-50 mt-[68px] w-full top-0 left-full bg-green p-10 text-white">
        <NavLink
                    className="block mb-10"
                    onClick={onclick}
                    to="/">
                        Inicio
                    </NavLink>

                    <NavLink
                    className="block mb-10"
                    onClick={onclick}
                    to="/autor">
                        El Autor
                    </NavLink>

                    <NavLink
                    className="block mb-10"
                    onClick={onclick}
                    to="/obras">
                        Obras
                    </NavLink>

                    <NavLink
                    className="block mb-10"
                    onClick={onclick}
                    to="/tienda">
                        Tienda
                    </NavLink>

                    
                    <NavLink
                    className="block mb-10"
                    onClick={onclick}
                    to="/trailers">
                        Trailers
                    </NavLink>

                    <NavLink
                    className="block mb-10"
                    onClick={onclick}
                    to="/descargas">
                        Descargas
                    </NavLink>
    </ul>
  )
})
