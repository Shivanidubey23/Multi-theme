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

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export interface ProductListProps {
  products: Product[];
  loading?: boolean;
  error?: string | null;
}