import * as S from "./styles";

import { Link } from "react-router-dom";
import { LoginForm } from "@/features/auth/model/types";
import { ROUTES } from "@/shared/config/routes";
import { useState } from "react";

interface LoginFormWidgetProps {
  onSubmit: (data: LoginForm) => Promise<void>;
}

export const LoginFormWidget = ({ onSubmit }: LoginFormWidgetProps) => {
  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>로그인</S.Title>
        <S.Input
          type="text"
          placeholder="아이디"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <S.Button type="submit">로그인</S.Button>
        <S.LinkText>
          계정이 없으신가요? <Link to={ROUTES.REGISTER}>회원가입</Link>
        </S.LinkText>
      </S.Form>
    </S.Container>
  );
};
