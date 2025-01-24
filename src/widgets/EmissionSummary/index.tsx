import * as S from "./styles";

import type { DailyRecord } from "@/entities/dailyRecord/model/types";
import { calculateAverageEmissions } from "./lib/calculations";

interface EmissionSummaryProps {
  records: DailyRecord[];
}

export const EmissionSummary = ({ records }: EmissionSummaryProps) => {
  const weeklyAvg = calculateAverageEmissions(records, 7);
  const monthlyAvg = calculateAverageEmissions(records, 30);
  const yearlyAvg = calculateAverageEmissions(records, 365);

  const todayRecord = records[0];
  const savedToday = todayRecord?.carbonSaved || 0;
  const savedMarineLife = Math.floor((todayRecord?.carbonSaved || 0) * 2);

  return (
    <S.Container>
      <S.Title>탄소 배출량 요약</S.Title>
      <S.SavingInfo>
        <S.SavingText>오늘 {savedToday.toFixed(3)} CO₂kg 절약했어요!</S.SavingText>
        <S.MarineLifeText>총 {savedMarineLife}마리의 해양 생물을 살렸어요!</S.MarineLifeText>
      </S.SavingInfo>
      <S.Grid>
        <S.Card>
          <S.Label>주간 평균</S.Label>
          <S.Value>{weeklyAvg.toFixed(3)} kg</S.Value>
        </S.Card>
        <S.Card>
          <S.Label>월간 평균</S.Label>
          <S.Value>{monthlyAvg.toFixed(3)} kg</S.Value>
        </S.Card>
        <S.Card>
          <S.Label>연간 평균</S.Label>
          <S.Value>{yearlyAvg.toFixed(3)} kg</S.Value>
        </S.Card>
      </S.Grid>
    </S.Container>
  );
};
