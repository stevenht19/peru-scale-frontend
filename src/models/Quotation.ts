export const enum QuotationRequestState {
  PENDING = 'pendiente',
  DENIED = 'denegada',
  CANCELED = 'cancelada'
}

export interface QuotationRequest {
  id: number
  empresa: string
  medioDePago: string
  cliente: string
  direccion: string
  telefono: string
  dni: string
  id_servicio: number | null
  id_cliente: number | null
  id_asignado?: number
  fecha_atencion?: string
  estado: QuotationRequestState
}

export interface ServiceQuotationRequest extends QuotationRequest {
  id: number
  mensaje?: string
  balanzaDescripcion?: string
  descripcion_servicio?: string
  capacidadBalanza?: string
  id_tipo_servicio: number
}