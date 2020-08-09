import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields.', 'bg-red-300');
    } else if (password !== password2) {
      setAlert('Passwords do not match.', 'bg-red-300');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className='w-128'>
      <h3 className='font-bold flex justify-center'>Account Register</h3>
      <form onSubmit={onSubmit}>
        <div className='flex justify-center'>
          <label className='border-b-2 border-black' htmlFor='name'>
            Name:{' '}
          </label>
          <input
            className=' border-b-2 border-black w-56'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>

        <div className='flex justify-center'>
          <label className='border-b-2 border-black' htmlFor='email'>
            Email:{' '}
          </label>
          <input
            className='border-b-2 border-black w-56'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className='flex justify-center'>
          <label className='border-b-2 border-black' htmlFor='password'>
            Password:{' '}
          </label>
          <input
            className='border-b-2 border-black w-48'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            require
            minLength='6'
          />
        </div>

        <div className='flex justify-center'>
          <label className='border-b-2 border-black' htmlFor='password2'>
            Confirm Password
          </label>
          <input
            className='border-b-2 border-black w-56'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>

        <div className='flex justify-center p-2'>
          <input
            className='bg-blue-400 p-2 w-128'
            type='submit'
            value='Register'
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
