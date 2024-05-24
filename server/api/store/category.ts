import { type CategoryAPIResponse } from '~/types/store';

const getCategory: () => Promise<CategoryAPIResponse> = async () => {
  const url = 'https://fakestoreapi.com/products/categories';
  return fetch(url)
    .then((res) => res.json())
    .then((data) => ({
      status: 200,
      body: data,
    }))
    .catch((err) => ({
      status: 500,
      body: err,
    }));
};

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') {
    const response = await getCategory();
    return {
      status: response.status,
      body: response.body,
    };
  }
});
