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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: #f8f9ff;
  border: 1px solid #e0e0e0;
`;

export const Date = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 12px;
`;

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #666;
`;

export const Value = styled.span<{ positive?: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ positive }) => (positive ? "#4CAF50" : "#3850c9")};
`;

export const ActivityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Activity = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
`;

export const ActivityIcon = styled.span`
  font-size: 16px;
`;

export const ActivityText = styled.span`
  font-size: 14px;
  color: #666;
`;
