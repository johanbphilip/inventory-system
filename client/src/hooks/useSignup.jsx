import { useState } from 'react';
import { useNavigate } from 'react-router';
import { server } from '../axios';

export const UseSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    // firstName: '',
    // lastName: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ' -]+)*$/;

  const newErrors = { email: '', password: '', firstName: '', lastName: '' };

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

    if (!firstName) {
      newErrors.firstName = 'First Name is required';
      valid = false;
    } else if (!nameRegex.test(firstName)) {
      newErrors.firstName = 'Names cannot contain numbers or invalid symbols';
      valid = false;
    }
    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
      valid = false;
    } else if (!nameRegex.test(lastName)) {
      newErrors.lastName = 'Names cannot contain numbers or invalid symbols';
      valid = false;
    }

    if (!organization) {
      setOrganization(' ');
    }

    setErrors(newErrors);
    return valid;
  };

  const handleUserSignup = async (event) => {
    event.preventDefault();

    if (!validate()) {
      console.log('Error with signing in using: ', email, password);
      setTotalError('');
      return;
    }
    setIsLoading(true);

    try {
      const { data } = await server.post('/auth/signup', {
        email,
        password,
        firstName,
        lastName,
        organization,
      });
      console.log('Signup successful:', data);
      navigate('/dashboard');
    } catch (error) {
      newErrors.password = error.response?.data?.message;
      setErrors(newErrors);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    organization,
    setOrganization,
    errors,
    isLoading,
    handleUserSignup,
  };
};
