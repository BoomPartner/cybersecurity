import React from 'react'
import { Typography } from '@material-tailwind/react'
const Tercera = () => {
  return (
    <div className='w-full flex justify-center items-center p-10'>

      <div className="w-full p-10">
        <img src="/imagen_tercera.png" alt="" srcSet="" width={400} height={400} className='pushimage' />
      </div>
      <div className="w-full">
        <Typography variant='h1'>¿Cómo detectarlo?</Typography>
        <div className="flex justify-center items-center mt-10 overflow-x-hidden">

          <div className="rounded-full bg-[#ea2424] p-4 push">
            <img src="/iconos/huella.png" alt="huella" width={50} height={50} />
          </div>

          <div className="w-full ml-10 derecha">
            <Typography variant='h3'>Robo de Identidad</Typography>
            <Typography variant='h6' color='blue-gray' className=''>En compras con tarjeta de crédito/débito no presente como plataformas ecomerce.</Typography>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 overflow-x-hidden">

          <div className="rounded-full bg-[#ea2424] p-4 push2">
            <img src="/iconos/reverse.png" alt="reverse" width={50} height={50} />
          </div>
          <div className="w-full ml-10 derecha2">
            <Typography variant='h3'>Chargeback Disputes</Typography>
            <Typography variant='h6' color='blue-gray' className=''>El usuario niega la compra despues de hacerla</Typography>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 overflow-x-hidden">
          <div className="rounded-full bg-[#ea2424] p-4 push3">
            <img src="/iconos/paloma.png" alt="paloma" width={50} height={50} />
          </div>
          <div className="w-full ml-10 derecha3">
            <Typography variant='h3'>Flasos Positivos</Typography>
            <Typography variant='h6' color='blue-gray' className=''>Tarjetahabientes legales que son rechazados por miedo de fraude, generando perdidas para TODO el ecosistema de pagos electrónicos.</Typography>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Tercera
