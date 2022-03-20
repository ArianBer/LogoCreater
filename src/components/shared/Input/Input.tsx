import cs from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: string;
  inputClassName?: string;
}

const Input = (props: InputProps) => {
  const {
    className,
    id,
    placeholder,
    register,
    label,
    name,
    error,
    inputClassName,
    ...rest
  } = props;
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        className={cs(inputClassName)}
        id={id}
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
      <pre className="h-2 m-0 ml-2 mt-0.5 text-xs font-sans text-red-500">
        {error ? error : ""}
      </pre>
    </div>
  );
};

export default Input;
