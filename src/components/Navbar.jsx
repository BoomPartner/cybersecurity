import React, { useState, useEffect } from 'react'
import { Collapse } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [bgChange, setBgChange] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    const [openNav, setOpenNav] = useState(false);
    const handleBackground = () => {
        if (window.scrollY > 500) {
            setBgChange(true);
        } else {
            setBgChange(false);
        }
    }

    const scrollToElement = (elementId) => {
        console.log(elementId);
        const target = document.getElementById(elementId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleBackground);
        // Limina el event listener en el cleanup del useEffect
        return () => window.removeEventListener('scroll', handleBackground);
    }, []);


    // Función para capturar el ancho de la ventana al redimensionar
    const handleResize = () => {
        const newWindowWidth = window.innerWidth;
        setWindowWidth(newWindowWidth);
        if (newWindowWidth > 959) {
            setOpenNav(false)
        }
        // console.log('Ancho de la ventana:', newWindowWidth);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth)
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }

    }, []);

    return (
        <div className="w-full shadow-xl transition-colors duration-500 ease-in-out z-50 bg-white">
            <div className={`w-full sticky top-0 flex justify-center items-center `}>
                <div className="w-[50%] flex justify-center">
                    <img src="/logo.png" alt="logo" srcSet="" width={50} height={50} />
                </div>

                <ul className={`h-full w-full flex justify-center items-center gap-10 ${windowWidth < 850 ? "hidden" : ""}`}>
                    <li className={`hover:text-[#da7603] text-xs transition-all duration-500 uppercase cursor-pointer ${bgChange ? 'text-gray' : 'text-red'}`}> <a href="/">Home</a></li>
                    <li className={`hover:text-[#da7603] text-xs transition-all duration-500 uppercase cursor-pointer ${bgChange ? 'text-gray' : 'text-red'}`}> <div onClick={() => scrollToElement('slide1')} href="/#slide1">Problemática</div></li>
                    <li className={`hover:text-[#da7603] text-xs transition-all duration-500 uppercase cursor-pointer ${bgChange ? 'text-gray' : 'text-red'}`}> <div onClick={() => scrollToElement('slide2')} href="/#slide2">Solución</div></li>
                    <li className={`hover:text-[#da7603] text-xs transition-all duration-500 uppercase cursor-pointer ${bgChange ? 'text-gray' : 'text-red'}`}> <div onClick={() => scrollToElement('contacto')} href="/">Charlas Fraude</div></li>
                    {/* <li className={`hover:text-[#da7603] text-xs transition-all duration-500 uppercase cursor-pointer ${bgChange ? 'text-gray' : 'text-red'}`}> <div><Link to={"/avisoprivacidad"}>Aviso de Privacidad</Link></div></li> */}
                </ul>
                <div className={`${windowWidth <= 850 ? "" : "hidden"} cursor-pointer w-full flex justify-end p-5`}>
                    <FontAwesomeIcon icon={faBars} size="xl" color="black" onClick={() => setOpenNav(!openNav)}></FontAwesomeIcon>
                </div>

            </div>
            <Collapse open={openNav}>
                <div className="text-center p-5 bg-white">
                    <div className="">
                        <div className={`hover:text-[#da7603] text-xs transition-all duration-500 uppercase cursor-pointer ${bgChange ? 'text-gray' : 'text-red'}`}> <a href="/">Home</a></div>
                    </div>

                    <div className="mt-5">
                        <div className={`hover:text-[#da7603] text-xs transition-all duration-500 uppercase cursor-pointer ${bgChange ? 'text-gray' : 'text-red'}`}> <div onClick={() => scrollToElement('slide1')} >Problemática</div></div>
                    </div>
                    <div className="mt-5">
                        <div className={`hover:text-[#da7603] text-xs transition-all duration-500 uppercase cursor-pointer ${bgChange ? 'text-gray' : 'text-red'}`}> <div onClick={() => scrollToElement('slide2')} >Solución</div></div>
                    </div>

                    <div className="mt-5">
                        <div className={`hover:text-[#da7603] text-xs transition-all duration-500 uppercase cursor-pointer ${bgChange ? 'text-gray' : 'text-red'}`}> <div onClick={() => scrollToElement('contacto')}>Charlas Fraude</div></div>
                    </div>
                </div>
            </Collapse>
        </div>



    )
}

export default Navbar
