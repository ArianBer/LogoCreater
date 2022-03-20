import { RegisterInput } from "api/User";
import { Button } from "components/shared/Button/Button";
import Input from "components/shared/Input/Input";
import { useRegisterForm } from "lib/hooks/form/useRegisterForm";
import { useUserMutation } from "lib/hooks/mutations/userMutations";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

//Components

//Style
import "./RegisterForm.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useRegisterForm();
  const { mutate, isLoading } = useUserMutation("register");

  const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
    try {
      await mutate(data, {
        onSuccess: (res) => console.log(res),
        onError: (e: any) => {
          toast.error(e.response.data.error);
        },
      });
    } catch (e) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <Input
        id="email"
        name="email"
        label="email"
        type="email"
        placeholder="Email Address"
        register={register}
        error={errors.email?.message}
      />
      <Input
        id="email"
        name="email"
        label="password"
        type="password"
        placeholder="Password"
        register={register}
        error={errors.password?.message}
      />

      <Button type="submit" loading={isLoading} disabled={isValid && isLoading}>
        Login
      </Button>
    </form>
  );
};
