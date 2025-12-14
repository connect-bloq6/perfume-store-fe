/**
 * API client for fetching data
 * This is a placeholder - replace with actual API integration
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * Generic fetch wrapper with error handling
 */
async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Product API
 */
export const productAPI = {
  getAll: (params?: Record<string, string>) => {
    const searchParams = new URLSearchParams(params);
    return fetchAPI(`/products?${searchParams}`);
  },
  
  getBySlug: (slug: string) => {
    return fetchAPI(`/products/${slug}`);
  },
  
  getFeatured: () => {
    return fetchAPI('/products/featured');
  },
  
  getBestsellers: () => {
    return fetchAPI('/products/bestsellers');
  },
  
  search: (query: string) => {
    return fetchAPI(`/products/search?q=${encodeURIComponent(query)}`);
  },
};

/**
 * Collection API
 */
export const collectionAPI = {
  getAll: () => {
    return fetchAPI('/collections');
  },
  
  getBySlug: (slug: string) => {
    return fetchAPI(`/collections/${slug}`);
  },
};

/**
 * Cart API
 */
export const cartAPI = {
  get: () => {
    return fetchAPI('/cart');
  },
  
  addItem: (productId: string, quantity: number, size: string) => {
    return fetchAPI('/cart', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity, size }),
    });
  },
  
  updateItem: (itemId: string, quantity: number) => {
    return fetchAPI(`/cart/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    });
  },
  
  removeItem: (itemId: string) => {
    return fetchAPI(`/cart/${itemId}`, {
      method: 'DELETE',
    });
  },
};

/**
 * Auth API
 */
export const authAPI = {
  login: (email: string, password: string) => {
    return fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
  
  register: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    return fetchAPI('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  logout: () => {
    return fetchAPI('/auth/logout', { method: 'POST' });
  },
};

