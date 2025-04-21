import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const NavbarContainer = styled.nav`
  background-color: #5e50a1;
  padding: 12px 24px;
  position: sticky;
  top: 0; /* Ensure it sticks to the very top */
  z-index: 1000; /* Ensure it appears above other content */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: 0 16px;
  transition: color 0.2s ease;

  &:hover {
    color: #d8b4f8;
  }
`;

const CartCount = styled.span`
  position: absolute;
  z-index:-1;
  top:-10%;
  right:-70%;
  color: #fff;
  background: red;
  font-size:14;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <NavbarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">
        Cart
        <CartCount>{cartItems.length}</CartCount>
      </NavLink>

      <NavLink to="/checkout">Checkout</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
