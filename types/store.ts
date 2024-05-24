export interface ProductAPIResponse {
  status: number;
  body: Product[] | Product | string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type CategoryList = string[];

export interface CategoryAPIResponse {
  status: number;
  body: CategoryList | string;
}

export enum LAYOUT {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}
