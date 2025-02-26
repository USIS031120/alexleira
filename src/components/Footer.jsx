
import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { RedesSociales } from './RedesSociales'

export const Footer = () => {
  return (
    <footer className='bg-green py-10 text-center'>
        <div className="container m-auto w-full">
            <div className="iconos mb-[30px] justify-center text-center mr-5 mediano:mr-10 flex gap-[30px]">
                <RedesSociales />

            </div>
            <p className='text-white'>Alex Leira 2024 © - Todos los de recechos reservados</p>
        </div>
    </footer>
  )
}
