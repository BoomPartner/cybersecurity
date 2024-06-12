import React from 'react'
import { Input, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import icono2 from "/iconos/02.svg"
import icono3 from "/iconos/01.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Cuarta = ({ width }) => {
    return (
        <div className="" id='slide2'>
            <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
                <SwiperSlide className="swiper-slide">
                    <div className="w-full flex justify-center items-center p-10">

                        <div className="relative h-[100vh] w-full">
                            {/* <div className="absolute inset-0 bg-black bg-opacity-50">

                            </div> */}

                            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">

                                <div className="w-full p-10 text-left">
                                    <Typography variant='h3' color='black' className='derecha mb-10'>Actual metodo de compra tarjeta no presente minutos( Log in app, passwords, encender tarjeta,NIP) vs nuestra DEMO</Typography>
                                    {/* <Typography variant='h6' color='blue-gray'> Esta DEMO utiliza la última tecnología en reconocimiento facial para proporcionar un entorno seguro y eficiente.</Typography> */}

                                </div>

                                {
                                    width < 660 ? null : <div className="w-full ">
                                        <img src="/mujer_cabello.jpg" alt="fondo_segunda" width={500} height={500} className='pushimage' />
                                    </div>
                                }



                            </div>


                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="w-full flex justify-center items-center bg-black bg-opacity-10 p-10">

                        <div className="relative h-[100vh] w-full">

                            <div className="absolute top-0 left-0 w-full h-full md:flex justify-between items-center">
                                {
                                    width < 750 ? <div className="w-full p-5 text-left mt-16">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 1</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Ingresa al siguiente enlace desde el navegador Chrome de cualquier dispositivo</Typography>
                                        <Input variant='standard' size='lg' value={"chrome://flags/#unsafely-treat-insecure-origin-as-secure"} readOnly/>
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div> : null
                                }

                                {/* {
                                    width < 700 ? null : <div className="w-full">
                                        <img src={"/pasos/paso1.png"} alt="fondo_segunda" width={500} height={500} className='pushimage' />
                                    </div>
                                } */}

                                <div className={`w-full ${width < 750 ? '' : ''}`}>
                                    <img src={"/pasos/paso1.png"} alt="fondo_segunda" width={500} height={500} className='pushimage' />
                                </div>
                                {
                                    width < 750 ? null : <div className="w-full p-5 text-left ml-10">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 1</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Ingresa al siguiente enlace desde el navegador Chrome de cualquier dispositivo</Typography>
                                        <Input variant='standard' size='lg' value={"chrome://flags/#unsafely-treat-insecure-origin-as-secure"} readOnly/>
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div>
                                }
                            </div>


                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="w-full flex justify-center items-center bg-black bg-opacity-10 p-10">

                        <div className="relative h-[100vh] w-full">

                            <div className="absolute top-0 left-0 w-full h-full lg:flex justify-between items-center">

                                {
                                    width < 750 ? <div className="w-full p-5 text-left mt-16">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 2</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Colocar el URL personal instransferible que se puede solicitar por WhatsApp en el cuadrito y dar click en  Enabled </Typography>
                                        <Input variant='standard' size='lg' value={"http://18.206.226.149:8000/"} readOnly/>
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div> : null
                                }

                                {/* {
                                    width < 700 ? null : <div className="w-full">
                                        <img src={"/pasos/paso2.png"} alt="fondo_segunda" width={300} height={500} className='pushimage' />
                                    </div>
                                } */}

                                <div className="w-full p-5">
                                    <img src={"/pasos/paso2.png"} alt="fondo_segunda" width={500} height={500} className='pushimage' />
                                </div>

                                {
                                    width < 750 ? null : <div className="w-full p-10 text-left ml-10">
                                        <Typography variant='h1' color='black' className='push'>Paso 2</Typography>
                                        <Typography variant='h4' color='blue-gray' className='mt-10 push2 mb-5'>Colocar el URL personal instransferible que se puede solicitar por WhatsApp en el cuadrito y dar click en  Enabled </Typography>
                                        <Input variant='standard' size='lg' value={"http://18.206.226.149:8000/"} readOnly />
                                        <FontAwesomeIcon icon={faArrowRight} size='4x' className='mt-10'></FontAwesomeIcon>
                                    </div>
                                }
                            </div>


                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="w-full flex justify-center items-center bg-black bg-opacity-10 p-10">

                        <div className="relative h-[100vh] w-full">

                            <div className="absolute top-0 left-0 w-full h-full md:flex justify-between items-center">
                                {
                                    width < 750 ? <div className="w-full p-5 text-left mt-16">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 3</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Copia y Pega la URL que solicitó por WhatsApp en el navegador</Typography>
                                        <Input variant='standard' size='lg' value={"http://18.206.226.149:8000/"} readOnly />
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div> : null
                                }

                                <div className={`w-full ${width < 750 ? '' : ''}`}>
                                    <img src={"/pasos/paso3.png"} alt="fondo_segunda" width={500} height={500} className='pushimage' />
                                </div>
                                {
                                    width < 750 ? null : <div className="w-full p-5 text-left ml-10">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 3</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Copia y Pega la URL que solicitó por WhatsApp en el navegador</Typography>
                                        <Input variant='standard' size='lg' value={"http://18.206.226.149:8000/"} readOnly />
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div>
                                }
                            </div>


                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="w-full flex justify-center items-center bg-black bg-opacity-10 p-10">

                        <div className="relative h-[100vh] w-full">
                            <div className="absolute top-0 left-0 w-full h-full md:flex justify-between items-center">
                                {
                                    width < 750 ? <div className="w-full p-5 text-left mt-16">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 4</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Si no lo haz usado antes da click en "Registro Usuario"</Typography>
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div> : null
                                }

                                <div className={`w-full ${width < 750 ? '' : ''}`}>
                                    <img src={"/modelo/uno.png"} alt="fondo_segunda" width={500} height={500} className='pushimage' />
                                </div>
                                {
                                    width < 750 ? null : <div className="w-full p-5 text-left ml-10">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 4</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Si no lo haz usado antes da click en "Registro Usuario"</Typography>
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div>
                                }
                            </div>


                        </div>
                    </div>
                </SwiperSlide>


                {/* <SwiperSlide className="swiper-slide">
                    <div className="w-full flex justify-center items-center bg-black bg-opacity-10 p-10">

                        <div className="relative h-[100vh] w-full">

                            <div className="absolute top-0 left-0 w-full h-full md:flex justify-between items-center">
                                {
                                    width < 750 ? <div className="w-full p-5 text-left mt-16">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 5</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Una vez dentro da click en el boton "Realizar Pedido" para simular una compra</Typography>
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div> : null
                                }

                                <div className={`w-full ${width < 750 ? '' : ''}`}>
                                    <img src={"/modelo/dos.png"} alt="fondo_segunda" width={500} height={500} className='pushimage'/>
                                </div>
                                {
                                    width < 750 ? null : <div className="w-full p-5 text-left ml-10">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 5</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Una vez dentro da click en el boton "Realizar Pedido" para simular una compra</Typography>
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div>
                                }
                            </div>


                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="w-full flex justify-center items-center bg-black bg-opacity-10 p-10">

                        <div className="relative h-[100vh] w-full">

                          

                            <div className="absolute top-0 left-0 w-full h-full md:flex justify-between items-center">
                                {
                                    width < 750 ? <div className="w-full p-5 text-left mt-16">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 6</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Despues de terminar el proceso, da click en la opción "Finalizar Transacción" para comparar la imagen del usuario registrado con la imagen del usario en tiempo real</Typography>
                                       
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div> : null
                                }

                                <div className={`w-full ${width < 750 ? '' : ''}`}>
                                    <img src={"/modelo/tres.png"} alt="fondo_segunda" width={500} height={500} className='pushimage' />
                                </div>
                                {
                                    width < 750 ? null : <div className="w-full p-5 text-left ml-10">
                                        <Typography variant={width < 700 ? "h5" : 'h1'} color='black' className='push'>Paso 6</Typography>
                                        <Typography variant={width < 700 ? 'h6' : 'h3'} color='blue-gray' className={`mt-10 push2 ${width < 750 ? 'mt-5' : 'mb-10'}`}>Despues de terminar el proceso, da click en la opción "Finalizar Transacción" para comparar la imagen del usuario registrado con la imagen del usario en tiempo real</Typography>
                                       
                                        <FontAwesomeIcon icon={faArrowRight} size={width < 750 ? '2x' : '4x'} className={width < 750 ? '' : 'mt-5'}></FontAwesomeIcon>
                                    </div>
                                }
                            </div>


                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </div>
    )
}

export default Cuarta
