import { PreQuotedProduct } from 'models/Products'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useQuotedProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState<PreQuotedProduct[]>([])

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('scale_products_list')!) || []
    setSelectedProducts(storedProducts);
  }, [])

  const onDelete = (id: PreQuotedProduct['id']) => {
    const filteredProducts = selectedProducts.filter((product) => product.id !== id)
    localStorage.setItem('scale_products_list', JSON.stringify(filteredProducts))
    setSelectedProducts(filteredProducts)
  }

  const modififyQuantity = (id: number) => {
    const modifiedProducts = selectedProducts.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity
        }
      }

      return product
    })
    
    setSelectedProducts(modifiedProducts)
    localStorage.setItem('scale_products_list', JSON.stringify(modifiedProducts))
  }

  const resetProducts = () => {
    setSelectedProducts([])
    localStorage.removeItem('scale_products_list')
    toast.success('Se ha enviado una solicitud de cotización')
  }

  return {
    selectedProducts,
    onDelete,
    modififyQuantity,
    resetProducts,
  }
}
