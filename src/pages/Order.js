import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import OrderDetailModal from '../components/OrderDetailModal'; // Assume you create this component

function Order() {
  const [orders, ] = useState(JSON.parse(localStorage.getItem('orders')) || []);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to handle opening modal and setting selected order
  const openModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      <Nav />
      <div className="container-fluid">
        <h2 className='text-center'>Orders</h2>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>

        <div className="mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>Order Time</th>
                <th>Full Name</th>
                <th>Address</th>
                <th>Total</th>
                <th>Products</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{new Date(order.orderTime).toLocaleString()}</td>
                  <td>{order.fullName}</td>
                  <td>{order.address}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <ul>
                      {order.products.map((product, idx) => (
                        <li key={idx}>
                          {product.name} - ${product.price} - Quantity: {product.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button className="btn btn-info btn-sm" onClick={() => openModal(order)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Order Details */}
      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          showModal={showModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default Order;
