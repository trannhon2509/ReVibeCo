import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  // Lấy danh sách sản phẩm từ localStorage
  const [cartItems, ] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // Tính tổng số tiền trong giỏ hàng
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2 className="text-center mt-4">Checkout</h2>
      <div className="mt-4">
        <div className="mt-3">
          <Link to="/shoppingcard" className="btn btn-primary">
            Back to Shopping Cart
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>Total: ${totalPrice}</h4>
        
      </div>
      {/* Thêm phần thông tin người dùng, hình thức thanh toán và nút Place Order tại đây */}
    </div>
  );
};

export default Checkout;
