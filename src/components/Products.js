import React from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from './ProductCard';

const Products = () => {
  const { products } = useAppContext();

  return (
    <section className="section__container product__container" id="product">
      <h2 className="section__header">Products</h2>
      <div className="product__grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
