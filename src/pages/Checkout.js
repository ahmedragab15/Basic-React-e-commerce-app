import React from 'react';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CheckoutTitle = styled.h2`
  margin-bottom: 24px;
  color: #333;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputField = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
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

const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <PaymentForm>
        <InputField type="text" placeholder="Full Name" />
        <InputField type="email" placeholder="Email Address" />
        <InputField type="text" placeholder="Address" />
        <SubmitButton type="submit">Proceed to Payment</SubmitButton>
      </PaymentForm>
    </CheckoutContainer>
  );
};

export default Checkout;