import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterInput } from 'api/User';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  dateOfBirth: Yup.string().required('Date of birth is required'),
  email: Yup.string().email('Please enter a valid email!').required('Email is required'),
  password: Yup.string().min(6, 'Password should be more than 6 letters').required('Password is required'),
});
export const useRegisterForm = () => {
  return useForm<RegisterInput>({
    resolver: yupResolver(RegisterSchema),
  });
};

export type RegisterForm = ReturnType<typeof useRegisterForm>;
