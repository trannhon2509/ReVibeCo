import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [cartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // Kiểm tra thông tin người dùng đã nhập
    if (!fullName.trim()) {
      setError('Vui lòng nhập tên của bạn');
      return;
    }

    setLoading(true);
    setError('');

    // Tạo đơn hàng
    const order = {
      fullName: fullName,
      address: address,
      orderTime: new Date().toISOString(),
      products: cartItems.map(item => ({
        image: item.image,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice,
    };

    // Lưu đơn hàng xuống localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Xóa giỏ hàng sau khi đặt hàng thành công
    localStorage.removeItem('cart');

    setLoading(false);

    // Chuyển hướng hoặc thông báo thành công
    alert('Đặt hàng thành công!');
    window.location.href = '/';
    // Đoạn này bạn có thể chuyển hướng hoặc thực hiện hành động khác sau khi đặt hàng thành công
  };

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
        
        {/* Form nhập thông tin người dùng */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="form-control"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {error && <p className="text-danger">{error}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        
        {/* Nút Place Order */}
        <button className="btn btn-success" onClick={handlePlaceOrder} disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
