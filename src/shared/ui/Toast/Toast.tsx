import * as S from "./styles";

interface ToastProps {
  type: "success" | "error" | "info";
  message: string;
}

export const Toast = ({ type, message }: ToastProps) => {
  return (
    <>
      <S.ToastContainer type={type}>{message}</S.ToastContainer>
    </>
  );
};
