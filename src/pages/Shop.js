import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import SubProductCard from '../components/SubProductCard';
import Nav from '../components/Nav';

const Shop = () => {
  const { id } = useParams();
  const { products } = useAppContext();

  // Find the selected product by ID
  const selectedProduct = products.find(product => product.id === parseInt(id));

  if (!selectedProduct) return <div>Product not found</div>;

  return (
    <div className="section__container product__container">
      <Nav/>
      <div className="mb-3">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
      <h2>{selectedProduct.name}</h2>
      <div className="product__grid">
        {selectedProduct.subProducts.length > 0 ? (
          selectedProduct.subProducts.map((subProduct, index) => (
            <SubProductCard
              key={index}
              id={subProduct.id}
              name={subProduct.name}
              price={subProduct.price}
              image={subProduct.image}
              isSubProduct={true}
            />
          ))
        ) : (
          <p>No sub-products available for this item.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
