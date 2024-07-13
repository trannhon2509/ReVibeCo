import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image }) => {
  return (
    <div className="product__card">
      <h4>{name}</h4>
      <p>{price} VNĐ</p>
      <img src={image} alt={name} />
      <Link to={`/shop/${id}`} className="ww product__link bg-success text-white px-5 py-2 text-decoration-none ms-5">
        Buy now
      </Link>
    </div>
  );
};

export default ProductCard;
