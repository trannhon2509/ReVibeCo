import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCard = () => {
  // Lấy danh sách sản phẩm từ localStorage
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Tăng giảm số lượng sản phẩm trong giỏ hàng
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(index); // Xóa sản phẩm nếu số lượng là 0 hoặc âm
      return;
    }
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Xóa toàn bộ dữ liệu trong localStorage
  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <div className="shopping-card container-fluid">
      <h2 className="text-center">Shopping Cart</h2>
      <div className="cart-actions mb-3">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <button className="btn btn-danger ms-3" onClick={handleClearCart}>
          Clear All
        </button>
        <Link to="/checkout" className="btn btn-success ms-3">
          Checkout
        </Link>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <div className="input-group">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => handleQuantityChange(index, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => handleQuantityChange(index, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleRemoveFromCart(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShoppingCard;
