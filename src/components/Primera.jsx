import { Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'

const Primera = ({ width }) => {
    const [windowWidth, setWindowWidth] = useState(0);

    // Función para capturar el ancho de la ventana al redimensionar
    const handleResize = () => {
        const newWindowWidth = window.innerWidth;
        setWindowWidth(newWindowWidth);
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
        <div className='w-full lg:flex justify-center items-center'>

            {
                windowWidth < 960 ? <video className={`${width < 960 ? "w-full" : "w-[50%]"} `} controls autoPlay>
                    <source src="/cortos/video.mp4" type="video/mp4" />
                </video> : null
            }

            <div className={`w-full lg:w-[60%] p-10`}>
                <div className="w-full p-10">
                    <div className="w-full p-10">
                        <Typography variant='h5' color='blue-gray' className='mt-10 mb-5 upeprcase derecha'>Misión</Typography>
                        <Typography variant='paragraph' color='gray'>Bajar el fraude transaccional y subir la tasa de aceptación para todos los jugadores en el ecosistema de pagos digitales. </Typography>
                    </div>
                    <div className="w-full p-10">
                        <Typography variant='h5' className='izquierda mt-10 mb-5'>Visión</Typography>
                        <Typography variant='paragraph' color='gray'>Desarrollar nuevas tecnologías enfocadas a validar la identidad de los usuarios en pagos digitales de una forma precisa y sin fricción. </Typography>
                    </div>
                </div>
            </div>
            {
                windowWidth < 960 ? null : <video className={`${width < 960 ? "w-full" : "w-[50%]"} `} controls autoPlay>
                    <source src="/cortos/video.mp4" type="video/mp4" />
                </video>
            }

        </div>
    )
}

export default Primera
