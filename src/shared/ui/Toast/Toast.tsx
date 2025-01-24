import { FC } from "react";
import styled from "styled-components";

interface ToastProps {
  message: string;
  type: "error" | "success" | "info";
  isVisible: boolean;
}

export const Toast: FC<ToastProps> = ({ message, type, isVisible }) => {
  if (!isVisible) return null;

  return <ToastContainer type={type}>{message}</ToastContainer>;
};

const ToastContainer = styled.div<{ type: "error" | "success" | "info" }>``;
