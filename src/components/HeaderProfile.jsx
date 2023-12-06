import style from './headerProfile.module.scss';
import user from '../assets/img/profile.png';

export const HeaderProfile = () => {
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
          <li className={`${style.item} ${style.active}`}>
            <a href="" className={style.link}>
              Personal Information
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              Checkouts
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              Holds
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
