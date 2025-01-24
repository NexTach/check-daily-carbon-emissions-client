import { RegisterForm, RegisterFormData } from "@/widgets/RegisterForm";

import { ROUTES } from "@/shared/config/routes";
import { authApi } from "@/features/auth/api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (data: RegisterFormData) => {
    try {
      await authApi.register(data);
      navigate(ROUTES.LOGIN);
      toast.success("회원가입이 완료되었습니다. 로그인해주세요.");
    } catch (error) {
      toast.error("회원가입에 실패했습니다.");
    }
  };

  return <RegisterForm onSubmit={handleRegister} />;
};
