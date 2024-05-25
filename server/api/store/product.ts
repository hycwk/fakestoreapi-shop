import { type ProductAPIResponse } from '~/types/store';
import { storeFetch } from '~/utils/fetchUtils';

const getProduct: (pid?: string) => Promise<ProductAPIResponse> = async (pid) => {
  const url = typeof pid === 'string' ? `https://fakestoreapi.com/products/${pid}` : 'https://fakestoreapi.com/products';
  return storeFetch({
    url,
    method: 'GET',
  });
};

const getProductByCategory: (cat: string) => Promise<ProductAPIResponse> = async (cat) => {
  const url = `https://fakestoreapi.com/products/category/${cat}`;
  return storeFetch({
    url,
    method: 'GET',
  });
};

export default defineEventHandler(async (event) => {
  const { productId } = getQuery<{ productId?: string }>(event);
  const { productCat } = getQuery<{ productCat?: string }>(event);
  if (event.node.req.method === 'GET') {
    if (productCat) {
      return await getProductByCategory(productCat);
    } else {
      return await getProduct(productId);
    }
  }
});
