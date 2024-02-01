import { Product } from 'models/Products';
import { HttpMethod, api } from 'utils/api';

export class ProductService {
  findById(id: number) {
    return api(HttpMethod.GET, `/productos/${id}`) as Promise<Product>
  }
}

export const product = new ProductService()