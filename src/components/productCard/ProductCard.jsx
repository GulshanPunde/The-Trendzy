import React from 'react';
import Price from '../extras/Price'; // Assuming this is the correct path
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onUpdate, onRemove }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/single/${product.id}`);
  };

  const imgPath = `/images/${product.id}.jpg`; // Image path based on product ID

  return (
    <div
      className="card shadow-lg"
      style={{
        width: '100%',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        textAlign: 'center', // Center align contents
      }}
    >
      <img
        onClick={handleClick}
        src={imgPath}
        alt={product.name}
        className="card-img-top pointer"
        style={{
          maxWidth: '80%', // Limit image width
          maxHeight: '150px', // Limit image height
          margin: '10px auto', // Center the image horizontally and add spacing
          display: 'block', // Ensure proper alignment
          objectFit: 'contain', // Ensure the image fits within the bounds without cropping
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
          {product.description}
        </p>
        <p className="card-text">
          <strong>Price:</strong> <Price value={product.price} />
        </p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-warning" onClick={() => onUpdate(product)}>
            Update
          </button>
          <button className="btn btn-danger" onClick={() => onRemove(product)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
