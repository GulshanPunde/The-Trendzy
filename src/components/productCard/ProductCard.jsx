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
    <div className="card shadow-lg" style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
      <img
        onClick={handleClick}
        src={imgPath}
        alt={product.name}
        className="card-img-top pointer"
        style={{
          width: '100%',  // Make the image take up full width
          height: 'auto', // Maintain aspect ratio
          objectFit: 'cover', // Ensure it covers the area without distortion
          borderRadius: '8px 8px 0 0',  // Rounded top corners
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
