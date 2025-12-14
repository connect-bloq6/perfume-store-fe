/**
 * Product types
 */
export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: 'women' | 'men' | 'unisex';
  fragranceFamily: string;
  concentration: 'parfum' | 'edp' | 'edt' | 'cologne';
  sizes: ProductSize[];
  notes: FragranceNotes;
  details: ProductDetails;
  isNew?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductSize {
  ml: number;
  price: number;
  sku: string;
  inStock: boolean;
}

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ProductDetails {
  longevity: string;
  sillage: string;
  season: string[];
  occasion: string[];
}

/**
 * Collection types
 */
export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

/**
 * Cart types
 */
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  size: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

/**
 * Order types
 */
export interface Order {
  id: string;
  orderNumber: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * User types
 */
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  addresses: Address[];
  wishlist: string[];
  createdAt: string;
}

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault?: boolean;
}

/**
 * API response types
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  message: string;
  code: string;
  statusCode: number;
}

