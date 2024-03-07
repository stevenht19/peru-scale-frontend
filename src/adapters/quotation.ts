import { PreQuotedProduct } from 'models/Products'

export const createProductRequestAdapter = (product: PreQuotedProduct): Partial<PreQuotedProduct> => {
  return {
    quantity: product.quantity,
    id: product.id!,
  }
}