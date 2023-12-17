import { useDispatch, useSelector } from 'react-redux';
import style from './userInfo.module.scss';
import { useEffect } from 'react';
import { fetchUserInfo } from '../redux/slices/profileSlice';

export const UserInfo = () => {
  const userInfo = useSelector((state) => state.profile.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);
  return (
    <section className={style.info}>
      <p className={style.title}>
        <strong>
          {userInfo.firstName} {userInfo.lastName}
        </strong>
      </p>
      <div className={style.pesonalData}>
        <p>
          <strong>Street:</strong>
        </p>
        <p>{userInfo.street}</p>
        <p>
          <strong>City: </strong>
        </p>
        <p>{userInfo.city}</p>
        <p>
          <strong>Province</strong>
        </p>
        <p>{userInfo.province}</p>
        <p>
          <strong>Postal code</strong>
        </p>
        <p>{userInfo.postCode}</p>
        <p>
          <strong>Phone</strong>
        </p>
        <p>{userInfo.phone}</p>
      </div>
    </section>
  );
};
