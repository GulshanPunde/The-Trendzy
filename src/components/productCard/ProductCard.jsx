import React from 'react';

const ProductCard = ({ product, onUpdate, onRemove }) => {
  return (
    <div
      className="card shadow-lg"
      style={{
        width: '100%', // Makes the card take full width of its container
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden', // Ensures the shadow is not cut off
      }}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px 8px 0 0',
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
          {product.description}
        </p>
        <p className="card-text">
          <strong>Price:</strong> ${product.price}
        </p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-warning"
            onClick={() => onUpdate(product)}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onRemove(product)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
