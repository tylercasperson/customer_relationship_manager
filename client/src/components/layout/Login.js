import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'bg-red-300');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.prevent.Default();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'bg-red-300');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className='w-128'>
      <div className='flex justify-center'>Account Login</div>
      <form onSubmit={onSubmit}>
        <div className='flex justify-center'>
          <label htmlFor='email'>Email: </label>
          <input
            className='border-b-2 border-black w-64'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className='flex justify-center'>
          <label htmlFor='password'>Password: </label>
          <input
            className='border-b-2 border-black w-56'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <div className='flex justify-center p-2'>
          <input
            className='bg-blue-400 p-2 w-128'
            type='submit'
            value='Login'
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
