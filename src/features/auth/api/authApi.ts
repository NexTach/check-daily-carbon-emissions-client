import type { LoginForm, RegisterForm } from "../model/types";

import type { User } from "@/entities/user/model/types";
import { axiosInstance } from "@/shared/api/axios";

export const authApi = {
  login: async (data: LoginForm): Promise<User> => {
    const response = await axiosInstance.post("/login/", data);
    return response.data;
  },

  register: async (data: RegisterForm): Promise<User> => {
    const response = await axiosInstance.post("/register/", {
      username: data.username,
      password: data.password,
    });
    return response.data;
  },
};
