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
    e.preventDefault();
    console.log(e.target.innerText);

    if (e.target.innerText === 'Administrator') {
      login({
        email: 'admin@gmail.com',
        password: '123456',
      });
    } else if (e.target.innerText === 'Manager') {
      login({
        email: 'manager@gmail.com',
        password: '123456',
      });
    } else if (e.target.innerText === 'Employee') {
      login({
        email: 'employee@gmail.com',
        password: '123456',
      });
    } else if (email === '' || password === '') {
      console.log(10);
      setAlert('Please fill in all fields', 'bg-red-300');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className='m-20'>
      <div className='flex justify-center font-extrabold text-xl'>
        Account Login
      </div>
      <form onSubmit={onSubmit}>
        <div className='flex justify-center'>
          <label htmlFor='email'>Email: </label>
          <input
            className='border-b-2 border-black w-64'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            // required
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
            // required
          />
        </div>

        <div className='flex justify-center p-2'>
          <input
            className='bg-blue-400 p-2 w-128'
            type='submit'
            value='Login'
          />
        </div>

        <div className='mt-10 text-center font-bold'>
          Here are options with different secutiry levels that do not make you
          register for this site:
        </div>

        <div className='flex justify-center'>
          <div
            className='w-32 m-4 p-2 bg-orange-400 text-center'
            onClick={onSubmit}
          >
            Administrator
          </div>
          <div
            className='w-24 m-4 p-2 bg-green-300 text-center'
            onClick={onSubmit}
          >
            Manager
          </div>
          <div
            className='w-24 m-4 p-2 bg-purple-400 text-center'
            onClick={onSubmit}
          >
            Employee
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
