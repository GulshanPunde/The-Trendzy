import React from 'react';
import { useSelector } from 'react-redux';  // Import useSelector
import ProductCard from './ProductCard';

function ShowProduct() {
  // Access products from Redux store
  const products = useSelector((state) => state.products.productsFromSearch);

  const handleUpdate = (product) => {
    alert(`Updating ${product.name}`);
  };

  const handleRemove = (product) => {
    alert(`Removing ${product.name}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Fashion with Trendzy....</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4">
            <ProductCard
              product={product}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowProduct;
