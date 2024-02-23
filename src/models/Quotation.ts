export const enum QuotationRequestState {
  PENDING = 'pendiente',
  DENIED = 'denegada',
  CANCELED = 'cancelada',
  ATTENDED = 'atendido'
}

export interface QuotationRequest {
  id: number
  empresa: string
  medioDePago: string
  cliente: string
  direccion: string
  telefono: string
  solicitante_correo: string
  dni: string
  id_servicio: number | null
  fecha_registro: string
  id_cliente: number | null
  id_asignado?: number
  fecha_atencion?: string
  estado: QuotationRequestState
}

export interface ServiceQuotationRequest extends QuotationRequest {
  id: number
  mensaje?: string
  precio: number
  balanzaDescripcion?: string
  descripcion_servicio?: string
  capacidadBalanza?: string
  id_tipo_servicio: number
}