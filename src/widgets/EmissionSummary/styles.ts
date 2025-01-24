import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin: 0 0 20px 0;
  font-size: 24px;
  color: #1a1a1a;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #f8f9ff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

export const Value = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #3850c9;
`;

export const SavingInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const SavingText = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #2c7a7b;
`;

export const MarineLifeText = styled.p`
  font-size: 1rem;
  color: #4a5568;
`;
