import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Title>Our Products</Title>
      <HomeContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HomeContainer>
    </div>
  );
};

export default Home;