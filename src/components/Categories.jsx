import style from './categories.module.scss';

export const Categories = () => {
  return (
    <ul className={`${style.list} listReset`}>
      <li className={style.item}>
        <a href="" className={style.link}>
          Romance
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Adventure
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Detective
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Fantasy
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Classic
        </a>
      </li>
      <li className={style.item}>
        <a href="" className={style.link}>
          Horror
        </a>
      </li>
    </ul>
  );
};
