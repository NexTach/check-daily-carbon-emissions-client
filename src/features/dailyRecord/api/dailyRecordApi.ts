import { DailyRecord } from "@/entities/dailyRecord/model/types";
import { axiosInstance } from "@/shared/api/axios";

export const dailyRecordApi = {
  create: async (data: Partial<DailyRecord>): Promise<DailyRecord> => {
    try {
      const response = await axiosInstance.post("/daily-records/", data);
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 400) {
        throw new Error(error.response.data.error || "데이터 저장에 실패했습니다.");
      }
      throw error;
    }
  },

  update: async (date: string, data: Partial<DailyRecord>): Promise<DailyRecord> => {
    const response = await axiosInstance.put(`/daily-records/${date}/`, data);
    return response.data;
  },

  getByDate: async (date: string): Promise<DailyRecord> => {
    const response = await axiosInstance.get(`/daily-records/${date}/`);
    return response.data;
  },

  getAll: async (): Promise<DailyRecord[]> => {
    const response = await axiosInstance.get("/daily-records/");
    return response.data;
  },

  delete: async (date: string): Promise<void> => {
    await axiosInstance.delete(`/daily-records/${date}/`);
  },
};
