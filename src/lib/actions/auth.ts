"use server";

import { ActionState, errorState, successState } from "@/lib/action";
import { signinSchema } from "@/lib/validations/auth";

export const signinAction = async (
  previousState: ActionState<number>,
  formData: FormData
) => {
  const { data, error } = signinSchema.safeParse(Object.fromEntries(formData));

  if (error) {
    return errorState(error.message);
  }

  if (data.email.length < 10) {
    return errorState("로그인 실패!");
  }

  return successState(2, "로그인 성공");
};
