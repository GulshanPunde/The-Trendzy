import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  // Example cart data
  const initialCart = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdate = (id) => {
    // Handle product update (e.g., increase quantity, change details, etc.)
    alert(`Update product with id: ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
            />
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
