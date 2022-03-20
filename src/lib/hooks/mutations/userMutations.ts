import { login, register } from "api/Api";
import { createQueryBuilder, createUseMutation } from "../builder";

const builder = createQueryBuilder()
  .mutation("login", login)
  .mutation("register", register);

export const useUserMutation = createUseMutation(builder);
