type ProductItem = {
    price: number;
    quantity: number;
  };
  export const calculateTotal = (products: ProductItem[]): number => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };