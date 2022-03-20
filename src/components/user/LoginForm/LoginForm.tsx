import { Button } from "components/shared/Button/Button";
import { Icon } from "components/shared/Icon/Icon";
import Input from "components/shared/Input/Input";
import { useAuthContext } from "lib/context/AuthContext/AuthContext";
import { LoginFields, useLoginForm } from "lib/hooks/form/useLoginForm";
import { useUserMutation } from "lib/hooks/mutations/userMutations";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useLoginForm();
  const authCtx = useAuthContext();
  const { mutate, isLoading } = useUserMutation("login");

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    try {
      await mutate(data, {
        onSuccess: (res) => authCtx.login(res),
        onError: (e: any) => {
          toast.error(e.message);
        },
      });
    } catch (e) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <Input
          id="email"
          label="email"
          name="email"
          type="email"
          placeholder="Email Address"
          register={register}
          error={errors.email?.message}
        />
        <Input
          id="password"
          name="password"
          label="password"
          type="password"
          placeholder="Password"
          register={register}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          loading={isLoading}
          disabled={!isValid || isLoading}
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
