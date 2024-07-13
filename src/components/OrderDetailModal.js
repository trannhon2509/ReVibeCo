import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Ensure you have react-bootstrap installed

const OrderDetailModal = ({ order, showModal, closeModal }) => {
  return (
    <Modal show={showModal} onHide={closeModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Order Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Order Time:</strong> {new Date(order.orderTime).toLocaleString()}</p>
        <p><strong>Full Name:</strong> {order.fullName}</p>
        <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
        <p><strong>Products:</strong></p>
        <div className="row">
          {order.products.map((product, idx) => (
            <div key={idx} className="col-md-6 mb-3">
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    Price: ${product.price} <br />
                    Quantity: {product.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetailModal;
