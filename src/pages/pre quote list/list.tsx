
import { Header } from 'layouts/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './list.css'
import { useState, useEffect } from 'react'
import {PriceDataForm} from 'components/forms/price-personal-data'
import { Product } from 'models/Products'

const List = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('scale_products_list')!) || [];
    setSelectedProducts(storedProducts);
  }, []);

  const handleFormSubmit = (formData: FormData) => {
    
    console.log('Datos del formulario:', formData);

  };

  return (
      <div>
        <>
        <Header />
         <h2>Productos Seleccionados</h2>
          {selectedProducts.map((product) => (
          <div key={product.id} className='p-2'>
            <h2 className='text-2xl font-bold mb-2 text-gray-900'>{product.nombre}</h2>
              <p className='text-gray-600'>{product.descripcion}</p>
          <div className='flex items-center justify-between'>
                <span className='text-xl block font-medium my-3 text-gray-900'>S/. {product.precio.toFixed(2)}</span>
                <span className='block my-2'>Stock: {product.stock}</span>
          </div>
          </div>
          ))}
       
          <h2>Datos Personales</h2>
          <PriceDataForm onSubmit={handleFormSubmit} />
      </>
        </div>
    );
    }
    
  
  export default List;