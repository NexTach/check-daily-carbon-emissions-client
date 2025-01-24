import * as S from "./styles";

import { ROUTES } from "@/shared/config/routes";
import { User } from "@/entities/user/model/types";
import { useNavigate } from "react-router-dom";

interface ProfileHeaderProps {
  user: User;
}

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  const navigate = useNavigate();

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleProfileClick = () => {
    navigate(ROUTES.PROFILE);
  };

  return (
    <S.Header onClick={handleProfileClick}>
      <S.ProfileSection>
        <S.ProfileImage>
          <span>👤</span>
        </S.ProfileImage>
        <S.ProfileInfo>
          <S.Username>{user.username} 님</S.Username>
          <S.ProfileText>프로필</S.ProfileText>
        </S.ProfileInfo>
      </S.ProfileSection>
      <S.MenuButton onClick={handleMenuClick}>☰</S.MenuButton>
    </S.Header>
  );
};
