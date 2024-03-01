import React from 'react'
import { OptionalServiceQuotationRequest } from 'shared/quotation'
import { DetailInfoParagraph } from './detail-row'
import { Tag } from 'antd'

export const ClientDetail: React.FC<OptionalServiceQuotationRequest> = ({
  solicitante_correo,
  cliente,
  dni,
  direccion,
  id_cliente,
  medioDePago,
  telefono
}) => {
  const isClientRegistered = id_cliente ? 'Registrado' : 'No registrado'

  return (
    <ul className='flex flex-col gap-3'>
      <DetailInfoParagraph label='Nombres y Apellidos:' info={cliente} />
      <DetailInfoParagraph label='DNI: ' info={dni} />
      {solicitante_correo && (
        <DetailInfoParagraph label='Correo: ' info={solicitante_correo} />
      )}
      <DetailInfoParagraph label='Ubicación:' info={direccion} />
      <DetailInfoParagraph label='Telefono:' info={telefono} />
      <DetailInfoParagraph label='Tipo de cliente:' info={isClientRegistered} />
      <DetailInfoParagraph label='Medio de Pago:' info={medioDePago} />
      <span className='flex'>
        Tipo de cliente:
        <div className='ml-2'>
          {id_cliente ? (
            <Tag color='green'>
              Registrado
            </Tag>
          ) : (
            <Tag color='red'>
              No registrado
            </Tag>
          )}
        </div>
      </span>
    </ul>
  )
}
