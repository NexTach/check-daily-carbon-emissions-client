import * as S from "./styles";

import { useEffect, useState } from "react";

import { DailyRecord } from "@/entities/dailyRecord/model/types";
import { ProfileHeader } from "@/shared/ui/ProfileHeader";
import { RootState } from "@/store/store";
import { User } from "@/entities/user/model/types";
import { useSelector } from "react-redux";

interface DailyInputFormProps {
  onSubmit: (data: Partial<DailyRecord>) => Promise<void>;
  user: User;
}

export const DailyInputForm = ({ onSubmit, user }: DailyInputFormProps) => {
  const currentRecord = useSelector((state: RootState) => state.dailyRecord.currentRecord);
  const [formData, setFormData] = useState<Partial<DailyRecord>>(() => {
    return {
      waterConsumed: currentRecord?.waterConsumed || 0,
      showerTime: currentRecord?.showerTime || 0,
      carUsageDistance: currentRecord?.carUsageDistance || 0,
      carUsageTime: currentRecord?.carUsageTime || 0,
      publicTransportTime: currentRecord?.publicTransportTime || 0,
      walkingSteps: currentRecord?.walkingSteps || 0,
      electricityUsage: currentRecord?.electricityUsage || 0,
      videoWatchingTime: currentRecord?.videoWatchingTime || 0,
      internetUsage: currentRecord?.internetUsage || 0,
    };
  });

  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    if (currentRecord) {
      setFormData({
        waterConsumed: currentRecord.waterConsumed,
        showerTime: currentRecord.showerTime,
        carUsageDistance: currentRecord.carUsageDistance,
        carUsageTime: currentRecord.carUsageTime,
        publicTransportTime: currentRecord.publicTransportTime,
        walkingSteps: currentRecord.walkingSteps,
        electricityUsage: currentRecord.electricityUsage,
        videoWatchingTime: currentRecord.videoWatchingTime,
        internetUsage: currentRecord.internetUsage,
      });
      setIsFormChanged(false);
    }
  }, [currentRecord]);

  const handleInputChange = (field: keyof DailyRecord, value: number) => {
    setFormData((prev) => {
      const newData = {
        ...prev,
        [field]: value,
      };

      const hasChanged = Object.entries(newData).some(([key, val]) => {
        return currentRecord?.[key as keyof DailyRecord] !== val;
      });

      setIsFormChanged(hasChanged);
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <ProfileHeader user={user} />

      <S.Card>
        <S.CardHeader>
          <S.CardTitle>
            <span>🔥</span>
            <span>오늘의 탄소 절약량</span>
          </S.CardTitle>
          <S.InputGrid>
            <span>{currentRecord?.carbonSaved?.toFixed(2) || "0.00"}</span>
            <span>CO₂eq</span>
          </S.InputGrid>
        </S.CardHeader>
      </S.Card>

      <S.Card>
        <S.CardHeader>
          <S.CardTitle>
            <span>🚶 </span>
            <span>걸음 수</span>
          </S.CardTitle>
          <S.InputGrid>
            <span>{formData.walkingSteps}</span>
            <span>걸음</span>
          </S.InputGrid>
        </S.CardHeader>
      </S.Card>

      <S.Card>
        <S.CardTitle>
          <span>🚗</span>
          <span>대중교통 사용시간</span>
        </S.CardTitle>
        <S.InputGrid>
          <S.InputGroup>
            <S.InputLabel>자가용 사용시간</S.InputLabel>
            <S.InputWrapper>
              <S.TimeInput
                type="number"
                placeholder="시간"
                value={Math.floor((formData.carUsageTime ?? 0) / 60)}
                onChange={(e) => handleInputChange("carUsageTime", parseFloat(e.target.value) * 60)}
              />
              <span>시간</span>
              <S.TimeInput
                type="number"
                placeholder="분"
                value={(formData.carUsageTime ?? 0) % 60}
                onChange={(e) => handleInputChange("carUsageTime", parseFloat(e.target.value))}
              />
              <span>분</span>
            </S.InputWrapper>
          </S.InputGroup>
          <S.InputGroup>
            <S.InputLabel>대중교통 사용시간</S.InputLabel>
            <S.InputWrapper>
              <S.TimeInput
                type="number"
                placeholder="시간"
                value={Math.floor((formData.publicTransportTime ?? 0) / 60)}
                onChange={(e) => handleInputChange("publicTransportTime", parseFloat(e.target.value) * 60)}
              />
              <span>시간</span>
              <S.TimeInput
                type="number"
                placeholder="분"
                value={(formData.publicTransportTime ?? 0) % 60}
                onChange={(e) => handleInputChange("publicTransportTime", parseFloat(e.target.value))}
              />
              <span>분</span>
            </S.InputWrapper>
          </S.InputGroup>
        </S.InputGrid>
      </S.Card>

      <S.Card>
        <S.CardTitle>
          <span>💧</span>
          <span>물 소비량</span>
        </S.CardTitle>
        <S.InputGrid>
          <S.InputGroup>
            <S.InputLabel>마신 물 (한잔당 500ml)</S.InputLabel>
            <S.InputWrapper>
              <S.WaterButtons>
                {[1, 2, 3, 4].map((num) => (
                  <S.WaterButton
                    key={num}
                    active={(formData.waterConsumed ?? 0) >= num * 500}
                    onClick={() => handleInputChange("waterConsumed", num * 500)}
                  >
                    {num}
                  </S.WaterButton>
                ))}
              </S.WaterButtons>
            </S.InputWrapper>
          </S.InputGroup>
          <S.InputGroup>
            <S.InputLabel>샤워 시간</S.InputLabel>
            <S.InputWrapper>
              <S.TimeInput
                type="number"
                placeholder="시간"
                value={Math.floor((formData.showerTime ?? 0) / 60)}
                onChange={(e) => handleInputChange("showerTime", parseFloat(e.target.value) * 60)}
              />
              <span>시간</span>
              <S.TimeInput
                type="number"
                placeholder="분"
                value={(formData.showerTime ?? 0) % 60}
                onChange={(e) => handleInputChange("showerTime", parseFloat(e.target.value))}
              />
              <span>분</span>
            </S.InputWrapper>
          </S.InputGroup>
        </S.InputGrid>
      </S.Card>

      {/* Only show submit button if form has changed */}
      {isFormChanged && <S.SubmitButton type="submit">저장</S.SubmitButton>}
    </S.Form>
  );
};
