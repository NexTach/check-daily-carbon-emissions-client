import styled from "styled-components";

export const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 400px;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  height: 100%;
  font-size: 1.5rem;
  cursor: pointer;
  padding-left: 3rem;
  padding-right: 3rem;
  transition: transform 0.2s;
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
  }
`;
