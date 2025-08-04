import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { apiService } from '../../services/api';
import { Product } from '../../types/product';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.css';

const Home: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getProducts(6); // Limit to 6 products for demo
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleRetry = () => {
    setError(null);
    setProducts([]);
    // Re-trigger the effect by changing a state
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Welcome to Multi-Theme Switcher
          </h1>
          <p className={styles.heroSubtitle}>
            Experience different themes with dynamic layouts, fonts, and colors. 
            Try switching between themes using the dropdown in the header!
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Unique Themes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Responsive</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Possibilities</span>
            </div>
          </div>
        </section>

        {/* Sample Content Section */}
        <section className={styles.content}>
          <h2 className={styles.sectionTitle}>Sample Content</h2>
          <p className={styles.sectionText}>
            This is a demonstration of how different themes can completely transform 
            the look and feel of an application. Each theme not only changes colors 
            but also affects typography, spacing, layout structure, and animations.
          </p>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Theme 1: Minimalist</h3>
              <p className={styles.featureText}>
                Clean and simple design with light backgrounds and Inter font family.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Theme 2: Dark Sidebar</h3>
              <p className={styles.featureText}>
                Professional dark theme with sidebar layout and elegant Playfair Display font.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Theme 3: Colorful Cards</h3>
              <p className={styles.featureText}>
                Vibrant and playful design with card-based layout and fun Pacifico font.
              </p>
            </div>
          </div>

          <button className={styles.ctaButton}>
            Get Started
          </button>
        </section>

        {/* Products Section */}
        <section className={styles.products}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          
          {loading && (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              <p>Loading products...</p>
            </div>
          )}

          {error && (
            <div className={styles.error}>
              <p>{error}</p>
              <button onClick={handleRetry} className={styles.retryButton}>
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            <div className={styles.productGrid}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;