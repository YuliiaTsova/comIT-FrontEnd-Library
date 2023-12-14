import { ButtonHold } from './ButtonHold';
import success from '../assets/img/success.png';
import error from '../assets/img/error.png';
import style from './SuccessOrFail.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SuccessOrFail = () => {
  const status = useSelector((state) => state.cart.status);

  if (status === 'loading') {
    return <div className={style.content}></div>;
  }
  if (status !== 'success') {
    return (
      <div className={style.content}>
        <img src={error} alt="error img" className={style.img} />
        <p className={style.title}>Something went wrong :(</p>
        <div className={style.btnPosition}>
          <Link to="/">
            <ButtonHold>Continue Searching</ButtonHold>
          </Link>
        </div>
      </div>
    );
  }
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
