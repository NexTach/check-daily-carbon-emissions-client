import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3850c9;
    box-shadow: 0 0 0 2px rgba(56, 80, 201, 0.1);
  }
`;

export const SubmitButton = styled.button`
  background: #3850c9;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;

  &:hover {
    background: #2a3c9e;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const LinkText = styled.p`
  margin-top: 1.5rem;
  color: #666;
  text-align: center;
  font-size: 0.9rem;

  a {
    color: #3850c9;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ErrorText = styled.span`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;
