import React from 'react';
import ProductCard from './ProductCard';

function ShowProduct() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      description: 'This is a high-quality product that meets all your needs.',
      image: 'https://picsum.photos/500/300?random=1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      description: 'Affordable and durable, this product is perfect for daily use.',
      image: 'https://picsum.photos/500/300?random=2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      description: 'Designed for excellence, this product offers premium quality.',
      image: 'https://picsum.photos/500/300?random=3',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
      description: 'Experience the best performance with this top-rated product.',
      image: 'https://picsum.photos/500/300?random=4',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 59.99,
      description: 'Innovative design and exceptional functionality in one package.',
      image: 'https://picsum.photos/500/300?random=5',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 69.99,
      description: 'Reliable, efficient, and built to last for long-term use.',
      image: 'https://picsum.photos/500/300?random=6',
    },
  ];

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
