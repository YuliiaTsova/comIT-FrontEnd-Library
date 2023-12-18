import style from './headerProfile.module.scss';
import user from '../assets/img/profile.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const HeaderProfile = () => {
  const [active, setActive] = useState('personal');
  return (
    <section className={style.headerProfile}>
      <div className={style.title}>
        <div className={style.name}>
          <img
            src={user}
            alt="user icon"
            className={style.profileImg}
            aria-hidden="true"
          />
          <span className={`${style.text} heading2`}>Profile</span>
        </div>
        <div className={style.btnPosition}>
          <button className={`${style.btn} btnReset`}>Log out</button>
        </div>
      </div>
      <nav className="nav">
        <ul className={`${style.list} listReset`}>
          <Link to="/profile/info" className={style.link}>
            <li
              className={`${style.item} ${active === 'personal' ? style.active : ''}`}
              onClick={() => setActive('personal')}
            >
              Personal Information
            </li>
          </Link>
          <Link to="/profile/checkout" className={style.link}>
            <li
              className={`${style.item} ${active === 'checkouts' ? style.active : ''}`}
              onClick={() => setActive('checkouts')}
            >
              Checkouts
            </li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};
