import * as S from "./styles";

import { Navigation } from "@/widgets/Navigation";
import { ROUTES } from "@/shared/config/routes";
import { axiosInstance } from "@/shared/api/axios";
import { toast } from "react-toastify";
import { useAuth } from "@/shared/lib/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("이미지 크기는 5MB 이하여야 합니다.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      toast.error("이미지 파일만 업로드 가능합니다.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      await axiosInstance.put("/profile/image/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("프로필 이미지가 업데이트되었습니다.");
    } catch (error) {
      toast.error("이미지 업로드에 실패했습니다.");
    }
  };

  return (
    <S.Container>
      <S.ProfileSection>
        <S.ProfileImage onClick={handleImageClick}>
          <img src={user.profileImage || "/default-profile.png"} alt="Profile" />
          <S.ImageOverlay>
            <span>이미지 변경</span>
          </S.ImageOverlay>
        </S.ProfileImage>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <S.ProfileInfo>
          <S.Username>{user.username}</S.Username>
          <S.CashInfo>
            <span>보유 캐시</span>
            <span>0</span>
          </S.CashInfo>
        </S.ProfileInfo>
        <S.LogoutButton onClick={handleLogout}>로그아웃 하기</S.LogoutButton>
      </S.ProfileSection>

      <Navigation />
    </S.Container>
  );
};
