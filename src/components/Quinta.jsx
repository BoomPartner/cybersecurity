import React from 'react'
import { Input, Typography } from '@material-tailwind/react'
const Quinta = () => {
  return (

    <div className='w-full h-full flex items-center justify-center border'>
      <div className="w-full flex jsutify-center items-center border bordr-red-500">
        <Typography variant='h3' color='text-gray'>Entra en el siguiente link para tomar charlas y asesorias de fraude de manera virtual</Typography>
        <Input variant='standard' size='lg' value={"https://studio.restream.io/ejv-xvrz-obz"}/>
      </div>
    </div>
  )
}

export default Quinta
