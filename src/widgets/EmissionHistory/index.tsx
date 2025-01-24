import * as S from "./styles";

import { DailyRecord } from "@/entities/dailyRecord/model/types";

interface EmissionHistoryProps {
  records: DailyRecord[];
}

export const EmissionHistory = ({ records }: EmissionHistoryProps) => {
  if (!records || records.length === 0) {
    return <div>기록된 데이터가 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.Title>상세 기록</S.Title>
      <S.List>
        {records.map((record) => (
          <S.Item key={record.date}>
            <S.Date>{new Date(record.date).toLocaleDateString()}</S.Date>
            <S.Details>
              <S.Detail>
                <S.Label>총 배출량:</S.Label>
                <S.Value>{record.totalCarbonEmission?.toFixed(3) || "0"} kg CO₂</S.Value>
              </S.Detail>
              <S.Detail>
                <S.Label>필요한 나무:</S.Label>
                <S.Value>{record.treesNeeded?.toFixed(1) || "0"} 그루</S.Value>
              </S.Detail>
              <S.Detail>
                <S.Label>절약한 양:</S.Label>
                <S.Value positive>{record.carbonSaved?.toFixed(3) || "0"} kg CO₂</S.Value>
              </S.Detail>
            </S.Details>
            <S.ActivityList>
              {record.waterConsumed > 0 && (
                <S.Activity>
                  <S.ActivityIcon>💧</S.ActivityIcon>
                  <S.ActivityText>물 사용: {record.waterConsumed}L</S.ActivityText>
                </S.Activity>
              )}
              {record.carUsageDistance > 0 && (
                <S.Activity>
                  <S.ActivityIcon>🚗</S.ActivityIcon>
                  <S.ActivityText>자동차: {record.carUsageDistance}km</S.ActivityText>
                </S.Activity>
              )}
              {record.walkingSteps > 0 && (
                <S.Activity>
                  <S.ActivityIcon>👣</S.ActivityIcon>
                  <S.ActivityText>걸음 수: {record.walkingSteps}걸음</S.ActivityText>
                </S.Activity>
              )}
            </S.ActivityList>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  );
};
