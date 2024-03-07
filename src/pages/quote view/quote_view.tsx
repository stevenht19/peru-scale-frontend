import {
  GetProductsQuotationRequest,
  GetQuotationRequest
} from 'shared/quotation'
import { PDFViewer, usePDF } from '@react-pdf/renderer'
import { emitQuotation } from 'services/quotation'
import { Button, message } from 'antd'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { QuotationServicePDF } from 'components/dashboard/quotation/service-quotation'
import { QuotationProductPDF } from 'components/dashboard/quotation/quotation'
import { useBoolean } from 'hooks/use-boolean'
import { Routes } from 'consts/routes'

export type QuoteViewResponse = {
  quotation: GetQuotationRequest
  products: GetProductsQuotationRequest[]
}

function quote_view() {
  const navigate = useNavigate()
  const { quotation, products } = useLoaderData() as QuoteViewResponse
  const [sending, setIsSending] = useBoolean()

  const MyBlob = useMemo(() => {
    return quotation.id_servicio ? <QuotationServicePDF quotation={quotation} /> : <QuotationProductPDF quotation={quotation} products={products} />
  }, [])

  const [pdf] = usePDF({ document: MyBlob })
  const blob = pdf?.blob

  const handleEmitQuotation = async () => {
    setIsSending.on()
    const formData = new FormData()
    formData.append('archivo', blob!, `${quotation.cliente}_${quotation.id_servicio ? 'servicio' : 'producto'}.pdf`)
    await emitQuotation(formData, quotation.id)
    setIsSending.off()
    message.success('Cotización emitida correctamente')
    navigate(`${Routes.DASHBOARD}/${Routes.TASKS}`)
    
  }

  return (
    <div className='flex justify-center h-screen'>
      <PDFViewer width="100%" height="100%">
        {quotation.id_servicio ? (
          <QuotationServicePDF quotation={quotation} />
        ) : (
          <QuotationProductPDF quotation={quotation} products={products} />
        )}
      </PDFViewer>
      <Button
        className='absolute bottom-0 right z-50 m-20'
        size='large'
        type='primary'
        loading={sending}
        onClick={handleEmitQuotation}
      >
        Emitir Cotización
      </Button>
    </div>
  )
}

export default quote_view