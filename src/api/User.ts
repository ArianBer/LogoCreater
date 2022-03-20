import { apiRequest } from "./Api";

export interface User {
  birthday: string;
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: number;
  token: string;
  updated_at: string;
  username: string;
}
export interface LoginRegisterResponse {
  success: string;
  user: User;
}

export interface RegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface FacebookLoginInput {
  email: string;
  password: string;
}

export const register = async (
  data: RegisterInput
): Promise<LoginRegisterResponse> =>
  apiRequest<RegisterInput, LoginRegisterResponse>(
    "post",
    "api/register",
    data
  );

export const login = async (data: LoginInput) =>
  apiRequest<LoginInput, User>("post", "auth/login", data);

export const getUserDetails = async () =>
  apiRequest<undefined, User>("get", "users/me");
