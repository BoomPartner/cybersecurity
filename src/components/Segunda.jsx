import { Typography, Card, CardHeader, CardBody, CardFooter } from '@material-tailwind/react'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Segunda = ({ animation, width }) => {
    return (

        <div className="w-full" id='slide1'>
            <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
                {/* <SwiperSlide className="swiper-slide">
                    <div className='w-full flex justify-center items-center'>
                        <div className="relative">
                            <div className="absolute inset-0 bg-black bg-opacity-10">

                            </div>
                            <img src="/fondo_segunda.jpeg" alt="fondo_segunda" width={1000} height={1000} className='w-full' />
                            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">

                                <div className="lg:w-[75%] p-10 mr-10 text-left">
                                    <Typography variant={width < 510 ? "paragraph" : 'h5'} color='white' className='push'>La suplantacion de identidad es una forma de delito cibernético donde un individuo malintencionado roba información personal de su victima.</Typography>
                                    <Typography variant={width < 510 ? "paragraph" : 'h5'} color='white' className={`${width < 510 ? "" : "mt-10"} push2`}>Como nombres, números de seguridad social, números de tarjetas de crédito, para cometer fraude o delitos.</Typography>
                                </div>
                                <div className="w-full">

                                </div>

                            </div>


                        </div>
                    </div>
                </SwiperSlide> */}

                <SwiperSlide>

                    <div className="w-full flex bg-black bg-opacity-20">
                        {
                            width < 900 ? null : <div className="w-[80%] p-10">
                                <img src="/imagen_tercera.png" alt="" srcSet="" width={300} height={300} className='pushimage' />
                            </div>
                        }

                        <div className={`w-full block ${width < 900 ? "p-16" : ""}`}>
                            <div className={`flex justify-center items-center ${width < 900 ? "" : "mt-20"} overflow-x-hidden`}>

                                <div className={`rounded-full bg-[#ea2424] ${width < 600 ? "p-2" : "p-4"} push w-[15%]`}>
                                    <img src="/iconos/huella.png" alt="huella" width={50} height={50} />
                                </div>

                                <div className="w-full ml-10 derecha text-left">
                                    <Typography variant={width < 600 ? 'h5' : 'h3'}>Robo de Identidad</Typography>
                                    <Typography variant={width < 600 ? "paragraph" : 'h6'} color='blue-gray' className=''>En compras con tarjeta de crédito/débito no presente como plataformas ecomerce.</Typography>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mt-10 overflow-x-hidden">

                                <div className={`rounded-full bg-[#ea2424] ${width < 600 ? "p-2" : "p-4"} push2 w-[15%]`}>
                                    <img src="/iconos/reverse.png" alt="reverse" width={50} height={50} />
                                </div>
                                <div className="w-full ml-10 derecha2 text-left">
                                    <Typography variant={width < 600 ? 'h5' : 'h3'}>Chargeback Disputes</Typography>
                                    <Typography variant={width < 600 ? "paragraph" : 'h6'} color='blue-gray' className=''>El usuario niega la compra despues de hacerla</Typography>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mt-10 overflow-x-hidden">
                                <div className={`rounded-full bg-[#ea2424] ${width < 600 ? "p-2" : "p-4"}  push3 w-[15%]`}>
                                    <img src="/iconos/paloma.png" alt="paloma" width={50} height={50} />
                                </div>
                                <div className="w-full ml-10 derecha3 text-left">
                                    <Typography variant={width < 600 ? 'h5' : 'h3'}>Flasos Positivos</Typography>
                                    <Typography variant={width < 600 ? "paragraph" : 'h6'} color='blue-gray' className=''>Tarjetahabientes legales que son rechazados por miedo de fraude, generando perdidas para TODO el ecosistema de pagos electrónicos.</Typography>
                                </div>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full'>

                        <div className="relative w-full flex items-center justify-center">
                            <img src="/datos.png" alt="datos" width={1000} height={1000} className='' />
                            <div className="absolute" style={{ top: '60%', left: '55%', transform: 'translate(-50%, -50%)', width: "20%" }}>
                                <img
                                    src="/circulo.gif" // Reemplaza con la ruta de tu GIF
                                    alt="circulo_rojo"

                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {
                    width < 900 ? <SwiperSlide>

                        <div className="flex justify-center items-center">
                            <div className="w-[70%] p-10">
                                <Typography variant='h3'>3 Requisitos que en conjunto, evitan el robo de identidad</Typography>
                            </div>
                        </div>


                    </SwiperSlide>

                        : <SwiperSlide>

                            <div className="flex justify-center items-center">
                                <div className="w-[70%] p-10">
                                    <Typography variant='h3'>3 Requisitos que en conjunto, evitan el robo de identidad</Typography>
                                </div>
                                <div className="w-full flex justify-center gap-10 ">
                                    <div className="w-full">
                                        <Card className="max-w-[24rem] overflow-hidden h-[50vh]">

                                            <CardBody>
                                                <Typography variant="h4" color="blue-gray">
                                                    Algo que tienes:
                                                </Typography>
                                            </CardBody>
                                            <CardFooter
                                                color="transparent"
                                                className="m-0 rounded-none"
                                            >
                                                <img
                                                    src="/iconos/azul_01.png"
                                                    alt="tarjeta"
                                                />
                                            </CardFooter>
                                        </Card>
                                    </div>
                                    <div className="w-full">
                                        <Card className="max-w-[24rem] overflow-hidden h-[50vh]">

                                            <CardBody>
                                                <Typography variant="h4" color="blue-gray">
                                                    Algo que sabes:
                                                </Typography>
                                            </CardBody>
                                            <CardFooter
                                                color="transparent"
                                                className="m-0 rounded-none "
                                            >
                                                <img
                                                    src="/iconos/azul_02.png"
                                                    alt="password"
                                                    width={50}
                                                />
                                            </CardFooter>
                                        </Card>
                                    </div>
                                    <div className="w-full ">

                                        <Card className="max-w-[24rem] h-[50vh] overflow-hidden">

                                            <CardBody>
                                                <Typography variant="h4" color="blue-gray">
                                                    Algo que eres:
                                                </Typography>
                                                <Typography variant='paragraph'>(A nivel transacción no existe)</Typography>
                                            </CardBody>
                                            <CardHeader
                                                color="transparent"
                                                className="m-0 rounded-none w-[50%] mx-auto"
                                            >
                                                <img
                                                    src="/iconos/azul_03.png"
                                                    alt="huella"
                                                    width={50}
                                                />
                                            </CardHeader>
                                        </Card>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                }
                {
                    width < 900 ? <SwiperSlide>

                        <div className="flex justify-center items-center">

                            <div className="w-full flex justify-center gap-10 ">
                                <div className="w-full">
                                    <Card className="max-w-[24rem] overflow-hidden h-[50vh]">

                                        <CardBody>
                                            <Typography variant="h4" color="blue-gray">
                                                Algo que tienes:
                                            </Typography>
                                        </CardBody>
                                        <CardFooter
                                            color="transparent"
                                            className="m-0 rounded-none"
                                        >
                                            <img
                                                src="/iconos/azul_01.png"
                                                alt="tarjeta"
                                            />
                                        </CardFooter>
                                    </Card>
                                </div>
                                <div className="w-full">
                                    <Card className="max-w-[24rem] overflow-hidden h-[50vh]">

                                        <CardBody>
                                            <Typography variant="h4" color="blue-gray">
                                                Algo que sabes:
                                            </Typography>
                                        </CardBody>
                                        <CardFooter
                                            color="transparent"
                                            className="m-0 rounded-none "
                                        >
                                            <img
                                                src="/iconos/azul_02.png"
                                                alt="password"
                                                width={50}
                                            />
                                        </CardFooter>
                                    </Card>
                                </div>
                                <div className="w-full ">

                                    <Card className="max-w-[24rem] h-[50vh] overflow-hidden">

                                        <CardBody>
                                            <Typography variant="h4" color="blue-gray">
                                                Algo que eres:
                                            </Typography>
                                            <Typography variant='paragraph'>(A nivel transacción no existe)</Typography>
                                        </CardBody>
                                        <CardHeader
                                            color="transparent"
                                            className="m-0 rounded-none w-[50%] mx-auto"
                                        >
                                            <img
                                                src="/iconos/azul_03.png"
                                                alt="huella"
                                                width={50}
                                            />
                                        </CardHeader>
                                    </Card>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide> : null
                }



            </Swiper>
        </div>



    )
}

export default Segunda
