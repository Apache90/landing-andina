import { Link } from "react-scroll";
import logo from '../assets/logo.png';
import React, { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import {CiMenuFries} from 'react-icons/ci';

const Navbar = () => {
    const [click, setClick]= useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 transition">
            <ul className="text-center text-x1 p-20">
                <Link spy={true} smooth={true} to="Nav">
                    <li className="my-4 py-4 border-b border-orange-500 hover:bg-borraDeVino hover:rounded">Inicio</li>
                </Link>
                <Link spy={true} smooth={true} to="">
                    <li className="my-4 py-4 border-b border-orange-500 hover:bg-borraDeVino hover:rounded">Nosotros</li>
                </Link>
                <Link spy={true} smooth={true} to="">
                    <li className="my-4 py-4 border-b border-orange-500 hover:bg-borraDeVino hover:rounded">Productos</li>
                </Link>
                <Link spy={true} smooth={true} to="">
                    <li className="my-4 py-4 border-b border-orange-500 hover:bg-borraDeVino hover:rounded">Servicios</li>
                </Link>
                <Link spy={true} smooth={true} to="">
                    <li className="my-4 py-4 border-b border-orange-500 hover:bg-borraDeVino hover:rounded">Contacto</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z=50 text-orange-500 lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <img src={logo} alt="Logo" className="w-120 h-auto" />
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex items-center">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="Nav">
                                <li className="hover:text-borraDeVino transition border-b-2 hover:border-fuchsia-900 cursor-pointer">Inicio</li>
                            </Link>
                            <Link spy={true} smooth={true} to="">
                                <li className="hover:text-borraDeVino transition border-b-2 hover:border-fuchsia-900 cursor-pointer">Nosotros</li>
                            </Link>
                            <Link spy={true} smooth={true} to="">
                                <li className="hover:text-borraDeVino transition border-b-2 hover:border-fuchsia-900 cursor-pointer">Productos</li>
                            </Link>
                            <Link spy={true} smooth={true} to="">
                                <li className="hover:text-borraDeVino transition border-b-2 hover:border-fuchsia-900 cursor-pointer">Servicios</li>
                            </Link>
                            <Link spy={true} smooth={true} to="">
                                <li className="hover:text-borraDeVino transition border-b-2 hover:border-fuchsia-900 cursor-pointer">Contacto</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;