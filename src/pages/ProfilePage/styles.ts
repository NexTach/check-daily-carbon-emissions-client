import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  background: white;
  border-radius: 8px;
  margin: 16px;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;

  span {
    color: white;
    font-size: 14px;
  }
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  overflow: hidden;
  margin-bottom: 16px;
  border: 2px solid #eee;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover ${ImageOverlay} {
    opacity: 1;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Username = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

export const CashInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  span:first-child {
    font-size: 14px;
    color: #666;
  }

  span:last-child {
    font-size: 20px;
    font-weight: 600;
    color: #3850c9;
  }
`;

export const LogoutButton = styled.button`
  width: calc(100% - 32px);
  margin: 16px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  color: #ff4444;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #fff5f5;
    border-color: #ff4444;
  }
`;
