import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface LoginFields {
  email: string;
  password: string;
}
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email!")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be more than 6 letters")
    .required("Password is required"),
});
export const useLoginForm = () => {
  return useForm<LoginFields>({
    mode: "all",
    resolver: yupResolver(LoginSchema),
  });
};

export type LoginForm = ReturnType<typeof useLoginForm>;
