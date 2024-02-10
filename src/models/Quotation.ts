export interface QuotationRequest {
  id: number
  empresa: string
  medioDePago: string
  cliente: string
  direccion: string
  telefono: string
  dni: string
  id_cliente: number | null
}

export interface ServiceQuotationRequest extends QuotationRequest {
  id: number
  mensaje?: string
  balanzaDescripcion?: string
  id_tipo_servicio: number
}