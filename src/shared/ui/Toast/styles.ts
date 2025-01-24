import styled from "styled-components";

interface ToastProps {
  type: "success" | "error" | "info";
  message: string;
  isVisible: boolean;
}
export const ToastContainer = styled.div<ToastProps>`
  ${({ type }) => {
    const bgColor = {
      success: "#22c55e",
      error: "#ef4444",
      info: "#3b82f6",
    }[type];

    return `
      background-color: ${bgColor};
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px 
      transition: opacity 200ms ease-in-out;
    `;
  }}
`;
