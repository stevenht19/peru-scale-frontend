import { Header } from 'layouts/header'
import { PriceDataForm } from 'components/forms/price-personal-data'
import { PreQuoteList } from 'components/tables/quote-list'
import { useQuotedProducts } from 'hooks/use-quoted-products'
import { CreateQuotationRequest } from 'shared/quotation'
import { requestQuotation } from 'services/quotation'
import 'bootstrap/dist/css/bootstrap.min.css'
import './list.css'
import { QuotationRequest } from 'models/Quotation'
import { useSession } from 'hooks/use-session'
import { createProductRequestAdapter } from 'adapters/quotation'

const List = () => {
  const {
    onDelete,
    modififyQuantity,
    selectedProducts,
    resetProducts,
  } = useQuotedProducts()

  const { user } = useSession()

  const handleFormSubmit = async (createRequest: QuotationRequest) => {
    await requestQuotation({
      ...createRequest,
      id_cliente: user?.id ?? null,
      products: selectedProducts?.map(createProductRequestAdapter) ?? []
    } as CreateQuotationRequest)
    resetProducts()
  }

  return <>
    <Header />
    <div className='max-w-6xl mx-auto px-4'>
      <h2 className='text-lg font-bold my-4'>Productos Seleccionados</h2>
      <PreQuoteList
        products={selectedProducts}
        onDeleteProduct={onDelete}
        modifyQuantity={modififyQuantity}
      />
      <h2 className='text-xl font-bold my-4'>Datos Personales</h2>
      <PriceDataForm
        onSubmit={handleFormSubmit}
        selectedProducts={selectedProducts}
      />
    </div>
  </>
}


export default List;