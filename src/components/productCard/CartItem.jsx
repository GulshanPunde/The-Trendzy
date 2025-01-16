import React from 'react';

const CartItem = ({ product, onRemove, onUpdate }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px', border: '1px solid #ddd' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.image}
            className="img-fluid rounded-start"
            alt={product.name}
            style={{ height: '150px', objectFit: 'cover', width: '100%' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              <strong>Price:</strong> ${product.price}
            </p>
            <p className="card-text">
              <strong>Quantity:</strong> {product.quantity}
            </p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-danger" onClick={() => onRemove(product.id)}>
                Remove
              </button>
              <button className="btn btn-warning" onClick={() => onUpdate(product.id)}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
