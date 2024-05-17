interface ProductAPIResponse {
  status: number
  body: Product[] | Product | string
}

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	}
}

const getProduct: (pid?: string) => Promise<ProductAPIResponse> = async (pid) => {
  const url = typeof pid === 'string' ? `https://fakestoreapi.com/products/${pid}` : 'https://fakestoreapi.com/products';
  return fetch(url)
    .then(res => res.json())
		.then(data => ({
			status: 200,
			body: data
		}))
    .catch(err => ({
      status: 500,
      body: err
    }));
};

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') {
    const { productId } = getQuery<{ productId?: string }>(event);
    const response = await getProduct(productId);
    return {
      status: response.status,
      body: response.body,
    };
  }
});
