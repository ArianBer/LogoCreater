import LoginForm from 'components/user/LoginForm/LoginForm';
import { RouteComponentProps } from 'react-router-dom';

//styles
import './Login.scss';

interface Props {}

export const Login = (props: RouteComponentProps<Props>) => {
  return (
    <div className="Login">
      <LoginForm />
    </div>
  );
};
