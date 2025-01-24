import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DailyRecord } from "@/entities/dailyRecord/model/types";

interface DailyRecordState {
  currentRecord: DailyRecord | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: DailyRecordState = {
  currentRecord: null,
  isLoading: false,
  error: null,
};

const dailyRecordSlice = createSlice({
  name: "dailyRecord",
  initialState,
  reducers: {
    setCurrentRecord: (state, action: PayloadAction<DailyRecord>) => {
      state.currentRecord = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrentRecord, setLoading, setError } = dailyRecordSlice.actions;
export default dailyRecordSlice.reducer;
