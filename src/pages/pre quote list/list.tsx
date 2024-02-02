
import { Header } from 'layouts/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './list.css'
import { useState, useEffect } from 'react'
import { PriceDataForm } from 'components/forms/price-personal-data'
import { PreQuotedProduct} from 'models/Products'
import { PreQuoteList } from 'components/tables/quote-list'

const List = () => {
  const [selectedProducts, setSelectedProducts] = useState<PreQuotedProduct[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('scale_products_list')!) || [];
    setSelectedProducts(storedProducts);
  }, []);

  const onDelete = (id: PreQuotedProduct['id']) => {
    const filteredProducts = selectedProducts.filter((product) => product.id !== id)
    localStorage.setItem('scale_products_list', JSON.stringify(filteredProducts))
    setSelectedProducts(filteredProducts)
  }

  const handleFormSubmit = (formData: FormData) => {
    console.log('Datos del formulario:', formData);
    // borrar datos del local storage
  };

  return <>
    <Header />
    <div className='max-w-6xl mx-auto'>
      <>
        <h2 className='text-lg font-bold my-4'>Productos Seleccionados</h2>
        <PreQuoteList products={selectedProducts} onDeleteProduct={onDelete} />
        <h2 className='text-xl font-bold my-4'>Datos Personales</h2>
        <PriceDataForm onSubmit={handleFormSubmit} />
      </>
    </div>
  </>
}


export default List;