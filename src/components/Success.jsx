import { ButtonHold } from './ButtonHold';
import success from '../assets/img/success.png';
import style from './success.module.scss';
import { Link } from 'react-router-dom';

export const Success = () => {
  return (
    <div className={style.content}>
      <img src={success} alt="success img" className={style.img} />
      <p className={style.title}>Thank you</p>
      <p className={style.subTitle}>You can pick up your book(s) tomorrow! </p>
      <div className={style.btnPosition}>
        <Link to="/">
          <ButtonHold>Continue Searching</ButtonHold>
        </Link>
      </div>
    </div>
  );
};
