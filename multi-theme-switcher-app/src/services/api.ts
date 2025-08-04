import { Product } from '../types/product';
import { API_ENDPOINTS } from '../utils/constant';
/**
 * API Service for handling all HTTP requests to the Fake Store API
 * Provides methods for fetching products, categories, and individual items
 */
class ApiService {
  private async fetchWithErrorHandling<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API fetch error:', error);
      throw error;
    }
  }

  async getProducts(limit?: number): Promise<Product[]> {
    const url = limit ? API_ENDPOINTS.PRODUCTS_LIMIT(limit) : API_ENDPOINTS.PRODUCTS;
    return this.fetchWithErrorHandling<Product[]>(url);
  }

  async getProduct(id: number): Promise<Product> {
    return this.fetchWithErrorHandling<Product>(`${API_ENDPOINTS.PRODUCTS}/${id}`);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.fetchWithErrorHandling<Product[]>(`${API_ENDPOINTS.PRODUCTS}/category/${category}`);
  }

  async getCategories(): Promise<string[]> {
    return this.fetchWithErrorHandling<string[]>(`${API_ENDPOINTS.PRODUCTS}/categories`);
  }
}

export const apiService = new ApiService();
export default apiService;