import { Product } from 'models/Products'
import { useEffect, useState } from 'react'
import { product as productService } from 'services/product'

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    productService.findById(id)
      .then(setProduct)
  }, [id])

  return {
    product
  }

}
