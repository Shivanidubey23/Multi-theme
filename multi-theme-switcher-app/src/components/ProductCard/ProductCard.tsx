import React from 'react';
import { ProductCardProps } from '../../types/product';
import { useTheme } from '../../context/ThemeContext';
import styles from './ProductCard.module.css';

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { themeConfig } = useTheme();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className={styles.star}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className={styles.starHalf}>
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className={styles.starEmpty}>
          ☆
        </span>
      );
    }

    return stars;
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.categoryBadge}>
          {product.category}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {truncateText(product.title, 60)}
        </h3>

        <p className={styles.description}>
          {truncateText(product.description, 100)}
        </p>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {renderStars(product.rating.rate)}
          </div>
          <span className={styles.ratingText}>
            {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
          </span>
        </div>

        <div className={styles.footer}>
          <div className={styles.price}>
            {formatPrice(product.price)}
          </div>
          
          <button className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;