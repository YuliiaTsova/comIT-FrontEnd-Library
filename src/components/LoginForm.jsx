import { useState } from 'react';
import style from './loginForm.module.scss';
import { verifyUser } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyUser(userName, password));
  };
  return (
    <form className={style.loginForm} onSubmit={handleSubmit}>
      <label className={style.label}>
        <input
          type="input"
          className={style.input}
          placeholder="user name"
          name="username"
          value={userName}
          required
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="input"
          className={style.input}
          placeholder="password"
          name="usernpaswordame"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className={`${style.button} btnReset`}>Log in</button>
      </label>
    </form>
  );
};
