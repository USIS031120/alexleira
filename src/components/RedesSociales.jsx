

import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter, BsTwitterX, BsYoutube } from "react-icons/bs"



import React from 'react'

export const RedesSociales = () => {
  return (
    <>
            <a href="https://facebook.com/alexleiraautor" className="ml-5 mediano:ml-10">
                <FaFacebookF color="#fff" />
            </a>
            <a href="https://instagram.com/alexleiraautor" className="ml-5 mediano:ml-10">
                <BsInstagram color="#fff" />
            </a>
            <a href="https://x.com/@AlexLeiraAutor" className="ml-5 mediano:ml-10">
                <BsTwitterX color="#fff" />
            </a>
            <a href="https://youtube.com/@alexleiraautor" className="ml-5 mediano:ml-10">
                <BsYoutube color="#fff" />
            </a>
            <a href="https://tiktok.com/@alexleiraautor" className="ml-5 mediano:ml-10">
                <BsTiktok color="#fff" />
            </a>
    </>
  )
}
