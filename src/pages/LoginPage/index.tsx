import { LoginForm } from "@/features/auth/model/types";
import { LoginFormWidget } from "@/widgets/LoginForm";
import { ROUTES } from "@/shared/config/routes";
import { authApi } from "@/features/auth/api/authApi";
import { useAuth } from "@/shared/lib/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (data: LoginForm) => {
    try {
      const userData = await authApi.login(data);
      login(userData);
      navigate(ROUTES.DAILY_INPUT);
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return <LoginFormWidget onSubmit={handleLogin} />;
};
