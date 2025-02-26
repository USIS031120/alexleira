import { FaBars, FaFacebookF, FaInstagram } from "react-icons/fa"
import { Enlace } from "./Enlace"
import { Facebook } from "./Facebook"
import { Icon } from "./Icon"
import { Instagram } from "./Instagram"
import { TikTok } from "./TikTok"
import { Twitter } from "./Twitter"
import { Youtube } from "./Youtube"
import { BsFacebook, BsInstagram, BsList, BsTiktok, BsTwitter, BsTwitterX, BsYoutube } from "react-icons/bs"
import { useState, useRef, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { RedesSociales } from "./RedesSociales"
import { Menu } from "./Menu"

export const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [activo, setActivo] = useState(false);
    const menu = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else if (window.scrollY == 0){
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const onClick = () => {
            if (!activo) {
                menu.current.classList.toggle("active")
                document.body.style.overflow = "hidden"
                setActivo(true);
            } else {
                menu.current.classList.toggle("active")
                document.body.style.overflow = "visible"
                setActivo(false);
            }
    }

    const cerrar = () => {
        menu.current.classList.toggle("active")
        document.body.style.overflow = "visible"
        setActivo(false);
    }

    return (
        <header className={`${ isSticky ? 'header-fixed' : '' } z-50 top-0 fixed flex w-full transition-all duration-300 items-center justify-between bg-green px-[30px] mediano:px-10 mediano:py-[30px] py-5`}>
            <h1 className="text-white mediano:text-5xl font-title font-bold text-xl">
                <Link
                to="/"
                >
                    ALEX LEIRA
                </Link>
                </h1>
            <div className="flex flex-col items-end">
                <Menu ref={menu} onclick={cerrar} />
                <div className="bar text-lg transition-all text-white mediano:hidden">
                    <a onClick={onClick}>


                         <FaBars color="white" />
                    </a>
                </div>
                <div className="menu transition-all duration-300 hidden mediano:flex items-center">

                    <RedesSociales />
                </div>
                <ul className="enlaces hidden mediano:block mt-[20px] text-white">
                    <NavLink
                    className="inline-block ml-10"
                    to="/">
                        Inicio
                    </NavLink>

                    <NavLink
                    className="inline-block ml-10"
                    to="/autor">
                        El Autor
                    </NavLink>

                    <NavLink
                    className="inline-block ml-10"
                    to="/obras">
                        Obras
                    </NavLink>

                    <NavLink
                    className="inline-block ml-10"
                    to="/tienda">
                        Tienda
                    </NavLink>

                    
                    <NavLink
                    className="inline-block ml-10"
                    to="/trailers">
                        Trailers
                    </NavLink>

                    <NavLink
                    className="inline-block ml-10"
                    to="/descargas">
                        Descargas
                    </NavLink>
                    
                </ul>
            </div>
        </header>
    )

}