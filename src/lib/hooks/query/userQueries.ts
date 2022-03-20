import { createQueryBuilder, createUseQuery } from "../builder";
import { getUserDetails } from "api/Api";

const builder = createQueryBuilder().query("getUserDetails", getUserDetails);

export const useUserQuery = createUseQuery(builder);
