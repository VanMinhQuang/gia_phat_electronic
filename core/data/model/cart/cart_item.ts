export interface CartItem  {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartBrand {
    brand: string;
  items: CartItem[];
}