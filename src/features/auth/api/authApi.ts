import type { LoginForm, RegisterForm } from "../model/types";

import type { User } from "@/entities/user/model/types";
import { axiosInstance } from "@/shared/api/axios";

export const authApi = {
  register: async (data: RegisterForm): Promise<void> => {
    await axiosInstance.post("/register/", {
      username: data.username,
      password: data.password,
    });
  },

  login: async (data: LoginForm): Promise<User> => {
    const response = await axiosInstance.post("/login/", data);
    return response.data;
  },
};
