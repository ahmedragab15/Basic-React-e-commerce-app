import { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
  width: 250px;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor:pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #5e50a1; /* Purple */
  margin-bottom: 16px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddToCartButton = styled.button`
  background-color: #5e50a1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4a4083;
  }
`;

const ViewDetailsButton = styled(Link)`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCardComponent = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <CardContainer>
      <ImageWrapper>
        <ProductImage src={product.image} alt={product.title} />
      </ImageWrapper>
      <Content>
        <Title title={product.title}>{product.title}</Title>
        <Price>${product.price.toFixed(2)}</Price>
        <ActionButtons>
          <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
          <ViewDetailsButton to={`/product/${product.id}`}>View Details</ViewDetailsButton>
        </ActionButtons>
      </Content>
    </CardContainer>
  );
};

export default ProductCardComponent;