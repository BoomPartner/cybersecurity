import React, { useState } from 'react'
import Aviso from './AvisoPrivacidad'
import {
    Input,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const [status, setStatus] = useState(null)
    const [mensaje, setMensaje] = useState(null)
    const [link, setLink] = useState(null)
    const [open, setOpen] = useState(false)
    const [terminos,setTerminos] = useState(false)
    const [formData, setFormData] = useState({
        name: null,
        lastname: null,
        puesto: null,
        empresa: null,
        email: null,
        telefono: null,
        emisor: "fdet.com.mx"
    });


    const handleModal = () => {
        setOpen(!open)
        setTerminos(true)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleData = async () => {
        const allFieldsFilled = Object.values(formData).every(item => item !== null);
        if (allFieldsFilled && terminos) {
            console.log('Todos los campos están completos');
            setStatus(false)
            try {
                console.log(formData);
                console.log(typeof formData);
                const response = await fetch("https://expresboom.onrender.com/mail_cybersecurity", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })
                if (response) {
                    console.log("mensaje enviado");
                    const data = await response.json()
                    console.log(data);
                    setMensaje(true)
                    setLink(true)

                    setTimeout(() => {
                        setMensaje(false); // Cambiar mensaje a false o null después de 3 segundos
                    }, 3000); // 3000 milisegundos = 3 segundos


                } else {
                    console.log("No se envio el mensaje");
                    console.log(response.status, response.statusText);
                    setMensaje(false)
                    setLink(false)
                }
            } catch (error) {
                console.log(error);
                console.error('Error al enviar el formulario:', error);
                setMensaje(false)
                setLink(false)
            }
        } else {
            setStatus(true)
            setMensaje(false)
            setLink(false)
            console.log('Algunos campos están vacíos');
            // Manejar campos vacíos o nulos aquí
        }
    }


    return (

        <div className="w-full">

            <div className="flex w-full min-h-screen items-center justify-start bg-white mt-10" id='contacto'>
                <div className="mx-auto w-full max-w-lg">
                    <h1 className="text-4xl font-medium uppercase mb-5">Charlas de Fraude</h1>
                    {/* <p className="mt-3">Entra al siguiente link para tomar asesoría de manera virtual</p> */}
                    <a href="https://www.linkedin.com/company/fraudection/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='3x' className=''></FontAwesomeIcon></a>

                    <form className="mt-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input type="text" name="name" onChange={handleChange}
                                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent
                             py-2.5 px-0 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500
                             duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 
                             peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 peer-focus:dark:text-gray-500">Nombre</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="lastname" onChange={handleChange} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent 
                            py-2.5 px-0 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 
                            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 
                            peer-focus:text-gray-600 peer-focus:dark:text-gray-500">Apellido</label>
                            </div>


                            <div className="relative z-0">
                                <input type="text" name="puesto" onChange={handleChange} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent 
                            py-2.5 px-0 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 
                            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 
                            peer-focus:text-gray-600 peer-focus:dark:text-gray-500">Puesto</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="empresa" onChange={handleChange} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent 
                            py-2.5 px-0 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 
                            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 
                            peer-focus:text-gray-600 peer-focus:dark:text-gray-500">Empresa</label>
                            </div>
                            <div className="relative z-0">
                                <input type="email" name="email" onChange={handleChange} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent 
                            py-2.5 px-0 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 
                            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 
                            peer-focus:text-gray-600 peer-focus:dark:text-gray-500">Correo</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="telefono" onChange={handleChange} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent 
                            py-2.5 px-0 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 
                            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 
                            peer-focus:text-gray-600 peer-focus:dark:text-gray-500">Whatsapp</label>
                            </div>

                            <Input variant='standard' size='lg' value={"https://studio.restream.io/ejv-xvrz-obz"} readOnly className={`transition-all duration-500 ${link ? "" : "hidden"}`} />

                        </div>

                    </form>
                    <div className="w-full flex justify-between">
                        <div className="w-full">
                            <button type="submit" className="mt-5 rounded-md bg-[#25172e] px-10 py-2 text-white" onClick={handleData}>Entrar</button>
                        </div>
                        <div className="w-full flex text-center justify-center items-center">
                            <Typography variant='paragraph' className='cursor-pointer hover:border-b border-gray-800' onClick={handleModal}>Aviso de Privacidad</Typography>
                        </div>
                    </div>
                    <div className={`w-full flex items-center mt-5 transition-all duration-500 ${status == true ? "" : "hidden"}`}>
                        <Typography variant='paragraph' color='red' className=''>Algunos campos estan vacios.</Typography>
                    </div>
                    <div className={`w-full flex items-center mt-5 transition-all duration-500 ${mensaje ? "" : "hidden"}`}>
                        <Typography variant='paragraph' color='green' className=''>Gracias por llenar el formulario.</Typography>
                    </div>
                </div>

            </div>

            <Dialog size='xl' open={open} >
                <DialogBody className='overflow-y-auto'>
                    <Aviso openclose={handleModal}></Aviso>
                </DialogBody>
               
               
            </Dialog>
        </div>




    )
}

export default Contact
