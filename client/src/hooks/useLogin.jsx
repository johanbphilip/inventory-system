import { useState } from 'react';
import { server } from '../axios';
import { useNavigate } from 'react-router';

export const UseLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [totalError, setTotalError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const newErrors = { email: '', password: '' };
  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validate = () => {
    let valid = true;

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter an email formatted as: new@example.com';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleUserLogin = async (event) => {
    event.preventDefault();

    if (!validate()) {
      console.log('Error with login in using: ', email, password);
      setTotalError('');
      return;
    }
    setIsLoading(true);

    try {
      const { data } = await server.post('/auth/login', { email, password });
      console.log('Login successful:', data);
      navigate('/dashboard');
    } catch (error) {
      console.log('Log from handleUserLogin:', error);
      console.log(error.response?.data.message);
      setTotalError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    totalError,
    isLoading,
    handleUserLogin,
  };
};
