import * as S from "../LoginForm/styles";

import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";
import { useState } from "react";

export interface RegisterFormData {
  username: string;
  password: string;
  passwordConfirm: string;
}

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => Promise<void>;
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    await onSubmit(formData);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>회원가입</S.Title>
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
        <S.Input
          type="password"
          placeholder="비밀번호 확인"
          value={formData.passwordConfirm}
          onChange={(e) => setFormData({ ...formData, passwordConfirm: e.target.value })}
        />
        <S.Button type="submit">회원가입</S.Button>
        <S.LinkText>
          이미 계정이 있으신가요? <Link to={ROUTES.LOGIN}>로그인</Link>
        </S.LinkText>
      </S.Form>
    </S.Container>
  );
};
