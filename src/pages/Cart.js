import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const CartContainer = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
`;

const CartTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #333;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #5e50a1;
`;

const QuantityInput = styled.input`
  width: 50px;
  padding: 4px;
  text-align: center;
  margin-right: 8px;
`;

const RemoveButton = styled.button`
  background-color: #ff5252;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e53935;
  }
`;

const ClearCartButton = styled.button`
  background-color: #d9534f; /* Reddish color */
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
  margin-top: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto; /* Center the button */

  &:hover {
    background-color: #c9302c;
  }
`;

const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: right;
  margin-top: 16px;
  color: #5e50a1;
`;

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      {cartItems.length === 0 ? (
        <EmptyMessage>Your cart is empty.</EmptyMessage>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                {/* Display the product image */}
                <ItemImage src={item.image} alt={item.title} />
                {/* Display product details */}
                <ItemDetails>
                  <ItemName>{item.title}</ItemName>
                  <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
                </ItemDetails>
                {/* Quantity input and delete button */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <QuantityInput
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <RemoveButton onClick={() => removeFromCart(item.id)}>Delete</RemoveButton>
                </div>
              </CartItem>
            ))}
          </ul>
          <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
          <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;