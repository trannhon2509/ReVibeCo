import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image, viewed, sold }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <div className="product__card">
      <h4>{name}</h4>
      <p>{formatCurrency(price)}</p>
      <img src={image} alt={name} />
      <div className='d-flex justify-content-between'>
      <p>Lượt xem: {viewed}</p>
      <p>Đã bán: {sold} </p>
      </div>
      <Link to={`/shop/${id}`} className="ww product__link bg-success text-white px-5 py-2 text-decoration-none ms-5">
        Buy now
      </Link>
    </div>
  );
};

export default ProductCard;
