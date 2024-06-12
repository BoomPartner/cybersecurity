import { Typography, Button } from '@material-tailwind/react'
import React from 'react'

const Aviso = ({openclose}) => {
  return (
    <div className='w-full p-10 h-[80vh] text-left'>
      <Typography variant='h3' className='w-full text-center mb-5'>Aviso de Privacidad</Typography>

      <Typography variant='paragraph' className='text-left'>De conformidad con lo establecido en la Ley Federal de Protección de Datos
        Personales en Posesión de los Particulares, FRAUDECTION pone a su disposición el
        siguiente aviso de privacidad.</Typography>

      <Typography>FRAUDECTION, es responsable del uso y protección de sus datos personales, en este
        sentido y atendiendo las obligaciones legales establecidas en la Ley Federal de
        Protección de Datos Personales en Posesión de los Particulares, a través de este
        instrumento se informa a los titulares de los datos, la información que de ellos se recaba
        y los fines que se le darán a dicha información. Además de lo anterior, informamos a usted que FRAUDECTION, tiene su domicilio
        ubicado en:</Typography>


      <Typography variant='h5' className='mt-5 mb-5'>Av constituyentes 345</Typography>

      <Typography variant='paragraph'>Los datos personales que recabamos de usted serán utilizados para las siguientes
        finalidades, las cuales son necesarias para concretar nuestra relación con usted, así
        como para atender los servicios y/o pedidos que solicite:</Typography>

      <Typography variant='paragraph'>Compartir acceso a nuestras pláticas
        Que el usuario pruebe nuestra tecnologia</Typography>

      <Typography variant='paragraph'>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad,
        utilizaremos los siguientes datos personales:</Typography>

      <Typography variant='h5' className='mt-5 mb-5'>Rostro</Typography>

      <Typography variant='paragraph'>Por otra parte, informamos a usted, que sus datos personales no serán compartidos con
        ninguna autoridad, empresa, organización o persona distintas a nosotros y serán
        utilizados exclusivamente para los fines señalados.</Typography>

      <Typography variant='paragraph'>Usted tiene en todo momento el derecho a conocer qué datos personales tenemos de
        usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso).
        Asimismo, es su derecho solicitar la corrección de su información personal en caso de
        que esté desactualizada, sea inexacta o incompleta (Rectificación); de igual manera,
        tiene derecho a que su información se elimine de nuestros registros o bases de datos
        cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación);
        así como también a oponerse al uso de sus datos personales para fines específicos
        (Oposición). Estos derechos se conocen como derechos ARCO.</Typography>

      <Typography variant='paragraph'>Para el ejercicio de cualquiera de los derechos ARCO, se deberá presentar la solicitud
        respectiva a través del siguiente correo electrónico:</Typography>

      <Typography variant='h5' className='mt-5 mb-5'>ruben@fdet.live</Typography>

      <Typography variant='paragraph'>Lo anterior también servirá para conocer el procedimiento y requisitos para el ejercicio
        de los derechos ARCO.</Typography>

      <Typography variant='paragraph'>En todo caso la respuesta a la solicitud se dará en el siguiente plazo:________.</Typography>

      <Typography variant='paragraph'>Los datos de contacto de la persona o departamento de datos personales, que está a
        cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:</Typography>

      <Typography variant='paragraph' className='mb-5 mt-5'><strong>a) Nombre del responsable: Legal</strong> <br />
        <strong> b) Domicilio:</strong> <br /> <strong>c) Teléfono: 5514735679</strong></Typography>

      <Typography variant='paragraph'>Cabe mencionar, que en cualquier momento usted puede revocar su consentimiento
        para el uso de sus datos personales. Del mismo modo, usted puede revocar el
        consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos
        personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos
        podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible
        que por alguna obligación legal se requiera seguir tratando sus datos personales.
        Asimismo, usted deberá considerar que para ciertos fines la revocación de su
        consentimiento implicará que no podamos seguir prestando el servicio que nos solicitó,
        o la conclusión de su relación con nosotros.</Typography>

      <Typography variant='paragraph'>Para revocar el consentimiento que usted otorga en este acto o para limitar su
        divulgación, se deberá presentar la solicitud respectiva por escrito, mediante el envío de
        una carta o solicitud en formato libre a la siguiente dirección:</Typography>

      <Typography variant='h5' className='mb-5 mt-5'>Av constituyentes 345</Typography>

      <Typography variant='paragraph'>Del mismo modo, podrá solicitar la información para conocer el procedimiento y
        requisitos para la revocación del consentimiento, así como limitar el uso y divulgación
        de su información personal.</Typography>

      <Typography variant='paragraph'>En cualquier caso, la respuesta a las peticiones se dará a conocer en el siguiente plazo:
        ________.</Typography>

      <Typography variant='paragraph'>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones
        derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los
        productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios
        en nuestro modelo de negocio, o por otras causas, por lo cual, nos comprometemos a
        mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de
        privacidad, sin embargo, usted puede solicitar información sobre si el mismo ha sufrido
        algún cambio a través de la siguiente dirección electrónica:</Typography>

      <div className="w-full flex justify-between p-5">
        <Typography variant='h6' className='mt-5 mb-5'>ruben@fdet.live</Typography>
        <div className="w-full">
          <Typography variant='h6' className='text-right'>Última actualización: <br />
            31/01/2024</Typography>
        </div>

      </div>
      <div className="w-full flex justify-center p-5">
        <div className="mt-5 rounded-md bg-[#25172e] px-10 py-2 text-white w-full no-focus-border text-center cursor-pointer" onClick={openclose}>Aceptar</div>
      </div>
    </div>
  )
}

export default Aviso
