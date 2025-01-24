import * as S from "./styles";

import { setCurrentRecord, setError, setLoading } from "@/store/dailyRecordSlice";
import { useDispatch, useSelector } from "react-redux";

import { DailyInputForm } from "@/widgets/DailyInputForm";
import type { DailyRecord } from "@/entities/dailyRecord/model/types";
import { Navigation } from "@/widgets/Navigation";
import { RootState } from "@/store/store";
import { dailyRecordApi } from "@/features/dailyRecord/api/dailyRecordApi";
import { toast } from "react-toastify";
import { useAuth } from "@/shared/lib/hooks/useAuth";
import { useEffect } from "react";

export const DailyInputPage = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { currentRecord, isLoading } = useSelector((state: RootState) => state.dailyRecord);

  useEffect(() => {
    const fetchTodayData = async () => {
      if (!user) return;

      dispatch(setLoading(true));
      const today = new Date().toISOString().split("T")[0];

      try {
        const data = await dailyRecordApi.getByDate(today);
        dispatch(setCurrentRecord(data));
      } catch (error: any) {
        if (error.response?.status === 404) {
          if (!currentRecord) {
            const emptyData = {
              waterConsumed: 0,
              showerTime: 0,
              carUsageDistance: 0,
              carUsageTime: 0,
              publicTransportTime: 0,
              walkingSteps: 0,
              electricityUsage: 0,
              videoWatchingTime: 0,
              internetUsage: 0,
              phoneCallTime: 0,
              totalCarbonEmission: 0,
              carbonSaved: 0,
              treesNeeded: 0,
              date: today,
            };
            dispatch(setCurrentRecord(emptyData));
          }
        } else {
          dispatch(setError("데이터를 불러오는데 실패했습니다."));
          console.error("Error fetching today's data:", error);
        }
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchTodayData();
  }, [user, dispatch]);

  const handleFormSubmit = async (data: Partial<DailyRecord>) => {
    try {
      const response = await dailyRecordApi.create(data);
      dispatch(setCurrentRecord(response));

      if (response.carbonSaved > 0) {
        toast.success(`오늘의 탄소 절약량: ${response.carbonSaved.toFixed(2)}kg CO2`);
      } else {
        toast.info("아직 탄소 절약을 시작하지 않았습니다. 걷기나 대중교통 이용을 시도해보세요!");
      }

      return response;
    } catch (error) {
      console.error(error);
      toast.error("저장에 실패했습니다.");
      throw error;
    }
  };

  if (!user) return null;
  if (isLoading) return <div>로딩중...</div>;

  return (
    <S.Container>
      <DailyInputForm onSubmit={handleFormSubmit} initialData={currentRecord} currentData={currentRecord} user={user} />
      <Navigation />
    </S.Container>
  );
};
