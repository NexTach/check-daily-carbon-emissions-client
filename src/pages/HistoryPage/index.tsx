import * as S from "./styles";

import { useEffect, useState } from "react";

import type { DailyRecord } from "@/entities/dailyRecord/model/types";
import { EmissionHistory } from "@/widgets/EmissionHistory";
import { EmissionSummary } from "@/widgets/EmissionSummary";
import { Navigation } from "@/widgets/Navigation";
import { dailyRecordApi } from "@/features/dailyRecord/api/dailyRecordApi";
import { useAuth } from "@/shared/lib/hooks/useAuth";
import { useToast } from "@/shared/ui/Toast/ToastContext";

export const HistoryPage = () => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [records, setRecords] = useState<DailyRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dailyRecordApi.getAll();
        setRecords(data);
      } catch (error) {
        showToast("데이터를 불러오는데 실패했습니다.", "error");
        console.error("데이터 로딩 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user, showToast]);

  if (!user) return null;
  if (isLoading) return <div>Loading...</div>;

  return (
    <S.Container>
      <EmissionSummary records={records} />
      <EmissionHistory records={records} />
      <Navigation />
    </S.Container>
  );
};
