import cs from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Spinner } from 'reactstrap';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { className, children, loading, ...rest } = props;
  return (
    <button className={cs(className)} {...rest}>
      {loading ? <Spinner /> : children}
    </button>
  );
};
