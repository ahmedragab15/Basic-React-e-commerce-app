import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetailsContainer = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #5e50a1;
  margin-bottom: 16px;
`;

const AddToCartButton = styled.button`
  background-color: #5e50a1;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4a4083;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <ProductDetailsContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;