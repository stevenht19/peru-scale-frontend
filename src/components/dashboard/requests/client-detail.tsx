import React from 'react'
import { OptionalServiceQuotationRequest } from 'shared/quotation'
import { DetailInfoParagraph } from './detail-row'

export const ClientDetail: React.FC<OptionalServiceQuotationRequest> = ({ cliente, dni, direccion, id_cliente, medioDePago, telefono }) => {
  const isClientRegistered = id_cliente ? 'Registrado' : 'No registrado'

  return (
    <ul className='flex flex-col gap-3'>
      <DetailInfoParagraph label='Nombres y Apellidos:' info={cliente} />
      <DetailInfoParagraph label='DNI: ' info={dni} />
      <DetailInfoParagraph label='Ubicación:' info={direccion} />
      <DetailInfoParagraph label='Telefono:' info={telefono} />
      <DetailInfoParagraph label='Tipo de cliente:' info={isClientRegistered} />
      <DetailInfoParagraph label='Medio de Pago:' info={medioDePago} />
    </ul>
  )
}
