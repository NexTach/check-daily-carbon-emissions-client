import * as S from "./styles";

import { ROUTES } from "@/shared/config/routes";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleHistoryClick = () => {
    navigate(ROUTES.HISTORY);
  };

  const handleHomeClick = () => {
    navigate(ROUTES.DAILY_INPUT);
  };

  return (
    <S.BottomNav>
      <S.NavButtons>
        <S.NavButton>🔍</S.NavButton>
        <S.NavButton onClick={handleHomeClick}>🏠</S.NavButton>
        <S.NavButton onClick={handleHistoryClick}>📋</S.NavButton>
      </S.NavButtons>
    </S.BottomNav>
  );
};
