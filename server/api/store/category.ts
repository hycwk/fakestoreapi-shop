import { type CategoryAPIResponse } from '~/types/store';
import { storeFetch } from '~/utils/fetchUtils';

const getCategory: () => Promise<CategoryAPIResponse> = async () => {
  const url = 'https://fakestoreapi.com/products/categories';
  return storeFetch({
    url,
    method: 'GET',
  });
};

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') {
    return await getCategory();
  }
});
