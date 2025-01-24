import { ApiError } from "../api/types";

export class AppError extends Error {
  constructor(message: string, public status: number = 500, public errors?: Record<string, string[]>) {
    super(message);
    this.name = "AppError";
  }

  static fromApiError(error: ApiError): AppError {
    return new AppError(error.message, error.status, error.errors);
  }
}

export const handleApiError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message);
  }

  return new AppError("알 수 없는 오류가 발생했습니다.");
};
